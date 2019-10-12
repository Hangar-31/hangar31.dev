import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";
import ContactInformation from "../components/h31/sections/ContactInformation";
import InquiryForm from "../components/h31/sections/InquiryForm";

const ContactPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Get In Touch" />
      <ContactInformation />
      <InquiryForm />
    </PageWrapperFade>
  );
};

export default ContactPage;
