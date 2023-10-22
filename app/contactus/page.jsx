"use client"
import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  ListItem
} from "@material-tailwind/react";
const ContactUs = () => {
  return (  
    <section className=' p-[20px] '>
    <div className="container  ">
        <div className="content w-full flex lg:flex-row md:flex-row sm:flex-col flex-col h-[100%]  items-start justify-center gap-[40px]">
            <div className="des p-[30px] lg:border-black lg:border-r-2 md:border-black md:border-r-2 sm:border-black sm:border-b-2 md:border-b-0 border-black border-b-2 lg:border-b-0 flex-[3] flex items-start justify-start flex-col">
                <h1 className='  text-2xl md:text-3xl lg:text-4xl'>Send Us A Message</h1>
                <Card color="transparent" shadow={false} className='w-full'>
      <form className="mt-8 mb-2 w-full  ">
        <div className="mb-4 w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" type='email' label="Email" />
          <Input type="text" size="lg" label="Phone Numper " />
          <Input type="text" size="lg" label="Company" />
        </div>
        <div className="w-full">
      <Textarea label="Message" />
    </div>
        <Button className="mt-6" fullWidth>
          Ask a Quation
        </Button>
      </form>
    </Card>
            </div>
            <div className="contact   p-[30px] flex-1 lg:h-[100%] md:h-[100%] ">
              <h1 className='  text-2xl md:text-3xl lg:text-4xl'>Contact Us</h1>  
              <div className='flex items-start justify-start flex-col'>
                <div className="flex items-center gap-2 py-2 pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  01222222222
                </div>
                <div className="flex items-center gap-2 py-2 pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  +20204458
                </div>
                <div className="flex items-center gap-2 py-2 pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  73 abd elhamed - cairo
                </div>
                <div className="flex items-center gap-2 py-2 pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  androisshaq@gmail.com
                </div>
              </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactUs