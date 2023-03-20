import React from "react";

const TeamPf = (props) => {
  const path = process.env.PUBLIC_URL;
  // console.log(item);
  return (
    <div className="portfolio-team">
      <div className="portfolio-img">
        <a
          href={props.item.gitLink}
          target="_blank"
          alt={props.item.gitAlt}
          rel="noopener noreferrer"
        >
          <img src={`${path}/${props.item.imgSrc}`} alt="project" />
        </a>
        <span>이미지 클릭시 프로젝트 페이지로 이동합니다.</span>
      </div>
      <div className="portfolio-txt">
        <div className="pf-txt">
          <div className="pf-txt1">
            <h3 className="pf-title">{props.item.title}</h3>
            <span className="pf-date">{props.item.date}</span>
          </div>
          {/* <span className="">담당파트 : {props.item.part}</span> */}
          <span className="pf-skill">{props.item.skill}</span>
          {/* <span className="pf-notion">
            프로젝트 Notion :&nbsp;
            <a
              href={props.item.notionLink}
              target="_blank"
              alt="portfolio"
              rel="noopener noreferrer"
            >
              <img src={`${path}/images/notion.png`} alt="noton" />
            </a>
          </span> */}
        </div>
        <p className="pf-memo">{props.item.detail}</p>
        <ul className="pf-detail">
          {props.item.detail_list.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamPf;
