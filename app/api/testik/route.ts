import {Product} from "@prisma/client";
import prisma from "../../../lib/prismadb";

export async function GET() {
   try {

      const products: Product[] = await prisma.product.findMany();
      const changedProducts = products.map(async (changedProduct) => {
         const changedSizes = changedProduct.sizes.map((changedSize) => {
            return {title: changedSize.title, isAvailable: !(changedSize.title === "3XL" || changedSize.title === "UK 12")}
         })
         changedProduct.sizes = changedSizes;
         await prisma.product.update({
            where: {
               id: changedProduct.id
            },
            data: {
               sizes: changedSizes
            }
         })
         return changedProduct
      })



      return changedProducts;
   } catch (error: any) {
      throw new Error(error);
   }
}
