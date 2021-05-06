import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import SearchIcon from "@material-ui/icons/Search";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { AssignmentOutlined, YouTube, Language } from "@material-ui/icons";

export default {
  name: "Aliyu Tunde",
  title: "Front End Engineer | Web Developer",

  birthday: "",
  email: "talktoaliyu@gmail.com",
  address: "Road 3 house 20B ikota villa estate Lekki",
  phone: "08167722341",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Tunde Murtala",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://twitter.com/ememblow",
      text: "@ememblow",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/aliyu-muritala-67b4b015b/",
      text: "Tunde Murtala",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/sizzle01",
      text: "Sizzle01",
      icon: <GitHubIcon />,
    },
  },
  about:
    " Courteous, enthusiastic and results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals.",

  experiences: [
    {
      title:
        "Front End Engineer | Web Developer, Exomasltd Internet Marketing Service",
      date: "2021 to present",
      description:
        "- I am responsible for building the ‘client-side’ of the company's web sites and web applications. I translate the company and customer needs into functional and appealing interactive applications",
    },
    {
      title:
        "Front End Engineer | Web Developer, Sej Duc Engineering Nigeria Limited",
      date: "2019 to 2020",
      description:
        "- I work with software teams and development managers to create software solutions. - I work with software teams and development managers to create software solutions. - I build the front-end of applications through appealing visual design. - I test software to ensure responsiveness and efficiency. - I Troubleshoot, debug and upgrade software. -  I create security and data protection settings. - I build features and websites with a mobile responsive  design. - I write technical documentation. ",
    },
    {
      title: "Web Developer, Sentrex Solutions LTD",
      date: "2018 to 2019",
      description:
        "- Developed website components using modern frameworks. -  Created high-quality mock-ups and prototypes. -  Participated in code reviews with development teams",
    },
  ],
  educations: [
    {
      title:
        "Bachelor’s Degree In Computer Science, Federal University of Technology Minna, Nigeria",
      date: "2013 to 2018",
      description:
        "I am a graduate of the Federal University Of Technology, Minna. I have demonstrated strong academic performance in my courses in the university and  i hold a Bachelor’s Degree In Computer Science",
    },
  ],
  services: [
    {
      title: " WEB DEVELOPMENT",
      description:
        "I offer web development services. i make serious efforts to develop creative, fast, easy to use and properly crafted responsive websites with the best practices.",
      icon: <ImportantDevicesIcon />,
    },
    {
      title: " E-COMMERCE SOLUTIONS",
      description:
        "I provide core custom e-commerce web solutions and services to design and develop an e-commerce website.",
      icon: <LocalAtmIcon />,
    },
    {
      title: "PERFORMANCE & SEO",
      description:
        "I offer a better and more transparent SEO service that can help you to increase your visibility in the top search results.",
      icon: <SearchIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "Javascript",
        "Typescript",
        "Bootstrap",
        "Material-UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "PHP"],
    },
    {
      title: "DATABASES",
      description: ["MySQL", "MongoDB"],
    },
    {
      title: "VERSION-CONTROL",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tag: "HTML&CSS,JAVASCRIPT",
      image: "/images/exomas.png",

      title: "DIGITAL AGENCY WEBSITE",
      caption: "A short description",
      description: "",
      links: [
        { link: "https://exomasltd.netlify.app", icon: <Language /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "REACT",
      image: "/images/beauty.png",
      title: "SPA WEBAPP",
      caption: " WEBAPP",
      description: "Ongoing WEBAPP project for a Spa in Abuja",
      links: [
        { link: "https://beautysecretskincarespa.com/", icon: <Language /> },
        {
          link: "https://github.com/sizzle01/beautysecret",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "HTML&CSS,JAVASCRIPT",
      image: "/images/speis.png",
      title: "Architectural website",
      caption: "A website designed for an architectural firm in Abuja",
      description:
        "A website designed for an architectural firm in Abuja to make available their services online and for easy reach",
      links: [
        { link: "https://speispro.netlify.app", icon: <Language /> },
        { link: "https://github.com/sizzle01/speispro", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "HTML&CSS,JAVASCRIPT",
      image: "/images/deloyemora.png",
      title: "Construction website",
      caption: "A website designed for a construction company in lagos",
      description:
        "A website designed for an construction company in Lagos to make available their services online and for easy reach",
      links: [
        { link: "https://deloyemora.netlify.app", icon: <Language /> },
        {
          link: "https://github.com/sizzle01/Deloyemora",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "REACT",
      image: "/images/weatherapp.png",
      title: "WEATHER APP",
      caption: "An App that tell displays weather temperature",
      description:
        "this apps tells yo accurately what the weather is based on the location you type in the search box ",
      links: [
        { link: "https://tundeweatherapp.netlify.app/", icon: <Language /> },
        {
          link: "https://github.com/sizzle01/React-WeatherApp",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "HTML&CSS,JAVASCRIPT",
      image: "/images/makeover.png",
      title: "Makeup Artist website",
      caption: "Beauty Website developed for a makeup Artist",
      description:
        "this project show cases a range of their work and the services they offer",
      links: [
        { link: "https://quickglitz.netlify.app", icon: <Language /> },
        { link: "https://github.com/sizzle01/quinbee", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "HTML&CSS,JAVASCRIPT",
      image: "/images/photothumb.png",
      title: "project 3",
      caption: "An Ongoing photography Website",
      description: "this is an uncompleted photography website",
      links: [
        { link: "https://photographywebb.netlify.app", icon: <Language /> },
        {
          link: "https://github.com/sizzle01/int-photography",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "JAVASCRIPT",
      image: "/images/calculator.png",
      title: "javascript calculator",
      caption: "Apple calculator clone",
      description: "this is a simple Apple calculator clone",
      links: [
        {
          link: "https://github.com/sizzle01/apple-calculator",
          icon: <GitHubIcon />,
        },
        { link: "https://applecalculator.netlify.app/", icon: <Language /> },
      ],
    },
  ],
};
