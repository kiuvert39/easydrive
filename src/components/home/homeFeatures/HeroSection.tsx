import { Box, Heading, Text, Button } from "@chakra-ui/react";
import bannerImage from "../../../assets/images/banner/banner4.jpg";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <Box
      height="100vh"
      bgImage={`url(${bannerImage})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
    >
      <Box
        maxW="lg"
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
        p={6}                   // Padding
        borderRadius="md"       // Rounded corners
      >
        <>
            <Heading size="2xl" mb={4}>
            <Typewriter
              words={["Unlock the Joy of Driving!"]}
              loop={1}
              cursor={false}
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={3000}
            />
            </Heading>
          <Text fontSize="xl" mb={6}>
            <Typewriter
              words={["Affordable, convenient car rentals at your fingertips."]}
              loop={1}
              cursor={false}
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </Text>
          
        </>
        <Button
          size="lg"
          bg="#970747"
          color="#FFEBF1"
          _hover={{ bg: "transparent", border: "2px solid #970747" }}
          onClick={() => {
            console.log("Learn More Clicked!");
            window.location.href = "/learn-more";
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
