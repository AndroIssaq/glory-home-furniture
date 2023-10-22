"use client"
import Image from 'next/image'
import { Button } from "@material-tailwind/react";
import { HeroSection } from '@/components/HeroSection';
import WhoWeAre from '@/components/WhoWeAre';
import ParallaxComponent from '@/components/Parallax';
import FeaturedProducts from '@/components/FeaturedProducts';
import Refrances from '@/components/Refrances';
import DownloadPortfolioLayout from '@/components/DownloadPortfolioLayout';
export default function Home({product}) {
  return (
    <main className="flex  flex-col items-center justify-center">
      <DownloadPortfolioLayout/>
        <HeroSection/>
        <WhoWeAre/>
        <ParallaxComponent/>
        <FeaturedProducts/>
        <Refrances/>
    </main>
  )
}

