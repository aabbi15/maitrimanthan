import Image from "next/image"
import { useParams } from "next/navigation";


export default function MyCard({mycourse}){
   
    console.log(mycourse.sector + "this i smycourse")
    const url = `/status/${mycourse.id}`

    return(


<div className="  max-w-sm p-6 mr-10 bg-gray-800 border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white "> {mycourse.sector} Internship for {mycourse.duration} </h5>
    </a>
    <p className="mb-3 font-normal text-gray-300 "> {mycourse.description} </p>
    <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
        See Status
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>


    )
    }