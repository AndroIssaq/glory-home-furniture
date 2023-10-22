"use client"
import React from 'react'
import { Carousel ,Typography, Button} from "@material-tailwind/react";
import ReactImg from '@/public/pexels-micheilecom-__-visual-stories-11650184.jpg'
import Image from 'next/image'
import { useRef, useState,useEffect } from "react";
import { createClient } from 'contentful';
import Link from 'next/link';
export const HeroSection = () => {

  const [swipers, setSwipers] = useState([])
    const client = createClient({
      space: 'wqjm0ul81wfi',
      environment: 'master', // defaults to 'master' if not set
      accessToken: '1HOop-wSR5WmMg-bEn7Kythm5IZVtZijsDiW5qjAbFk'
    })
    const getData = async()=>{
      try {
          const response=await client.getEntries({content_type:'heroSectionSlider'})
          setSwipers(response.items)
      } catch (error) {
          console.log(error);
      }
    }
    useEffect(() => {
      getData()
  }, [])

  return (
    <Carousel
      transition={{ duration: 2 , type:'spring' }}
      className=" w-full h-[90vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {
        swipers.map((swiper,index)=>{
          return(
            <div key={index} className="relative h-full w-full">
            <Image priority src={'http:'+swiper?.fields?.img?.fields?.file?.url } alt="image 1"width={10000}height={10000}className="h-full w-full object-cover"
        />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#00000036]">
                <div className="lg:w-[30%] md:w-[40] text-center sm:w-[30%] w-[80%]">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-5xl lg:text-6xl "
                  >
                   {swiper?.fields?.title}
                  </Typography>
                  <div className="flex justify-center items-center gap-2">
                    <Link href={swiper?.fields?.url}>
                      <Button size="lg" variant="outlined"  color='white'>
                        Discover More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </Carousel>
  )
}
