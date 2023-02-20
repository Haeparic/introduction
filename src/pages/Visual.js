import React from "react";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="visual">
      <div className="inner">
        <img src={`${path}/images/ditto.png`} alt="visual" />
      </div>
    </div>
  );
};

export default Visual;
