import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export async function main () {
   try {
      // const order = await prisma.order.create({
      //    data: {
      //       productId: ob
      //    }
      // });

      // const product = await prisma.product.create({
      //    data: {
      //       title: "Air Force 1",
      //       description: "Description",
      //       sizes: ["XS","S","M","L","XL"],
      //       sale: 0,
      //       releaseDate:  new Date(),
      //       category: "Trousers"
      //    }
      // });

      // const product = await prisma.product.findFirst({where: {id: "64402eaf1b5d4c3a97588be0"}})
      // const user = await prisma.user.findFirst({where: {id: "64400ce7412b78278979f942"}});
      // await prisma.user.update({
      //    where: {
      //       id: "64400ce7412b78278979f942"
      //    },
      //    data: {
      //       savedProducts:  [...user.savedProducts, product]
      //    }
      //
      // })
      const password = await bcrypt.hash("Hello1", 10);
      const user = await prisma.user.create({
         data: {
            email: "da@gmail.com",
            password
         }
      })

      // const order = await prisma.order.create({
      //
      // })
      // console.log(product)

   } catch (e) {
      console.log(e)
   }


}

// main().catch(e => {console.error(e)}).finally(async () => {await prisma.$disconnect()})
