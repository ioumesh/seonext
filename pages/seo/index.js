import Head from "next/head";
import React from "react";
import OrganizationSchema from "../../components/schema/static/OrganizationSchema";

const Seo = () => {
  return (
    <>
      <Head>
        <OrganizationSchema />
      </Head>
      <div>
        <h1>Testing schema</h1>
      </div>
    </>
  );
};

export default Seo;
