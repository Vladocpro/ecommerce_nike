import prisma from "../../lib/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getUserSavedProducts() {
   try {
      const currentUser = await getCurrentUser();

      if (!currentUser) {
         return [];
      }

      const products = await prisma.product.findMany({
         where: {
            id: {
               in: [...(currentUser.savedProducts || [])]
            }
         }
      });

      return products;
   } catch (error: any) {
      throw new Error(error);
   }
}
