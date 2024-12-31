import { Box, Heading, Text, Button } from "@chakra-ui/react";
import bannerImage from "../../../assets/images/banner/car.jpeg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const handleLearnMore = () => {
    // Navigate to the Learn More page
    window.location.href = "/learn-more";
  };

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
      position="relative"
    >
      {/* Semi-transparent overlay for better text contrast */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={1}
      />
      <Box
        maxW={{ base: "90%", md: "lg" }}
        p={{ base: 4, md: 6 }}
        borderRadius="lg"
        boxShadow="lg"
        zIndex={2}
      >
        <Heading
          size="2xl"
          mb={4}
          fontWeight="bold"
          lineHeight="short"
          textTransform="capitalize"
        >
          <Typewriter
            words={["Unlock the Joy of Driving!"]}
            loop={1}

            cursor={false}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mb={6}
          opacity={0.9}
          fontWeight="medium"
        >
          <Typewriter
            words={["Affordable, convenient car rentals at your fingertips."]}
            loop={0}
            cursor={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </Text>
        <Button
          size="lg"
          bg="#970747"
          color="#FFEBF1"
          _hover={{
            bg: "transparent",
            border: "2px solid #970747",
            color: "#970747",
          }}
          onClick={handleLearnMore}
          aria-label="Learn More about car rentals"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
