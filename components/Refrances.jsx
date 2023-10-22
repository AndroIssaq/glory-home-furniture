
import Image from 'next/image'
import React from 'react'
import Lounges from '@/public/Lounges.jpg'
import Tables from '@/public/reception.jpg'
import Childrens from '@/public/kids-room.jpeg'
import Link from 'next/link'
const Refrances = () => {
  return (
    <section className='w-full lg:h-[50vh]'>
        <div className="content h-full w-full grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  grid-cols-1">
            <Link href={'/lounges'}>
                <div className="refrence-card overflow-hidden h-full w-full relative ">
                    <Image src={Lounges} width={1000} height={ 1000} alt='' className='refrence-card-image w-full h-full' />
                    <div className='refrence-dev  text-2xl md:text-4xl lg:text-4xl font-bold text-center w-full flex items-center justify-center h-full bg-[#0000002d] absolute top-0 left-0'>
                        <h1 > More Lounges</h1>
                    </div>
                </div>
                
            </Link>
            <Link href={'/tables'}>
                <div className="refrence-card overflow-hidden h-full w-full relative ">
                    <Image src={Tables} width={1000} height={ 1000} alt='' className='refrence-card-image w-full h-full' />
                    <div className='refrence-dev  text-2xl md:text-4xl lg:text-4xl font-bold text-center w-full flex items-center justify-center h-full bg-[#0000002d] absolute top-0 left-0'>
                        <h1 >More Tables</h1>
                    </div>
                </div>
            </Link>
            <Link href={'/children-room'}>
                <div className="refrence-card overflow-hidden h-full w-full relative ">
                    <Image src={Childrens} width={1000} height={ 1000} alt='' className='refrence-card-image w-full h-full' />
                    <div className='refrence-dev  text-2xl md:text-4xl lg:text-4xl font-bold text-center w-full flex items-center justify-center h-full bg-[#0000002d] absolute top-0 left-0'>
                        <h1 >More Of Children Room</h1>
                    </div>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Refrances