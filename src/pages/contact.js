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
      <SEO
        title="Contact Us"
        description="We are available for calls and consultations 5 days a week, at regular business hours. Get in touch with us today and schedule a Free Consultation!"
      />

      <SectionTitle title="Get In Touch" />
      <ContactInformation />
      <InquiryForm />
    </PageWrapperFade>
  );
};

export default ContactPage;
