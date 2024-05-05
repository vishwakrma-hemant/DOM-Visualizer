import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DOM Visualizer",
  description: "Generate a web page structure",
};

const theme = createTheme({
  primaryColor: 'violet',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
