import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  VStack,
  useDisclosure,
  Link as ChakraLink,
  Button
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  // Use a simple boolean state instead of useDisclosure
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("hero");

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Function for smooth scrolling
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
    closeMenu(); // Close drawer if mobile menu is open
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setActiveSection(id);
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Box position="fixed" top="0" left="0" width="100%" bg="blackAlpha.900" zIndex="1000" p={4}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          
          {/* Logo */}
          <ChakraLink 
            fontSize="xl" 
            fontWeight="bold" 
            color="white" 
            cursor="pointer"
            onClick={() => handleScroll("hero")}
          >
            VISHWAS⚡
          </ChakraLink>

          {/* Desktop Navigation */}
          <Flex display={{ base: "none", md: "flex" }} gap={6}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.id}
                onClick={() => handleScroll(item.id)}
                color="white"
                cursor="pointer"
                fontWeight={activeSection === item.id ? "bold" : "normal"}
                borderBottom={activeSection === item.id ? "2px solid white" : "none"}
                pb={1}
                _hover={{ color: "gray.300" }}
              >
                {item.name}
              </ChakraLink>
            ))}
          </Flex>

          {/* Mobile Menu Button */}
          <IconButton 
            aria-label="Open Menu"
            display={{ base: "block", md: "none" }}
            onClick={openMenu} 
            bg="transparent"
            color="white"
            _hover={{ bg: "gray.700" }}
          >
            ☰ 
          </IconButton>
        </Flex>
      </Box>
      
      {/* Custom Mobile Drawer - Moved outside the navbar container for better positioning */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <Box 
            position="fixed" 
            top="0" 
            left="0" 
            width="100vw" 
            height="100vh" 
            bg="rgba(0, 0, 0, 0.3)" 
            zIndex="1300"
            onClick={closeMenu}
          />
          
          {/* Drawer */}
          <Box
            position="fixed"
            top="0"
            left="0"
            width="250px"
            height="100vh"
            bg="rgba(0, 0, 0, 0.9)"
            zIndex="1400"
            p={4}
            shadow="xl"
            color="whiteAlpha.800"
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Box fontWeight="bold" fontSize="lg">Navigation</Box>
              <Button
                size="sm"
                onClick={closeMenu}
                bg="transparent"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                ✖
              </Button>
            </Flex>
            
            <VStack spacing={4} align="stretch">
              {navItems.map((item) => (
                <ChakraLink 
                  key={item.id} 
                  onClick={() => handleScroll(item.id)} 
                  cursor="pointer"
                  fontSize="lg"
                  fontWeight={activeSection === item.id ? "bold" : "normal"}
                  _hover={{ color: "gray.300" }}
                  p={2}
                  borderRadius="md"
                  bg={activeSection === item.id ? "whiteAlpha.200" : "transparent"}
                  color="whiteAlpha.800"
                  display="block"
                >
                  {item.name}
                </ChakraLink>
              ))}
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};

export default Navbar;