import React from "react";

const TeamPf = (item) => {
  const path = process.env.PUBLIC_URL;
  console.log(item);
  return (
    <div className="portfolio-team">
      <div className="portfolio-img">
        <a
          href={item.item.gitLink}
          target="_blank"
          alt={item.item.gitAlt}
          rel="noopener noreferrer"
        >
          <img src={`${path}/${item.item.imgSrc}`} alt="project" />
        </a>
        <span>이미지 클릭시 프로젝트 페이지로 이동합니다.</span>
      </div>
      <div className="portfolio-txt">
        <div className="pf-txt">
          <div className="pf-txt1">
            <h3 className="pf-title">{item.item.title}</h3>
            <span className="pf-date">{item.item.date}</span>
          </div>
          {/* <span className="">담당파트 : {item.item.part}</span> */}
          <span className="pf-skill">{item.item.skill}</span>
          {/* <span className="pf-notion">
            프로젝트 Notion :&nbsp;
            <a
              href={item.item.notionLink}
              target="_blank"
              alt="portfolio"
              rel="noopener noreferrer"
            >
              <img src={`${path}/images/notion.png`} alt="noton" />
            </a>
          </span> */}
        </div>
        <p className="pf-memo">{item.item.detail}</p>
        <ul className="pf-detail">
          {item.item.detail_list.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamPf;
