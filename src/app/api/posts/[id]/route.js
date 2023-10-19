import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request, {params})=>{
try {
    await connect()
    const id = params.id

    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post), {status : 200});
} catch (error) {
    return new NextResponse("Database Error", {status : 500})
}

}