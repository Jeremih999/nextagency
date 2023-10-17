import mongoose from "mongoose";
import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET = async ()=>{
try {
    await connect()


    const users = User.find()

    return new NextResponse(users, {status : 200});
} catch (error) {
    return new NextResponse("Database Error", {status : 500})
}

}