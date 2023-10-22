"use client"
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

const WhoWeAre = () => {
  return (
    <div className='w-full p-[20px] mt-[100px]'>
        <div className="container flex items-center justify-center">
            <div className="content lg:w-[50%] text-center gap-[20px] flex items-center justify-center flex-col">
                <h1 className='  text-3xl md:text-5xl lg:text-6xl'>WHO WE ARE</h1>
                <span className=' tracking-wide text-md md:text-2xl lg:text-2xl text-[#2f2f2f]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error et voluptatum dignissimos veritatis enim provident, accusantium quasi eum impedit non. Asperiores nam aperiam nesciunt iure eum, obcaecati error quas?
                </span>
                <Link href={'/aboutus'}>
                    <Button variant="gradient">
                        Know More
                    </Button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default WhoWeAre