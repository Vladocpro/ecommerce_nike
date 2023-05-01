"use client"

import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {closeToastPopup} from "../redux/slices/modals";


function Toast() {
   const toast = useSelector((state : RootState) => state.modals.toastPopup)
   const dispatch = useDispatch()

   useEffect(() => {
     if(toast.visible) {
        const timer = setTimeout(() => dispatch(closeToastPopup()), toast.duration);
        return () => clearTimeout(timer);
     }
   }, [toast.visible]);


   return (
       <div
           className={`fixed cursor-default z-5 ${toast.position} 
           p-4 ${toast.type} text-white rounded-md transition-all duration-300 ${toast.visible ? "visible opacity-100 translate-y-0" : "-translate-y-8 opacity-0 invisible"}`}
           onClick={() => dispatch(closeToastPopup())}
       >
             <p className="inline-block">{toast.message}</p>
       </div>
   );
}
export default Toast
