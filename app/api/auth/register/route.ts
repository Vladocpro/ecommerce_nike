import bcrypt from "bcrypt";
import client  from "../../../../lib/prismadb";
export async function POST(req : any) {
   try {
      const body = await req.json();
      const password = await bcrypt.hash(body.password, 10);
      await client.user.create({
         data: {
            email: body.email,
            password
         }
      })

      return new Response(JSON.stringify({message: "User has been created"}))
   } catch (error : any) {
      console.log("Chto eto")
      if(error.meta.target === "email_1") console.log("The email is already taken")
   }

}
