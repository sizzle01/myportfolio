import React from "react";
import { Typography } from "@material-ui/core";
import office from "../../asset/images/office.jpg";
import "./profile.css";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resume.Data";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { link } from "react-router-dom";

import TimelineItem from "@material-ui/lab/TimelineItem";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name" className="timelineItem_text">
          {resumeData.name}
        </Typography>
        <Typography className="title" className="timelineItem_text">
          {resumeData.title}
        </Typography>
      </div>

      <figure className="profile_image">
        <img src={office} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container">
          <a href="/images/tundev1.pdf" download="Tunde's Resume">
            <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
