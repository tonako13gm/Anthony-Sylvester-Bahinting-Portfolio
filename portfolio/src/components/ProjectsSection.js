import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardView from "./Card";

const projects = [
  {
    title: "Little Lemon",
    link: "https://little-lemon-restaurant-booking-page.vercel.app/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Note Board",
    link: "https://noteboard-6q4w.onrender.com/",
    description:
      "A simple web application to track notes in a organized manner",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Audiophile",
    link: "https://audiophile-eight-sable.vercel.app/",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    link: "#",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <CardView
            key={project.title}
            title={project.title}
            link={project.link}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
