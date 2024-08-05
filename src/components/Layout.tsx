"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from './Footer'; // Import Footer component

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Footer /> {/* Add Footer component here */}
    </ThemeProvider>
  );
}

export default Layout;
