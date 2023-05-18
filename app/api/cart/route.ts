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
   const product = body.product
   try {
      let initialCart = [...(currentUser.cart || [])];
      let sizes = body.sizes.map((size : string) => {
         return {title: size, isPushed: false}
      })
      let cart = [];
      for (let size of sizes) {
         for (let  i= 0; i < initialCart.length; i++) {
            if(initialCart[i].size === size.title && !size.isPushed && product.id === initialCart[i].id) {
               let copyQuantity = initialCart[i].quantity;
               cart.push({...initialCart[i], quantity: copyQuantity+=1})
               size.isPushed = true
               initialCart.splice(i, 1);
               i--;
               break;
            }
         }
      }

      if(initialCart.length > 0) {
         for (const item of initialCart) {
            cart.push({...item})
         }
      }

      for (const size of sizes) {
         if(!size.isPushed) {
            cart.push({...product, quantity: 1, size: size.title})
         }
      }

      const user = await prisma.user.update({
         where: {
            id: currentUser.id
         },
         data: {
            cart: {
               set: cart
            }
         }
      });
      return NextResponse.json(currentUser.cart)

   } catch (e) {
      console.log(e)
   }
}

export async function PUT(req: Request) {

   // Delete

   const body = await req.json();
   const currentUser  = await getCurrentUser();
   if (!currentUser) {
      return NextResponse.error();
   }

   try {
      await prisma.user.update({
         where: {
            id: currentUser.id
         },
         data: {
            cart: {
               set: body.products
            }
         }
      });
      return NextResponse.json("Success")

   } catch (e) {
      console.log(e)
   }
}
