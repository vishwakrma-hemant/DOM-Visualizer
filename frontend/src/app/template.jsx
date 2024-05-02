"use client";
import { AppProvider } from "@/context/AppContext";
import { DiagramProvider } from "@/context/DiagramContext";
import { SnackbarProvider } from "notistack";
import React from "react";

const Template = ({ children }) => {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <AppProvider>
        <DiagramProvider>
          {children}
        </DiagramProvider>
      </AppProvider>
    </SnackbarProvider>
  );
};

export default Template;
