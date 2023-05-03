// import {main} from "../lib/create";

import AuthPopup from "./components/AuthPopup";
import Link from "next/link";

export default async function Home() {
      // const makeApiCall = async () => {
      //    await fetch(new URL('/api/auth'), {method: 'POST', body: JSON.stringify({hello: "world"})});
      // }

  return (
    <div className="text-black">
         <div className="flex flex-col gap-6 items-center mt-6">
            <h1 className="text-5xl font-bold italic uppercase">own the floor</h1>
            <p className="text-xl">In dance, your moves speak to who you really are. What will you bring?</p>
            <Link href="/store" className="text-lg bg-black font-medium text-white py-2 px-5 rounded-2xl">Shop Now</Link>
         </div>
       <div className=" mt-8">
          <img src="../HomePage/HomeDance.webp" className="aspect-[11/4]  "/>
       </div>
    </div>
  )
}
