"use client"

import React, {FC, useState} from 'react';

interface DropDownProps {
   title: string,
   titleStyles?: string,
   children: React.ReactNode
}

const DropDown: FC<DropDownProps> = ({title, titleStyles,  children}) => {

   const [isOpen, setIsOpen] = useState<boolean>(false)

   return (
       <div>
          <div className="flex gap-3 items-center px-1 cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
             <div className={titleStyles}>{title}</div>
             <div className="relative w-8 h-8">
                <hr className={`absolute h-[3px] w-4 rounded-xl bottom-3 left-0.5    ${!isOpen ? "rotate-45" :  "-rotate-45"} transition-all duration-300 bg-black`}/>
                <hr className={`absolute h-[3px] w-4 rounded-xl bottom-3 right-1   ${!isOpen ? "-rotate-45" : "rotate-45"} transition-all duration-300 bg-black`}/>
             </div>
          </div>
          {children}
       </div>
   );
};

export default DropDown;
