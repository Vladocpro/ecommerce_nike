"use client"

import React, {FC} from 'react';
import {Product} from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import PriceComponent from "../PriceComponent";

interface ProductLayoutProps {
   products: Product[]
}

const ProductLayout: FC<ProductLayoutProps> = ({products}) => {

   const [priceFilter, setPriceFilter] = React.useState<{title: string, options : [{optionTitle: string, optionActive: boolean}]}>({title: "On Sale", options : [{optionTitle: "0 50", optionActive: true},{optionTitle: "50 100", optionActive: false},{optionTitle: "100 200", optionActive: false}]})
   // const [priceFilter, setPriceFilter] = React.useState<{title: string, options : [{optionTitle: string, optionActive: boolean}]}>({title: "On Sale", filterType: "Diapazon | Boolean", options : [{optionTitle: "Under £50", optionValue: "0 50, optionActive: true},{optionTitle: "50 100", optionActive: false},{optionTitle: "100 200", optionActive: false}]})


   const filteringOfAll = () => {
      //bla-bla-bla
      const activeOptions = priceFilter.options.filter(option => option.optionActive)

      const result = filterByPrice(products, activeOptions)
      console.log(result)
   }

   const filterByPrice = (products: { price: number }[], options: { optionTitle: string }[]) => {
      // debugger
      return options.reduce((filteredProducts: any, option) => {
         const [min, max] = option.optionTitle.split(" ").map(Number);

         let filteredByPrice;
         if (min > 0 && max === 0) {
            filteredByPrice = products.filter(product => product.price > min);
         } else if (min === 0 && max > 0) {
            filteredByPrice = products.filter(product => product.price < max);
         } else {
            filteredByPrice = products.filter(product => product.price >= min && product.price <= max);
         }
         // console.log(filteredProducts)
         // console.log(filteredByPrice)
         return [...filteredProducts, ...filteredByPrice];
      }, []);
   };



   return (
       <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-5 text-black mb-10">
          {products.map((product : Product) => (
              <Link key={product.id} href={`/store/product/${product.id}`} className="w-full">
                 <Image
                     className="w-full  object-cover pointer-events-none select-none"
                     // fill
                     priority={true}
                     height={620}
                     width={600}
                     src={product.images[0]}
                     alt="Image"
                 />
                 <div className="flex flex-col text-lg font-medium cursor-pointer" >
                    <span>{product.title}</span>
                    <span className="text-gray-500 font-normal leading-4">{product.category}</span>
                    <span className="mt-2">
                    <PriceComponent product={product} showPercent={true} mobileHidePercent={true} />
                    </span>
                 </div>
              </Link>
          ))}
       </div>
   );
};

export default ProductLayout;
