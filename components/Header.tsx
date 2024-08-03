"use client";
import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconMail } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import classes from "./Header.module.css";
import Link from "next/link";

const links = [
  { link: "#aboutMe", label: "About Me" },
  { link: "#experience", label: "Experience" },
  { link: "#contact", label: "Projects" }
];

const icons = [
  {
    icon: <IconBrandGithub color="#cab1ea" stroke={2} />,
    link: "https://github.com/kesimlimert",
  },
  {
    icon: <IconBrandLinkedin color="#cab1ea" stroke={2} />,
    link: "https://www.linkedin.com/in/mertkesimli/",
  },
  {
    icon: <IconMail color="#cab1ea" stroke={2} />,
    link: "mailto:mertkesimli@hotmail.com",
  }
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        const section = document.querySelector(link.link);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {link.label}
    </Link>
  ));

  const iconItems = icons.map((icon) => (
    <Link
      key={icon.link}
      href={icon.link}
      className={classes.icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon.icon}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Group gap={5} pt="xs" visibleFrom="xs">
          {iconItems}
        </Group>
        <Burger color="purple" opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
