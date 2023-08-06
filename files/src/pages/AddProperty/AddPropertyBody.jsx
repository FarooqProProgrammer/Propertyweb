import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { cityToggle } from "../../Data/CityToggle";
import { PropertyEditor } from "../../ReUseAbleComponent/PropertyEditor";
import { Input } from "../../ReUseAbleComponent/FormComponent";
import Image from "../../ReUseAbleComponent/Image";
import TruncatedText from "../../ReUseAbleComponent/TruncatedText";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { auth, db } from "../../Config";
import { setDoc, doc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "@firebase/storage";

export default function AddPropertyBody() {
  const storage = getStorage();
  //   Steps
  const [step, setStep] = useState(1);

  //   Phase 1
  const [title, setTitle] = React.useState("");
  const [HomeInterior, SetHomeInterior] = React.useState("");
  const [garden, SetGarden] = React.useState("");
  const [PropertyLocation, setPropertyLocation] = React.useState("");
  const [whyBuyProperty, setwhyBuyProperty] = React.useState("");

  // Phase 2
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [Bedrooms, setBedrooms] = useState("");
  const [Bathrooms, setBathrooms] = useState("");
  const [Area, setArea] = useState("");
  const [Type, setType] = useState("");
  const [LivingSpace, setLivingSpace] = useState("");
  const [landSize, setLandSize] = useState("");
  const [pool, setPool] = useState("");
  const [status, setStatus] = useState("");
  const [Price, setPrice] = useState("");
  const [currency, setCurrency] = useState("$");
  const [distanceInMinutes, setDistanceInMinutes] = useState("");
  const [distanceInKm, setDistanceInKm] = useState("");

  const propetyInfo = useRef();
  const propetyDetailRef = useRef();
  const propetysummary = useRef();

  //   Upload Images
  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [UploadPhotos, setUploadPhotos] = useState(false);
  const [urls, seturls] = useState([]);

  const hiddenFileInput = useRef(null);
  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImages((images) => [...images, reader.result]);
      }
    };
    setPhotos((photos) => [...photos, e.target.files[0]]);
    reader?.readAsDataURL(e.target.files[0]);
  };

  const handleInfoNext = () => {
    if (
      title === "" ||
      HomeInterior === "" ||
      garden === "" ||
      PropertyLocation === "" ||
      whyBuyProperty === ""
    ) {
      toast("Please Fill All Fields");
      return;
    }
    if (images.length === 0) {
      toast("Upload at least one image!");
      return;
    }
    setStep(2);
    propetyInfo.current.style.display = "none";
    propetyDetailRef.current.style.display = "block";
  };

  const handleDetailPrev = () => {
    setStep(1);
    propetyDetailRef.current.style.display = "none";
    propetyInfo.current.style.display = "block";
  };

  const handleDetailNext = () => {
    if (
      Country === "" ||
      City === "" ||
      Bedrooms === "" ||
      Bathrooms === "" ||
      Area === "" ||
      Type === "" ||
      LivingSpace === "" ||
      landSize === "" ||
      pool === "" ||
      status === "" ||
      Price === "" ||
      currency === ""
    ) {
      toast("Please Fill All Fields");
      return;
    }
    setStep(3);
    propetyDetailRef.current.style.display = "none";
    propetysummary.current.style.display = "block";
  };

  const handleSumPrev = () => {
    setStep(2);
    propetysummary.current.style.display = "none";
    propetyDetailRef.current.style.display = "block";
  };

  const handleHomeInterior = (value) => {
    SetHomeInterior(value);
  };
  const MySwal = withReactContent(Swal);
  const handleAddProperties = async (e) => {
    e.preventDefault();

    var urlsPush = [...urls];
    var reference = [];

    for (var i = 0; i < photos.length; i++) {
      const storageRef = ref(storage, `PropertyImages/${photos[i].name}`);
      reference.push(storageRef);
      await uploadBytes(storageRef, photos[i]).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    }

    for (var i = 0; i < reference.length; i++) {
      await getDownloadURL(ref(storage, reference[i]))
        .then((url) => {
          urlsPush.push(url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    seturls(urlsPush);
    setUploadPhotos(false);

    if (!urlsPush) {
      console.log("Some Error Occur");
      return;
    }

    const data = {
      property_userName: title,
      HomeInterior,
      garden,
      LocationPlan: PropertyLocation,
      property_facility: whyBuyProperty,
      Country,
      City,
      bedrooms: Bedrooms,
      bathrooms: Bathrooms,
      County: Area,
      type: Type,
      livingSpace: LivingSpace,
      landSize,
      DistanceFromMinutes: distanceInMinutes,
      DistanceFromKM: distanceInKm,
      pool,
      status,
      price: Price,
      currency,
      property_urls: urls,
      _id: uuidv4(),
      user: auth.currentUser?.uid,
    };
    await setDoc(doc(db, "properties", data._id), data).then(() =>
      MySwal.fire({
        title: <strong>Property added successfully!</strong>,
        html: <i>You clicked submit!</i>,
        icon: "success",
      })
    );
  };

  console.log(auth.currentUser?.uid);

  return (
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
      <h3 className="page-title">Add Your Own Property</h3>
      <div className="cf">
        <form
          className="col-dis-12 col-tab-12 col-mob-12 clearfix"
          onSubmit={handleAddProperties}
        >
          <div className="tabs">
            <ul className="steps">
              <li className={step === 1 ? "active" : ""}>
                <a className="general" href="#general">
                  <span className="step">1</span>
                  <b>Describe Your Property</b>
                </a>
              </li>
              <li className={step === 2 ? "active" : ""}>
                <a className="property-info" href="#property-info">
                  <span className="step">2</span>
                  <b>Property Details</b>
                </a>
              </li>
              <li className={step === 3 ? "active" : ""}>
                <a className="summary" href="#summary">
                  <span className="step">3</span>
                  <b>Summary</b>
                </a>
              </li>
            </ul>
            {/* Describe your property */}
            <div
              id="general"
              ref={propetyInfo}
              className="content box white cf"
            >
              <label
                className="field col-dis-12 col-tab-12 col-dis-12"
                rel="realestate_title"
                charcount="0/60"
              >
                <b>
                  Real Estate Title <span className="red">*</span>:
                </b>
                <Input
                  validation="maxChars-60"
                  placeholder="Example: Luxury five star villa in Istanbul with pool"
                  name="rea_title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              {/* editor */}
              <PropertyEditor
                value={HomeInterior}
                onChange={handleHomeInterior}
                text={"Description of home interior"}
              />
              {/* editor */}
              <PropertyEditor
                value={garden}
                onChange={(value) => SetGarden(value)}
                text={"Description of garden and exterior"}
              />
              {/* editor */}
              <PropertyEditor
                value={PropertyLocation}
                onChange={(value) => setPropertyLocation(value)}
                text={"Location of the property"}
              />

              {/* editor */}
              <PropertyEditor
                value={whyBuyProperty}
                onChange={(value) => setwhyBuyProperty(value)}
                text={"Why buy this property"}
              />

              {/* Distance in Minutes */}
              <PropertyEditor
                value={distanceInMinutes}
                onChange={(value) => setDistanceInMinutes(value)}
                text={"Distance in Minutes"}
              />

              {/* Distance in KM */}
              <PropertyEditor
                value={distanceInKm}
                onChange={(value) => setDistanceInKm(value)}
                text={"Distance in Kilometers"}
              />

              {/*  */}
              <div id="imagesContainer">
                <label
                  className="field col-dis-12 col-tab-12 col-dis-12"
                  rel="uploaded_image"
                >
                  <b>
                    Upload Multiple Property Images{" "}
                    <span className="red">*</span>:
                  </b>
                  <div className="w-full flex justify-between items-center">
                    <input
                      type="file"
                      ref={hiddenFileInput}
                      accept="image/*"
                      onChange={handleImageChange}
                      //   style={{ display: "none" }}
                    />
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    {images?.map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt="image"
                        style={{ height: "68px", margin: "0 3px" }}
                      />
                    ))}
                  </div>
                </label>
              </div>

              <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
                <button
                  onClick={handleInfoNext}
                  className="navigateStep right btn"
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>
            {/* Property details */}
            <div
              id="property-info"
              ref={propetyDetailRef}
              className="content box white cf"
              style={{ display: "none" }}
            >
              <div className="col-dis-6 col-tab-6 col-mob-12">
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="country"
                >
                  <b>
                    Country <span className="red">*</span>:
                  </b>
                  <select
                    validation="validation"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="default">-- Country --</option>
                    <option value={"USA"}>USA</option>
                  </select>
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="city"
                >
                  <b>
                    City <span className="red">*</span>:
                  </b>
                  <select
                    validation="validation"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value={0}>-- City --</option>
                    <option value={"San Fransico"}>San Fransico</option>
                  </select>
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="area"
                >
                  <b>Area :</b>
                  <select
                    name="are_id"
                    onChange={(e) => setArea(e.target.value)}
                  >
                    <option value={0}>-- Area --</option>
                    {cityToggle.map((item) => {
                      return <option value={item.County}>{item.County}</option>;
                    })}
                  </select>
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="type"
                >
                  <b>
                    Type <span className="red">*</span>:
                  </b>
                  <select onChange={(e) => setType(e.target.value)}>
                    <option value={0}>-- Type --</option>
                    <option value={"Apartment"}>Apartment</option>
                    <option value={"Bungalow"}>Bungalow</option>
                    <option value={"Commercial"}>Commercial</option>
                    <option value={"Hotel for sale"}>Hotel for sale</option>
                    <option value={"Land for sale"}>Land for sale</option>
                    <option value={"Penthouse"}>Penthouse</option>
                    <option value={"Villa"}>Villa</option>
                  </select>
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="pool"
                >
                  <b>Pool:</b>
                  <select onChange={(e) => setPool(e.target.value)}>
                    <option value="N/A">N/A</option>
                    <option value="private">Private</option>
                    <option value="shared">Shared</option>
                  </select>
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="status"
                >
                  <b>
                    Status: <span className="red">*</span>:
                  </b>
                  <select
                    validation="validation"
                    name="sta_id"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value={0}>-- Status --</option>
                    <option value={"New Build"}>New Build</option>
                    <option value={"Off Plan"}>Off Plan</option>
                    <option value={"Off Plan"}>Resale</option>
                  </select>
                </label>
              </div>
              <div className="col-dis-6 col-tab-6 col-mob-12">
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="bedrooms"
                >
                  <b>
                    Bedrooms: <span className="red">*</span>:
                  </b>
                  <Input
                    validation="validation"
                    name="rea_bedrooms"
                    type="number"
                    onChange={(e) => setBedrooms(e.target.value)}
                  />
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="bathrooms"
                >
                  <b>
                    Bathrooms: <span className="red">*</span>:
                  </b>
                  <Input
                    validation="validation"
                    name="rea_bathrooms"
                    type="number"
                    onChange={(e) => setBathrooms(e.target.value)}
                  />
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="living_space"
                >
                  <b>
                    Living space sqm: <span className="red">*</span>:
                  </b>
                  <Input
                    validation="validation"
                    name="rea_living_space"
                    type="number"
                    onChange={(e) => setLivingSpace(e.target.value)}
                  />
                </label>
                <label
                  className="field col-dis-6 col-tab-6 col-mob-12"
                  rel="land"
                >
                  <b>Land size sqm:</b>
                  <Input
                    name="rea_land_sqm"
                    type="number"
                    onChange={(e) => setLandSize(e.target.value)}
                  />
                </label>
                <label
                  className="field col-dis-7 col-tab-7 col-mob-7"
                  rel="price"
                >
                  <b>
                    Price: <span className="red">*</span>:
                  </b>
                  <Input
                    validation="price"
                    placeholder={"50000"}
                    name="rea_price"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>
                <label
                  className="field col-dis-5 col-tab-5 col-mob-7"
                  rel="currency"
                >
                  <b>
                    Currency: <span className="red">*</span>:
                  </b>
                  <select
                    validation="validation"
                    name="currency"
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value={"$"}>$</option>
                    <option value={"TRY"}>TRY</option>
                    <option value={"£"}>£</option>
                    <option value={"€"}>€</option>
                  </select>
                </label>
              </div>
              <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
                <button
                  className="navigateStep left btn"
                  onClick={handleDetailPrev}
                  type="button"
                >
                  Previous
                </button>
                <button
                  className="navigateStep right btn"
                  onClick={handleDetailNext}
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>
            {/* Summary */}
            <div
              id="summary"
              ref={propetysummary}
              className="content box white cf"
              style={{ display: "none" }}
            >
              <div className="col-dis-8 col-tab-8 col-mob-12">
                <h3 className="field realestate_title">
                  <span />
                </h3>
                <h3 className="title">Description of home interior:</h3>
                <div className="field home_interior">
                  <TruncatedText
                    text={HomeInterior || "File All Fields"}
                    maxLength={15}
                  />
                </div>
                <h3 className="title">Description of garden and exterior:</h3>
                <div className="field garden_exterior">
                  <TruncatedText
                    text={garden || "File All Fields"}
                    maxLength={15}
                  />
                </div>
                <h3 className="title">Location of the property:</h3>
                <div className="field property_desc">
                  <TruncatedText
                    text={PropertyLocation || "File All Fields"}
                    maxLength={15}
                  />
                </div>
                <h3 className="title">Why buy this property:</h3>
                <div className="field why_buy_property">
                  <TruncatedText
                    text={whyBuyProperty || "File All Fields"}
                    maxLength={15}
                  />
                </div>
              </div>
              <div className="widget col-dis-4 col-tab-4 col-mob-12">
                <h3 className="title" style={{}}>
                  Property:
                </h3>
                <div className="body">
                  <label className="field field uploaded_image">
                    <Image
                      src="https://www.propertyturkey.com/front/image/default_blank.png"
                      alt=""
                      width="100%"
                    />
                  </label>
                  <ul className="no-bullets">
                    <li className="cf">
                      Price{" "}
                      <strong className="right red">
                        <b className="currency">
                          <Typography>{currency}</Typography>
                        </b>
                        <b className="price">
                          <Typography>{Price}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      Location{" "}
                      <strong className="right">
                        <b className="country">
                          <Typography>{Country}</Typography>
                        </b>{" "}
                        -{" "}
                        <b className="city">
                          <Typography>{City}</Typography>
                        </b>{" "}
                        -{" "}
                        <b className="area">
                          <Typography>{Area}</Typography>
                        </b>{" "}
                      </strong>
                    </li>
                    <li className="cf">
                      Property Type{" "}
                      <strong className="right">
                        {" "}
                        <b className="type">
                          <Typography>{Type}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      Bedrooms{" "}
                      <strong className="right">
                        <b className="bedrooms">
                          <Typography>{Bedrooms}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      front.Bathrooms{" "}
                      <strong className="right">
                        <b className="bathrooms">
                          <Typography>{Bathrooms}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      Living space sqm{" "}
                      <strong className="right">
                        <b className="living_space">
                          <Typography>{LivingSpace}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      Land size sqm{" "}
                      <strong className="right">
                        <b className="land">
                          <Typography>{landSize}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      Pool{" "}
                      <strong className="right">
                        <b className="pool">
                          <Typography>{pool}</Typography>
                        </b>
                      </strong>
                    </li>
                    <li className="cf">
                      Status{" "}
                      <strong className="right">
                        <b className="status">
                          <Typography>{status}</Typography>
                        </b>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cf col-dis-12 col-tab-12 col-dis-12 controls">
                <button
                  onClick={handleSumPrev}
                  className="navigateStep left btn"
                  type="button"
                >
                  Previous
                </button>
                <Input
                  type="submit"
                  className="btn right"
                  defaultValue="Save"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
