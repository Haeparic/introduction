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
                <div className="pf-txt">
                  <h3 className="pf-title">MONTHLY COFFEE</h3>
                  <span className="pf-date">2023.02.09 ~ 2023.03.02</span>
                  <span className="pf-skill">
                    React, Tailwind CSS, Redux, nivo, MUI, React-Cookie
                  </span>
                  <span className="pf-notion">
                    프로젝트 Notion :&nbsp;
                    <a
                      href="https://lydian-celsius-9e0.notion.site/2-Monthly-Coffee-abb9f8a417c44f1990b667e5cac096c2"
                      target="_blank"
                      alt="portfolio"
                      rel="noopener noreferrer"
                    >
                      <img src={`${path}/images/notion.png`} alt="noton" />
                    </a>
                  </span>
                </div>
                <p className="pf-memo">
                  커피를 자주 애용하는 사람들을 위한 커피 전용 가계부
                  프로젝트입니다. 커피 지출 입력과 조회, 지출 내역 데이터를
                  바탕으로 한 통계 데이터 조회, 커뮤니티 기능을 구현하였습니다.
                </p>
                <ul className="pf-detail">
                  <li>
                    - 카카오 계정 연동을 통한 로그인으로 해당 서비스를 이용할 수
                    있습니다.
                  </li>
                  <li>
                    - 커피 지출 내역의 등록과 조회, 데이터를 바탕으로 한 통계
                    데이터를 확인할 수 있습니다,
                  </li>
                  <li>
                    - 지출 내역을 커뮤니티로 공유하여 다른 이용자들과 의견을
                    나눌 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
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
              <div className="portfolio-txt">
                <div className="pf-txt">
                  <h3 className="pf-title">수타벅스</h3>
                  <span className="pf-date">2023.01.11 ~ 2023.02.06</span>
                  <span className="pf-skill">React Redux Tailwind CSS</span>
                  <span className="pf-notion">
                    프로젝트 Notion :&nbsp;
                    <a
                      href="https://gregarious-taxi-457.notion.site/1-f3d39fc6a14e4d0e9f80b037cfefb692"
                      target="_blank"
                      alt="portfolio"
                      rel="noopener noreferrer"
                    >
                      <img src={`${path}/images/notion.png`} alt="noton" />
                    </a>
                  </span>
                </div>
                <p className="pf-memo">
                  멤버십 카드를 이용해서 음료 및 음식을 주문할 수 있는 사이트
                  입니다. "Starbucks"사이트를 참고하여 만들었습니다.
                </p>
                <ul className="pf-detail">
                  <li>
                    - 회원가입 후, 로그인을 한 뒤 근처에 있는 매장을 선택해서
                    음료 및 음식을 선택해서 주문 및 결제를 할 수 있습니다.
                  </li>
                  <li>
                    - QR코드를 이용하여 선택한 메뉴의 상세 페이지로 이동할 수
                    있습니다.
                  </li>
                  <li>
                    - 멤버십 카드에 잔액을 충전하여 주문한 메뉴를 결제할 수
                    있습니다.
                  </li>
                </ul>
              </div>
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
                <div className="pf-txt">
                  <h3 className="pf-title">교보문고 미니 프로젝트</h3>
                  <span className="pf-date">2022.12.16 ~ 2022.12.23</span>
                  <span className="pf-skill">React Bootstrap</span>
                  <span className="pf-notion">
                    프로젝트 Notion :&nbsp;
                    <a
                      href="https://gregarious-taxi-457.notion.site/bbb3fc5260ff47eeb1d22eab83f352a6"
                      target="_blank"
                      alt="portfolio"
                      rel="noopener noreferrer"
                    >
                      <img src={`${path}/images/notion.png`} alt="noton" />
                    </a>
                  </span>
                </div>
                <p className="pf-memo">
                  교보문고 사이트를 참조하여 도서를 검색하고 해당 도서에 대한
                  상세 내용을 조회할 수 있는 웹사이트를 만들었습니다.
                </p>
                <ul className="pf-detail">
                  <li>
                    - 메인 페이지에서 "오늘의 선택" 항목을 통해 사용자에게
                    도서를 추천하는 기능을 제공합니다.
                  </li>
                  <li>- 리스트에서 원하는 책을 검색할 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          {/* <div className="portfolio-box">
            <h3>Study Project</h3>
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
