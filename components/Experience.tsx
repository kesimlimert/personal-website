'use client';
import React from 'react'
import classes from './Experience.module.css'
import { Container } from '@mantine/core'

const experiences = [
    {
        title: 'Frontend Developer',
        company: 'İleriİşler · Full-time',
        date: 'Feb 2023 - Jul 2024 · 1 yr 5 mos',
        location: 'Toronto, Ontario, Canada · Remote',
        tech: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Sanity.io', 'HTML', 'Sass', 'CSS', 'Tailwind CSS', 'Git', 'Agile']
    },
    {
        title: 'Frontend Developer',
        company: 'feature/mind · Full-time',
        date: 'Dec 2021 - Jul 2022 · 8 mos',
        location: 'İzmir, Turkey · Remote',
        tech: ['HTML', 'Sass', 'CSS', 'JavaScript', 'Node.js', 'Salesforce', 'Git', 'Agile', 'BEM']
    },
    {
        title: 'Frontend Developer',
        company: 'OSF Digital · Full-time',
        date: 'Sep 2019 - Nov 2020 · 1 yr 3 mos',
        location: 'Izmir, Turkey · Hybrid',
        tech: ['HTML', 'Sass', 'CSS', 'JavaScript', 'JQuery', 'Salesforce', 'Git', 'Agile', 'Backbone.js']
    },
    {
        title: 'Frontend Developer Intern',
        company: 'OSF Digital · Full-time',
        date: 'Aug 2019 - Sep 2019 · 2 mos',
        location: 'Izmir, Turkey · On-site',
        tech: ['HTML', 'Sass', 'CSS', 'JavaScript', 'JQuery', 'Git']
    }
]

export const Experience = () => {
  return (
    <Container size="md" className={classes.container}>
        <h2 className={classes.sectionTitle}>Experience</h2>
    </Container>
  )
}