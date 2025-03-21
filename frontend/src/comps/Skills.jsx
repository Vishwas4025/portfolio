import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { SkillsData } from "../Data"; // Ensure each skill has `name` & `icon`

// Framer Motion wrapper
const MotionFlex = motion(Flex);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // Detect when in view
  const [hasAnimated, setHasAnimated] = useState(false);

  // Update state only when in view for the first time
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <Box mt={"100px"} textAlign="center" ref={ref}>
      {/* Section Heading */}
      <Heading color={"whiteAlpha.800"} fontSize="3xl" fontWeight="bold" mb={5}>
        My Skills
      </Heading>

      {/* Skills Container */}
      <Box
        borderRadius="20px"
        maxW="1100px"
        w="90%"
        mx="auto"
        p={7}
        // backgroundImage="linear-gradient(135deg, rgb(34, 48, 71), rgb(6, 11, 25))" // ✅ Correct way
        // backgroundSize="cover"
        // boxShadow="2xl"
        >

        {/* Centered Skills Wrapper */}
        <Flex wrap="wrap" justify="center" gap={4}>
          {SkillsData.map((skill, index) => (
            <MotionFlex
              key={index}
              align="center"
              gap={2}
              bg="rgba(51, 61, 83, 0.43)"
            //   bg={"#292929"}
              px={10}
              py={5}
              borderRadius="10px"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              initial={{ opacity: 0, y: 50 }} // Start slightly below
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Only animate first time
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1, // Staggered animation
              }}
            >
              {/* Skill Icon */}
              <Box as={skill.icon} size="20px" color="white" />
              {/* Skill Name */}
              <Text fontSize="20px" fontWeight="light" color="whiteAlpha.900">
                {skill.name}
              </Text>
            </MotionFlex>
          ))}
        </Flex>
      </Box>

    </Box>
  );
};

export default Skills;
