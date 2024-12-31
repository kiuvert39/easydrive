import { Box, Heading, Text, VStack } from "@chakra-ui/react";


const WhyChooseUs = () => {

  // New Emoji-based points
  const bulletPoints = [
    { emoji: "🚗", text: "Dive into Adventures: Hit the road with style! Explore urban adventures in sleek, reliable, and eco-friendly rides." },
    { emoji: "⚙️", text: "Easy Rentals: Experience a fast, smart, and hassle-free with our user-friendly app—your ride is just a tap away!" },
    { emoji: "🌱", text: "Drive Green, Go Clean: Our eco-friendly cars help you explore while reducing your carbon footprint." },
    { emoji: "🤝", text: "A Community for Car Lovers: Join a vibrant community of driving enthusiasts!" },
  ];

  return (
    <Box id="chooseUs"  py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }}>
      {/* Title Section */}
      <Box textAlign="center" mb={{ base: 6, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          mb={4}
          mt={-5}
        >
          Why Choose EasyDrive 🚗✨
        </Heading>
        {/* New Emoji-based Bullet Points */}
        <VStack spacing={{ base: 3, md: 5 }} mb={{ base: 10, md: 20 }}>
          {bulletPoints.map((point, index) => (
            <Text
              key={index}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="gray.700"
              textAlign="center"
            >
              <span style={{ marginRight: "8px" }}>{point.emoji}</span>
              {point.text}
            </Text>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
