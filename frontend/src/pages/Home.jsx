import React from "react";
import Header from "../components/Header.component";
import Steps from "../components/Steps.component";
import Description from "../components/Description.component";
import Testimonial from "../components/Testimonial.component";
import GenerateBtn from "../components/GenerateBtn.component";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonial />
      <GenerateBtn />
    </div>
  );
};

export default Home;
