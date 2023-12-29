'use client'

import { useParams } from "next/navigation";
import Footer from "../../components/footer";
import Navbar from "../../components/header";
import Task from "../../components/task";
import courses from "@/data/courses";

export default function App(){
    const params = useParams();
    const courseid = params.id;
    // console.log(params.id + 'idno');

    const mycourse = courses.find((element) => element.id == params.id);


    // useEffect(() => {
    //     const fetchData = async () => {
         
      
    //     fetchData(); // Call the async function
    //   }, []);

    
    return(
        <div>
        <Navbar/>
        <Task mycourse = {mycourse}/>
        <Footer/>
        </div>
    )
}