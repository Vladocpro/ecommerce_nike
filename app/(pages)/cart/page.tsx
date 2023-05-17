"use client"

import React, {useEffect, useState} from 'react';
import getCurrentUser from "../../actions/getCurrentUser";
import Image from "next/image";
import {Product, User} from "../../types";
import PriceComponent from "../../components/PriceComponent";
import {getFetch} from "../../../lib/fetcher";
const Home =  () => {

   const [currentUser, setCurrentUser] = useState<User | null>(null)
   const [products, setProducts] = useState<Product[] | null>(null)

   useEffect(() => {
      console.log("Hello")
      getFetch("/api/user").then((user : User) => {
         setCurrentUser(user)
         // @ts-ignore
         setProducts(user.cart)
      })
   }, []);

   if(!currentUser || !products) {
      return (
          <div>

          </div>
      )
   }

   return (
       <div className="Container overflow-hidden grid grid-cols-[minmax(300px,_740px)_320px] gap-5 justify-around mt-12">
          <div className="overflow-y-scroll space-y-4">
                <h1 className="text-2xl mb-6">Cart</h1>
                {products.map((product: Product, index: number) => (
                    <div key={product.id + index} className="grid grid-cols-[150px_minmax(130px,_1fr)] text-lg gap-3">
                       <Image src={product.images[0]} width={150} height={150} alt="Image"/>
                       <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                             <span>{product.title}</span>
                             <PriceComponent product={product} showPercent={false} />
                          </div>
                          <span className="text-gray-500 text-base">
                              {product.category}
                          </span>
                          <div className="flex gap-4">
                             <span className="text-gray-500 text-base">
                                 Size: {product.sizes}
                              </span>
                             <span className="text-gray-500 text-base">
                                {/*DropdownList*/}
                                Quantity: 1
                             </span>
                          </div>
                           <div>

                           </div>
                       </div>
                    </div>
                ))}
          </div>
          <aside className="text-lg ">
             <h1 className="text-2xl">Summary</h1>
             <div >
                <div className="flex justify-between mt-4">
                   <span>Subtotal</span>
                   <span>price</span>
                </div>
                <div className="flex justify-between my-4">
                   <span>Estimated Delivery & Handling</span>
                   <span>Free</span>
                </div>
                <hr className="h-0.5 my-3 bg-black"/>
                <div className="flex justify-between">
                   <span>Total</span>
                   <span>price</span>
                </div>
                <hr className="h-0.5 my-3 bg-black"/>
             </div>


             <button  className="w-full mt-4 bg-black text-white rounded-full transition-all duration-200 py-4 hover:bg-gray-500">Checkout</button>

          </aside>
       </div>
   );
};

export default Home;
