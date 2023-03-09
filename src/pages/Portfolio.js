import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Tooltip } from "@mui/material";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표) */}
        <h2 data-aos="fade-up">Portfolio</h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-team-box">
            {/* <h3>Team Project</h3> */}
            <div className="portfolio-team">
              <Tooltip title="이미지 클릭시 프로젝트 페이지로 이동합니다.">
                <div className="portfolio-img">
                  <a
                    href="https://github.com/Haeparic/monthlycoffee"
                    target="_blank"
                    alt="monthly_coffee"
                    rel="noopener noreferrer"
                  >
                    <img src={`${path}/images/monthly.webp`} alt="project" />
                  </a>
                </div>
              </Tooltip>
              <div className="portfolio-txt">
                <h3 className="pf-title">MONTHLY COFFEE</h3>
                <span className="pf-date">2022.11 ~</span>
                <br />
                <span className="pf-skill">React Redux Tailwind CSS</span>
                <br />
                <span className="pf-memo">
                  커피를 자주 애용하는 사람들, 커피만 기록하고 싶은 사람들을
                  위한 커피 전용 가계부 프로젝트입니다.
                </span>
                <br />
                <ul className="pf-detail">
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                </ul>
                <span>
                  프로젝트 Git :
                  <a
                    href="https://github.com/Haeparic/Hansalim/"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    작업물보기
                  </a>
                </span>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-txt">
                <h3 className="pf-title">수타벅스</h3>
                <span className="pf-date">2022.11 ~</span>
                <br />
                <span className="pf-skill">React Redux Tailwind CSS</span>
                <br />
                <span className="pf-memo">
                  멤버십 카드를 이용해서 음료 및 음식을 주문할 수 있는 사이트
                  입니다. ("Starbucks"사이트를 참고 )
                </span>
                <br />
                <ul className="pf-detail">
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                </ul>
                <span>
                  프로젝트 Git :
                  <a
                    href="https://github.com/Haeparic/Hansalim/"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    작업물보기
                  </a>
                </span>
              </div>
              <Tooltip title="이미지 클릭시 프로젝트 페이지로 이동합니다.">
                <div className="portfolio-img">
                  <a
                    href="https://github.com/Haeparic/sutabucks"
                    target="_blank"
                    alt="bookstore"
                    rel="noopener noreferrer"
                  >
                    <img src={`${path}/images/sutabucks.webp`} alt="project" />
                  </a>
                </div>
              </Tooltip>
            </div>
            <div className="portfolio-team">
              <Tooltip title="이미지 클릭시 프로젝트 페이지로 이동합니다.">
                <div className="portfolio-img">
                  <a
                    href="https://github.com/Haeparic/bookstore"
                    target="_blank"
                    alt="bookstore"
                    rel="noopener noreferrer"
                  >
                    <img src={`${path}/images/bookstore.webp`} alt="project" />
                  </a>
                </div>
              </Tooltip>
              <div className="portfolio-txt">
                <h3 className="pf-title">교보문고 미니 프로젝트</h3>
                <span className="pf-date">2022.11 ~</span>
                <br />
                <span className="pf-skill">React Redux Tailwind CSS</span>
                <br />
                <span className="pf-memo">
                  전체적인 디자인 분위기는 신문 느낌을 내봤습니다. 영화에 대한
                  포스팅을 한 뒤 회원, 비회원들과 함께 공유하는 서비스입니다.
                </span>
                <br />
                <ul className="pf-detail">
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 영화 정보와 함께 감상문을
                    포스팅합니다.
                  </li>
                </ul>
                <span>
                  프로젝트 Git :
                  <a
                    href="https://github.com/Haeparic/bookstore"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    작업물보기
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
              navigation={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation]}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="portfolio" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
