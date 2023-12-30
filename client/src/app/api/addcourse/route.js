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
        const { courseid } = reqBody;
        console.log(courseid);

        const id = getid(request);


        if (!id) {
            return NextResponse.json({ error: "Token not found" }, { status: 409 });
          }

        


          const user = await User.findById(id);

          // Check if user exists
          if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
          }

          if (!user.coursesEnrolled.includes(courseid) && !user.coursesFinished.includes(courseid)) {
            user.coursesEnrolled.push(courseid);
      
            // Save the updated user with the new course
            await user.save();
          } else {
            return NextResponse.json({ error: "Course already enrolled" }, { status: 400 });
          }
      
          // Return user information in the response
          return NextResponse.json({
            user
    },{"msg":"hi"});
       

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}