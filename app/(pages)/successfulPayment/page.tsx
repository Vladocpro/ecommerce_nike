"use client"

import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {getFetch} from "../../../lib/fetcher";
import {Order, User} from "../../types";
import axios from "axios";

const HOME = () => {
   const router = useRouter();
   const [user, setUser] = useState<User | undefined>(undefined)
   const [order, setOrder] = useState<Order | undefined>(undefined)
   const [error, setError] = useState<string | null>(null)

   // console.log()

   useEffect(() => {

      axios.get("/api/order", {params: {sessionId: window.location.search.substring(1)}}).then((data : any) => {
         console.log(data.data)
      }).catch((e : Error) => setError(e.response.data))
   }, []);

   if (error !== null) {
      return (
          <div className="Container flex flex-col gap-2 justify-center items-center h-full w-full">
             <h1 className="text-4xl text-red-600">Error 400</h1>
             <h1 className="text-2xl text-red-500">{error}</h1>
             <button className="mt-3 text-2xl px-10 py-2 border-[2px] border-black hover:bg-black hover:text-white transition-all duration-300" onClick={() => router.push("/")}>Go Home</button>
          </div>
      );
   }

      return (
          <div className="Container">
             Success
          </div>
      );

};

export default HOME;
