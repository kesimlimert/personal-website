'use client';
import React from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
import { Container } from "@mantine/core";
import { Box } from "@mantine/core";
import classes from "./About.module.css";

export function About() {
  return (
    <Container className={classes.container} size="md">
        <Box className={classes.imageWrapper}>
            <Image className={classes.profilePic} width={300} height={300} alt="profile picture" src={profilePic} />
        </Box>
        <Box className={classes.textWrapper}>
            <h1 className={classes.title}>Hello, my name is Mert Kesimli</h1>
            <p className={classes.description}>A Frontend Developer which never stops learning.</p>
        </Box>
    </Container>
  );
}
