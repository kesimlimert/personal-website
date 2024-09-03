import React, { useRef } from "react";
import classes from "./Projects.module.css";
import graff from "../public/graff.png";
import mouwad from "../public/mouwad.png";
import originalbtc from "../public/originalbtc.png";
import yukselt from "../public/yukselt.png";
import kastas from "../public/kastas.png";
import Image from "next/image";
import { Container, Box, Badge, Flex } from "@mantine/core";
import { useInView, motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "Yukselt",
    description:
      "The Yukselt project at İleri İşler enhances hotel booking by allowing users to upgrade their reservations. I handled all frontend development, including displaying cloud-based room options, setting up reservation logic, and implementing message-based verification for seamless login and payment. My work ensured a user-friendly interface and efficient reservation process, improving the customer experience.",
    image: yukselt,
    badge: [
      "TypeScript",
      "Next.js",
      "React.js",
      "Sanity.io",
      "Mantine",
      "Supabase",
    ],
    link: undefined,
  },
  {
    name: "Graff",
    description:
      "In the Graff e-commerce project, I contributed to the frontend development, ensuring seamless integration and presentation of data provided by the backend. My responsibilities included designing and implementing user-friendly interfaces and enhancing the overall visual appeal of the site. By collaborating closely with the backend team, I focused on delivering a cohesive and responsive user experience that aligns with modern web standards.",
    image: graff,
    badge: ["Sass", "Node.js", "JavaScript", "Jquery", "HTML", "Salesforce"],
    link: "https://www.graff.com/international-en/home/?srsltid=AfmBOooZNM9Hg-7r1ktPkupSMcLCrrO5tQU7XkXNPVOa-sYkPGdun2wL",
  },
  {
    name: "Mouwad",
    description:
      "In the Mouwad e-commerce project, I played a key role in the frontend development, focusing on the effective display of data received from the backend and contributing to the design aspects. My work involved creating user-friendly interfaces and ensuring a visually appealing and responsive design that aligns with the project’s objectives. By working closely with the backend team, I aimed to deliver a seamless and engaging user experience.",
    image: mouwad,
    badge: ["Sass", "Node.js", "JavaScript", "Jquery", "HTML", "Salesforce"],
    link: "https://www.mouawad.com/int-en/home/",
  },
  {
    name: "Originalbtc",
    description:
      "At OSF Digital, I contributed to the OriginalBTC project by focusing on several key areas of frontend development. My responsibilities included identifying and fixing bugs, implementing responsive design adjustments, and ensuring cross-platform compatibility. Additionally, I worked on developing small-scale features to enhance the user experience. My efforts were aimed at improving the overall performance and functionality of the site, ensuring a seamless experience across different devices and platforms.",
    image: originalbtc,
    badge: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery",
      "Salesforce",
      "Cloudcraze B2B",
    ],
    link: "https://www.originalbtc.com/",
  },
  {
    name: "KASTAS",
    description:
      "The KASTAS project, developed at OSF Digital, is a comprehensive e-commerce solution designed to provide a seamless shopping experience. My role in this project focused on the checkout screen, where I was responsible for various enhancements to improve the functionality and user experience. This included optimizing the user interface, ensuring smooth interactions, and streamlining the checkout process to facilitate efficient transactions. My contributions aimed to enhance the overall usability and effectiveness of the checkout process, contributing to a more satisfying customer experience..",
    image: kastas,
    badge: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "Salesforce"],
    link: "https://www.kastas.com/",
  },
];

export function Projects() {
  const projectItem = projects.map((project) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        key={project.name}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Box ref={ref} className={classes.projectItem}>
          <Box className={classes.imageWrapper}>
            <Image
              className={classes.image}
              width={600}
              src={project.image}
              alt={project.name}
            />
          </Box>
          <Box>
            <p className={classes.projectDescription}>{project.description}</p>
            {project.link && (
              <Link target="_blank" href={project.link}>
                <p className={classes.link}>Visit Website</p>
              </Link>
            )}
            <Flex gap="md" className={classes.badgesGrid} wrap="wrap">
              {project.badge.map((tech) => (
                <Badge
                  key={tech}
                  size="md"
                  radius="lg"
                  className={classes.techItem}
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
          </Box>
        </Box>
      </motion.div>
    );
  });

  return (
    <Container pb="xl" id="projects" size="md">
      <Box className={classes.titleWrapper}>
        <h2 className={classes.sectionTitle}>Projects</h2>
      </Box>
      <Box className={classes.projectsWrapper}>{projectItem}</Box>
    </Container>
  );
}
