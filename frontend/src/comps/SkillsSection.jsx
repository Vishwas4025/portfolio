import React, { useRef } from "react";
import { Box, Grid, Badge, VStack, Image, Text, Stack, Heading } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

import image1 from "../assets/images/datascience.png";
import image2 from "../assets/images/ml.png";
import image3 from "../assets/images/dl.png";
import image4 from "../assets/images/nltk.png";
import image5 from "../assets/images/dsa.png";
import image6 from "../assets/images/os.png";
import image7 from "../assets/images/se.png";
import image8 from "../assets/images/cd.png";

const categorizedSkills = {
  "Programming Languages": [
    { name: "Java", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    // { name: "TypeScript", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
  ],
  
  "Web Development": [
    { name: "React.js", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    // { name: "Next.js", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Chakra UI", level: "Advanced", color: "green", icon: "data:image/jpeg;base64,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" },
    { name: "Framer Motion", level: "Intermediate", color: "yellow", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlc7z5z-AY9ZW0E9F_Jf9qHkPkbWDdD-l9Mw&s" },
    
  ],

  "Machine Learning, Deep Learning & AI": [
    { name: "Data Science", level: "Advanced", color: "yellow", icon: image1 },
    { name: "Machine Learning", level: "Advanced", color: "green", icon: image2 },
    { name: "Deep Learning", level: "Intermediate", color: "yellow", icon: image3 },
    { name: "NumPy & Pandas", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Matplotlib & Seaborn", level: "Intermediate", color: "yellow", icon: "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg" },
    { name: "Scikit-learn", level: "Intermediate", color: "yellow", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "PyTorch", level: "Intermediate", color: "yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow", level: "Basic", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", level: "Basic", color: "orange", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
    { name: "NLTK", level: "Basic", color: "orange", icon: image4 },
    { name: "Transformers", level: "Basic (Currently Learning)", color: "orange", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    
    // { name: "LLM", level: "Basic", color: "orange", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" }
  ],

  "Computer Science Fundamentals": [
    { name: "Data Structures & Algorithms (DSA)", level: "Advanced", color: "green", icon: image5 },
    { name: "Operating Systems", level: "Intermediate", color: "yellow", icon: image6 },
    { name: "Software Engineering", level: "Intermediate", color: "yellow", icon: image7 },
    { name: "Compiler Design", level: "Intermediate", color: "yellow", icon: image8 },
    { name: "Speech & NLP", level: "Intermediate", color: "yellow", icon: image4 },
  ],

  "DevOps & Tools": [
    { name: "Git & GitHub", level: "Advanced", color: "green", icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" },
    { name: "VS Code", level: "Advanced", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", level: "Intermediate", color: "yellow", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    { name: "Flask", level: "Basic (Learning)", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
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
