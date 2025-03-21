import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { ProjectsData } from "../Data";
import { motion, useInView } from "framer-motion";

// Framer Motion Components
const MotionBox = motion(GridItem);
const MotionGrid = motion(Grid);

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, // Staggered animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Starts lower
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only once
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <Box p="50px"  ref={ref}>
      <Heading color="whiteAlpha.800" fontSize="3xl" fontWeight="bold" textAlign="center">
        PROJECTS
      </Heading>

      <MotionGrid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, minmax(350px, 1fr))",
          lg: "repeat(3, minmax(300px, 1fr))",
          xl: "repeat(3, minmax(200px, 1fr))",
          "2xl": "repeat(3, minmax(450px, 1fr))",
        }}
        gap={7}
        mt="50px"
        maxW="1100px"
        mx="auto"
        px={{ base: "20px", md: "40px", lg: "80px", xl: "80px", "2xl": "100px" }}
        justifyContent="center"
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"} // Run animation only once
      >
        {ProjectsData.map((project, index) => (
          <MotionBox
            key={index}
            // bg="rgba(51, 61, 83, 0.43)"
            bg="gray.800"
            border="0.2px solid gray"
            whileHover={{ scale: 1.02, border:"0.2px solid gray", transition:{ duration: 0.3, ease: "easeOut" } }}
            borderRadius="lg"
            boxShadow="xl"
            minW={{ base: "350px", md: "350px", lg: "300px", xl: "300px", "2xl": "450px" }}
            mx="auto"
            variants={itemVariants} // Bottom to top animation
          >
            <Image w="100%" maxH="56%" src={project.image} objectFit="cover" />
            <Box p="30px">
              <Heading fontSize="20px" size="md" color="whiteAlpha.900" mb={2}>
                {project.heading}
              </Heading>
              <Text mb="20px" fontSize="18px" color="gray.400">
                {project.text}
              </Text>
              <Flex gap={2} wrap="wrap">
                {project.techStack.map((tech, i) => (
                  <Text
                    key={i}
                    // color="rgb(7, 121, 252)"
                    color={"green.300"}
                    bg={"gray.900"}
                    py="5px"
                    px="15px"
                    fontSize="15px"
                    borderRadius="25px"
                    // bg="rgba(9, 72, 247, 0.17)"
                  >
                    {tech}
                  </Text>
                ))}
              </Flex>
            </Box>
          </MotionBox>
        ))}
      </MotionGrid>
    </Box>
  );
};

export default Projects;
