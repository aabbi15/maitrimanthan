import { NextResponse } from 'next/server'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'; 
// This function can be marked `async` if using `await` inside
export async function GET(request) {
    try{
        
        if(request.cookies.get('token') == null){
            console.log('not okay0');
            return NextResponse.redirect(new URL('/user/login', request.url))

        }
        else{
            console.log('okayyyyyy');
        }
    }
    catch(error){
        console.log('not okay' +error);
        // return NextResponse.redirect(new URL('/login', request.url))
    }
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/sector',
}