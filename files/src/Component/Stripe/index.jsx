import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  Step,
  Stepper,
  StepLabel,
} from "@mui/material";
import {
  CardElement,
  ElementsConsumer,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { auth, db } from "../../Config";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";
import axios from "axios";

const steps = ["Broker Details", "Payment Details", "Result"];
const Stripe = () => {
  // Stripe
  const stripe = useStripe();
  const elements = useElements();
  // Stepper
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // Stepper
  const MySwal = withReactContent(Swal);
  const [currentUser, setCurrentUser] = useState();
  const getUser = async () => {
    const docRef = doc(db, "Users", auth.currentUser?.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setCurrentUser(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/payment", {
          amount: 5 * enquiries?.length,
          id,
        });
        if (response.data.success) {
          setSuccess(true);
        }
      } catch (error) {
        console.log("Payment error: " + error);
      }
    } else {
      console.log("Payment Error: " + error.message);
    }
    // Subscription Data
    const expires = Date.today().addMonths(1).toString("yyyy-MM-dd");
    enquiries?.map(async (item) => {
      await addDoc(collection(db, "BrokerSubscription"), {
        name,
        email,
        uid: currentUser?.uid,
        expires,
        property: item,
      });
      // Update is Active property doc
      const q = query(
        collection(db, "properties"),
        where("_id", "==", item._id)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({
            isActive: false,
          });
        });
      });
    });
    // Continue from testing and updating
    MySwal.fire({
      title: <strong>Successfully Subscribed!</strong>,
      html: <i>You clicked submit!</i>,
      icon: "success",
    });
  };

  // Getting enquiries from local host
  const enquiries = JSON.parse(window.localStorage.getItem("enquiries"));
  console.log(enquiries);
  return (
    <Box
      sx={{
        minHeight: "85vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minHeight: "75vh",
          width: { xs: "90vw", sm: "60vw", md: "40vw" },
          padding: "20px",
        }}
        component={Paper}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : activeStep === 0 ? (
          <React.Fragment>
            <Box
              sx={{
                width: "100%",
                height: "80%",
                padding: { xs: "30px 20px", md: "40px 30px" },
              }}
            >
              <TextField
                placeholder="Full Name"
                value={name}
                fullWidth
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <TextField
                placeholder="Email"
                value={email}
                fullWidth
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                placeholder="Phone"
                value={phone}
                fullWidth
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter comment here..."
                style={{
                  width: "100%",
                  height: "12vh",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "3px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                disabled={!name || !email || !phone || !comment}
              >
                {"Next"}
              </Button>
            </Box>
          </React.Fragment>
        ) : activeStep === 1 ? (
          <React.Fragment>
            <Box
              sx={{
                width: "100%",
                padding: { xs: "30px 20px", md: "40px 30px" },
              }}
            >
              <ElementsConsumer>
                {({ elements, stripe }) => (
                  <form onSubmit={(e) => handleSubmit(e)}>
                    {enquiries?.map((item, i, arr) => {
                      return (
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="subtitle1">
                            {item?.Property_Name}
                          </Typography>
                          <Typography variant="subtitle1">
                            ${item?.Property_Price}
                          </Typography>
                          <Typography variant="subtitle1">$5</Typography>
                        </Box>
                      );
                    })}
                    <br />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="subtitle1">Total</Typography>
                      <Typography variant="subtitle1">
                        ${5 * enquiries?.length}
                      </Typography>
                    </Box>
                    <br />
                    <Typography variant="subtitle1">
                      <b>Note!</b> You have to pay $5 for each property
                      subscription!
                    </Typography>
                    <br />
                    <CardElement />
                    <br />
                    <Button
                      onClick={handleSubmit}
                      variant="outlined"
                      fullWidth
                      disabled={!stripe}
                    >
                      {"Pay $" + 5 * enquiries?.length}
                    </Button>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <Button
                        disabled={!stripe || !success}
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    </Box>
                  </form>
                )}
              </ElementsConsumer>
            </Box>
          </React.Fragment>
        ) : activeStep === 2 ? (
          <React.Fragment>
            <Box
              sx={{
                width: "100%",
                height: "80%",
                padding: { xs: "30px 20px", md: "40px 30px" },
              }}
            >
              <TextField
                placeholder="Full Name"
                value={name}
                fullWidth
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <TextField
                placeholder="Email"
                value={email}
                fullWidth
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <TextField
                placeholder="Phone"
                value={phone}
                fullWidth
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <br />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter comment here..."
                style={{
                  width: "100%",
                  height: "12vh",
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "3px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>{"Next"}</Button>
            </Box>
          </React.Fragment>
        ) : null}
      </Box>
    </Box>
  );
};

export default Stripe;
