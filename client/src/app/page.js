'use client'

import Footer from "./components/footer";
import Navbar from "./components/header";
import { TypeAnimation } from "react-type-animation";



export default function Home ()
{
    return (
    <div className="bg-gray-900">
        <Navbar/>
   

<div className="container max-w-screen-xl mx-auto px-4 bg-gray-900">

   

    <div className="flex flex-col lg:flex-row justify-between space-x-20">
        <div className="text-center lg:text-left mt-40">
            <h1 className="font-semibold text-white-900 text-3xl md:text-5xl leading-normal mb-5"> Intern with purpose, <br/> shape tomorrow.</h1>
            {/* <h1 className="font-semibold text-white-900 text-3xl md:text-6xl leading-normal mb-6">Charity for the <br/> 
            <TypeAnimation
              sequence={[
                "Abhishek",
                1000,
                "Web Developer",
                1000,
                "Backend Engineer",
                1000,
                // "API ",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1> */}

            <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">We provide Internships for peoples of <br/> nationwide to support people who are in need.</p>

            <a href='user/signup'><button className="px-6 py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">Get started</button></a>
        </div>

        <div className="mt-24">
            <img src="/images/home-img.png" alt="Image"/>
        </div>
    </div>

</div>
<Footer/>
</div>
)
}

