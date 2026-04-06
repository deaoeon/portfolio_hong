import React from "react";
import "./styles/global.scss";
import Navbar from "./common/header/NavBar";
import Section1 from "./components/home/section1/Section1";
import Section2 from "./components/home/section2/Section2";
import Section3 from "./components/home/section3/Section3";
import Section4 from "./components/home/section4/Section4";
// import Section5 from "./components/home/section5/Section5";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 /> */}
      </main>
    </>
  );
}

export default App;
