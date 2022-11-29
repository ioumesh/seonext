import Head from "next/head";
import React from "react";
import OrganizationSchema from "../components/schema/static/OrganizationSchema";

const SeoContainer = () => {
  return (
    <>
      <Head>
        <OrganizationSchema />
      </Head>
      <h1>Hi, i am testing rich result..</h1>
    </>
  );
};

export default SeoContainer;
