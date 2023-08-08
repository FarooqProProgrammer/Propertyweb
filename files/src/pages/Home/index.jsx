import React, { useState, useEffect } from "react";
import { Listing } from "../../Component";
import Citizen from "../../Component/Citizen";
import TurkeyAdvisor from "../../Component/TurkeyAdvisor";
import Blog from "../../Component/Blog";
import MobileStore from "../../Component/MobileStore";
import Testimonial from "../../Component/Testimonial";
import TurkeyProperty from "../../Component/TurkeyProperty";
import TurkeyTv from "../../Component/TurkeyTv";
import AdvisorDesk from "../../Component/AdvisorDesk";
import HeroSection from "../../Component/Hero__Section";
import RecomendedTurkishProperty from "../../Component/RecomendedTurkishProperty";
import FeaturedComponent from "../../Component/FeaturedComponent";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../Config";

export default function Home() {
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
  useEffect(() => {
    getBlogs();
  }, [blogs, getBlogs]);
  return (
    <div>
      <HeroSection />
      {/* <Hero /> */}
      <RecomendedTurkishProperty />
      {/* <Citizen /> */}
      {/* <TurkeyAdvisor /> */}
      <TurkeyProperty />
      <Testimonial />
      {/* <TurkeyTv /> */}
      <AdvisorDesk />
      <FeaturedComponent />
      <Blog blogs={blogs} />
      <MobileStore />
    </div>
  );
}
