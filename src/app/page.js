"use client";
import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import Home from './components/home/home';

const page = () => {
  return (
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
      )
}
export default page;
