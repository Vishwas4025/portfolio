import { motion } from "framer-motion";
import { Box, Text, Image } from "@chakra-ui/react";

const MotionBox = motion(Box); // Use motion(Box) directly

const FloatingCards = () => {
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <Box position="relative" mt={10}>
      {/* Card 1 */}
      <MotionBox
        variants={floatingVariants}
        animate="animate"
        position="absolute"
        left="10%"
        top="20%"
      >
        <Image src="https://via.placeholder.com/150" alt="Design Example" />
        <Text position="absolute" bg="green.400" p={2} borderRadius="lg">
          Sarah
        </Text>
      </MotionBox>

      {/* Card 2 */}
      <MotionBox
        variants={floatingVariants}
        animate="animate"
        position="absolute"
        right="10%"
        top="40%"
      >
        <Image src="https://via.placeholder.com/150" alt="Smart Watch UI" />
        <Text position="absolute" bg="blue.500" p={2} borderRadius="lg">
          Eliah
        </Text>
      </MotionBox>
    </Box>
  );
};

export default FloatingCards;
