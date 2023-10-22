"use client"
import React from 'react'
import {Card,CardHeader,CardBody,CardFooter,Typography,Button,
  } from "@material-tailwind/react";
  import { useState,useEffect } from "react";
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const client = createClient({
      space: 'wqjm0ul81wfi',
      environment: 'master', // defaults to 'master' if not set
      accessToken: '1HOop-wSR5WmMg-bEn7Kythm5IZVtZijsDiW5qjAbFk'
    })
    const getData = async()=>{
      try {
          const response=await client.getEntries({content_type:'featuredProducts'})
          setProducts(response.items)
      } catch (error) {
          console.log(error);
      }
    }
    useEffect(() => {
      getData()
  }, [])

  return (

    <div className='w-full p-[20px] mt-[100px]'>
        <div className="container flex items-center justify-center flex-col">
            <div className="content lg:w-[50%] text-center gap-[20px] flex items-center justify-center flex-col">
                <h1 className='  text-3xl md:text-5xl lg:text-6xl'>Featured Product</h1>
            </div>
            <div className='cards items-center grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1  mt-[50px] gap-[20px]'>
                {
                    products.map((product,index)=>{
                        return(
                          <>
                          <Link href={`/featured-products/${product?.sys?.id}`}>
                              <Card key={index} className='lg:h-[50vh]'>
                                <CardHeader shadow={false} floated={false} className="h-auto">
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
                                    <Button
                                    ripple={false}
                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                  >
                                    Show More
                                  </Button>
                                  </div>
                                </CardBody>
                              </Card>
                            </Link>
                          </>
                        )
                    })
                }
            
            </div>
        </div>
    </div>
    
  )
}

export default FeaturedProducts