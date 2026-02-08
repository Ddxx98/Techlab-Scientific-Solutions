import React from "react";
import ServiceData from "../../components/ServiceData/ServiceData";
import Review from "../../components/Review/Review";

const Services = () => {
    return (
        <div>
            <ServiceData />
            <Review isDark={false} />
        </div>
    );
};

export default Services;