"use client"
import React from 'react'
import Lottie from 'lottie-react'
import { useState , useRef , useEffect } from 'react'
import GloryLodingScreen from '@/public/animation_lna5vyfc.json'
import { usePathname } from 'next/navigation'
const LodingScreen = () => {
    const pathname= usePathname()
    const getsAnimation=useRef(null)
  let [loading, setLoading] = useState(true);
  const spinnerLoadingHandler=()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),3000)
}

 
useEffect(()=>{
  window.onload=()=>{
    spinnerLoadingHandler()
  }
  spinnerLoadingHandler()
},[pathname])


  return (
    <div>
       {
      loading ? 
      <div className='w-full fixed h-[100vh] z-[300] top-0 left-0 bg-black flex items-center justify-center '>
    <Lottie  loop={false}  onComplete={()=>{getsAnimation.current?.destroy() }} style={{height:'90vh' , zIndex:'99999999' , backgroundColor:'#000' , width:'100%'}} lottieRef={getsAnimation} animationData={GloryLodingScreen}/>
      </div>
        :
        ''  
    }
    </div>
  )
}

export default LodingScreen



