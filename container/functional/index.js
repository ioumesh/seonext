import Head from "next/head";
import React from "react";
import OrganizationFunctionSchema from "../../components/schema/static/OrganizationFunction";

const SeoFuntionalContainer = () => {
  return (
    <>
      <Head>
        <OrganizationFunctionSchema />
      </Head>

      <h1>Hi, i am Functional schema</h1>
    </>
  );
};

export default SeoFuntionalContainer;
