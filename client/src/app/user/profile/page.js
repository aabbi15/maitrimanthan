"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/header';
import Footer from '../../components/footer';




export default function Page() {
    const [curruser, Setcurruser] = useState([])
    const date = new Date(curruser.createdAt);
    const mydate = date.toDateString();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response2 = await axios.get("/api/user/me");
            const response = response2.data;
            Setcurruser(response);
            // console.log(response);
            console.log(response.name + "verified")
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

    async function handleLogout() {
        try {
            // setLoading(true);
            const response = await axios.post("/api/user/logout");
            console.log("logout success", response.data);
            // toast.success("Login success");
            router.push("/sector");
        } catch (error) {
            console.log("Login failed", error.message);
            // toast.error(error.message);
        } finally{
        // setLoading(false);
        console.log("yoyo");
        }
    }

    return (
        <div className='h-screen bg-gray-900'>
            <Navbar/>
            <div className="flex flex-col bg-gray-900  w-screen">
                <div className=" w-screen border-b-8 border-gray-400 border-double">
                    <div className='flex object-center justify-center font-semibold p-4 text-5xl text-gray-100 underline '  >My Profile</div>
                </div>

                <div className=" w-screen bg-gray-900 border-3 border-solid flex items-center justify-center">
                    <div className='text-xl py-11 pl-4'>

                        <div className="relative  overflow-x-auto shadow-md  sm:rounded-lg border-2 border-blue-300">
                            <table className="rounded-lg text-md text-left text-gray-300 dark:text-gray-300 font-ext">

                                <tbody className='bg-gray-900  '>
                                    <tr className="border-b border-gray-200  dark:border-gray-700">
                                        <td scope="row" className="w-44 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Name
                                        </td>
                                        <td className="px-6 py-4 ">
                                            {curruser.name}
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                        <td scope="row" className=" w-44 px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Email
                                        </td>
                                        <td className="px-6 py-4 w-96 ">
                                            {curruser.email}
                                        </td>

                                    </tr>
                                    <tr className="border-b border-gray-200 dark:border-gray-700 max-w-sm">
                                        <td scope="row" className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            Joined at
                                        </td>
                                        <td className="px-6 py-4">
                                            {mydate}
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
                <div className=" pt-8 flex justify-center h-fill w-screen bg-gray-900 border-t-8 border-double border-gray-400">
                    <a href='/'>
                        <button onClick={handleLogout} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>
                    </a>
                    <a href='/mycourses'>
                        <button  type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-10">View my courses</button>
                    </a>

                </div>
            </div>
        <Footer/>
        </div>


    );
}




// export default function Page() {
//     const [curruser, Setcurruser] = useState([])

//     async function handleLogout() {
//         try {
//             // setLoading(true);
//             const response = await axios.post("/api/user/logout");
//             console.log("logout success", response.data);
//             // toast.success("Login success");
//             router.push("/sector");
//         } catch (error) {
//             console.log("Login failed", error.message);
//             // toast.error(error.message);
//         } finally {
//             // setLoading(false);
//             console.log("yoyo");
//         }
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response2 = await axios.get("/api/user/me");
//                 const response = response2.data;
//                 Setcurruser(response);
//                 console.log(response);
//                 Setislogged(true);
//                 Setname(response.name);
//             } catch (error) {
//                 console.log("Auth failed", error.message);
//                 // toast.error(error.message);
//             } finally {
//                 // Remove this empty block if you don't need any specific code here
//                 // setLoading(false);
//                 console.log("hi");
//             }
//         };

//         fetchData(); // Call the async function
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <div className="p-16">
//                 <div className="p-8 bg-white shadow mt-24">
//                     <div className="grid grid-cols-1 md:grid-cols-3">
//                         <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
//                             <div>
//                                 <p className="font-bold text-gray-700 text-xl">22</p>
//                                 <p className="text-gray-400">Friends</p>
//                             </div>
//                             <div>
//                                 <p className="font-bold text-gray-700 text-xl">10</p>
//                                 <p className="text-gray-400">Photos</p>
//                             </div>
//                             <div>
//                                 <p className="font-bold text-gray-700 text-xl">89</p>
//                                 <p className="text-gray-400">Comments</p>
//                             </div>
//                         </div>
//                         <div className="relative">
//                             <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
//                             </div>
//                         </div>
//                         <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"><button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Connect</button>
//                             <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Message</button>    </div>  </div>
//                     <div className="mt-20 text-center border-b pb-12">
//                         <h1 className="text-4xl font-medium text-gray-700">HI</h1>
//                         <p className="font-light text-gray-600 mt-3">OK</p>
//                         <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
//                         <p className="mt-2 text-gray-500">University of Computer Science</p>
//                     </div>
//                     <div className="mt-12 flex flex-col justify-center">
//                         <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
//                         <button className="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button>
//                     </div></div></div>
//             <Footer />
//         </div>
//     )

// }