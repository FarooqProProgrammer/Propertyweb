import React, { useState, useEffect } from "react";
import UsersInfoTab from "../../Component/UsersInfoTab";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DIV } from "../../ReUseAbleComponent/FormComponent";
import ModalComponent from "../../ReUseAbleComponent/ModalComponent";
import PhoneComponent from "../../ReUseAbleComponent/PhoneComponent";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { auth, db } from "../../Config";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import ListingCards from "../../ReUseAbleComponent/ListingCards";
import "datejs";
import PropertyCard from "../../ReUseAbleComponent/PropertyCard.js";

export default function AccountSetting() {
  const state = useSelector((state) => state.UserTab);
  const Featured = useSelector((state) => state.FeaturedPropertyReducer.list);
  const Auth = useSelector((state) => state.AuthReducer.login);

  // Getting favorites data from firebase
  const [favorites, setFavorites] = useState([]);
  const FavoritesData = async () => {
    const q = query(collection(db, "Favorites"));
    const favorite = await onSnapshot(q, (querySnapshot) => {
      var favorites = [];
      querySnapshot.forEach((doc) => {
        favorites.push({ id: doc.id, ...doc.data() });
      });
      setFavorites(favorites);
    });
  };
  useEffect(() => {
    FavoritesData();
  }, []);

  React.useEffect(() => {
    console.log(Featured);
    console.log(Auth);
  }, []);

  // Getting enquiry properties from local storage
  const enquiries = JSON.parse(window.localStorage.getItem("enquiries"));
  const [isOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState();
  const [ForPropertyStatus, setForPropertyStatus] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();
  const [Description, setDescription] = useState("");
  const [error, setError] = useState();
  const MySwal = withReactContent(Swal);

  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    setPhone(selectedCountry);
  };

  // Getting enquiries from firestore
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
  const [brokerEnquiries, setBrokerEnquiries] = useState([]);
  const [userEnquiries, setUserEnquiries] = useState([]);
  const getMyEnquiries = async () => {
    const q = query(collection(db, "BrokerEnquiry"));
    const enquiry = await onSnapshot(q, (querySnapshot) => {
      var favorites = [];
      querySnapshot.forEach((doc) => {
        favorites.push({ id: doc.id, ...doc.data() });
      });
      setBrokerEnquiries(favorites);
    });
    const qe = query(collection(db, "EnquiryForm"));
    const enq = await onSnapshot(qe, (querySnapshot) => {
      var favor = [];
      querySnapshot.forEach((doc) => {
        favor.push({ id: doc.id, ...doc.data() });
      });
      setUserEnquiries(favor);
    });
  };
  useEffect(() => {
    getMyEnquiries();
    getUser();
  }, []);

  console.log(currentUser);

  const HandleSubmitEnquiryForm = async (e) => {
    e.preventDefault();
    if (
      currentUser?.subscription?.expires === Date.today().toString("yyyy-MM-d")
    ) {
      window.location.replace("/subscription");
    }
    await addDoc(collection(db, "BrokerEnquiry"), {
      properties: [...enquiries],
      Userid: auth?.currentUser?.uid,
      name: Name,
      phone: Phone,
      Email: Email,
      desc: Description,
      Deal: "pending",
      purpose: ForPropertyStatus,
    });
    window.localStorage.removeItem("enquiries");
    MySwal.fire({
      title: <strong>Enquiry Form Added!</strong>,
      html: <i>You clicked submit enquiry!</i>,
      icon: "success",
    });
  };

  // Getting user properties
  const [properties, setProperties] = useState([]);
  const PropertiesData = async () => {
    const q = query(collection(db, "/properties"));
    const unsubscribe = await onSnapshot(q, (querySnapshot) => {
      var cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      setProperties(cities);
    });
  };
  useEffect(() => {
    PropertiesData();
  }, []);

  return (
    <>
      <UsersInfoTab />
      <DIV
        id="tab-1"
        className={`tab-content ${state.Tab === 1 ? "current" : ""}`}
      >
        <DIV className="profile-view">
          <DIV className="container-fluid">
            <DIV className="row">
              <DIV className="col-12 col-md-4">
                <DIV className="profile-view--img">
                  <p className="profile-view--img--first">
                    {Auth.displayName ? Auth.displayName : "Something Else"}
                  </p>
                  <Typography
                    component={"p"}
                    className="profile-view--img--second"
                  >
                    Basic info, email, password settings
                  </Typography>
                </DIV>
                <DIV className="profile-view--info">
                  <DIV className="flex content-space-between items-center padding-bottom-11">
                    <span className="profile-view--info--title">
                      {" "}
                      Your Info
                    </span>
                    <Link to="/profile/edit">
                      <i className="fa fa-pencil fa-2x" aria-hidden="true" />
                    </Link>
                  </DIV>
                  <DIV className="row">
                    <DIV className="col-6 col-md-4 padding-bottom-11 flex items-center label-title">
                      <img
                        src="https://www.propertyturkey.com/front/image/images2019/Icons/profile-person.svg"
                        width={35}
                        height={18}
                        className="padding-right-1"
                        alt=""
                      />
                      Name
                    </DIV>
                    <DIV className="col-6 padding-bottom-11 label-detail">
                      {Auth.displayName ? Auth.displayName : "Something Else"}
                    </DIV>
                    <DIV className="col-6 col-md-4 padding-bottom-11 flex items-center label-title">
                      <img
                        src="https://www.propertyturkey.com/front/image/images2019/Icons/envelope-person.svg"
                        width={35}
                        height={18}
                        className="padding-right-1"
                        alt=""
                      />
                      E-mail
                    </DIV>
                    <DIV className="col-6 padding-bottom-11 label-detail longword-sm">
                      {Auth.email ? Auth.email : "Something Else"}
                    </DIV>
                  </DIV>
                </DIV>
              </DIV>
              <DIV className="profile-view--emailsettings col-12 col-md-4 mar-top-15-sm">
                <p className="first"> Email Settings </p>
                <DIV className="padding-hrz-05">
                  <p className="second">
                    {" "}
                    Email me saved listings &amp; searches
                  </p>
                  <form
                    method="post"
                    action="https://www.propertyturkey.com/profile/updateEmailSettings"
                  >
                    <p>
                      <input
                        type="radio"
                        id="test1"
                        name="email_me"
                        defaultValue="never"
                        className="radio-email-custom"
                        defaultChecked=""
                      />
                      <label htmlFor="test1"> Never</label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="test2"
                        name="email_me"
                        defaultValue="weekly"
                        className="radio-email-custom"
                      />
                      <label htmlFor="test2"> Weekly</label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="test3"
                        name="email_me"
                        defaultValue="monthly"
                        className="radio-email-custom"
                      />
                      <label htmlFor="test3"> Monthly</label>
                    </p>
                    <hr className="margin-ver-2" />
                    <p className="second">
                      Email me recommended listings , news , blog ..{" "}
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="test4"
                        name="newsletter_subscribed"
                        defaultValue={1}
                        className="radio-email-custom"
                      />
                      <label htmlFor="test4"> Yes</label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="test5"
                        name="newsletter_subscribed"
                        defaultValue={0}
                        className="radio-email-custom"
                        defaultChecked=""
                      />
                      <label htmlFor="test5"> No</label>
                    </p>
                    <p>
                      <input
                        type="submit"
                        defaultValue="Save"
                        className="btn"
                      />
                    </p>
                  </form>
                </DIV>
              </DIV>
              <DIV className="col-12 col-md-4">
                <DIV className="profile-view--passwordsetting">
                  <p className="first"> Password Settings</p>
                  <Link to="/changepwd">Change Password</Link>
                </DIV>
              </DIV>
            </DIV>
          </DIV>
        </DIV>
      </DIV>
      <DIV
        id="tab-2"
        className={`tab-content ${state.Tab === 2 ? "current" : ""}`}
      >
        {currentUser?.AccountOptions === "Broker" && enquiries?.length > 0 ? (
          <div
            style={{ borderBottom: "2px solid black", marginBottom: "20px" }}
          >
            <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix mt-3">
              <div className="row cardRow">
                {enquiries?.map((item, i) => (
                  <ListingCards
                    key={i}
                    propertyType={item.Property_Type}
                    item={item}
                    id={item.id}
                    Overview={item.Overview}
                    Property_Living_space={item.Propert_Living_space}
                    Property_Name={item.Property_Name}
                    Area={item.property_Location}
                    Des={item.Overview}
                    title={item.Property_Type}
                    img={item?.property_urls[0]}
                    location={item.property_Location}
                    BannerText={item.ImagebannerText}
                    Bathroom={item.Propert_Bathroom}
                    Bedroom={item.property_BedRoom}
                    Property_Price={item.Property_Price}
                    favorite={true}
                    enquiry={false}
                  />
                ))}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: "15px 0",
              }}
            >
              <Link to={"/subscription"}>
                <button
                  style={{
                    padding: "12px 30px",
                    color: "white",
                    background: "#5081ff",
                  }}
                >
                  Enquiry Form
                </button>
              </Link>
            </div>
            {/* <ModalComponent
              style={{
                position: "relative",
                top: 300,
                height: "400px",
                marginTop: 100,
                zIndex: 999,
              }}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            >
              <Box
                className="form_popup newcolor fancybox-content "
                id="data"
                style={{ display: "inline-block" }}
              >
                <form
                  onSubmit={HandleSubmitEnquiryForm}
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
            </ModalComponent> */}
          </div>
        ) : null}
        <Box
          sx={{
            width: "100%",
            padding: { xs: "10px", sm: "20px", md: " 30px" },
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">My Enquiries</Typography>
            </Grid>
            {currentUser?.AccountOptions === "Broker"
              ? brokerEnquiries?.map((item, i) => {
                  if (item?.Userid === auth?.currentUser?.uid) {
                    return (
                      <Grid item xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                        <Card
                          key={i}
                          sx={{
                            minWidth: 275,
                            boxShadow: "none",
                            border: "1px solid black",
                          }}
                        >
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{ mb: 1 }}
                            >
                              {item?.name}
                            </Typography>
                            <Typography>Email: {item?.Email}</Typography>
                            <Typography>Phone: {item?.phone}</Typography>
                            <Typography>Description: {item?.desc}</Typography>
                            <Typography>Purpose: {item?.purpose}</Typography>
                            <Typography>Deal: {item?.Deal}</Typography>
                            <Typography>
                              Properties: {item?.properties?.length}
                            </Typography>
                            <Typography>
                              <ul style={{ padding: "6px" }}>
                                {item?.properties?.map((p, i) => (
                                  <li key={i}>{p.Property_Name}</li>
                                ))}
                              </ul>
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  }
                })
              : currentUser?.AccountOptions === "Buyer"
              ? userEnquiries?.map((item, i) => {
                  if (item?.Userid === auth?.currentUser?.uid) {
                    return (
                      <Grid item xs={12} sm={6} md={4} sx={{ padding: "10px" }}>
                        <Card
                          key={i}
                          sx={{
                            minWidth: 275,
                            boxShadow: "none",
                            border: "1px solid black",
                          }}
                        >
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              sx={{ mb: 1 }}
                            >
                              {item?.name}
                            </Typography>
                            <Typography>Email: {item?.Email}</Typography>
                            <Typography>Phone: {item?.phone}</Typography>
                            <Typography>Description: {item?.desc}</Typography>
                            <Typography>Purpose: {item?.purpose}</Typography>
                            <Typography>Deal: {item?.Deal}</Typography>
                            <Typography>
                              Property: {item?.propertyID}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  }
                })
              : null}

            {/* Continue from buyer enquiry submit */}
          </Grid>
        </Box>
      </DIV>
      <DIV
        id="tab-3"
        className={`tab-content ${state.Tab === 3 ? "current" : ""}`}
      >
        <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix mt-3">
          <div className="row cardRow">
            {favorites?.map((favor, i) => {
              if (auth.currentUser?.uid === favor.user) {
                const item = favor.item;
                return (
                  <ListingCards
                    key={i}
                    propertyType={item.Property_Type}
                    item={item}
                    id={item.id}
                    Overview={item.Overview}
                    Property_Living_space={item.Propert_Living_space}
                    Property_Name={item.Property_Name}
                    Area={item.property_Location}
                    Des={item.Overview}
                    title={item.Property_Type}
                    img={item?.property_urls[0]}
                    location={item.property_Location}
                    BannerText={item.ImagebannerText}
                    Bathroom={item.Propert_Bathroom}
                    Bedroom={item.property_BedRoom}
                    Property_Price={item.Property_Price}
                    favorite={false}
                    favor={favor}
                  />
                );
              } else {
                return (
                  <Box
                    sx={{
                      width: "100%",
                      height: "80vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h4">
                      You don't have any favorites!
                    </Typography>
                  </Box>
                );
              }
            })}
          </div>
        </div>
      </DIV>
      <DIV
        id="tab-4"
        className={`tab-content ${state.Tab === 4 ? "current" : ""}`}
      >
        <Grid
          container
          sx={{
            width: "100%",
            paddingY: 3,
            paddingX: { xs: 3, sm: 4, md: 5 },
            marginY: 2,
          }}
        >
          {properties?.map((property, i) => {
            if (property?.user === auth.currentUser?.uid) {
              return (
                <Grid item xs={12} sm={4} md={3} key={i}>
                  <PropertyCard property={property} />
                </Grid>
              );
            }
          })}
        </Grid>
      </DIV>
      <DIV
        id="tab-5"
        className={`tab-content ${state.Tab === 5 ? "current" : ""}`}
      >
        <p>This is Tab 5</p>
      </DIV>
    </>
  );
}
