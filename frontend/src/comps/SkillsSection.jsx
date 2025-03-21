import React, { useRef } from "react";
import { Box, Grid, Badge, VStack, Image, Text, Stack, Heading } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

const categorizedSkills = {
  "Programming Languages": [
    { name: "Java", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    
  ],
  "Web Development": [
    { name: "React", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  "Machine Learning & AI": [
    { name: "Scikit-learn", level: "Intermediate", color: "green", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "TensorFlow", level: "Beginner", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Hugging Face Transformers", level: "Beginner", color: "orange", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  ],
  "DevOps & Tools": [
    { name: "Git & GitHub", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", level: "Intermediate", color: "yellow", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
  ]
};

const MotionBox = motion(Box);

const SkillCard = ({ skill }) => (
  <MotionBox
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    p={4}
    // bg="rgba(51, 61, 83, 0.43)"
    bg="gray.800"
    borderRadius="lg"
    boxShadow="md"
    textAlign="center"
    position="relative"
    minW={{ base: "160px", md: "180px", lg: "200px" }}
  >
    {/* Always Visible Badge */}
    <Badge
      position="absolute"
      top="2"
      right="2"
      // colorScheme={skill.color === "green" ? "green" : skill.color === "yellow" ? "yellow" : "orange"}
      // color={"green.300"}
      fontSize="0.8em"
      px={2}
      py={1}
      bg={"gray.900"}
      borderRadius="md"
    >
      {skill.level}
    </Badge>

    <VStack spacing={3} mt={2}>
      <Image src={skill.icon} boxSize="40px" alt={skill.name} />
      <Text fontSize="lg" fontWeight="bold" color="whiteAlpha.900">{skill.name}</Text>
    </VStack>
  </MotionBox>
);


const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={10} ref={ref}>
      <Box w="100%" maxW="1400px" mx="auto" px={4}> {/* Ensures centered layout */}
        
        {/* Centered Main Heading */}
        <Box textAlign="center" mb={6}>
          <Heading color="whiteAlpha.800" fontSize="3xl" fontWeight="bold" textAlign="center">
            SKILLS
          </Heading>
        </Box>
  
        {/* Skill Categories */}
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <Box key={category} mb={8}>
            {/* Category Heading (Left Aligned) */}
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="whiteAlpha.800" textAlign="left">
              {category}
            </Text>
  
            {/* Skill Grid */}
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)", // 1 column for small screens
                sm: "repeat(2, 1fr)", 
                md: "repeat(3, 1fr)", 
                lg: "repeat(4, 1fr)", 
                "2xl": "repeat(5, 1fr)"
              }}
              gap={4}
              justifyContent="center" // Ensures equal margins
            >
              {skills.map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
  
  
};

export default SkillsSection;
