import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import TypeIt from "typeit-react";

const Visual = () => {
  // const path = process.env.PUBLIC_URL;
  return (
    <section className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어) */}
        {/* <img src={`${path}/images/ditto.png`} alt="visual" /> */}
        <div className="title">
          <TypeIt
            className="title-main"
            options={{
              speed: 200,
              waitUntilVisible: true,
            }}
          >
            <span>
              Cheol<span className="title-point">H</span>o
              <span className="title-point">!</span>
            </span>
          </TypeIt>
          {/* <p className="title-main">
            Cheol<span>H</span>o<span>!</span>
          </p> */}
          <p className="title-sub">
            <b>프론트엔드</b> 개발자
            <br />
            <b>김철호</b>입니다.
          </p>
        </div>
        <div className="title-scroll">
          scroll
          <br />
          <FontAwesomeIcon icon={faChevronDown} className="icon-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Visual;
