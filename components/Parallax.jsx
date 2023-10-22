"use client"
import React from 'react'
import { Parallax } from "react-parallax";
import { Button } from '@material-tailwind/react';
import {Typography} from '@material-tailwind/react';
import bedroom from '@/public/bedroom.jpg'
import Link from 'next/link';
const ParallaxComponent = () => {
    console.log();
    const image1 =
  "https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg";
  return (
    <Parallax bgImage={bedroom.src} strength={500}  className='parallax object-cover mt-[50px] lg:h-[70vh] md:h-[70vh] sm:h-[50vh] h-[50vh] w-full flex items-center justify-center '>
      <div className='w-full z-auto h-full relative ' >
        <span className='w-full z-[1] h-full bg-[#00000042] absolute top-0 left-0'></span>
        <div className=' absolute z-[2] w-full h-full flex flex-col items-center justify-center gap-[20px] text-center'>
        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-5xl lg:text-6xl "
                    >
                    NEW BEDROOMS
                    </Typography>
            <Link href={'/bed-room'}>
              <Button variant='outlined' color='white' className='w-[170px] h-[50px] p-[10px]'>
                  SEE OTHERS
              </Button>
            </Link>
        </div>
      </div>
    </Parallax>
  )
}

export default ParallaxComponent