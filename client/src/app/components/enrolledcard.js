import Image from "next/image"
import courses from '../../data/courses'

export default function MyCard(course){
    return(
        <div className="pb-10">
            

<a href="http://localhost:3000/days/healthcare" className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-900 justify-center ">

        <div className="flex flex-col justify-between p-4 leading-normal ">
        <Image
      src="/images/healthcare.jpeg"
      width={700}
      height={300}
      alt="Picture of the author"
      className="rounded-lg"
    />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100  mt-5">Contribute to Healthcare Sector {course.id}</h5>
        <p className="mb-3 font-normal text-slate-100 ">Caring for Tomorrow: Contribute to the Healthcare Sector</p>
    </div>
</a>
</div>

    )
    }