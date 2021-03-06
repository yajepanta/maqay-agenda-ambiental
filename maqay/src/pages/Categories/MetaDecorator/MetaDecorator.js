import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, description, imgURL }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='msapplication-TileImage' content={imgURL} />
    </Helmet>
  );
};

export default MetaDecorator;
