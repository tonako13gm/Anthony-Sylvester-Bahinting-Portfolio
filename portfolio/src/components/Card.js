import { Heading, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Stack } from '@chakra-ui/react'

import React from "react";

const CardView = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card>
      <CardBody>
        <a href="https://little-lemon-restaurant-booking-page.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image src={imageSrc} />
        </a>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {description}
          </Text>
          <Text>
            <a href="https://little-lemon-restaurant-booking-page.vercel.app/" target="_blank" rel="noopener noreferrer">
              see more <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </a>
          </Text>
        </Stack>
    </CardBody>
  </Card>
  );
};

export default CardView;
