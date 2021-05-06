import React from "react";
import {
  CardActionArea,
  Grid,
  Tab,
  Tabs,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useState } from "react";
import resumeData from "../../utils/resume.Data";
import resume from "../../Pages/Resume/Resume";
import "./portfolio.css";
import { Switch } from "react-router-dom";
import { TagFaces } from "@material-ui/icons";

const Portfolio = () => {
  const [tabValue, setTabValue] = React.useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/**Title */}
      <Grid item className="section_title mb_20 ">
        <span></span>
        <h6 className="section_title_text" variant="h6">
          My work
        </h6>
      </Grid>
      {/**tabs */}
      <Grid Item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/**projects */}
      <Grid Item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid Item className="projbox" sm={6} md={4} xs={12}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>{" "}
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt="" className="projectDialog_image" />
        <Typography className="projectDialog_description">
          <DialogContent>{projectDialog.description}</DialogContent>
        </Typography>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectDialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
