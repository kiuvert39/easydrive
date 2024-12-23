// Imports
import React from "react";
import { Box, Flex, Heading, Text, Image, Link, Stack } from "@chakra-ui/react";
import memunatImage from "../../../assets/images/team/memunat.jpg";
import habeebImage from "../../../assets/images/team/habeeb.jpg";
import kliuvertImage from "../../../assets/images/team/kliuvert.jpg";




const AboutSection: React.FC = () => {
    return (
        <Box id="about" bg="#F4E6EC" py={10} px={6}>
            {/* Project Overview Section */}
            <Box textAlign="center" mb={8}>
                <Heading fontSize="4xl" fontWeight="bold" mb={10} color="#970747">
                    About EasyDrive 🚗
                </Heading>
                <Text fontSize="lg" color="black" maxW="3xl" mx="auto" mb={20}>
                    EasyDrive is a modern and user-friendly car rental platform that
                    provides swift, flexible, and eco-conscious driving solutions for
                    users. Whether you're planning a road trip, commuting for work, or
                    simply need a quick ride, EasyDrive makes renting a car easier than
                    ever.
                </Text>
            </Box>

            {/* Team Introduction Section */}
            <Box>
                <Heading fontSize="4xl" fontWeight="semibold" mb={1} textAlign="center" color="black">
                    Meet the Team 👥
                </Heading>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                    align="center"
                    gap={10}
                >
                    {/* Team Member 1 */}
                    <Stack align="center" spacing={4}>
                        <Image
                            borderRadius="full"
                            boxSize="170px"
                            src={kliuvertImage}
                            alt="kliuvert"
                        />
                        <Heading fontSize="lg" fontWeight="bold" color="#970747" _hover={{ transform: "scale(1.05)" }}
                        >
                            Kliuvert Egbe
                        </Heading>
                        <Text color="black">Project Lead and Frontend Developer</Text>
                        <Flex gap={4}>
                            <Link href="https://github.com/kiuvert39" isExternal color="#970747">
                                GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/kliuvert-egbe-641452228/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" isExternal color="#970747">
                                LinkedIn
                            </Link>
                        </Flex>
                    </Stack>

                    {/* Team Member 2 */}
                    <Stack align="center" spacing={4}>
                        <Image
                            borderRadius="full"
                            boxSize="170px"
                            src={habeebImage}
                            alt="habeeb"
                        />
                        <Heading fontSize="lg" fontWeight="bold" color="#970747" _hover={{ transform: "scale(1.05)" }}
                        >
                            Freeman Boss
                        </Heading>
                        <Text color="black">Backend and DevOps Engineer</Text>
                        <Flex gap={4}>
                            <Link href="https://github.com/FreemanBoss" isExternal color="#970747">
                                GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/habeeb-babasulaiman" isExternal color="#970747">
                                LinkedIn
                            </Link>
                        </Flex>
                    </Stack>

                    {/* Team Member 3 */}
                    <Stack align="center" spacing={4}>
                        <Image
                            borderRadius="full"
                            boxSize="170px"
                            src={memunatImage}
                            alt="memunat"

                        />
                        <Heading fontSize="lg" fontWeight="bold" color="#970747"  _hover={{ transform: "scale(1.05)" }}
                        >
                            
                            Maimunah Elegushi
                        </Heading>
                        <Text color="black">UI/UX and Frontend Developer</Text>
                        <Flex gap={4}>
                            <Link href="https://github.com/auspicious-1ife" isExternal color="#970747">
                                GitHub
                            </Link>
                            <Link href="https://www.linkedin.com/in/memunat-elegushi-6799b0225/" isExternal color="#970747">
                                LinkedIn
                            </Link>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
        </Box>
    );
};

export default AboutSection;
