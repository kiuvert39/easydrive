import { Box, Text, Grid, Heading, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCar, FaSmile, FaMap } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      description: "Pick the location and the date.",
    },
    {
      icon: FaCar,
      title: "Choose A Car",
      description: "Select the car you like.",
    },
    {
      icon: FaSmile,
      title: "Enjoy Your Ride",
      description: "Explore new sights and places with comfort.",
    },
    {
      icon: FaMap,
      title: "Return The Car",
      description: "Leave the car at one of our parks.",
    },
  ];

  return (
    <Box id="how-to-rent" bg="#F4E6EC" py={32} px={24}>
      {/* Title Section */}
      <Box textAlign="center" mb={20}>
        <Heading color="#970747" fontSize="6xl" fontWeight="bold" mb={2} marginTop={-10}>
          How To Rent
        </Heading>
        <Text fontSize="4xl" color="black" fontWeight="bold">
          Simple & Easy Steps
        </Text>
        <Text color="black" mt={3}>
          Choose Location, Car & Enjoy Your Ride
          <br />
          When you finish, return the car to one of our parking stations.
        </Text>
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={20}>
        {steps.map((step, index) => (
          <Box
            key={index}
            textAlign="center"
            bg="white"
            p={6}
            boxShadow="lg"
            borderRadius="lg"
            maxW="sm"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Icon as={step.icon} w={12} h={12} color="#970747" mb={4} />
            <Heading size="md" mb={2}>
              {step.title}
            </Heading>
            <Text>{step.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
