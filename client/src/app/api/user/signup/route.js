import {connect} from "@/dbconfig/dbconfig";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import zod from "zod";

connect();

const myschema = zod.string().email();
export async function POST(request){
    

    try {
        const reqBody = await request.json()
        const {name, email, password} = reqBody

        console.log(reqBody);
        try{
            myschema.parse(email)
        }catch(error){
            return NextResponse.json({error: "Invalid email"}, {status: 409})
        }

        

        //check if user already exists
        const user = await User.findOne({email})
        console.log("1")
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        console.log("1")

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        console.log("1")

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        console.log("1")

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        console.log("1")

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        



    } catch (error) {
        
        console.log(error)
        return NextResponse.json({error: "Missing input"}, {status: 500})

    }
}