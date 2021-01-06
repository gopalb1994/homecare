import React from "react";
import Layout from "../Components/Layout/Layout";
import Services from "../Components/pages/About/Services";
import AboutHero from "../Components/pages/About/Hero";
import AboutSection from "../Components/pages/About/AboutSection";

const IndexPage = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutSection />
      <Services/>
    </Layout>
  );
};

export default IndexPage;
