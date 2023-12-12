
'use client'

import Daycard from "@/app/components/daycard";
import Footer from "../../components/footer";
import Navbar, { ComplexNavbar } from "../../components/header";
import { useParams } from "next/navigation";

export default function App(){
    const params=useParams();

    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }

    const mysector = capitalizeString(params.sector)
  return(
    <div>
      <Navbar/>

      <div className="   px-5 md:px-20 lg:px-40 py-24 bg-slate-300">
        <h1 className="mb-10 text-5xl font-bold text-center text-green-600">{mysector}</h1>
        <div className="flex">

        <Daycard/>
        <Daycard/>
        <Daycard/>




        </div>
      
      </div>

      <Footer/>
    </div>
    
  )
}