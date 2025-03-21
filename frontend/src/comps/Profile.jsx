import { Box, Flex, Avatar, Heading, Text, Button, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Framer Motion Wrapper
const MotionBox = motion(Box);

// Animation Variant
const profileVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Profile = () => {
  return (
    <MotionBox
      id="profile"
      maxW="900px"
      mx="auto"
      p="50px"
      textAlign="center"
      initial="hidden"
      animate="visible"
      variants={profileVariants}
    >
      {/* Profile Image */}
      {/* <Avatar
        size="2xl"
        name="Your Name"
        // src="your-profile-image.jpg" // Replace with your image URL
        mb={4}
      /> */}

      {/* Name & Role */}
      <Heading fontSize="2xl" color="whiteAlpha.900">
        VISHWAS RACHARLA
      </Heading>
      <Text fontSize="lg" color="gray.400">
        AI/ML Enthusiast | Full-Stack Developer
      </Text>

      {/* Resume Download */}
      <Button
        mt={4}
        colorScheme="blue"
        as="a"
        // href="/resume.pdf" // Replace with your resume link
        download
      >
        Download Resume
      </Button>

      {/* Social Media Links */}
      <Flex mt={4} justify="center" gap={5}>
        <Link href="https://github.com/yourgithub" isExternal>
          <Icon as={FaGithub} boxSize={6} color="gray.300" _hover={{ color: "white" }} />
        </Link>
        <Link href="https://linkedin.com/in/yourlinkedin" isExternal>
          <Icon as={FaLinkedin} boxSize={6} color="gray.300" _hover={{ color: "white" }} />
        </Link>
        <Link href="mailto:your.email@example.com">
          <Icon as={FaEnvelope} boxSize={6} color="gray.300" _hover={{ color: "white" }} />
        </Link>
      </Flex>
    </MotionBox>
  );
};

export default Profile;
