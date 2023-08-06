import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Config";
import ModalComponent from "./ModalComponent";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import PhoneComponent from "./PhoneComponent";

const PropertyCard = ({ property }) => {
  console.log(property);
  const dispatch = useDispatch();
  // Getting login user details
  const [currentUser, setCurrentUser] = useState();
  const user = useSelector((state) => state.AuthReducer);
  const getUser = async () => {
    const docRef = doc(db, "Users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setCurrentUser(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  // Enquiry Modal for Buyer / Rent
  const openModal = (id) => {
    setIsOpen(true);
    setCarouselID(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Enquiry form states
  const [CarouselID, setCarouselID] = useState();
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [ForPropertyStatus, setForPropertyStatus] = useState();
  const [Email, setEmail] = useState();
  const [Description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState();
  const MySwal = withReactContent(Swal);

  // Enquiry Form Submission
  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    setPhone(selectedCountry);
  };
  const HandleSubmitEnquiryForm = async (e) => {
    e.preventDefault();
    if (user.login.uid === undefined) {
      setError("Please Login First");
    }
    const washingtonRef = doc(db, "properties", CarouselID);
    await updateDoc(washingtonRef, {
      isActive: false,
    });
    const docRef = await addDoc(collection(db, "EnquiryForm"), {
      property: CarouselID,
      Userid: auth.currentUser?.uid,
      name: Name,
      phone: Phone,
      Email: Email,
      desc: Description,
      Deal: "pending",
      purpose: ForPropertyStatus,
    });
    MySwal.fire({
      title: <strong>Enquiry added successfully!</strong>,
      html: <i>You clicked submit button!</i>,
      icon: "success",
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Card sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: "10px",
          padding: "0 10px",
          alignItems: "center",
        }}
      >
        <Box sx={{ background: "rgba(255,255,255, 0.6)", padding: "3px 12px" }}>
          {property?.type}
        </Box>
        {/* Add favorite if required */}
        <IconButton>
          <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <CardMedia
        sx={{ height: 180 }}
        image={property?.images[0]}
        title={property?.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontWeight: "600" }}
          component="div"
        >
          {property?.title}
        </Typography>
        <Typography variant="body1">{property?.city}</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "15px 0",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="Location">
              <LocationOnOutlinedIcon
                sx={{ color: "#5081ff", fontWeight: "300" }}
              />
            </Tooltip>
            <Typography variant="subtitle2">{property?.area}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="Type">
              <HomeOutlinedIcon sx={{ color: "#5081ff", fontWeight: "300" }} />
            </Tooltip>
            <Typography variant="subtitle2">{property?.type}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="Bedrooms">
              <KingBedOutlinedIcon
                sx={{ color: "#5081ff", fontWeight: "300" }}
              />
            </Tooltip>
            <Typography variant="subtitle2" sx={{ paddingLeft: "6px" }}>
              {property?.bedrooms}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Tooltip title="Bathrooms">
              <BathtubOutlinedIcon
                sx={{ color: "#5081ff", fontWeight: "300" }}
              />
            </Tooltip>
            <Typography variant="subtitle2" sx={{ paddingLeft: "6px" }}>
              {property?.bathrooms}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      {currentUser?.AccountOptions !== "Broker" ? (
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <div>
            <Button
              size="small"
              variant="contained"
              onClick={() => openModal(property?._id)}
            >
              Enquiry
            </Button>
            <ModalComponent
              style={{
                position: "relative",
                top: 300,
                height: "400px",
                marginTop: 100,
                zIndex: 999,
              }}
              isOpen={isOpen}
              onClose={closeModal}
            >
              <Box
                className="form_popup newcolor fancybox-content "
                id="data"
                style={{ display: "inline-block" }}
              >
                <form
                  // onSubmit={HandleSubmitEnquiryForm}
                  className="box white clearfix"
                >
                  <h3 className="title col-dis-12 col-tab-12 col-mob-12">
                    Property Enquiry
                  </h3>
                  <Box grid="">
                    <Box className="col-dis-12 col-tab-12 col-mob-12">
                      <label className="field col-dis-12 col-tab-6 col-mob-12">
                        <input
                          name="first_name"
                          type="text"
                          placeholder="your name *"
                          defaultValue=""
                          validation=""
                          onChange={(e) => setName(e.target.value)}
                        />
                      </label>
                      <Box className="field col-dis-12 col-tab-6 col-mob-12">
                        <PhoneComponent
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                          defaultCountry={"us"}
                          onPhoneNumberChange={handlePhoneInputChange}
                        />
                      </Box>
                      <label className="field col-dis-12 col-tab-6 col-mob-12">
                        <input
                          name="email"
                          type="email"
                          placeholder="E-mail"
                          defaultValue=""
                          validation="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                      <label className="field col-dis-12 col-tab-6 col-mob-12">
                        <input
                          type="text"
                          placeholder="For Purpose Rent | Buy"
                          defaultValue=""
                          onChange={(e) => setForPropertyStatus(e.target.value)}
                        />
                      </label>

                      <label className="field col-dis-12 col-tab-12 col-mob-12">
                        <textarea
                          name="msg"
                          placeholder="Message"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </label>
                    </Box>
                  </Box>
                  {error && <p>{error}</p>}
                  <Box className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
                    <input
                      type="submit"
                      defaultValue="Send"
                      className="btn btn-sm-change col-mob-6 bg-white"
                    />
                  </Box>
                </form>{" "}
                <button
                  type="button"
                  data-fancybox-close=""
                  className="fancybox-button fancybox-close-small"
                  title="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version={1}
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" />
                  </svg>
                </button>
              </Box>
            </ModalComponent>
          </div>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default PropertyCard;
