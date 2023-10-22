"use client"
import { Carousel, IconButton } from "@material-tailwind/react";
import {Card,CardHeader,CardBody,CardFooter,Typography,Button,
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

export default function RelatedProducts({relatedProducts,page}) {
  return (
<>

<div className="content lg:w-[80%] mx-auto gap-[20px] flex lg:items-start lg:justify-start md:items-start md:justify-start sm:items-center sm:justify-center items-center justify-center mt-[50px] ">
<h1 className='  text-xl md:text-3xl lg:text-3xl'>Related Products</h1>
</div>  
    <div className="w-[80%] mx-auto  grid lg:grid-cols-3 mb-[50px] gap-[30px]">
        
    {
        relatedProducts.map((product,index)=>{
            return(
                
                <Card key={index}>
    <CardHeader shadow={false} floated={false} className="h-[30vh]">
        <div className='product w-full overflow-hidden '> <Image
    width={1000}
    height={1000}
        src={'http:'+product?.fields?.img?.fields.file.url}
        alt="card-image"
        className="h-full w-full object-cover hover:scale-[1.3] transition duration-300"
    /></div>

    </CardHeader>
    <CardBody>
    <div className=" flex items-center justify-between">
        <Typography color="black" className="font-bold text-[20px]">
        {product?.fields?.title}
        </Typography>
        <Link key={index}  href={`/${page}/${product?.sys?.id}`}>
        <Button
        ripple={false}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
    >
        Show More
    </Button>
    </Link>
    </div>
    </CardBody>
    </Card>
            )
        })
    }
    
    </div>
    
    </>
  );
}

