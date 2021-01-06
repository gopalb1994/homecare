import React from "react";
import Layout from "../Components/Layout/Layout";
import Services from "../Components/pages/About/Services";
import AboutHero from "../Components/pages/About/Hero";
import AboutSection from "../Components/pages/About/AboutSection";
import SectionTitle from "../Components/common/SectionTitle";
import Features from "../Components/Services/Features";

const IndexPage = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutSection />
      <SectionTitle />
      <Services />
      <Features />
    </Layout>
  );
};

export default IndexPage;
