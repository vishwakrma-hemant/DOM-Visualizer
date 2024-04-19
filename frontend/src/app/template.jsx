"use client";
import { DiagramProvider } from "@/context/DiagramContext";
import { SnackbarProvider } from "notistack";
import React from "react";

const Template = ({ children }) => {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <DiagramProvider>
        {children}
      </DiagramProvider>
    </SnackbarProvider>
  );
};

export default Template;
