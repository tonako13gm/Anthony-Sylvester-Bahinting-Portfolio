import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(5, 'Must be minimum of 5 characters')
        .max(30, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      type: Yup.string()
        .required('Please select an option'),
      comment: Yup.string()
        .min(10, 'Tell me more')
        .max(10000)
        .required('Tell me something')
    }),
  });

    // Show an alert when the form is submitted successfully
    useEffect(() => {
      console.log(onOpen)
      if (response) {
        onOpen(response.type, response.message);
        // Reset the form if the response is successful
        if (response.type === "success")
          formik.resetForm();
      }
    }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack p={1} alignItems="flex-start" width={{base:'90vw', md:'80vw', lg:'60vw'}}>
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  {...formik.getFieldProps('firstName')}
                />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.type && formik.touched.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  {...formik.getFieldProps('type')}
                >
                    <option value=""></option>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option> 
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button 
                type="submit" 
                colorScheme="purple" 
                width="full"
                isLoading={isLoading}
                // isDisabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
