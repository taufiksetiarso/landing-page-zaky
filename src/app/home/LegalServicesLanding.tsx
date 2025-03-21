"use client";

import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import PricingPackages from "./PricingPackages";
import CtaBanner from "./CtaBanner";
import Footer from "./Footer";

const LegalServicesLanding: React.FC = () => {
    return (
        <div className="overflow-hidden relative bg-white">
            <Header />
            <HeroSection />
            <WhyChooseUs />
            <PricingPackages />
            <CtaBanner />
            <Footer />
        </div>
    );
};

export default LegalServicesLanding;
