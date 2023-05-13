"use client"

import React from 'react';
import { CldImage } from 'next-cloudinary';
import Image from "next/image";
import {postFetch} from "../../../lib/fetcher";

const Sales =  () => {
   return (
       <div>
          {/*<img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-GjGXSP.png" alt=""/>*/}
          <div className="flex gap-4">
             {/*<div className="w-[300px] h-[300px]">*/}
                <img
                    src="https://res.cloudinary.com/dks9uqke3/image/upload/v1683754627/ecommerceNike/Air%20Force%201%2007/air-force-1-07-shoe-QxRXZV_ieww22.jpg"
                    height={300}
                    width={300}
                    className="w-[92px] h-[92px]  object-cover" alt=""/>
             <button onClick={() => postFetch("/api/product", {})}>Click me</button>
             {/*</div>*/}
             {/*<CldImage*/}
             {/*    deliveryType="fetch"*/}
             {/*    height={300}*/}
             {/*    width={300}*/}
             {/*    quality={100}*/}
             {/*    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-GjGXSP.png"*/}
             {/*    sizes="50vw"*/}
             {/*    alt="Shoe"*/}
             {/*     className="ml-2"*/}
             {/*/>*/}
             {/*<div className="w-[300px] h-[300px]">*/}
                <Image
                    className="w-[92px] h-[92px]  object-cover"
                    // fill
                    priority={true}
                    height={300}
                    width={300}
                    src="https://res.cloudinary.com/dks9uqke3/image/upload/v1683754627/ecommerceNike/Air%20Force%201%2007/air-force-1-07-shoe-QxRXZV_ieww22.jpg"
                    alt="Description of my image"
                />
             {/*</div>*/}
          </div>

       </div>
   );
};

export default Sales;
