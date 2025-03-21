import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

const texts = ["Full Stack Developer", "AI Enthusiast", "Open Source Contributor"];
const typingSpeed = 100; // Milliseconds per character
const deleteSpeed = 50;  // Speed for deleting characters
const delayBetweenTexts = 1500; // Delay before switching to the next text

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <Text fontSize="2xl" fontWeight="bold">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      >
        |
      </motion.span>
    </Text>
  );
};

export default TypingEffect;
