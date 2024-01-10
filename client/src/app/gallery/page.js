"use client"
import { useState } from 'react';


import Navbar from '../components/header';
import Footer from '../components/footer';



export default function Page() {
   
    return (
        <>
        
        <div className=" rounded-lg   bg-gray-900 shadow-black/20 md: md:  backdrop-blur-[30px]">
            <Navbar/>
            <div className="  border-b-8 border-gray-400 border-double">
                    <div className='flex object-center justify-center font-semibold p-4 text-5xl text-white-200 '  > Gallery</div>
                </div>
           <div className='my-20'>
            



           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div className=''>
            <img className="h-auto max-w-full rounded-lg" src="/images/pg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/g.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/h.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/i.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/j.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/k.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/a.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/b.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/c.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/d.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/e.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/f.jpg" alt=""/>
        </div>
    </div>
</div>


           </div>
        <Footer/>
        </div>
        </>
    );
}
