import mongoose from "mongoose";
import connect from "@/utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async ()=>{
try {
    await connect()


    const posts = Post.find()

    return new NextResponse(posts, {status : 200});
} catch (error) {
    return new NextResponse("Database Error", {status : 500})
}

}