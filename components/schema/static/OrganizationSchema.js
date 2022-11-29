import React from "react";
const OrganizationSchema = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'umesh constant',
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default OrganizationSchema;
