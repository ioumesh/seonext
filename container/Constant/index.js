import Head from "next/head";
import React from "react";
import OrganizationSchema from "../../components/schema/static/OrganizationSchema";
const SeoConstantContainer = () => {
  return (
    <>
      <Head>
        <OrganizationSchema />
      </Head>
      <h1>Hi, i am constant schema  </h1>
    </>
  );
};

export default SeoConstantContainer;
