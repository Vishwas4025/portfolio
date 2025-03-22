import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigation hooks
import TypingTerminal from "./TypingTerminal";

import resumePDF from "../assets/Vishwas_Resume.pdf";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle resume download
  const handleDownloadResume = () => {
    // const resumeUrl = "./assets/Vishwas_Resume.pdf"; // Ensure file is in 'public' folder
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Vishwas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to scroll to Contact section
  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home first
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 500); // Delay to ensure navigation completes
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box 
        as="section" 
        minH="100vh" 
        display="flex" 
        alignItems="flex-start" 
        justifyContent="center"
        bgGradient="linear(to-br, gray.900, gray.800, gray.700)"
        px={6}
    >
        <Flex 
            direction={{ base: "column", lg: "row" }} 
            align="center" 
            maxW="6xl" 
            w="full"
            height="100%" 
            gap={6}
            pt={{ base: "5vh", md: "10vh" }} // Push content upward
        >
            {/* Left Side - Typing Effect */}
            <MotionBox 
            w={{ base: "100%", md: "50%" }} 
            display="flex" 
            justifyContent={{ base: "center", md: "flex-start" }}
            >
            <TypingTerminal />
            </MotionBox>

            {/* Right Side - Text & Buttons */}
            <MotionBox 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            w={{ base: "100%", md: "50%" }} 
            textAlign={{base: "left" }}
            >
            <Text textAlign={{ base: "center", md: "left" }} color="green.300" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" lineHeight={1.1}>
                VISHWAS RACHARLA
            </Text>

            <MotionText
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                fontSize="lg"
                color="gray.200"
                mt={6}
            >
                Dynamic and proactive Computer Science Engineering (AIML) student currently in 3rd year with a strong background
                in Problem solving, Date Structures and Algorithms, Full Stack Development, Data Science, Machine Learning, Deep
                Learning and Software Development Life Cycle (SDLC).
            </MotionText>
            <MotionText
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                fontSize="lg"
                color="gray.200"
                mt={6}
            >
                Eager to apply analytical skills and problem solving abilities
                to real world software engineering challenges. Actively seeking internships or full time roles in Full Stack Development,
                Data Science, AI or Software Development with a passion for innovation in technology.
            </MotionText>

            <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                mt={8}
                justify={{ base: "center", md: "flex-start" }}
            >
                {/* Download Resume Button */}
                <MotionButton 
                    size="lg" 
                    bg="green.300" 
                    whileHover={{ scale: 1.05 }} 
                    onClick={handleDownloadResume} // Trigger resume download
                >
                    Download Resume
                </MotionButton>

                {/* Contact Button Scrolls to Contact Section */}
                <MotionButton 
                    size="lg" 
                    variant="outline" 
                    borderColor="green.100" 
                    whileHover={{ scale: 1.05 }}
                    onClick={handleContactClick} // Scrolls to Contact
                >
                    Contact
                </MotionButton>
            </Stack>
            </MotionBox>
        </Flex>
    </Box>
  );
}

export default Hero;