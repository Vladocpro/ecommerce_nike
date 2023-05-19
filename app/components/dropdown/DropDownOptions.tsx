"use client"

import React, {FC, useState} from 'react';
import DropDown from "./DropDown";

interface DropDownOptionsProps {
   title: string,
   titleStyles?: string,
   svgStyles?: string,
   svgBox?: string,
   isExpanded: boolean,
   options: any[]
}

const DropDownOptions : FC<DropDownOptionsProps> = ({title, titleStyles, svgStyles, svgBox, isExpanded,  options}) => {

   const [isOpen, setIsOpen] = useState<boolean>(isExpanded)

   return (
       <DropDown isOpen={isOpen} setIsOpen={setIsOpen} title={title} titleStyles={titleStyles} svgBox={svgBox} containerStyles={`flex flex-col relative gap-[1px] min-h-max min-w-max px-1 py-0 duration-100 ease-out ${!isOpen && "h-0"}`}>
          {options.map((item, index) => (
              <div className="flex  items-center gap-2.5 bg-white px-3 py-2" key={index}>
                        <input type="checkbox" id={`${title}Checkbox${index}`}
                               className={`peer relative left-0 h-7 w-7 shrink-0 appearance-none rounded-md border border-gray-400 checked:border-black  outline-none after:absolute after:left-0
                        after:top-0 after:h-full after:w-full
                        after:bg-[length:53px] after:bg-center after:bg-no-repeat after:content-['']
                        checked:bg-black
                        ${!isOpen && "border-0 checked:bg-transparent"}
                        after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]`}
                        />
                        <label htmlFor={`${title}Checkbox${index}`} className={`inline-block select-none w-full cursor-pointer  font-normal text-lg text-black ${!isOpen && "text-white"} peer-hover:text-gray-500 {/*peer-checked:text-pink-500*/}`}>
                           {item}
                        </label>
                     </div>
          ))}
       </DropDown>
   );
};

export default DropDownOptions;