import {
    FormControl,
    FormLabel,
    Grid,
    Button,
    GridItem,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    VStack,
    Container,
    Heading,
    Flex,
    Icon,
    Text,
    SimpleGrid,
  } from "@chakra-ui/react";
  import React from "react";
  import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
  import { BsPerson } from "react-icons/bs";
  import { MdOutlineEmail } from "react-icons/md";

  import ContactSectionImage from "../../Images/contact.svg";
import ContactIcon from "./ContactIcon";
  
  const ContactSection = () => {
    return (
      <Container maxW={"100%"} id="contact" paddingTop={"120px"} 
      pb={"50px"}    style={{
        backgroundColor: "#4d0026",
        color : "white"
      }} >
        <Heading textAlign={"center"} size={"2xl"} color="white">
          Contact Me
        </Heading>
        <br />
        <br />
        <Grid
          maxW={"100%"}
          margin={"auto"}
          gridTemplateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            sm: "repeat(1,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap="30px"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GridItem height="full" p={"20px"}>
            <Image
              width={"100%"}
              height="full"
              borderRadius="5px"
              src={ContactSectionImage}
            />
          </GridItem>
          <GridItem
            p={"20px"}
            borderRadius={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <VStack spacing={4}>
              <Heading
                fontFamily={"sans-serif"}
                fontSize={{
                  lg: "4xl",
                  base: "2xl",
                  md: "3xl",
                }}
              >
                Get in Touch
              </Heading>
  
              <SimpleGrid
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
                padding="10px"
                borderRadius={"5px"}
                cursor="pointer"
                gridTemplateColumns={{ lg: "repeat(2,1fr)" }}
                gridTemplateRows="auto"
                gap={"10px"}
              >
                <GridItem>
                  <Flex alignItems={"center"} gap={"10px"}  id="contact-phone" >
                    <Icon  
                      _hover={{
                        color: "rgb(9,97,184)",
                        cursor: "pointer",
                        transform: " scale(1.4)",
                        transition: "all 0.5s ease-in-out",
                      }}
                      as={PhoneIcon}
                    />
                    <Text fontSize={{ lg: "xl", md: "lg", sm: "sm", base: "sm" }}>
                     <a  href="tel:+918962661319"
                            target="_blank">+91-8962661319</a>
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem
                  display={"flex"}
                  alignItems={"center"}
                  flexDir="row"
                  gap={"10px"}
                >
                  <Flex alignItems={"center"} gap={"10px"}  id="contact-email">
                    <Icon
                      _hover={{
                        color: "rgb(234,67,53)",
                        cursor: "pointer",
                        transform: " scale(1.2)",
                        transition: "all 0.5s ease-in-out",
                      }}
                      as={EmailIcon}
                    />
                    <Text fontSize={{ lg: "xl", md: "lg", sm: "sm", base: "sm" }}>
                      hmahilange9802@gmail.com
                    </Text>
                  </Flex>
                </GridItem>
              </SimpleGrid>
              <ContactIcon border={"1px solid red"} />
              <form
                style={{ width: "100%" }}
                action="https://formspree.io/f/mrgvwygk" method="post"
              >
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<BsPerson />} />
                    <Input
                      type="text"
                      _hover={{ borderColor: "black" }}
                      name="name"
                      placeholder="Your Name"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
  
                  <InputGroup>
                    <InputLeftElement children={<MdOutlineEmail />} />
                    <Input  id="contact-email"
                      type="email"
                      _hover={{ borderColor: "black" }}
                      name="email"
                      placeholder="Your Email"
                    />
                  </InputGroup>
                </FormControl>
  
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
  
                  <Textarea
                    _hover={{ borderColor: "black" }}
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    resize="none"
                  />
                </FormControl>
                <Button
                  mt={2}
                  type="submit"
                  bg={"white"}
                  _hover={{ bg: "blue.300" }}
                  color="black"
                  variant={"solid"}
                  h="40px"
                  borderRadius="3px"
                  marginBottom={"10px"}
                  fontSize="16px"
                  isFullWidth
                >
                  Send Message
                </Button>
              </form>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    );
  };
  
  export default ContactSection;