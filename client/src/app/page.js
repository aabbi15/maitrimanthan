import Footer from "./components/footer";
import Navbar from "./components/header";

export default function Home ()
{
    return (
    <div>
        <Navbar/>
   

<div class="container max-w-screen-xl mx-auto px-4">

   

    <div class="flex flex-col lg:flex-row justify-between space-x-20">
        <div class="text-center lg:text-left mt-40">
            <h1 class="font-semibold text-white-900 text-3xl md:text-5xl leading-normal mb-5"> Intern with purpose, <br/> shape tomorrow.</h1>

            <p class="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">We provide Internships for peoples of <br/> nationwide to support people who are in need.</p>

            <button class="px-6 py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">Get started</button>
        </div>

        <div class="mt-24">
            <img src="/images/home-img.png" alt="Image"/>
        </div>
    </div>

</div>
<Footer/>
</div>
)
}

