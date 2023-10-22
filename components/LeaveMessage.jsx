"use client"
import React from 'react'
  import {
    Input,
    Checkbox,
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    
  } from "@material-tailwind/react";
   
import Image from 'next/image';
   import img from "@/public/leaveMessage.avif"
const LeaveMessage = () => {
  return (
<section className=' w-full bg-blue-gray-100 h-[70vh]   mt-[50px]'>
    <div className="container flex items-center justify-center h-full">
    <Card className="  w-auto max-w-[48rem] flex-row-reverse">
      <CardHeader
        shadow={false}
        floated={false}
        className=" flex-1 m-0 w-2/5 shrink-0 rounded-l-none"
      >
        <Image
          src={img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className='flex-1'>
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Leave Us A Message
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter Your Details And We Will Call You.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" type='text' label="Name" />
          <Input size="lg" type='email' label="Email" />
          <Input type="phone" size="lg" label="Phone" />
        </div>
        <Button className="mt-6" fullWidth>
          Send
        </Button>
      </form>
    </Card>
      </CardBody>
    </Card>
    </div>
</section>
  )
}

export default LeaveMessage