import React from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialsBody from "./TestimonialsBody";
import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="main" className="cf  disable-copy ">
      <TestimonialHeader />
      <TestimonialsBody />
    </section>
  );
}
