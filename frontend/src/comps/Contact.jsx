"use client";

import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Vishwas4025", label: "GitHub" },
  { icon: FaEnvelope, href: "mailto:vishwasracharla09@gmail.com", label: "Gmail" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/vishwas-racharla-706109269/", label: "LinkedIn" },
];

const Contact = () => {
  return (
    <Box as="section" py={16} px={6} color="white" maxW="600px" mx="auto" textAlign="center">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        mb={15}
      >
        <Text color="whiteAlpha.800" fontSize="3xl" fontWeight="bold" textAlign="center" mb={6} >Contact</Text>
        {/* <Text color="gray.300" mt={6} mb={6}>
          Feel free to reach out through any of the following channels:
        </Text> */}

        <MotionFlex
          justify="center"
          gap={6}
          wrap="wrap"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              isExternal
              display="flex"
              alignItems="center"
              gap={2}
              color="green.300"
              _hover={{ color: "green.300", transform: "scale(1.05)" }}
              transition="0.2s ease-in-out"
              fontSize="lg"
            >
              <Icon as={link.icon} boxSize={6} />
              {link.label}
            </Link>
          ))}
        </MotionFlex>
        <Text color="whiteAlpha.800" fontWeight="bold" mt={4}>+91 7075506333</Text>
      </MotionBox>
    </Box>
  );
}

export default Contact;
