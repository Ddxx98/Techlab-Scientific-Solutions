import React from "react";
import ServiceData from "../../components/ServiceData/ServiceData";
import Review from "../../components/Review/Review";
import SEO from "../../components/SEO/SEO";

const Services = () => {
    return (
        <div>
            <SEO
                title="Our Services"
                description="Explore the range of analytical and scientific instrument services provided by Techlab Scientific Solutions, including installation, maintenance, and support."
            />
            <ServiceData />
            {/* <Review isDark={false} /> */}
        </div>
    );
};

export default Services;