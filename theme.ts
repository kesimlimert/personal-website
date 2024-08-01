"use client";

import { createTheme, MantineProvider, rem } from '@mantine/core';

export const theme = createTheme({
  colors: {
    purple: [
    '#f6eeff',
    '#e7daf7',
    '#cab1ea',
    '#ad86dd',
    '#9562d2',
    '#854bcb',
    '#7d3ec9',
    '#6b31b2',
    '#5f2aa0',
    '#52228d'
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});