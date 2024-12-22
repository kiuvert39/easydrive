import { useState,  } from "react";
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  // useColorModeValue,
  Input,

} from "@chakra-ui/react";



interface Car {
  name: string;
  model: string;
  pricePerDay: number;
  license: string;
  description: string;
  imageUrl: string;
}

const CarRentalProcess = ({ car }: { car: Car }) => {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  // const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const calculateCost = () => {
    if (startDate && endDate) {
      const days =
        (Number(new Date(endDate)) - Number(new Date(startDate))) / (1000 * 60 * 60 * 24);
      setTotalCost(days > 0 ? days * car.pricePerDay : 0);
    }
  };

  const handleNext = () => {
    if (step === 2) calculateCost();
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <Box p={6} maxW="container.md" mx="auto">
      {/* Step Indicator */}
      <HStack spacing={6} justify="center" mb={6}>
        {[1, 2, 3].map((s) => (
          <Flex
            key={s}
            bg={step === s ? "blue.500" : "gray.300"}
            p={2}
            borderRadius="50%"
            w="40px"
            h="40px"
            align="center"
            justify="center"
          >
            <Text color="white" fontWeight="bold">
              {s}
            </Text>
          </Flex>
        ))}
      </HStack>

      {/* Step Content */}
      {step === 1 && (
        <VStack spacing={6} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            {car.name} - {car.model}
          </Text>

          <HStack spacing={6} w="full">
            <Box flex="1" w="100%" h="400px" >
              {/* <Canvas>
                <Suspense fallback={<Text>Loading 3D Model...</Text>}>
                  <OrbitControls enableZoom={true} />
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} />
                  <Car3DModel url={car.imageUrl} />
                </Suspense>
              </Canvas> */}
            </Box>
            <Box flex="1" w="100%" h="400px" bg="white" p={4} boxShadow="md">
              <Text>License Number: {car.license}</Text>
              <Text>{car.description}</Text>
            </Box>
          </HStack>

          <Button colorScheme="blue" onClick={handleNext}>
            Next
          </Button>
        </VStack>
      )}

      {step === 2 && (
        <VStack spacing={6} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Select Rental Period
          </Text>
          <HStack spacing={4} w="100%">
            <Box w="50%">
              <Text>Start Date</Text>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Box>
            <Box w="50%">
              <Text>End Date</Text>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </Box>
          </HStack>
          <Text>Total Cost: ${totalCost}</Text>
          <Flex justify="space-between" w="100%">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button colorScheme="blue" onClick={handleNext}>
              Next
            </Button>
          </Flex>
        </VStack>
      )}

      {step === 3 && (
        <VStack spacing={6} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Confirm Rental
          </Text>
          <Text>Car: {car.name}</Text>
          <Text>
            Rental Period: {startDate} to {endDate}
          </Text>
          <Text>Total Cost: ${totalCost}</Text>
          <Flex justify="space-between" w="100%">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button colorScheme="blue" onClick={() => alert("Rental Confirmed!")}>
              Confirm
            </Button>
          </Flex>
        </VStack>
      )}
    </Box>
  );
};

// 3D Model Loader Component
// const Car3DModel = ({ url }: { url: string }) => {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// };

export default CarRentalProcess;
