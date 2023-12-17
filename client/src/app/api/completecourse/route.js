
import { getid } from "@/helpers/getinfo";

import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const { course } = reqBody;
        console.log(reqBody);

        const id = getid(request);


        if (!id) {
            return NextResponse.json({ error: "Token not found" }, { status: 401 });
          }

        


          const user = await User.findById(id);

          // Check if user exists
          if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
          }

          user.coursesEnrolled = user.coursesEnrolled.filter(myvar => myvar !== course);

          user.coursesFinished.push(course);

    // Save the updated user with the new course
        await user.save();
      
          // Return user information in the response
          return NextResponse.json({
            user
    },{"msg":"hi"});
       

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}