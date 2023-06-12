"use client"

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Image from "next/image";
import {closeSelectSizePopup, setSelectSizePopup} from "../../redux/slices/modals";

const SelectSizePopup = () => {

   const selectSizePopup  = useSelector((state : RootState) => state.modals.selectSizePopup)
   const dispatch = useDispatch()
   const [sizes, setSizes] =useState<string[]>([]);



   return (
       <div className={`flex items-center justify-center  fixed inset-0 transition-all duration-300 ${selectSizePopup.isOpen ? "visible" : "invisible opacity-0"}`}>
          <div className={`absolute inset-0 z-20 bg-[rgba(111,111,111,0.5)] transition-all duration-300 h-full w-full ${selectSizePopup.isOpen ? "visible" : "invisible opacity-0"}`} onClick={() => dispatch(closeSelectSizePopup())}/>
          <div className={`relative   z-30 p-5  bg-white rounded-lg transition-all duration-300 ${selectSizePopup.isOpen ? "translate-y-0" : "-translate-y-32 opacity-0"}`}>
             {selectSizePopup.product === null ?
                 (<div className="h-[420px] w-[790px]"></div>)
                 :
                 (
                     <div className="flex">
                        <div className="h-[420px] w-[420px] mr-5">
                           <Image
                               className="h-[420px]   object-cover pointer-events-none select-none"
                               priority={true}
                               height={420}
                               width={420}
                               // @ts-ignore
                               src={selectSizePopup.product.images[0]}
                               alt="Image"
                           />
                        </div>

                        <div className="flex flex-col ">
                           <div className="flex-grow">
                              <ul className="grid grid-cols-3  gap-x-6 gap-y-2.5 w-[350px]">
                                 {/*@ts-ignore*/}
                                 {selectSizePopup.product.sizes.map((size : {title: string, isAvailable: boolean}, index: number) => (
                                     <li  onClick={() => {
                                        if(!size.isAvailable) return
                                        if(sizes.includes(size.title))
                                           setSizes(sizes.filter((item) => item !== size.title))
                                        else
                                           setSizes([...sizes, size.title])
                                     }}
                                          key={size.title} className={`flex items-center justify-center h-[46px] border-2 ${sizes.includes(size.title) ? "border-black" : " border-gray-300"}  ${!size.isAvailable ? " bg-gray-100 text-gray-300" : "hover:border-black cursor-pointer"}  rounded-lg  transition-all duration-100`}>
                               <span className="select-none">
                                  {size.title}
                               </span>
                                     </li>
                                 ))}
                              </ul>
                           </div>

                           <button className="flex-shrink bg-black text-white rounded-full transition-all duration-200 py-[15px] mt-3 hover:bg-gray-500">Add to Bag</button>
                        </div>

                     </div>

                 )
             }

          </div>
       </div>
   );
};

export default SelectSizePopup;
