"use client";
import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";
const ThemeProviderM = ({children}) => {
  return (
   <ThemeProvider>
    {children}
   </ThemeProvider>
  )
}

export default ThemeProviderM