"use client";
import React from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
import NextJs from "../public/nextjs.svg";
import JavaScript from "../public/javascript.png";
import ReactLogo from "../public/react.png";
import TypeScript from "../public/typescript.svg";
import { Container } from "@mantine/core";
import { Box, SimpleGrid } from "@mantine/core";
import classes from "./About.module.css";
import { motion } from "framer-motion";

const techStack = [
  {
    name: "React",
    image: ReactLogo,
  },
  {
    name: "Next.js",
    image: NextJs,
  },
  {
    name: "TypeScript",
    image: TypeScript,
  },
  {
    name: "JavaScript",
    image: JavaScript,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export function About() {
  const items = techStack.map((tech) => (
    <motion.div
      key={tech.name}
      className={classes.techItem}
      variants={itemVariants}
    >
      <Image
        width={100}
        alt={tech.name}
        src={tech.image}
        className={classes.techImage}
      />
    </motion.div>
  ));

  return (
    <motion.div
      id="aboutMe"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container id="aboutMe" className={classes.container} size="md">
        <Box className={classes.about}>
          <Box className={classes.imageWrapper}>
            <Image
              className={classes.profilePic}
              width={300}
              height={300}
              alt="profile picture"
              src={profilePic}
            />
          </Box>
          <Box className={classes.textWrapper}>
            <h1 className={classes.title}>Hello, my name is Mert Kesimli</h1>
            <p className={classes.description}>
              A Frontend Developer which never stops learning.
            </p>
          </Box>
        </Box>
        <Box className={classes.techStack}>
          <SimpleGrid cols={4} spacing="xl">
            {items}
          </SimpleGrid>
        </Box>
      </Container>
    </motion.div>
  );
}
