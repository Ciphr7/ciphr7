import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import GoogleMap from '../container/Map/GoogleMap';
import ContactFromContainer from '../container/ContactFromContainer/ContactFromContainer';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Contact = () => {
    return (
        <React.Fragment>
            <SEO title="Ciphr7 || Contact" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-five.jpg"
                title="We are an agency located in Texas and Belize"
                content="Home"
                contentTwo="Contact Us"
            />
            <ContactInformation />
          
            <ContactFromContainer />
              <GoogleMap />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Contact;

