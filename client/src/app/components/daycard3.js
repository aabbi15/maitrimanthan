import Image from "next/image"
import { useParams } from "next/navigation";

export default function Daycard3(){
    const params=useParams();

    let url = "#"
    
    if(params.sector == 'healthcare') 
    {  url = "/course/3003"}
    if(params.sector == 'environment') 
    {  url = "/course/2003"}
    if(params.sector == 'education') 
    {  url = "/course/1003"}

    return(


<div className="  max-w-sm p-6 mr-10 bg-gray-800 border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">21 day {params.sector} program </h5>
    </a>
    <p className="mb-3 font-normal text-gray-300 ">Three Weeks of Impact: Deep Dive into a 21-Day NGO Program</p>
    <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Read more
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>


    )
    }