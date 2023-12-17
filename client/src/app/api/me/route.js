import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function GET(request){
    try {

        // const reqBody = await request.json()
        // const { email, password} = reqBody;
        // console.log(reqBody);

        const token0 = request.cookies.get("token");
        const token = JSON.stringify(token0);


        if (!token) {
            return NextResponse.json({ error: "Token not found" }, { status: 401 });
          }

        console.log(token)
          const decodedToken = jwt.verify(token0.value, process.env.TOKEN_SECRET);


          const user = await User.findById(decodedToken.id);

          // Check if user exists
          if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
          }
      
          // Return user information in the response
          return NextResponse.json({
            username: user.name,
            email: user.email,
          });
       

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}