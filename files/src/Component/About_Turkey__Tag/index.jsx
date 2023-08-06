import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../ReUseAbleComponent/Header";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Box, Divider, Typography } from "@mui/material";
import Image from "../../ReUseAbleComponent/Image";
import Path from "../../assets/AboutTurkeyTagImages/Path302.svg";
import FactsAboutTurkey from "../../assets/AboutTurkeyTagImages/19-facts-about-turkey.png";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { PageHeaderData } from "../../Data/About";
import PageHeader from "../../ReUseAbleComponent/PageHeader";
import { TypographyComponent } from "../../ReUseAbleComponent/TypographyComponent";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../Config";
import RawHTMLRenderer from "../../ReUseAbleComponent/RawHTMLRenderer";
import useFirestoreQuery from "../../Hooks/useFirestoreQuery";

export default function About_Turkey__Tag() {
  const [toggleMedditerrian, settoggleMedditerrian] = useState(false);
  const [toggleAegean, settoggleAegean] = useState(false);
  const [toggleMarmara, settoggleMarmara] = useState(false);
  const [toggleLycian, settoggleLycian] = useState(false);
  const [toggleTurquoise, settoggleTurquoise] = useState(false);
  const [toggleBlackSea, settoggleBlackSea] = useState(false);
  const [toggleAirports, settoggleAirports] = useState(false);
  const [toggleWeather, settoggleWeather] = useState(false);
  const [HandleContent, setHandleContents] = useState([]);
  const [ReadContent, setReadContent] = useState([]);
  const [MarmaraRegion, setMarmaraRegion] = useState([]);
  const [SenFransico, setSenFransico] = useState([]);

  const [data, setData] = useState([]);

  const { UsaData, isLoading } = useFirestoreQuery("/RegionsInfo");

  const HandleFetchData = () => {
    const q = query(
      collection(db, "Contents"),
      where("key", "==", "Aegean region")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setHandleContents(cities);
    });
  };

  const HandleMarmarRegion = () => {
    const q = query(
      collection(db, "Contents"),
      where("key", "==", "Marmara region")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setMarmaraRegion(cities);
    });
  };
  const FransicoCulture = () => {
    const q = query(
      collection(db, "Contents"),
      where("key", "==", "About Sen Francisco Culture")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      console.log(cities);
      setSenFransico(cities);
    });
  };

  useEffect(() => {
    HandleFetchData();
    HandleMarmarRegion();
    FransicoCulture();
  }, []);

  const ReadData = () => {
    const q = query(collection(db, "Contents"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ id: doc.id, ...doc.data() });
      });
      setReadContent(cities);
    });
  };

  useEffect(() => {
    ReadData();
  }, []);

  return (
    <>
      <section id="main" className="cf  disable-copy ">
        <Header title="About Usa" />
        <Box className="buyer-guide" style={{ backgroundColor: "#f7f5f2" }}>
          <Box className="row">
            <Box className="col-12 col-md-3 buyer-guide--side-bar-bg">
              <Box className="container-fluid">
                <Typography varient="p" className="buyer-guide--title">
                  About USA
                </Typography>
                <Box className="padding-top-2 side-item">
                  <Box className="buyer-guide--supertitle">
                    <Typography
                      varient="p"
                      className="buyer-guide--title-tab"
                      title="Mediterranean region"
                    >
                      About Sen Francisco
                    </Typography>
                    {toggleMedditerrian ? (
                      <FiChevronDown
                        onClick={() =>
                          settoggleMedditerrian(!toggleMedditerrian)
                        }
                        className=" tabs-icon"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        onClick={() =>
                          settoggleMedditerrian(!toggleMedditerrian)
                        }
                        className="tabs-icon"
                        aria-hidden="true"
                      />
                    )}
                  </Box>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      toggleMedditerrian ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="Turkish Mediterranean Region">
                        About Sen Francisco Culture
                      </Link>
                    </li>
                    <li className="">
                      <Link title="History About Sen Francisco">
                        History About Sen Francisco
                      </Link>
                    </li>
                    <li className="">
                      <Link title="About Sen Francisco Politics">
                        About Sen Francisco Politics
                      </Link>
                    </li>
                    <li className="">
                      <Link title="About Sen Francisco Geography">
                        About Sen Francisco Geography
                      </Link>
                    </li>
                    {/* {
                                            ReadContent.map((item) => {
                                                return (
                                                    <li className="">
                                                        <Link title="About Alanya" to={`/${item.id}`}>
                                                            {item.link}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        } */}
                  </ul>
                </Box>
                <Box className="padding-top-2 side-item">
                  <Box className="buyer-guide--supertitle">
                    <Typography
                      varient="p"
                      className="buyer-guide--title-tab"
                      title="Aegean region"
                    >
                      About California
                    </Typography>
                    {toggleAegean ? (
                      <FiChevronDown
                        className="tabs-icon"
                        onClick={() => settoggleAegean(!toggleAegean)}
                        aria-hidden="true"
                      />
                    ) : (
                      <FiChevronUp
                        className="tabs-icon"
                        onClick={() => settoggleAegean(!toggleAegean)}
                        aria-hidden="true"
                      />
                    )}
                  </Box>
                  <ul
                    className={`list-unstyled buyer-guide--ul ${
                      toggleAegean ? "" : "hide"
                    }`}
                  >
                    <li className="">
                      <Link title="California Location’s ">
                        California Location’s
                      </Link>
                    </li>

                    <li className="">
                      <Link title="California Several Region’s and Areas ">
                        California Several Region’s and Areas
                      </Link>
                    </li>

                    <li className="">
                      <Link title="California Properties">
                        California Properties
                      </Link>
                    </li>

                    <li className="">
                      <Link title="California Culture">California Culture</Link>
                    </li>

                    {/* {
                                            HandleContent.map((item) => {
                                                return (
                                                    <li className="">
                                                        <Link title="Turkish Aegean region" to={`/${item.id}`}>
                                                            {item.link}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        } */}
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box className="col-12  col-md-9  buyer-guide--side-bar-bg-details">
              <Box className="container-fluid">
                <PageHeader
                  key={PageHeaderData[0].id}
                  Name={PageHeaderData[0].Name}
                  createdAt={PageHeaderData[0].Created}
                  UpdatedAt={PageHeaderData[0].Updated}
                />
                <article className="page-content">
                  {ReadContent.filter(
                    (item) => item.link === "About California"
                  ).map((item) => {
                    return <RawHTMLRenderer html={item.value} />;
                  })}
                </article>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}
