"use client"

import React, {FC, useState} from 'react';
import DropDown from "./DropDown";

interface DropDownSelectProps {
   title: string,
   titleStyles?: string,
   containerStyles? :string,
   itemStyles? :string,
   constTitle?: string,
   svgStyles?: string,
   itemClick?: (quantity : number) => void,
   changeTittle: boolean,
   isExpanded: boolean,
   options: any[]
}


const DropDownSelect: FC<DropDownSelectProps> = ({title, titleStyles, changeTittle, itemClick, svgStyles, itemStyles, constTitle,containerStyles, isExpanded,  options}) => {

   const [dropDownTitle, setDropDownTitle] = useState<string>(title)
   const [isOpen, setIsOpen] = useState<boolean>(isExpanded)

   return (
       <DropDown isOpen={isOpen} setIsOpen={setIsOpen} title={changeTittle ? dropDownTitle : title} svgStyles={svgStyles} titleStyles={titleStyles} containerStyles={containerStyles}>
          {options.map((item, index) => (
              <div key={index} onClick={() => {
                 setDropDownTitle(constTitle !== undefined ? constTitle + item : item)
                 setIsOpen(!isOpen)
                 if (itemClick) {
                    itemClick(Number(item))
                 }
              }}
                   className={` cursor-pointer hover:text-gray-400 ${itemStyles} rounded-md`}
              >
                 {item}
              </div>
          ))}

       </DropDown>
   );
};

export default DropDownSelect;
