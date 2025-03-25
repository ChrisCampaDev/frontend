// app/page.tsx
import React from "react";
import Layout from "@/components/home/layout";

import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import DoctorsSection from "@/components/home/DoctorsSection";



const HomePage = () => {
  return (
    <>

      <Layout>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <VisionMissionSection />
        <DoctorsSection />
      </Layout>

    </>
  );
};

export default HomePage;
