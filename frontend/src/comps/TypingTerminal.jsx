import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TypingTerminal = () => {
  const fullText = [
    "> println(",
    ">    Hello, I'm Vishwas!",
    ">    Full Stack Developer &",
    ">    AI Enthusiast",
    ">    Turning Ideas into Code",
    "> );"
];


  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      if (charIndex < fullText[index].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText[index][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50); // Typing speed

        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => prev + "\n"); // Move to next line
          setIndex(index + 1);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [index, charIndex]);

  return (
    <Box
      bg="black"
      color="green.300"
    // color="orange.300"
      fontSize={{ base: "18px", md: "20px" }}
      fontFamily="monospace"
      p={4}
      borderRadius="md"
      overflow="hidden"
      minH={{base:"180px", lg:"400px"}} // Ensures fixed height
      width="100%"
      maxW={{md:"450px"}}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ whiteSpace: "pre-wrap" }} // Preserves line breaks
      >
        {displayedText}
      </motion.div>
    </Box>
  );
};

export default TypingTerminal;
