import React from "react";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/hero/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <Hero
      heroClass ="hero-half"
        buttonText="about us"
        largeHeading="Dream Home Care LLC"
        topText="Better Service For Everybody"
        image="background"
      />
    </Layout>
  );
};

export default IndexPage;
