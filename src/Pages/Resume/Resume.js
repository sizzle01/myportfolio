import React from "react";
import { Grid, Typography, Icon, Paper, TextField } from "@material-ui/core";
import resumeData from "../../utils/resume.Data";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import "./resume.css";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import { AddRounded } from "@material-ui/icons";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/*About me*/}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30 ">
          <span></span>
          <h6 className="section_title_text" variant="h6">
            About Me
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/*education and experiences*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text" variant="h6">
            Resume
          </h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography className="timeline_description">
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography className="timeline_description">
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*services*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text" variant="h6">
            My Services
          </h6>
        </Grid>
        <Grid Item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid Item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/*skills*/}
      <Grid container className="section graybg pb_45 p_50">
        <Grid Item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      ></TimelineDot>
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/*contact*/}
      <Grid container className="section pt_45 pb_45 biggest">
        {/**contact form */}
        <Grid Item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30 ">
              <span></span>
              <h6 className="section_title_text" variant="h6">
                Contact Form
              </h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid Item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid Item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-mail" />
                </Grid>
                <Grid Item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid Item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/**contact information*/}
        <Grid Item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30 ">
              <span></span>
              <h6 className="section_title_text" variant="h6">
                Contact Information
              </h6>
            </Grid>
            <Grid Item xs={12} className="custom_contact">
              <Grid container>
                <Grid Item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address:</span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid Item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone:</span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid Item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>E-mail:</span>
                    {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid Item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid Item className="contactInfo_social">
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
