'use client'

import MyCard from "../components/enrolledcard";
import Footer from "../components/footer";
import Navbar, { ComplexNavbar } from "../components/header";
import courses from '../../data/courses'
import { useState, useEffect } from "react";
import axios from "axios";


export default  function App(){
    const [myid, Setmyid] = useState([]);
    const [islogged, Setislogged] = useState(false);
   
    useEffect(() => {
     const fetchData = async () => {
       try {
         const response2 = await axios.get("/api/getcourseinfo");
         const response = response2.data;
        //  console.log(response.coursesEnrolled + response.coursesFinished);
         Setmyid(response.coursesEnrolled);
       } catch (error) {
         console.log("Auth failed", error.message);
         // toast.error(error.message);
       } 
     };
   
     fetchData(); // Call the async function
   }, []);


function MyCourses(){
  console.log(myid);
  const mycourses = courses.filter((course) => myid.includes(course.id));
  console.log(mycourses)

    if(myid.length==0){
    return(
        <h1>No courses Enrolled</h1>
        )
    }
    else{
        return(
           <div>

        {mycourses.map(mycourse => (
          <>
          
        <MyCard mycourse={mycourse} />   
        </>     
        ))}
           </div>
        )
    }
}

  return(
    <div>
      <Navbar/>

      <div className="min-h-screen px-5 md:px-20 lg:px-40 pt-24 bg-gray-900">
        <MyCourses/>
      </div>

      <Footer/>
    </div>
    
  )
}