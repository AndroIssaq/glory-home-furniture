import React from 'react'
import { createClient } from 'contentful';
import Image from 'next/image';
import SingleProduct from '@/components/SingleProduct';
import RelatedProducts from '@/components/RelatedProducts';

export async function generateStaticParams() {
  const client = createClient({
    space: 'wqjm0ul81wfi',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '1HOop-wSR5WmMg-bEn7Kythm5IZVtZijsDiW5qjAbFk'
  })
  
  const res = await client.getEntries({ content_type: 'bedRooms' });
return  res.items.map((item) =>({
  id:Array.from([item.sys.id])
}))

}
const getSingleProduct=async ({id})=>{
  try {
    console.log('id:',id);
    const client = createClient({
      space: 'wqjm0ul81wfi',
      environment: 'master', // defaults to 'master' if not set
      accessToken: '1HOop-wSR5WmMg-bEn7Kythm5IZVtZijsDiW5qjAbFk'
    })
    const response=await client.getEntries({content_type:'bedRooms','sys.id':id})
    return response.items
  } catch (error) {
    console.log(error)
  }
 
}

const getRelatedProducts=async ({id})=>{
  try {
    const client = createClient({
      space: 'wqjm0ul81wfi',
      environment: 'master', // defaults to 'master' if not set
      accessToken: '1HOop-wSR5WmMg-bEn7Kythm5IZVtZijsDiW5qjAbFk'
    })
    const response=await client.getEntries({content_type:'bedRooms'})
    const relatedItems=response.items.filter((item,index)=>item.sys.id!==id)
    console.log(relatedItems);
    return relatedItems
  } catch (error) {
    console.log(error)
  }
 
}
const BedRooms = async({params}) => {
  const id=params.id[0]
const data= await getSingleProduct({id})
const relatedProducts=await getRelatedProducts({id})
  return (
    <>
    <SingleProduct data={data} />
    <RelatedProducts relatedProducts={relatedProducts} page={'bed-room'}/>
  </>
  )
}

export default BedRooms
