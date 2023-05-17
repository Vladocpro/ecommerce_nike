import { NextResponse } from "next/server";
import getCurrentUser from "../../actions/getCurrentUser";
import prisma from "../../../lib/prismadb";
import {Product, User} from "@prisma/client";


export async function PATCH(req: Request) {

   const body = await req.json();

   const currentUser  = await getCurrentUser();
   if (!currentUser) {
      return NextResponse.error();
   }
   try {
      let favorites = [...(currentUser.favorites || [])];
      const product = body.product

      for (const size of body.sizes) {
         favorites.push({...product, sizes: size})
      }
      const user = await prisma.user.update({
         where: {
            id: currentUser.id
         },
         data: {
            favorites: {
               set: favorites
            }
         }
      });
   return NextResponse.json("Success")
   } catch (e) {
      console.log(e)
   }
}

export async function DELETE(req: Request) {

   const body = await req.json();

   const currentUser  = await getCurrentUser();
   if (!currentUser) {
      return NextResponse.error();
   }
   try {
      let favorites = [...(currentUser.favorites || [])];
      const product = body.product
      favorites.filter((item) => (item!.id !== product.id && item!.sizes !== product.sizes))
      const user = await prisma.user.update({
         where: {
            id: currentUser.id
         },
         data: {
            favorites: {
               set: favorites
            }
         }
      });
      return NextResponse.json("Success")
   } catch (e) {
      console.log(e)
   }
}
