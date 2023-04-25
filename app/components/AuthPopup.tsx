"use client"

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setAuthPopup} from "../redux/slices/global";
import {state} from "sucrase/dist/types/parser/traverser/base";

const AuthPopup = () => {

   const authPopup = useSelector((state : RootState) => state.global.authPopup)
   const dispatch = useDispatch();
   const [isRegister, setIsRegister] = useState<boolean>(false)

   if(!authPopup) {
      return null
   }
   return (
       <div className="flex items-center justify-center absolute inset-0">
          <div className={`absolute inset-0  bg-[rgba(111,111,111,0.2)] transition-all duration-300 h-full w-full ${authPopup ? "visible" : "invisible opacity-0"}`} onClick={() => dispatch(setAuthPopup(false))}/>
          <div className="relative  w-80 py-5 flex flex-col bg-white rounded-lg">
             <span className="absolute font-semibold text-xl top-3 right-3 cursor-pointer">X</span>
             <span className="mx-auto mt-2 text-lg font-semibold">{!isRegister ? "Login" : "Sign up"}</span>
             <input placeholder="Email" type="text"        className="mt-6 mx-5 p-2 h-12  outline-black rounded-md border-2 border-gray-300"/>
             <input placeholder="Password" type="password" className="mt-3 mx-5 p-2 h-12  outline-black rounded-md border-2 border-gray-300"/>
             {isRegister && <input placeholder="Repeat Password" type="password" className="mt-3 mx-5 p-2 h-12  outline-black rounded-md border-2 border-gray-300"/>}
             <button className="py-[5px] mx-5 mt-5  rounded-lg bg-black text-white ">
                {!isRegister ? "Log in" : "Sign up"}
             </button>
             <button className="py-[3px] mx-5 mt-4 px-4 border-2 border-black mx-auto rounded-lg hover:bg-black hover:text-white transition-all duration-300" onClick={() => setIsRegister(!isRegister)}>
                {!isRegister ? "Create Account" : "Back to login"}
             </button>

          </div>
       </div>

   )
};

export default AuthPopup;
