import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "../components/aboutUs";
import Assurance from "../components/assurance";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../components/home";
import Map from "../components/map";
import Media from "../components/media";
import Partners from "../components/partners";
import Places from "../components/places";
import Packages from "../components/popularPackages";
import Services from "../components/services";
import Subscribe from "../components/subscribe";

export default function Main() {
    return <>
        <Header />
        <Home />
        <Services />
        <Packages />
        <Assurance />
        <Media />
        <Places />
        <Subscribe />
        <Contacts />
        <Partners />
        <AboutUs />
        <Map />
        <Footer />
    </>
}