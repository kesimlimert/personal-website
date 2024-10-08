"use client";
import { useState, useEffect, useRef } from "react";
import { Container, Group, Burger, Box, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";

const links = [
  { link: "#aboutMe", label: "About Me" },
  { link: "#experience", label: "Experience" },
  { link: "#projects", label: "Projects" },
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
  },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link.link));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
          section.scrollIntoView({ behavior: "smooth" });
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
        <Burger
          color="#cab1ea"
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
        />
        <Drawer size="xs" classNames={{content: classes.drawerContent, header: classes.header}} opened={opened} onClose={toggle}>
          {items}
          <Box pl="xs" pt="lg">
            {iconItems}
          </Box>
        </Drawer>
      </Container>
    </header>
  );
}
