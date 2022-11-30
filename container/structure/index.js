import React from "react";
import StructuredData from "../../components/structure";
const StrctureContainer = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type":"Organization",
    headline: "Title of the blog post",
    description: "Description of the blog post",
    author: [
      {
        "@type": "Person",
        name: "Umesh Structure",
      },
    ],
    datePublished: "2022-09-14T09:00:00.000Z",
  };
  return (
    <>
      <StructuredData data={structuredData} />
      <h2>i am strcture schema</h2>
    </>
  );
};

export default StrctureContainer;
