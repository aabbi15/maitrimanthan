
'use client'

import Daycard from "@/app/components/daycard";
import Footer from "../../components/footer";
import Navbar, { ComplexNavbar } from "../../components/header";
import { useParams } from "next/navigation";
import Daycard1 from "@/app/components/daycard";
import Daycard2 from "@/app/components/ daycard2";
import Daycard3 from "@/app/components/daycard3";

export default function App(){
    const params=useParams();

    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }

    const mysector = capitalizeString(params.sector)
  return(
    <div className="bg-gray-900">
      <Navbar/>

      <div className="   px-5 md:px-20 lg:px-40 py-24 ">
        <h1 className="mb-10 text-5xl font-bold text-center text-green-600">{mysector}</h1>
        <div className="md:flex flex flex-col items-center gap-10">

        <Daycard1/>
        <Daycard2/>
        <Daycard3/>




        </div>
      
      </div>

      <Footer/>
    </div>
    
  )
}