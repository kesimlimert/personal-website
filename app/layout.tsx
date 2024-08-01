import "@mantine/core/styles.css";
import React from "react";
import { theme } from "../theme";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "./global.css";

export const metadata = {
  title: "Mert Kesimli",
  description: "A Frontend Developer which never stops learning.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}