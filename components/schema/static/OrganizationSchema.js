import Head from "next/head";
import React from "react";
const OrganizationSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "My Constant Schema umesh",
    headline: "Title of the blog post",
    description: "Description of the blog post",
    author: [
      {
        "@type": "Person",
        name: "umesh kumar",
      },
    ],
    datePublished: "2022-09-14T09:00:00.000Z",
  };
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
};

export default OrganizationSchema;
