import React from 'react';
import { Helmet } from 'react-helmet-async';

import logo from '../../assets/logo.png';

const SEO = ({ title, description, keywords, ogImage, ogUrl }) => {
    const siteTitle = "Techlab Scientific Solutions";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "Techlab Scientific Solutions - Leading provider of laboratory equipment, chemicals, and scientific instruments in Bangalore, India.";
    const defaultKeywords = "scientific instruments, laboratory equipment, Shimadzu, GC-MS, chromatography, spectroscopy, analytical instruments, lab chemicals, Bangalore, Techlab Scientific";
    const defaultOgImage = window.location.origin + logo;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            {ogUrl && <meta property="og:url" content={ogUrl} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage || defaultOgImage} />

            {/* Canonical link */}
            {ogUrl && <link rel="canonical" href={ogUrl} />}
        </Helmet>
    );
};

export default SEO;
