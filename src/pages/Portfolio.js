import React from "react";
import team from "../assets/data/team.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// import { EffectCreative, FreeMode } from "swiper";

// import required modules
import { Pagination, Navigation } from "swiper";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  // Tooltip,
} from "@mui/material";
import TeamPf from "./items/TeamPf";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표) */}
        <h2 data-aos="fade-up">Portfolio</h2>
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
              slidesPerView={1}
              spaceBetween={0}
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
                <Card sx={{ maxWidth: 300 }}>
                  <a
                    href="https://github.com/Haeparic/quora-clone"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      sx={{
                        height: 150,
                        objectFit: "cover",
                      }}
                      image={`${path}/images/study4.png`}
                    />
                    <CardContent>
                      <p className="card-title">쿼라 클론코딩</p>
                      <div className="study-skills">
                        <Chip
                          label="React"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#61DAFB",
                          }}
                        />
                        <Chip
                          label="Firebase"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#FFCB2F",
                          }}
                        />
                        <Chip
                          label="Tailwind"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#44A8B3",
                          }}
                        />
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 300 }}>
                  <a
                    href="https://github.com/Haeparic/Hansalim"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      sx={{
                        height: 150,
                        objectFit: "cover",
                      }}
                      image={`${path}/images/study2.png`}
                    />
                    <CardContent>
                      <p className="card-title">한살림장보기 클론코딩</p>
                      <div className="study-skills">
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#FF7200",
                          }}
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#2196F3",
                          }}
                        />
                        <Chip
                          label="Javascript"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#FFD800",
                          }}
                        />
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 300 }}>
                  <a
                    href="https://github.com/Haeparic/ee"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      sx={{
                        height: 150,
                        objectFit: "cover",
                      }}
                      image={`${path}/images/study3.png`}
                    />
                    <CardContent>
                      <p className="card-title">빙그레 클론코딩</p>
                      <div className="study-skills">
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#FF7200",
                          }}
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#2196F3",
                          }}
                        />
                        <Chip
                          label="Javascript"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#FFD800",
                          }}
                        />
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 300 }}>
                  <a
                    href="https://github.com/Haeparic/STX"
                    target="_blank"
                    alt="portfolio"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      sx={{
                        height: 150,
                        objectFit: "cover",
                      }}
                      image={`${path}/images/study1.png`}
                    />
                    <CardContent>
                      <p className="card-title">STX 건설 클론코딩</p>
                      <div className="study-skills">
                        <Chip
                          label="HTML"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#FF7200",
                          }}
                        />
                        <Chip
                          label="CSS"
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "#2196F3",
                          }}
                        />
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
