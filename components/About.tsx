"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
import NextJs from "../public/nextjs.svg";
import JavaScript from "../public/javascript.png";
import ReactLogo from "../public/react.png";
import TypeScript from "../public/typescript.svg";
import { Container } from "@mantine/core";
import { Box, SimpleGrid } from "@mantine/core";
import classes from "./About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    boxRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, { opacity: 0, transformPerspective: 600 });
        tl.to(ref, {
          duration: 1.2, 
          opacity: 1,
          rotationY: 0,
          stagger: 1,
          ease: "power3.inOut",
          delay: index * 0.1, 
        });
      }
    });
  }, []);

  const items = techStack.map((tech, index) => (
    <Box
      ref={(el) => {
        boxRefs.current[index] = el;
      }}
      key={tech.name}
      className={classes.techItem}
      style={{ transform: "rotateY(90deg)" }}
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
