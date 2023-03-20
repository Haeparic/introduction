import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import React from "react";

const StudyPf = (props) => {
  const path = process.env.PUBLIC_URL;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <a
        href={props.item.gitLink}
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
        <CardContent>
          <p className="card-title">{props.item.title}</p>
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
      </a>
    </Card>
  );
};

export default StudyPf;
