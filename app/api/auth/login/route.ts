import bcrypt from "bcrypt";
import client  from "../../../../lib/prismadb";
import {NextResponse} from "next/server";
export async function POST(req : any, res : NextResponse) {
   try {
      const body = await req.json();

      const user = await client.user.findFirst({
         where: {
            email: body.email
         }
      })

      if(!user) return NextResponse.json({error: "No user with this email"})

      const passwordIsValid = await bcrypt.compare(body.password, user!.password);

      if(!passwordIsValid) return NextResponse.json({error: "Incorrect password"})
      res.cookies.set("user-token", "YEAH")

      return  NextResponse.json({message: "Authenticated", user: user})

   } catch (error : any) {
      console.log(error)
      // console.log(error)
   }

}

