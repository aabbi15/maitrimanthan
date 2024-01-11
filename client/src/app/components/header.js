// import Image from "next/image"



// export default function Navbar(){
//   return(
    

// <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//   <Image
//       src="/images/maitrimanthan.png"
//       width={50}
//       height={300}
//       alt="Picture of the author"
//       className="rounded-lg"
//     />
//       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MaitriManthan</span>
//   </a>
//   <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//   <button className="px-4 py-3 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">Get Started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="/sector" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Sector</a>
//       </li>
//       <li>
//         <a href="/gallery" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
//       </li>
//       <li>
//         <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

//   )
// }

'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import locofy from "./locofy.png"
import axios from 'axios';

 function  Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [name, Setname] = useState('');
 const [islogged, Setislogged] = useState(false);

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response2 = await axios.get("/api/user/me");
      const response = response2.data;
      console.log(response);
      Setislogged(true);
      Setname(response.name);
    } catch (error) {
      console.log("Auth failed", error.message);
      // toast.error(error.message);
    } finally {
      // Remove this empty block if you don't need any specific code here
      // setLoading(false);
      // console.log("hi");
    }
  };

  fetchData(); // Call the async function
}, []);

 function Profile() {
     if (islogged) {
         return (
             <a href='/user/profile' className='flex justify-center items-center'>
                 

                     <Image
                         src='/images/user.png'
                         alt="Picture of the author"
                         className="w-11 h-11 bg-slate-700 rounded-l-full p-2 "
                         width={32}
                         height={32}
                     />
                     <div className='-m-1 pr-4 p-2 h-11 flex items-center text-gray-100 bg-slate-700 border-1 border-slate-400 rounded rounded-r-full'>{name}</div>
                 </a>
             
         );

     }
     else {
         return (
          <div>
          <a href='/user/login'><button className="px-7 py-2 mt-4 md:mt-0 md:mr-5 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">Login</button></a>
              
          </div>
         )
     }


 }

 function Mycourses() {
  if (islogged) {
      return (
        <li>
        <a href="/mycourses" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My courses</a>
      </li>
          
      );

  }
  else {
      return (
       <></>
      )
  }


}

 return (
   <nav className="flex items-center bg-black justify-between flex-wrap p-6 border-b border-gray-200 dark:border-gray-600 ">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-5">
     <Image
      src="/images/maitrimanthan.png"
      width={50}
      height={300}
      alt="Picture of the author"
      className="rounded-lg"
     />
     <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">MaitriManthan</span>
     </a>
     </div>
     <div className="block md:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow md:ok md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-lg md:flex-grow">
       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
       </li>
       <li>
         <a href="/sector" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Sector</a>
       </li>
       <li>
         <a href="/gallery" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
       </li>
       <li>
         <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
       </li>
       <Mycourses/>
     </ul>
       </div>
      {Profile()}
     </div>
   </nav>
 );
}
export default Navbar;