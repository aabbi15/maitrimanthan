import Image from "next/image"


export default function Card3(){
    return(
        <div className="pb-10">
            

<a href="http://localhost:3000/days/education" class="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-900 justify-center ">

        <div class="flex flex-col justify-between p-4 leading-normal ">
        <Image
      src="/images/education.jpeg"
      width={700}
      height={300}
      alt="Picture of the author"
      className="rounded-lg"
    />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-slate-100  mt-5">Contribute to Education Sector</h5>
        <p class="mb-3 font-normal text-slate-100 ">Empowering Futures: Contribute to the Education Sector</p>
    </div>
</a>
</div>

    )
    }