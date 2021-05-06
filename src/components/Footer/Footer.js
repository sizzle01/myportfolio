import React from "react";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resume.Data";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>

      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed by{" "}
          <a href="github.com/sizzle01" target="_blank">
            Tunde
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
