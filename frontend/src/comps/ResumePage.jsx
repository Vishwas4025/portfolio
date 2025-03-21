"use client"

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Box, Flex, Text, Heading, Stack, Link } from "@chakra-ui/react";

const MotionBox = motion(Box);

const personalInfo = {
  name: "Vishwas Racharla",
  title: "Full Stack Java Developer",
  email: "vishwasracharla09@gmail.com",
  phone: "7075506333",
  location: "Hyderabad, India",
  links: [
    { name: "Portfolio", url: "" },
    { name: "GitHub", url: "" },
    { name: "LinkedIn", url: "" },
  ],
};

const education = [
  { degree: "B.Tech in Computer Science", school: "National Institute of Science and Technology", year: "2018 - 2022", score: "8.2 GPA" },
  { degree: "12th (CBSE - PCM)", school: "Centurion Public School", year: "2017 - 2018", score: "7.9 GPA" },
  { degree: "Secondary School", school: "Centurion Public School", year: "2015 - 2016", score: "86%" },
];

const experience = [
  {
    title: "Front-End Developer (Freelancer)",
    company: "Fiverr",
    year: "May 2024 - October 2024",
    responsibilities: [
      "Developed responsive web apps using Next.js, React, and TypeScript.",
      "Styled mobile-first UIs with Tailwind CSS, increasing engagement.",
      "Integrated APIs and optimized performance.",
      "Ensured SEO optimization and cross-browser compatibility.",
    ],
  },
];

const skills = ["Java", "React.js", "Next.js", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript",
  "Java", "React.js", "Next.js", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript",
];

const certifications = [
  { name: "Java Full Stack Development Certification", issuer: "Digital Lync Hyderabad", year: "2024", url: "" },
];

const projects = [
  { name: "JIRA Application", description: "A project management app using Next.js and Appwrite.", url: "" },
  { name: "E-Commerce Website", description: "A fully responsive e-commerce platform with an admin panel.", url: "" },
];

const ResumePage=() =>{
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} mx={{base:0, md:"auto"}} mt={50} maxW="5xl" p={2}>
      <Section id="about">
        <Stack spacing={4} align="center">
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" textAlign="center">
            {personalInfo.name}
          </Text>
          <Text fontSize="xl" color="gray.500" textAlign="center">
            {personalInfo.title}
          </Text>
          <Flex direction={{ base: "column", md: "row" }} align="center" gap={4}>
            <Text>{personalInfo.email}</Text>
            <Text>{personalInfo.phone}</Text>
            <Text>{personalInfo.location}</Text>
          </Flex>
          <Flex gap={4}>
            {personalInfo.links.map((link, index) => (
              <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </Link>
            ))}
          </Flex>
        </Stack>
      </Section>


      <Flex direction={{ base: "column", md: "row" }} gap={{md:20}}>
      <Section id="experience" title="Experience">
          {experience.map((exp, index) => (
            <Box key={index} mb={6}>
              <Heading size="md">{exp.title}</Heading>
              <Text>{exp.company}</Text>
              <Text fontSize="sm">{exp.year}</Text>
              <Stack as="ul" spacing={1} fontSize="sm" pl={4}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <Text as="li" key={respIndex}>{resp}</Text>
                ))}
              </Stack>
            </Box>
          ))}
        </Section>
        <Section id="education" title="Education">
          {education.map((edu, index) => (
            <Box key={index} mb={4}>
              <Heading size="md">{edu.degree}</Heading>
              <Text>{edu.school}</Text>
              <Text fontSize="sm">{edu.year}</Text>
            </Box>
          ))}
        </Section>
      </Flex>

      <Section id="skills" title="Skills">
        <Flex wrap="wrap" gap={2}>
          {skills.map((skill, index) => (
            <Box key={index} bg="rgba(9, 72, 247, 0.17)" color="rgb(7, 121, 252)" px={3} py={1} borderRadius="full" fontSize="sm">{skill}</Box>
          ))}
        </Flex>
      </Section>

      <Flex direction={{ base: "column", md: "row" }} gap={{md:20}}>
        <Section id="projects" title="Projects">
          {projects.map((project, index) => (
            <Box key={index} mb={4}>
              <Heading size="md">{project.name}</Heading>
              <Text>{project.description}</Text>
            </Box>
          ))}
        </Section>
        <Section id="certifications" title="Certifications">
          {certifications.map((cert, index) => (
            <Box key={index} mb={4}>
              <Heading size="md">{cert.name}</Heading>
              <Text>{cert.issuer}</Text>
              <Text fontSize="sm">{cert.year}</Text>
            </Box>
          ))}
        </Section>
      </Flex>
      
    </MotionBox>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <Box as="section" id={id} mb={16}>
      <Heading size="lg" mb={4}>{title}</Heading>
      {subtitle && <Text mb={4} fontSize="xl">{subtitle}</Text>}
      {children}
    </Box>
  );
}

export default ResumePage;