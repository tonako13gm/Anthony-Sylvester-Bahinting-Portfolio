import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

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
        <Avatar size='2xl' name='Anthony Bahinting' src='https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.18169-9/12924458_1205560996143220_7563685690591640253_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGVndL0LZ94fBC2kcKBTiZVUxZi5iDyLaNTFmLmIPItoxyosTYt0FKAU4rVYCJ0U9Mds5YqT8HT2sAdNDex6JPB&_nc_ohc=WklZlJV7bX8Q7kNvgGz9kAC&_nc_ht=scontent.fmnl8-2.fna&oh=00_AYDlHCnww9vRpwO1IdYc1EQzd8Itx698OfDKbP0ZCGRLtw&oe=668A3599' />
        <h3></h3>
        <Heading as='h1' size='1xl' noOfLines={1}>
          {greeting}
        </Heading>
        <Heading as='h1' size='3xl' noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as='h1' size='3xl' noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
  </FullScreenSection>
);

export default LandingSection;
