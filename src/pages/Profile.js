import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        <h2 data-aos="fade-left">About</h2>
        <div className="about">
          <div className="about-left">
            <img src={`${path}/images/profile.jpg`} alt="pic" />
          </div>
          <div className="about-right">
            <div className="about-title">
              <div className="about-top">
                <span>
                  안녕하세요, 꾸준한 <span className="color">학습</span>과
                </span>
                <img
                  src={`${path}/images/logo.png`}
                  alt="logo"
                  className="about-logo"
                />
              </div>
              <p>
                <span className="color">성장</span>을 추구하는&nbsp;
                <span className="color">개발자</span>
                &nbsp;김철호입니다.
              </p>
            </div>
            <p className="about-detail">
              프론트엔드 개발자에게 있어 가장 핵심적인 가치는&nbsp;
              <b>팀원들과의 원활한 협업과 소통</b>
              입니다. 또한,&nbsp;
              <b>새로운 기술과 도구에 대한 지속적인 탐구와 적용</b>을 통해 보다
              나은 코드와 사용자 경험을 만들어내는 것도 매우 중요합니다.
              저는&nbsp;
              <b>협업</b>과&nbsp;
              <b>기술</b> 모두를 두루 중요시하며, 효율적인 문제 해결 능력과
              논리적인 사고력을 활용하여 프론트엔드 개발자로서&nbsp;
              <b>최선의 성과</b>를 이루고자 합니다.
            </p>
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
              <div className="skills-title">Language</div>
              <div className="skills-list">
                <span>JavaScript</span>
                <span>TypeScript</span>
              </div>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <p>
                ▪ JavaScript ES6 문법을 기반으로 JS 기본 구조에 대해서 꾸준히
                공부하고 있으며, 개발 생산성과 유지보수성을 향상시키기 위해
                TypeScript을 활용하고 있습니다.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              className="accordion-title"
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="skills-title">Framework / Library</div>
              <div className="skills-list">
                <span>React</span>
                <span>Redux-toolkit</span>
                <span>Emotion</span>
                <span>Tailwind</span>
              </div>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <p>
                ▪ React 18 버전을 기반으로 프로젝트에 사용 중이며, 효율적인
                컴포넌트 상태관리를 위해 Redux 를 활용하고 있습니다.
              </p>
              <p>
                ▪ Emotion, Tailwind 와 같은 프레임워크를 사용해서 스타일링을 할
                수 있습니다.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordion">
            <AccordionSummary
              className="accordion-title"
              expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div className="skills-title">Others</div>
              <div className="skills-list">
                <span>git</span>
                <span>github</span>
                <span>Slack</span>
                <span>Notion</span>
              </div>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <p>
                ▪ git을 이용해서 협업 및, 버전 관리를 할 수 있습니다. github을
                이용해서 소스 코드 관리를 하고 있습니다.
              </p>
              <p>▪ slack 과 notion 을 통한 커뮤니케이션이 능숙합니다.</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Profile;
