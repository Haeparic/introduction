import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어) */}
        {/* <img src={`${path}/images/ditto.png`} alt="visual" /> */}
        <div className="title">
          <p className="title-main">
            Cheol<span>H</span>o<span>!</span>
          </p>
          <p className="title-sub">
            <b>프론트엔드</b> 개발자
            <br />
            <b>김철호</b>입니다.
          </p>
        </div>
        <div className="title-scroll">
          scroll
          <br />
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </section>
  );
};

export default Visual;
