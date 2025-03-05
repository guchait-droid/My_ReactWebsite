import React from "react";

// import { NavbarSimple } from "../Navbar/Navbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Layout from "../../components/Layout";
import Banner from "./Banner";
import Aboutsec from "./Aboutsec";
import Gallery from "./Gallery";
import Men from "./Men";
import Sustainability from "./Sustainability";
import Women from "./Women";
import Manufacturing from "./Manufacturing";
import Kids from "./Kids";
import Privatelabel from "./Privatelabel";
import Whychooseus from "./Whychooseus";
import Counter from "./Counter";
import Locations from "./Locations";
import Clients from "./Clients";
import Content from "./Content";
import Shipping from "./Shipping";




const Home = () => {
  return (
    <>
      <Layout>
        <Banner/>
        <Aboutsec/>
        <Gallery />
        <Men/>
        <Sustainability />
        <Women/>
        <Manufacturing/>
        <Kids/>
        <Privatelabel/>
        <Whychooseus/>
        <Counter/>
        <Locations/>
        <Clients/>
        <Content/>
        <Shipping/>
     
       
        
      </Layout>
    </>
  );
};

export { Home };
