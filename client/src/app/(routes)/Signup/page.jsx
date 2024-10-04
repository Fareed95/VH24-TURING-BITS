"use client";
import { cn } from "@/app/libs/utils";
import Link from "next/link";

 function page() {
  return (
    
    ( 
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-[9vw]">
            <p className="text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4 sm:pb-4">
        I am Registering as a ....
      </p>
        
    <div className="flex justify-center  items-center ">
        <Link  href='/Signup-S'>
<div className="max-w-xs w-full group/card m-5">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://plus.unsplash.com/premium_photo-1683135216249-d39815e5536e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          
          <div className="flex flex-col">
           
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
         STUDENT
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Register as a student to learn from tutors
          </p>
        </div>
      </div>
    </div>
    </Link>
    <Link  href='/Signup-M'>
    <div className="max-w-xs w-full group/card m-5">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover"
        )}>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          
          <div className="flex flex-col">
            
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            TUTOR
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Register as a tutor to teach students
          </p>
        </div>
      </div>
    </div>
    </Link>
    </div>
    </div>
    )
  );
}
export default page;    