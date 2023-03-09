import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        <h2 data-aos="fade-up">About</h2>
        <div className="about">
          <div className="about-left">
            <img src={`${path}/images/profile.jpg`} alt="pic" />
          </div>
          <div className="about-right">
            <div className="about-title">
              <h3>안녕하세요, 꾸준한 학습과 성장을 추구하는 김철호입니다.</h3>
              <span>
                저는 새로운 기술과 도구에 대한 관심과 열정이 높아, 보다 나은
                코드와 사용자 경험을 만들어내는 것을 즐깁니다. 또한 다양한
                팀원들과의 협업과 소통을 통해 함께 나아가는 것이 좋은 개발자가
                되는 첫걸음이라고 생각합니다. 효율적인 문제 해결 능력과 논리적인
                사고력을 바탕으로 목표 달성을 위해 최선을 다할 것입니다.
              </span>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <Accordion
            sx={{
              border: `1px solid rgba(0, 0, 0, .03)`,
              "&:not(:last-child)": {
                borderBottom: 0,
              },
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Basic
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                HTML CSS JavaScript(ES6+) TypeScript
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Library
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                React Redux Emotion Tailwind
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Others
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                git github Slack Notion figma
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Profile;
