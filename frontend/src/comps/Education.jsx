import { Box, Flex, Text, VStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa"; // Calendar Icon

const MotionBox = motion(Box);

const educationData = [
  {
    date: "2022 - 2026",
    degree: "Bachelor of Engineering in Computer Science (AI/ML)",
    institution: "Neil Gogte Institute of Technology",
    description: "Studying core CS subjects along with AI/ML, deep learning, and web development."
  },
  {
    date: "2020 - 2022",
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Junior College",
    description: "Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry."
  },
  {
    date: "2020",
    degree: "Secondary Education",
    institution: "Sri Chaitanya Techno School",
    description: "Completed Secondary School Examination at Sri Chaitanya School, Hyderabad, in 2020."
  }
];

const Education = () => {
  return (
    <Box as="section" py={16} px={6} color="white">
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={10}>
        Education
      </Text>

      <Flex 
        direction="column"
        gap={6} 
        align="center"
      >
        {educationData.map((edu, index) => (
          <MotionBox
            key={index}
            w="100%" maxW="800px" mx="auto"
            p={6}
            bg="gray.800"
            borderRadius="lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }} // Ensures animation happens only once
          >
            <Text fontSize="xl" fontWeight="bold">{edu.degree}</Text>
            <Text fontSize="md" color="green.300">{edu.institution}</Text>
            <Flex align="center" mt={2}>
              <Icon as={FaCalendarAlt} color="gray.400" mr={2} />
              <Text fontSize="sm" color="gray.400">{edu.date}</Text>
            </Flex>
            <Text mt={2} fontSize="15px" color="gray.300">{edu.description}</Text>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

export default Education;
