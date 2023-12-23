'use client'
import Card2 from "../components/card2";
import Card3 from "../components/card3";
import Card1 from "../components/cards";
import Card from "../components/cards";
import MyCard from "../components/enrolledcard";
import Footer from "../components/footer";
import Navbar, { ComplexNavbar } from "../components/header";
import courses from '../../data/courses'
import { useState, useEffect } from "react";

export default async function App(){
    const [myid, Setmyid] = useState([]);
    const [islogged, Setislogged] = useState(false);
   
    useEffect(() => {
     const fetchData = async () => {
       try {
         const response2 = await axios.get("/api/getcourseinfo");
         const response = response2.data;
         console.log(response);
         Setmyid(response.coursesEnrolled);
       } catch (error) {
         console.log("Auth failed", error.message);
         // toast.error(error.message);
       } 
     };
   
     fetchData(); // Call the async function
   }, []);


function MyCourses(){
    if(myid.length==0){
    return(
        <h1>No courses Enrolled</h1>
        )
    }
    else{
        return(
           <div>

        {myid.map(id => (
        <MyCard key={id} myid={id} />        
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