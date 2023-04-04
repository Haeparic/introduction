import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import React from "react";

const StudyPf = (props) => {
  const path = process.env.PUBLIC_URL;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <a
        href={props.item.link}
        target="_blank"
        alt="portfolio"
        rel="noopener noreferrer"
      >
        <CardMedia
          sx={{
            height: 150,
            objectFit: "cover",
          }}
          image={`${path}/${props.item.imgSrc}`}
        />
      </a>
      <CardContent>
        <div className="card-title">
          <span>{props.item.title}</span>
          &nbsp;&nbsp;
          <a
            href={props.item.gitLink}
            target="_blank"
            alt="portfolio"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="study-skills">
          {props.item.skill_list.map((item, index) => (
            <Chip
              key={index}
              label={item.skill}
              size="small"
              variant="outlined"
              sx={{
                borderColor: item.color,
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyPf;
