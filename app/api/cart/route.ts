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
      let initialCart = [...(currentUser.cart || [])];
      const product = body.product


      // let cart: any[]  =  initialCart.map((cartProduct) => {
      //    for (const size of body.sizes) {
      //       if(cartProduct.sizes === size && product.id === cartProduct.id) {
      //          let copyQuantity = cartProduct.quantity;
      //             return {...cartProduct, quantity: copyQuantity++}
      //       }
      //    }
      //    return {...cartProduct}
      // })

      let cart = []
      // if(initialCart.find((item) => item.id === product.id && item.sizes === body.sizes[0])) {
      //    console.log("Yes")
      // }
      for (const size of body.sizes) {
         let pushed = false
         for (const cartProduct of initialCart) {
            if(cartProduct.sizes === size && product.id === cartProduct.id) {
               let copyQuantity = cartProduct.quantity;
               cart.push({...cartProduct, quantity: copyQuantity+=1})
               pushed = true
               continue;
            }
            pushed = true
            cart.push({...cartProduct})
         }
            if(!pushed) cart.push({...product, sizes: size, quantity: 1})
      }

      // console.log(cart)

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
      return NextResponse.json(user.cart)

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
      let cart = [...(currentUser.cart || [])];
      const product = body.product
      cart.filter((item) => (item!.id !== product.id && item!.sizes !== product.sizes))
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
      return NextResponse.json("Success")

   } catch (e) {
      console.log(e)
   }
}
