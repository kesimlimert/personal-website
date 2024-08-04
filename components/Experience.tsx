"use client";
import React from "react";
import classes from "./Experience.module.css";
import { Box, Container, Flex, Group, Badge, SimpleGrid } from "@mantine/core";
import { theme } from "@/theme";

const experiences = [
  {
    title: "Frontend Developer",
    company: "İleriİşler · Full-time",
    date: "Feb 2023 - Jul 2024 · 1 yr 5 mos",
    location: "Toronto, Ontario, Canada · Remote",
    tech: ["React", "TypeScript", "JavaScript", "Next.js", "Sanity.io"],
  },
  {
    title: "Frontend Developer",
    company: "feature/mind · Full-time",
    date: "Dec 2021 - Jul 2022 · 8 mos",
    location: "İzmir, Turkey · Remote",
    tech: ["JavaScript", "Node.js", "Salesforce", "Sass"],
  },
  {
    title: "Frontend Developer",
    company: "OSF Digital · Full-time",
    date: "Sep 2019 - Nov 2020 · 1 yr 3 mos",
    location: "Izmir, Turkey · Hybrid",
    tech: ["JavaScript", "JQuery", "Salesforce", "CI/CD", "Agile"],
  },
  {
    title: "Frontend Developer Intern",
    company: "OSF Digital · Full-time",
    date: "Aug 2019 - Sep 2019 · 2 mos",
    location: "Izmir, Turkey · On-site",
    tech: ["JavaScript", "JQuery", "Git"],
  },
];

const experienceItem = experiences.map((experience) => (
  <Box key={experience.title} className={classes.experienceItem}>
    <p className={classes.experienceTitle}>{experience.title}</p>
    <p className={classes.experienceCompany}>{experience.company}</p>
    <p className={classes.experienceDate}>{experience.date}</p>
    <p className={classes.experienceLocation}>{experience.location}</p>
    <Flex gap="md" className={classes.badgesGrid} wrap="wrap">
      {experience.tech.map((tech) => (
        <Badge key={tech} size="md" radius="lg" className={classes.techItem}>
          {tech}
        </Badge>
      ))}
    </Flex>
  </Box>
));

export const Experience = () => {
  
  return (
    <Container id="experience" size="md" className={classes.container}>
      <Box className={classes.titleWrapper}>
        <h2 className={classes.sectionTitle}>Experience</h2>
      </Box>
      <Flex direction="column" gap="md" className={classes.experiencesWrapper}>
        {experienceItem}
      </Flex>
    </Container>
  );
};
