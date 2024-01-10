'use client'

import Image from "next/image"
import axios from "axios";
import courses from "@/data/courses";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/header";
import Footer from "@/app/components/footer";


export default function App(){

    const params = useParams();


const mycourse = courses.find(element => {if(element.id==params.id) return element})

console.log( typeof(mycourse.id))



async function OnJoin () {
  try{
    const response = await axios.post('/api/addcourse',{courseid:mycourse.id});
    console.log(response);


  }catch(error){
    console.log(error);
  }
}
  function Showtasks(){
    let alltasks = []
    mycourse.tasks.forEach(element => {
      alltasks.push(
        <div className="relative border-dashed px-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">{element.title}</h4>
        <p className="mt-2 max-w-screen-sm text-sm text-gray-500">{element.description}</p>
        <span className="mt-1 block text-sm font-semibold text-blue-500">{element.credits} Credits</span>
      </div>
    </div>
      )

      
    });

    return alltasks;
  }


  return(

   <div className="bg-gray-800"> 
   <Navbar/>
<div className=" flex flex-col items-center border-b-2 border-dashed pb-10 ">

<h2 className=" text-4xl font-extrabold  text-white pt-20 justify-">Contribute to {mycourse.sector} for {mycourse.duration}</h2>
<div className="flex mt-4 text-lg text-gray-100 w-1/2 justify-center text-center ">{mycourse.description}</div>

</div>
    



<div className="md: py-16  gap-10  bg- px-6 md:px-10 ">



  <div className=" spce-y-6 border-b-2 border-dashed pb-10 md:grid md:grid-cols-3 md:justify-items-center md:gap-10 md: ">
      <Showtasks/>
  </div>

<div className="flex justify-evenly mt-20">
<div class='break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[#5E17F4] text-white '>
        <span class='uppercase text-sm text-[#D2BDFF] ml-3'>Step 1</span>
        <div class='flex flex-row items-center space-x-3'>
        <Image
      src="/doc.png"
      width={65}
      height={65}
      alt="Picture of the author"
      className="rounded-lg ml-2"
    />            <span class='text-base font-medium '>Fill in your personal details by clicking here  </span>
        </div>
        <div class='flex justify-between items-center ml-3'>
            <span>Google Form</span>
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <a href="https://forms.gle/NojXAxvePHSf2fmB9">
            <span>Go</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </a>
            </button>
        </div>
    </div>
    <div class='break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[#5E17F4] text-white '>
        <span class='uppercase text-sm text-[#D2BDFF] ml-3'>Step 2</span>
        <div class='flex flex-row items-center space-x-3'>
        <Image
      src="/done.png"
      width={65}
      height={65}
      alt="Picture of the author"
      className="rounded-lg ml-2"
    />            <span class='text-base font-medium '>Submit your work once finished here  </span>
        </div>
        <div class='flex justify-between items-center ml-3'>
            <span>Google Form</span>
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span>Submit</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
    </div>
    <div class='break-inside relative overflow-hidden flex flex-col justify-between space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[#5E17F4] text-white '>
        <span class='uppercase text-sm text-[#D2BDFF] ml-3'>Step 3</span>
        <div class='flex flex-row items-center space-x-3'>
        <Image
      src="/feedback.png"
      width={65}
      height={65}
      alt="Picture of the author"
      className="rounded-lg ml-2"
    />            <span class='text-base font-medium '>Give your feedback for the course here  </span>
        </div>
        <div class='flex justify-between items-center ml-3'>
            <span>Google Form</span>
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <a href="https://forms.gle/38GuEW5NGaq4o98s8">
            <span>Visit</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </a>
            </button>
        </div>
    </div>
</div>


 
</div>
<div className=" flex flex-col items-center pb-10 ">


</div>
<Footer/>
</div>
    )
}