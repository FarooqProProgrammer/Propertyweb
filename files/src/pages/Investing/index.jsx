import React from "react";
import InvestingHeader from "./InvestingHeader";
import InvestingBody from "./InvestingBody";
import Header from "../../ReUseAbleComponent/Header";

export default function Investing() {
  return (
    <section id="main" className="cf  disable-copy ">
      <Header title="Investing" />
      <InvestingBody />
    </section>
  );
}
