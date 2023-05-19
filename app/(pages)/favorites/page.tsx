"use client"

import React, {useEffect, useState} from 'react';
import getCurrentUser from "../../actions/getCurrentUser";
import ProductLayout from "../../components/store/ProductLayout";
import {Product} from "../../types";
import {getFetch} from "../../../lib/fetcher";
import Link from "next/link";
import Image from "next/image";
import PriceComponent from "../../components/PriceComponent";

const HOME =  () => {

   const [products, setProducts] = useState<Product[]>([])

   useEffect(() => {
         getFetch("/api/favorites").then((products : Product[]) => setProducts(products))
   }, []);

   if (products.length === 0 ){
      return (
          <div></div>
      )
   }


   return (
       <div className="Container grid grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-5 text-black mb-10">
          {products.map((product : Product) => (
              <div className="flex flex-col">
                 <Link key={product.id} href={`/store/product/${product.id}`} className="w-full">
                    <Image
                        className="w-full  object-cover pointer-events-none select-none"
                        // fill
                        priority={true}
                        height={550}
                        width={520}
                        src={product.images[0]}
                        alt="Image"
                    />
                 </Link>
                 <div className="flex flex-col text-lg mobile:text-base  font-medium" >
                    <Link href={`/store/product/${product.id}`}>{product.title}</Link>
                    <span className="text-gray-500 font-normal leading-4">{product.category}</span>
                    <span className="mt-2">
                    <PriceComponent product={product} showPercent={false} mobileHidePercent={true} />
                    </span>
                    <div className="mt-2"> <button className="border-2 px-3 py-1.5 mobile:text-base mobile:px-2 mobile:py-1 rounded-2xl hover:border-black transition-all duration-150">Select Size</button> </div>
                 </div>
              </div>


          ))}
       </div>
   );
};

export default HOME;
