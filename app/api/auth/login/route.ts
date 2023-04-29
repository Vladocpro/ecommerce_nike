import bcrypt from "bcrypt";
import client  from "../../../../lib/prismadb";
export async function POST(req : any) {
   try {
      console.log("HEllo")
      const body = await req.json();

      const user = await client.user.findFirst({
         where: {
            email: body.email
         }
      })
      if(!user) return new Error("No user with this email")
      console.log("DOO")
      const password = await bcrypt.compare(body.password, user!.password);

      if(password) return new Response(JSON.stringify(user))

      return new Error("Incorrect password")
   } catch (error : any) {
      console.log(error)
   }

}

export async function GET(req : any) {
   return new Response(JSON.stringify({message: "hello"}))
}
