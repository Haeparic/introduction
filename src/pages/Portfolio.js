import React from "react";
import team from "../assets/data/team.json";
import study from "../assets/data/study.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// import { EffectCreative, FreeMode } from "swiper";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Divider } from "@mui/material";
import TeamPf from "./items/TeamPf";
import StudyPf from "./items/StudyPf";

const Portfolio = () => {
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표) */}
        {/* <h2>Portfolio</h2> */}
        <h2 data-aos="zoom-out">Portfolio</h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-title">Team Project</div>
          <div className="portfolio-team-box">
            {team.map((item, index) => (
              <TeamPf key={index} item={item} />
            ))}
          </div>
          <Divider
            variant="middle"
            sx={{ margin: "100px 50px", borderColor: "#2f4858" }}
          />
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-title">Study Project</div>
          <div className="portfolio-study-box">
            <Swiper
              // loop={true}
              // slidesPerView={"auto"}
              // spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              // centeredSlides={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Navigation]}
              className="portfolio-slide"
            >
              {study.map((item, index) => (
                <SwiperSlide key={index}>
                  <StudyPf item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
