import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarPicture from '../images/avatar2.jpg'

const greeting = "Hello, I am Anthony!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
      <VStack>
        <Avatar size='2xl' name='Anthony Bahinting' src={avatarPicture} />
        <h3></h3>
        <Heading as='h1' size='1xl' noOfLines={1}>
          {greeting}
        </Heading>
        <Heading as='h1' size={{base:'2xl', md:'3xl'}} noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as='h1' size={{base:'2xl', md:'3xl'}} noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;
