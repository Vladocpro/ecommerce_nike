import getCurrentUser from "../../actions/getCurrentUser";
import {Order} from "../../types";
import prisma from "../../../lib/prismadb";
import {NextResponse} from "next/server";

export async function GET(req : any, res : NextResponse) {
   try {
      const user = await getCurrentUser()
      const orders: Order[] = await prisma.order.findMany({
         where: {
            userId: user.id
         }
      });
      // @ts-ignore
      return NextResponse.json({orders: orders.reverse(), user: user});
   } catch (error: any) {
      throw new Error(error);
   }
}
