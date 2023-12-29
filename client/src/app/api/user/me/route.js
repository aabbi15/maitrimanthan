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
      console.log(2)
        const token0 = request.cookies.get("token");
        const token = JSON.stringify(token0);

        console.log(2)

        if (!token) {
            return NextResponse.json({ error: "Token not found" }, { status: 401 });
          }

        // console.log(token)
          const decodedToken = jwt.verify(token0.value, process.env.TOKEN_SECRET);

          // console.log(2)

          const user = await User.findById(decodedToken.id);

          // Check if user exists
          if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
          }
          // console.log(2)
          console.log(user.name + 'details sent')
          // Return user information in the response
          return NextResponse.json({
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
          });
       

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}