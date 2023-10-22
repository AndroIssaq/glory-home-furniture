
import React from 'react'

const AboutUs = () => {
  return (
    <div className='lg:h-[70vh] md:h-[70vh] sm:h-auto h-auto p-[20px]'>
        <div className="container h-[100%]">
            <div className="content flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse h-[100%]  items-start justify-center gap-[40px]">
                <div className="des flex-1 flex items-start justify-start flex-col">
                    <h1 className='  text-2xl md:text-3xl lg:text-4xl'>WHO WE ARE</h1>
                    <span className=' whospan tracking-wide text-md md:text-md lg:text-md text-[#2f2f2f]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error et voluptatum dignissimos veritatis enim provident, accusantium quasi eum impedit non. Asperiores nam aperiam nesciunt iure eum, obcaecati error quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error et voluptatum dignissimos veritatis enim provident, accusantium quasi eum impedit non. Asperiores nam aperiam nesciunt iure eum, obcaecati error quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error et voluptatum dignissimos veritatis enim provident, accusantium quasi eum impedit non. Asperiores nam aperiam nesciunt iure eum, obcaecati error quas?
                    </span>
                </div>
                <div className="video flex-1 lg:h-[100%] md:h-[100%] w-full ">
                <video className="h-full w-full rounded-lg" controls>
                    <source src="/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs