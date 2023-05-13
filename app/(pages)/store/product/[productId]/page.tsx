"use client"

import React, {useEffect, useState} from 'react';
import {Product} from "@prisma/client";
import {getProductById} from "../../../../actions/getProducts";
import ProductComponent from "../../../../components/store/ProductComponent";
import {useParams} from "next/navigation";
import {getFetch, postFetch} from "../../../../../lib/fetcher";
import Image from "next/image";



const Home =  () => {
   const params = useParams()
   const [product, setProduct] = useState<Product | null>(null)

   useEffect(() => {
        getFetch("/api/products/" + params.productId).then((data) => setProduct(data))
   }, []);

   if(product === null)  {
      return (
          <div></div>
      )
   }



   return (
       <div className="flex container justify-between my-5">
            <div className="flex gap-4">
                  <div className="flex flex-col gap-2 w-[100px]">
                     {product?.images.map((image: string) => (
                         <Image src={image} key={image} width={100} height={100} alt="" className="object-cover rounded-sm"/>
                     ))}
                  </div>
               <div className="max-w-full shrink">
                  <Image src={product?.images[0]} key={product?.images[0] + "Main"} width={720} height={720} alt="" className="object-cover rounded-sm w-full max-h-[620px] max-w-[720px]"/>
               </div>
            </div>
             <div className="ml-5">
                <div className="flex flex-col text-lg font-medium" >
                   <span className="text-2xl">{product?.title}</span>
                   <span className="text-gray-500 font-normal">{product?.category}</span>
                   <span className="mt-[8px]">£{product?.price}</span>
                </div>
                <div className="text-lg font-semibold mt-8 lg:w-[440px]">
                   <div className="flex justify-between">
                      <span>Select Size</span>
                      <span className="mr-1.5 text-gray-500 font-medium cursor-pointer">Size Guide</span>
                   </div>
                   <ul className="grid grid-cols-3 gap-x-6 gap-y-2.5 mt-3 mb-6 w-full">
                      {product.sizes.map((size : string) => (
                          <li className="flex items-center justify-center h-[46px] border-2 border-gray-300 rounded-lg hover:border-black transition-all duration-100 cursor-pointer">
                             <span className="">
                                {size}
                             </span>
                          </li>

                      ))}
                   </ul>
                   <div className="flex flex-col gap-y-2 w-full">
                      <button className="bg-black text-white rounded-full py-[18px]">Add to Bag</button>
                      <button className="border-2 border-gray-300 hover:border-black transition-all duration-100 rounded-full py-4">Add to Favorite</button>
                   </div>
                </div>
             </div>
       </div>
   );
};

export default Home;
