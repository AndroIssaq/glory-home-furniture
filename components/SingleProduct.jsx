import React from 'react'
import Image from 'next/image';
import DescriptionAccordion from './DescriptionAccordion';
import LeaveMessage from './LeaveMessage';
const SingleProduct = ({data}) => {
  return (
    <section className='w-full'>
    <div className="content w-full h-[100vh] flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse items-center justify-center ">
      <div className="img lg:flex-1 md:flex-1 sm:flex-[3]  h-full overflow-hidden">
             <Image
              width={1000}
              height={1000}
              src={'http:'+ data[0]?.fields?.img?.fields?.file?.url}
              alt="card-image"
              className="h-full w-full object-cover "
            />                
      </div>
      <div className="name h-full flex-1 bg-black flex items-center justify-center w-full ">
             <h1 className='text-[35px] text-white'>{data[0].fields.title}</h1>             
      </div>
    </div>
    <div className='w-full flex items-center justify-center mt-[25px]'>
      <div className=" flex items-center justify-center h-[100vh] w-[70%] overflow-hidden ">
      <Image
                width={1000}
                height={1000}
                src={'http:'+data[0]?.fields?.allImages[0]?.fields?.file?.url}
                alt="card-image"
                className="h-full w-full object-cover "
              />    
      </div>
    </div>

    <div className='w-full flex items-center justify-center mt-[25px]'>
      <div className=" grid grid-cols-2 gap-[10px] rounded-md overflow-hidden ">
        {
          data[0]?.fields?.allImages?.map((img,index)=>{
            return(
              <Image key={index}
                width={1000}
                height={1000}
                src={'http:'+img?.fields?.file?.url}
                alt="card-image"
                className="h-full w-full object-cover rounded-md "
              />  
            )
          })
        }
        
      </div>
    </div>
    <div className='mt-[25px] w-full flex items-center justify-center mb-[25px] '>
        <DescriptionAccordion des={data[0]?.fields?.description}/>
    </div>
    <LeaveMessage/>
    
  </section>  
  )
}

export default SingleProduct