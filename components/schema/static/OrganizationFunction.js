import Head from "next/head";
import React from "react";

function createOrganizationSchema() {
  return {
    "@context": "http://schema.org",
    "@type": "functional",
    name: "Lybrate ",
    logo: "https://www.lybrate.com/img/lybrate-logo-pure-white-small.png",
    telephone: "090  2905  9702",
    url: "https://www.lybrate.com/",
    email: "hello@lybrate.com",
    sameAs: [
      "https://twitter.com/lybrate",
      "https://plus.google.com/+Lybrate/",
      "https://www.facebook.com/lybrate",
      "https://www.linkedin.com/company/lybrate",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 90155 59900",
      contactType: "customer service",
    },
  };
}
const OrganizationFunctionSchema = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createOrganizationSchema()),
        }}
      />
    </Head>
  );
};

export default OrganizationFunctionSchema;
