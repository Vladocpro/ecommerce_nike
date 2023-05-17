"use client"

import React, {useState} from 'react';
import { useCallback, useMemo } from "react";
import {User} from "../types";
import {Product} from "@prisma/client";
import {useDispatch} from "react-redux";
import {setToastPopup, ToastPositions, ToastType} from "../redux/slices/modals";



interface IUseSize {
   size: string;
}
const useChosenSizes = ({ size }: IUseSize) => {
   const [sizes, setSizes] = useState<string[]>([])
   const [sizeIsActive, setSizeIsActive] = useState<boolean>(false)

   const toggleAddSize = () => {
      if (sizes.includes(size)) {
         setSizes(sizes.filter((item) => item !== size))
         setSizeIsActive(false)
      }
      else {
         setSizes([...sizes, size])
         setSizeIsActive(true)
      }
   };


   return {
      sizeIsActive,
      toggleAddSize,
   }
};

export default useChosenSizes;





