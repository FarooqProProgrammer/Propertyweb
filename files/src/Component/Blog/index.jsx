import React, { useState } from "react";
import { Link } from "react-router-dom";
import LittleBhosphorus from "../../assets/littlebosphorus_blog_cover.jpg";
import GlatteTower from "../../assets/galata-tower-istanbul_1678985700.jpg";
import HippoDrome from "../../assets/hippodrome-in-istanbul.jpg";
import IstanbulAtNight from "../../assets/istanbul-at-night_1678806152.jpg";
import IstanbulPark from "../../assets/istanbul-national-park-turkey.jpg";
import AnatylaDuden from "../../assets/antalya-duden-waterfalls-turkey_1677949063.jpg";
import Image from "../../ReUseAbleComponent/Image";
import { Box, Typography, Modal, Button, Grid } from "@mui/material";
import "./index.css";
import { auth, db } from "../../Config";
import { useEffect } from "react";
import { onSnapshot, collection, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import StyledButton from "../../ReUseAbleComponent/StyledButton";

export default function Blog() {
  // Getting blogs
  const [blogs, setBlogs] = useState([]);
  function extractSrcValues(rawHTML) {
    var srcRegex = /src=["'](.*?)["']/g;
    var srcValues = [];
    var match;
    while ((match = srcRegex.exec(rawHTML)) !== null) {
      srcValues.push(match[1]);
    }

    return srcValues[0];
  }
  const getBlogs = onSnapshot(collection(db, "Blogs"), (querySnapshot) => {
    const blogsData = [];
    querySnapshot.forEach((doc) => {
      blogsData.push({ id: doc.id, ...doc.data() });
    });
    const newBlogData = blogsData.map((item) => {
      const image = extractSrcValues(item.value);
      return { ...item, image };
    });
    setBlogs(newBlogData);
  });
  // Subscribe Modal
  const [subscribeModal, setSubscribeModal] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95vw", sm: 400 },
    height: "85vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2.5,
  };
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const telephone = e.target.telephone.value;
    const notes = e.target.notes.value;
    const checks = [];
    Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(
      (item) => checks.push(item.name)
    );
    const collectionRef = collection(db, "Subscriptions");
    const data = {
      id: uuidv4(),
      name: fullName,
      email,
      telephone,
      notes,
      checks,
      user: auth.currentUser?.uid,
    };
    await setDoc(doc(collectionRef, data.id), data);
    alert("Subscription Added!");
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "350px",
        backgroundColor: "white",
        padding: { xs: "15px", md: "40px 60px" },
      }}
    >
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} sm={12} md={8}>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography
              variant="h5"
              sx={{
                paddingBottom: "6px",
                fontSize: "25px",
                color: "#5e5a59",
              }}
            >
              Recent to our
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "700",
                paddingLeft: "6px",
                color: "#5e5a59",
              }}
            >
              Blogs
            </Typography>
          </Grid>
          <Grid container>
            {blogs?.slice(0, 4)?.map((blog, i) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{ padding: "10px" }}
                key={i}
              >
                <Link to={`/blog/${blog?.id}`}>
                  <Box
                    sx={{
                      width: "100%",
                      border: "1.5px solid #e6e2d7",
                      display: "flex",
                      height: "120px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40%",
                        background: `url(${blog?.image}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        width: "60%",
                        padding: "15px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          color: "#5e5a59",
                          fontSize: "18px",
                          lineHeight: "18px",
                        }}
                      >
                        {blog?.title}
                      </Typography>
                      <Typography variant="body1">{blog?.time}</Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              margin: "15px 0",
            }}
          >
            <Link to={"/blog"}>
              <StyledButton title={"View All"} size="small" />
            </Link>
            <StyledButton
              title={"Subscribe"}
              onClick={() => setSubscribeModal(true)}
              width={"100px"}
              size="small"
            />

            <Modal
              open={subscribeModal}
              onClose={() => setSubscribeModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                {auth.currentUser === null ? (
                  <Box
                    sx={{
                      backgroundColor: "#e6e2d7",
                      height: "100%",
                      width: "100%",
                      padding: "35px 20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "600",
                        color: "#72685f",
                        textAlign: "center",
                      }}
                    >
                      Please Login to Subscribe to our Media!
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      backgroundColor: "#e6e2d7",
                      height: "100%",
                      width: "100%",
                      padding: "35px 20px",
                      textAlign: "center",
                      overflowY: "auto",
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="h4"
                      sx={{
                        textTransform: "capitalize",
                        color: "#72685f",
                      }}
                    >
                      Subscribe to our media
                    </Typography>
                    <Box
                      sx={{
                        textAlign: "left",
                        marginTop: "20px",
                      }}
                    >
                      <form onSubmit={(e) => handleSubscribe(e)}>
                        <label for="fullName" className="subscribe-modal-input">
                          Full Name:
                        </label>
                        <input id="fullName" name="fullName" type="text" />
                        <br />
                        <label for="email" className="subscribe-modal-input">
                          Email:
                        </label>
                        <input id="email" name="email" type="text" />
                        <br />
                        <label
                          for="telephone"
                          className="subscribe-modal-input"
                        >
                          Telephone:
                        </label>
                        <input id="telephone" name="telephone" type="text" />
                        <br />
                        <label for="notes" className="subscribe-modal-input">
                          Notes:
                        </label>
                        <input id="notes" name="notes" type="text" />
                        <br />
                        <br />
                        <div className="subscribe-modal-check">
                          <label style={{ margin: "0", fontWeight: "600" }}>
                            Subscribe to our News
                            <input
                              type="checkbox"
                              name="news"
                              style={{ marginLeft: "4px" }}
                            />
                          </label>
                          <label style={{ margin: "0", fontWeight: "600" }}>
                            Subscribe to our Blogs
                            <input
                              type="checkbox"
                              name="blogs"
                              style={{ marginLeft: "4px" }}
                            />
                          </label>
                          <label style={{ margin: "0", fontWeight: "600" }}>
                            Subscribe to our Videos
                            <input
                              type="checkbox"
                              name="videos"
                              style={{ marginLeft: "4px" }}
                            />
                          </label>
                        </div>
                        <br />
                        <button
                          style={{
                            width: "100%",
                            padding: "12px 0",
                            backgroundColor: "#72685f",
                            color: "white",
                          }}
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </Box>
                  </Box>
                )}
              </Box>
            </Modal>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography
              variant="h5"
              sx={{
                paddingBottom: "6px",
                fontSize: "25px",
                color: "#5e5a59",
              }}
            >
              Recent to our
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "700",
                paddingLeft: "6px",
                color: "#5e5a59",
              }}
            >
              News
            </Typography>
          </Grid>
          <Grid container>
            {blogs?.slice(0, 2)?.map((blog, i) => (
              <Grid item xs={12} sx={{ padding: "10px" }} key={i}>
                <Link to={`/news/${blog?.id}`}>
                  <Box
                    sx={{
                      width: "100%",
                      border: "1.5px solid #e6e2d7",
                      display: "flex",
                      height: "120px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40%",
                        background: `url(${blog?.image}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        width: "60%",
                        padding: "15px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "600",
                          color: "#5e5a59",
                          fontSize: "18px",
                          lineHeight: "18px",
                        }}
                      >
                        {blog?.title}
                      </Typography>
                      <Typography variant="body1">{blog?.time}</Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              margin: "15px 0",
            }}
          >
            <Link to={"/blog"}>
              <StyledButton title={"View All"} size="small" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // <section id="featured-latest" className="my-10">
    //   <div className="wrap-dis-85 wrap wrap-tab-11 wrap-mob-11 d-flex-baseline-lg">
    //     <div id="as-featured-1" className="col-dis-4 col-tab-12 col-mob-12">
    //       <h2 className="title-lined text-left abhaya">
    //         <div className="font-small-29">
    //           Recent in our <b> Blog</b>
    //         </div>
    //       </h2>
    //       {/* <Grid container>
    //         <Grid item xs={12} sm={12} md={4}>
    //           <Link className="blog-item featured-box w-tablet-502">
    //             <figure className="col-dis-3 col-tab-3 col-mob-12">
    //               <img
    //                 data-src="https://www.propertyturkey.com/files/littlebosphorus_blog_cover.jpg"
    //                 className=" lazyloaded"
    //                 alt="Big Life by the Little Bosphorus Istanbul"
    //                 src={LittleBhosphorus}
    //               />
    //             </figure>
    //             <h2 className="abhaya" itemProp="name headline">
    //               Big Life by the Little Bosphorus Istanbul
    //               <span>21 Mar 2023</span>
    //             </h2>
    //           </Link>
    //         </Grid>
    //       </Grid> */}
    //       {/* <div className="col-dis-12 col-mob-12 right-padding-only w-tab-502">
    //         <Link className="blog-item featured-box w-tablet-502">
    //           <figure className="col-dis-3 col-tab-3 col-mob-12">
    //             <img
    //               data-src="https://www.propertyturkey.com/files/littlebosphorus_blog_cover.jpg"
    //               className=" lazyloaded"
    //               alt="Big Life by the Little Bosphorus Istanbul"
    //               src={LittleBhosphorus}
    //             />
    //           </figure>
    //           <h2 className="abhaya" itemProp="name headline">
    //             Big Life by the Little Bosphorus Istanbul
    //             <span>21 Mar 2023</span>
    //           </h2>
    //         </Link>
    //       </div>
    //       <div className="col-dis-12 col-mob-12 right-padding-only w-tab-502">
    //         <Link
    //           title="Turkish Citizenship benefits for Foreign Investors"
    //           className="blog-item featured-box w-tablet-502"
    //         >
    //           <figure className="col-dis-3 col-tab-3 col-mob-12">
    //             <img
    //               data-src="https://www.propertyturkey.com/files/galata-tower-istanbul_1678985700.jpg"
    //               className=" lazyloaded"
    //               alt="Turkish Citizenship benefits for Foreign Investors"
    //               src={GlatteTower}
    //             />
    //           </figure>
    //           <h2 className="abhaya" itemProp="name headline">
    //             Turkish Citizenship benefits for Foreign Investors
    //             <span>16 Mar 2023</span>
    //           </h2>
    //         </Link>
    //       </div> */}
    //     </div>
    //     <div
    //       id="as-featured"
    //       className="col-dis-4 col-tab-12 col-mob-12 pt-0-sm"
    //     >
    //       {/* <h2 className="title-lined text-left abhaya visibility-hidden">
    //         <div className="font-small-29">
    //           Recent in our <b> Blog</b>
    //         </div>
    //       </h2> */}
    //       {/* <div className="col-dis-12 col-mob-12 right-padding-only">
    //         <Link
    //           title="Experience Old Constantinople Through the Old Hippodrome"
    //           className="blog-item featured-box w-tablet-502"
    //         >
    //           <figure className="col-dis-3 col-tab-3 col-mob-12">
    //             <Image
    //               className=" lazyloaded"
    //               alt="Experience Old Constantinople Through the Old Hippodrome"
    //               src={HippoDrome}
    //             />
    //           </figure>
    //           <h2 className="abhaya" itemProp="name headline">
    //             Experience Old Constantinople Through the Old Hippodrome
    //             <span>14 Mar 2023</span>
    //           </h2>
    //         </Link>
    //       </div> */}
    //       {/* <div className="col-dis-12 col-mob-12 right-padding-only">
    //         <Link
    //           title="Famous Bosphorus Bridges of Istanbul"
    //           className="blog-item featured-box w-tablet-502"
    //           itemScope=""
    //           itemType="http://schema.org/BlogPosting"
    //         >
    //           <figure className="col-dis-3 col-tab-3 col-mob-12">
    //             <img
    //               className=" lazyloaded"
    //               alt="Famous Bosphorus Bridges of Istanbul"
    //               src={IstanbulAtNight}
    //             />
    //           </figure>
    //           <h2 className="abhaya" itemProp="name headline">
    //             Famous Bosphorus Bridges of Istanbul
    //             <span>14 Mar 2023</span>
    //           </h2>
    //         </Link>
    //       </div> */}
    //       {/* <div className="d-desk">
    //         <div className="blog-brb-custom">
    //           <Link className="view-all-btn btn rednew-border" to="/news">
    //             <span>View All</span>
    //           </Link>
    //           <Link
    //             className="view-all-btn btn rednew-border margin-left-1"
    //             onClick={() => setSubscribeModal(true)}
    //           >
    //             <span>Subscribe</span>
    //           </Link>
    //
    //         </div>
    //       </div> */}
    //     </div>
    //     {/* <div className="d-mobile">
    //       <Link className="view-all-btn btn rednew-border">
    //         <span>View All</span>
    //       </Link>
    //       <Link
    //         className="view-all-btn btn rednew-border margin-left-1"
    //         data-fancybox=""
    //         data-src="#subscribe-media-modal"
    //         to=""
    //       >
    //         <button onClick={() => alert("Ok")}>Subscribe</button>
    //       </Link>
    //     </div> */}
    //     <div id="news" className="col-dis-4 col-tab-12 col-mob-12 box">
    //       <h2 className="title-lined text-left abhaya">
    //         <div className="font-small-29">
    //           Recent in our <b>News</b>
    //         </div>
    //       </h2>
    //       <div className="col-dis-12 col-mob-12 right-padding-only">
    //         <Link
    //           title="USA  to designate 15 more 'nature conservation areas'"
    //           className="featured-box blog-item w-tab-502"
    //         >
    //           <figure className="col-dis-3 col-tab-3 col-mob-12">
    //             <Image
    //               data-src="https://www.propertyturkey.com/files/istanbul-national-park-turkey.jpg"
    //               className=" lazyloaded"
    //               alt="USA  to designate 15 more 'nature conservation areas'"
    //               src={IstanbulPark}
    //             />
    //           </figure>
    //           <h2 itemProp="name headline">
    //             USA to designate 15 more 'nature conservation areas'
    //             <span>04 Mar 2023</span>
    //           </h2>
    //         </Link>
    //       </div>
    //       <div className="col-dis-12 col-mob-12 right-padding-only">
    //         <Link
    //           title="January tourism records broken in USA ’s Antalya"
    //           className="featured-box blog-item w-tab-502"
    //         >
    //           <figure className="col-dis-3 col-tab-3 col-mob-12">
    //             <Image
    //               data-src="https://www.propertyturkey.com/files/antalya-duden-waterfalls-turkey_1677949063.jpg"
    //               className=" lazyloaded"
    //               alt="January tourism records broken in USA ’s Antalya"
    //               src={AnatylaDuden}
    //             />
    //           </figure>
    //           <h2 itemProp="name headline">
    //             January tourism records broken in USA ’s Antalya
    //             <span>04 Mar 2023</span>
    //           </h2>
    //         </Link>
    //       </div>
    //       <div className="text-center d-desk">
    //         <Link className="view-all-btn btn rednew-border" to="/news">
    //           <span>View All</span>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="text-center d-mobile">
    //       <Link className="view-all-btn btn rednew-border" to="/news">
    //         <span>View All</span>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
}
