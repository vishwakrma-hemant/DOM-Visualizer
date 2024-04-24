"use client";
import React from "react";
import { Title, Text, Button, Container, BackgroundImage } from "@mantine/core";
import classes from "./page.module.css";
import Features, { Feature } from "./Features";
import FeaturesGrid from "./Features";
import Link from "next/link";
import Navbar from "./(main)/navbar";
import Footer from "./(main)/footer";
import { Grid, Image } from "@mantine/core";
import { HeroSection } from "./HeroSection";
import FAQ from "./(main)/faq/page";

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Features />
      <FAQ />
      <Footer/>
    </>
  );
};

export default Home;
