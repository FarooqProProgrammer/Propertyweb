import React, { useState } from "react";
import Image from "./Image";
import { Box, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../Config";
import { Link, useNavigate } from "react-router-dom";
import BathroomSvg from "../assets/bathrooms.svg";
import LocationSvg from "../assets/location.svg";
import PhoneComponent from "./PhoneComponent";
import { HidelComponentOne } from "../Redux/Action/HidelComponentOne";
import ModalComponent from "./ModalComponent";
import ViewPropertyAction from "../Redux/Action/ViewPropertyAction";
import { PropertyList } from "../Redux/Action/PropertyList";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { FeaturedProperty } from "../Redux/Action/FeaturedProperty";
import Bedroomsvg from "../assets/bedrooms.svg";
import { v4 as uuidv4 } from "uuid";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import StyledButton from "./StyledButton";
import AddIcon from "@mui/icons-material/Add";

export default function ListingCards(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CarouselID, setCarouselID] = useState();
  const [Name, setName] = useState();
  const [Phone, setPhone] = useState();
  const [ForPropertyStatus, setForPropertyStatus] = useState();
  const [Email, setEmail] = useState();
  const [HideComponent, setHideComponent] = useState(false);
  const [Description, setDescription] = useState("");
  const user = useSelector((state) => state.AuthReducer);
  const state = useSelector((state) => state.HideComponent.Hide);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState();
  const [currentUser, setCurrentUser] = useState();
  const MySwal = withReactContent(Swal);
  const states = useSelector((state) => state.AboutTurkey.Nav);

  const [age, setAge] = React.useState("");

  // const AuthState = useSelector(state => state.AuthReducer.login)
  // const WishList = useSelector(state => console.log(state))

  const getUser = async () => {
    const docRef = doc(db, "Users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setCurrentUser(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  const navigate = useNavigate();

  const handlePhoneInputChange = (telNumber, selectedCountry) => {
    setPhone(selectedCountry);
    console.log(Phone);
  };

  const openModal = (id) => {
    setIsOpen(true);
    setCarouselID(id);
    dispatch(HidelComponentOne(true));
  };

  const closeModal = () => {
    setIsOpen(false);
    dispatch(HidelComponentOne(""));
  };

  const dispatch = useDispatch();

  const showModal = (id) => {
    setCarouselID(id);
    setIsModalOpen(true);
    setHideComponent(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(HidelComponentOne(""));
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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

  const HandleNavigate = (item) => {
    dispatch(ViewPropertyAction(item));
    navigate("/viewproperty");
  };

  const HandleWishList = (item) => {
    dispatch(PropertyList(item));
  };

  const HandleWishListItem = async (item) => {
    console.log(item);
    if (auth.currentUser === null) {
      MySwal.fire({
        title: <strong>Please Login!</strong>,
        html: <i>You clicked the button!</i>,
        icon: "error",
      });
      return;
    }
    const collectionRef = collection(db, "Favorites");
    const data = {
      id: uuidv4(),
      item: item,
      user: auth.currentUser?.uid,
    };
    await setDoc(doc(collectionRef, data.id), data);
    dispatch(FeaturedProperty(item));
    MySwal.fire({
      title: <strong>Successfully Add to the Wishlist</strong>,
      html: <i>You clicked the button!</i>,
      icon: "success",
    });
  };
  const HandleWishListDelete = async (item) => {
    const collectionRef = collection(db, "Favorites");
    await deleteDoc(doc(collectionRef, item.id));
    MySwal.fire({
      title: <strong>Favorite Removed!</strong>,
      html: <i>You clicked remove favorite!</i>,
      icon: "success",
    });
  };
  console.log(props.item);
  const handleEnquireProperties = (item) => {
    let properties = [];
    const localStorage = window.localStorage.getItem("enquiries");
    if (localStorage) {
      properties.push(...JSON.parse(localStorage));
    }
    properties.push(item);
    window.localStorage.setItem("enquiries", JSON.stringify(properties));
    MySwal.fire({
      title: <strong>Property added for enquiry!</strong>,
      html: <i>You clicked add enquire!</i>,
      icon: "success",
    });
  };
  return (
    <>
      <div className="listing-card col-12 col-md-6 col-lg-3 margin-ver-1">
        <div className="property-box  cf hot-property">
          <div className="position-relative">
            <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
              <span>{props.propertyType}</span>
            </div>
            {props.favorite ? (
              <Link
                className="btn --circle position-abs heart-label border-none"
                onClick={() => HandleWishListItem(props.item)}
              >
                <span className="flex">
                  <Tooltip title={"Favorite"} placement="left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.189"
                      height="18.465"
                      viewBox="0 0 20.189 18.465"
                    >
                      <path
                        id="Heart"
                        d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                        transform="translate(0.975 0.975)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth={2}
                        fillRule="evenodd"
                      />
                    </svg>
                  </Tooltip>
                </span>
              </Link>
            ) : (
              <Link
                className="btn --circle position-abs heart-label border-none"
                onClick={() => HandleWishListDelete(props.favor)}
              >
                <span className="flex">
                  <Tooltip title={"Remove"} placement="left">
                    <HeartBrokenOutlinedIcon
                      sx={{ color: "white", fontSize: "24px" }}
                    />
                  </Tooltip>
                </span>
              </Link>
            )}
            {currentUser?.AccountOptions === "Broker" ? (
              props.enquiry ? (
                <Link
                  className="btn --circle position-abs heart-label border-none"
                  onClick={() => handleEnquireProperties(props.item)}
                  style={{ top: "40px" }}
                >
                  <span className="flex">
                    <Tooltip title={"Add Enquire"} placement="left">
                      <AddIcon sx={{ color: "white", fontSize: "26px" }} />
                    </Tooltip>
                  </span>
                </Link>
              ) : null
            ) : null}

            <figure className="cardImgInListing skelton-loading">
              <Link className="prevent-newtab-onmobile">
                <Image
                  className=" lazyloaded"
                  data-src="https://www.propertyturkey.com/uploads/realestate/5327/thumb/beylikduzu_property_1-300x200.jpg"
                  src={props.img}
                />
              </Link>
            </figure>
            <Link
              onClick={() => HandleNavigate(props.item)}
              to="/viewproperty"
              className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
            >
              {props.Property_Name}
            </Link>
            <Link className="prevent-newtab-onmobile">
              <p itemProp="description" limit={600} className="skelton-loading">
                {props.Des}
              </p>
            </Link>
            <div className="features skelton-loading">
              <div className="location">
                <Image className="icon-location img-fluid" src={LocationSvg} />
                <span className="quantity">{props.Area}</span>
              </div>
              <div className="bedrooms flex content-space-evenly">
                <div>
                  <Image className="icon-bedroom img-fluid" src={Bedroomsvg} />
                </div>
                <div>
                  <span className="quantity">{props.Bedroom}</span>
                </div>
              </div>
              <div className="bathrooms flex content-space-evenly padding-left-05">
                <div>
                  <Image
                    className="icon-bathrooms img-fluid"
                    src={BathroomSvg}
                  />
                </div>
                <div>
                  <span className="quantity">{props.Bathroom}</span>
                </div>
              </div>
              <div className="quantity  padding-dir-05">
                {props.Property_Living_space}
              </div>
            </div>
            <div className="card-actions flex padding-1 content-space-between skelton-loading">
              <div className="price flex-align-self-center">
                <span className="unit-price flex">{props.Property_Price}</span>
              </div>
              <div
                className="pulse-animation youtube-icon-listing"
                data-motion-id="div 1"
              ></div>
              {currentUser?.AccountOptions !== "Broker" ? (
                <div>
                  <StyledButton
                    title={"Quick Enquiry"}
                    onClick={() => openModal(props.item)}
                    size="small"
                    font="10"
                  />
                  {/* <Link
                    className="quich-enquire-btn abhaya"
                    title="Quick Enquire"
                    onClick={() => openModal(props.item)}
                  >
                    <span>Quick Enquire</span>
                  </Link> */}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

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
      </ModalComponent>
    </>
  );
}
