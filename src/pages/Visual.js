import React, { useRef } from "react";
import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  const style = {
    width: 100,
    height: 100,
    background: "green",
    position: "absolute",
    left: 100,
    top: 100,
  };
  const box = useRef(null);
  return (
    <section className="visual scroll">
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어) */}
        {/* <img src={`${path}/images/ditto.png`} alt="visual" /> */}
        <div className="title">
          <p className="title-main">
            Cheol<span>H</span>o<span>!</span>
          </p>
          <span className="title-sub">
            <b>프론트엔드</b> 개발자
            <br />
            <b>김철호</b>입니다.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Visual;
