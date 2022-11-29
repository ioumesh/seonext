import Head from "next/head";
import React from "react";
import OrganizationSchema from "../../components/schema/static/OrganizationSchema";
import StructuredData from "../../components/structure";
const SeoConstantContainer = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Title of the blog post',
    description: 'Description of the blog post',
    author: [
      {
      '@type': 'Person',
      name: 'John Doe',
      },
    ],
    datePublished: '2022-09-14T09:00:00.000Z',
  };
  return (
    <>
      <Head>
        <OrganizationSchema />
        <StructuredData data={structuredData} />
      </Head>
     
      <h1>Hi, i am constant schema with structure</h1>
    </>
  );
};

export default SeoConstantContainer;
