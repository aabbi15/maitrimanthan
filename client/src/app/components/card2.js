import Image from "next/image"


export default function Card2(){
    return(
        <div className="pb-10">
            

<a href="/days/environment" className="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-900 justify-center ">

        <div className="flex flex-col justify-between p-4 leading-normal ">
        <Image
      src="/images/environmentsector.jpeg"
      width={700}
      height={300}
      alt="Picture of the author"
      className="rounded-lg"
    />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-100  mt-5">Contribute to Environment Sector</h5>
        <p className="mb-3 font-normal text-slate-100 ">Taking Action: Contributing Meaningfully to the Environment</p>
    </div>
</a>
</div>

    )
    }