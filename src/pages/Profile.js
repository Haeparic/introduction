import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        <div className="about-left">
          <img src={`${path}/images/profile.jpg`} alt="pic" />
        </div>
        <div className="about-right">
          <h2 data-aos="fade-up">About</h2>
          <div className="about-title">
            <h3>안녕하세요, 꾸준한 학습과 성장을 추구하는 김철호입니다.</h3>
            <span>
              저는 새로운 기술과 도구에 대한 관심과 열정이 높아, 보다 나은
              코드와 사용자 경험을 만들어내는 것을 즐깁니다. 또한, 다양한
              팀원들과의 협업과 소통을 통해 함께 나아가는 것이 좋은 개발자가
              되는 첫걸음이라고 생각합니다. 효율적인 문제 해결 능력과 논리적인
              사고력을 바탕으로 목표 달성을 위해 최선을 다할 것입니다.
            </span>
          </div>
          <h3>Skills</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
