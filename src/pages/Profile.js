import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
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
              <h3>
                안녕하세요, 꾸준한 <span className="color">학습</span>과&nbsp;
                <span className="color">성장</span>을 추구하는 김철호입니다.
              </h3>
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
          {/* <h3>Skills</h3> */}
          <Accordion className="accordion">
            <AccordionSummary
              className="accordion-title"
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className="skills-title">Basic</span>
              <span className="skills-list">
                HTML CSS JavaScript(ES6+) React TypeScript
              </span>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <span>
                React 를 활용해서 웹서비스를 개발한 경험이 있습니다. TS의
                타입추론에 대해서 이해하고 있습니다.
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              className="accordion-title"
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <span className="skills-title">Library</span>
              <span className="skills-list">
                Redux-toolkit Emotion Tailwind
              </span>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <span>
                Redux 를 사용해서 State 를 전역적으로 관리 할 수 있습니다.
                <br />
                Emotion, Tailwind 와 같은 프레임워크를 사용해서 스타일링을 할 수
                있습니다.
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              className="accordion-title"
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <span className="skills-title">Others</span>
              <span className="skills-list">git github Slack Notion figma</span>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <span>
                git을 이용해서 협업 및, 버전 관리를 할 수 있습니다. github을
                이용해서 소스 코드 관리를 한 적이 있습니다.
                <br />
                slack 과 notion 을 통한 커뮤니케이션이 능숙합니다.
                <br />
                figma 를 사용한 협업경험이 있습니다. figma 의 내용대로 구현할 수
                있습니다.
              </span>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Profile;
