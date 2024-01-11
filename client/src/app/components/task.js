import Image from "next/image"
import axios from "axios";
import Router, { useRouter } from "next/navigation";

export default function Task({mycourse}){
console.log( typeof(mycourse.id))

const router = useRouter();
async function OnJoin() {
  try {
    const res2 = await axios.get('/api/user/me');

    if (res2.data.name == null) {
      console.log('naaahhh man');
      window.alert('You must sign up first');
    } else {
      console.log("hellyaaaay");

      try {
        // Second Axios request
        const response = await axios.post('/api/addcourse', { courseid: mycourse.id });
        console.log(response);

        // If the second request is successful, navigate to '/mycourses'
        router.push('/mycourses');
      } catch (secondError) {
        // Handle errors for the second request
        console.log(secondError);

        // Check if the error has a response
        if (secondError.response) {
          console.log(secondError.response.data.error);
          window.alert(secondError.response.data.error);
        }
      }
    }
  } catch (firstError) {
    // Handle errors for the first request
    console.log(firstError);
    window.alert('You must sign up first');

    // Check if the error has a response
    if (firstError.response) {
      console.log(firstError.response.data.error);
      // Handle the first error differently if needed
    }
  }

  console.log(1111111);
}

  function Showtasks(){
    let alltasks = []
    mycourse.tasks.forEach(element => {
      alltasks.push(
        <div className="relative w-full">
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

   <div className="bg-white"> 
<div className=" flex flex-col items-center bg-white">

<h2 className=" text-4xl font-extrabold bg-white text-slate-950 pt-20 justify-">Contribute to {mycourse.sector} for {mycourse.duration}</h2>
<div className="flex mt-4 text-lg text-gray-700 w-1/2 justify-center text-center bg-white">{mycourse.description}</div>

</div>
    



<div className="md:flex py-16 items-center gap-10  bg-white px-6 md:px-10 ">
<div className=" mb-10 md:mb-0">

<Image
      src="/images/nature.jpeg"
      width={700}
      height={1200}
      alt="Picture of the author"
      className="rounded-lg"
    />



</div>


  <div className="space-y-6 border-l-2 border-dashed">
      <Showtasks/>
  </div>

 
</div>
<div className=" flex flex-col items-center pb-16 bg-white">

<button type="button"  onClick={OnJoin} className=" text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<a >Join Now</a>
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
</div>
</div>
    )
}