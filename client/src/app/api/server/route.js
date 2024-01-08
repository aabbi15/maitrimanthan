import {connect} from "@/dbconfig/dbconfig";
import mongoose from "mongoose";
import User from "@/models/usermodel";
import { NextResponse } from "next/server";


connect();
export async function GET() {
    //write mongodbcode to gett all users and courses and store them in an arrray of objects containing parameters name, email, courseid
   const myusers = await User.find({})
    // console.log(await User.find());
    return NextResponse.json({myusers})
}