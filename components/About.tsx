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
  }
];

export function About() {

  const items = techStack.map((tech) => (
    <Box
      key={tech.name}
      className={classes.techItem}
    >
      <Image
        width={100}
        alt={tech.name}
        src={tech.image}
        className={classes.techImage}
      />
    </Box>
  ));

  return (
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
  );
}
