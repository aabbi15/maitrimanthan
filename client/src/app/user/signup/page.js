"use client"
import { useState } from 'react';


import '../../globals.css'
import Navbar from '../../components/header';
import Footer from '../../components/footer';
import { useRouter } from 'next/navigation';
import React from 'react';
import axios from 'axios';



export default  function Page(){
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
      name: "",
  })
  const [alertmsg, setalertmsg] = React.useState('');
    const alert = () => {

      if(alertmsg)
      {return(
        <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Warning alert! {alertmsg}</span> 
        </div>
      </div>
      );
      }
      else {
        return(
          <></>
        )
      }
    }

    const onSignup = async () => {
      try {
         
          const response = await axios.post("/api/user/signup", user);
          
          console.log("Signup success", response.data);
          router.push("/user/login");
          
      } catch (error) {
        console.log(error);
          console.log("Signup failed", error.message);
          if(error.response.status==400) setalertmsg('user already exists')
          if(error.response.status==409) setalertmsg('Invalid email')
          else setalertmsg('missing input');
          
          // toast.error(error.message);
      }
  }

   
    return (
        <>
        <Navbar/>

        <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                      <label  className="input-label">Your name</label>
                      <input   id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            placeholder="name" className="input-box"  required=""/>
                  </div>
                  <div>
                      <label  className="input-label">Your email</label>
                      <input  id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email" className="input-box" required=""/>
                  </div>
                  <div>
                      <label  className="input-label">Password</label>
                      <input id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
             placeholder="••••••••" className="input-box" required=""/>
                  </div>
                  
                  {alert()}
                  <button type="button" onClick={onSignup} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/user/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</a>
                  </p>
              </form>
          </div>
        </div>
        </div>
        </div>


        <Footer/>
        </>

    );
};