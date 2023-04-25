import {NextRequest} from "next/server";

export async function POST(req : Request) {
   return new Response(JSON.stringify({hello: "world"}))
}
