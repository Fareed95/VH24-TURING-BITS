"use client";
import { cn } from "@/app/libs/utils";

function Card() {
  return (
    <div className="flex flex-wrap justify-evenly w-full">
      <div className="max-w-xs w-full sm:w-1/2 lg:w-1/3 p-2">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://plus.unsplash.com/premium_photo-1664910842853-0d643f6db30c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnN2cWp4eDhxanBqYzJyb29vbzlrODZ2c3hlN24wejg4c3I0NTR4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1n4FT4KRQkDvK0IO4X/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnN2cWp4eDhxanBqYzJyb29vbzlrODZ2c3hlN24wejg4c3I0NTR4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1n4FT4KRQkDvK0IO4X/giphy.webp)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}>
          <div className="text relative z-2">
            <h1 className="font-bold text-xl md:text-3xl text-white relative">
              JEE
            </h1>
            <p className="font-normal text-base text-white relative my-4">
              This card is for JEE preparation resources.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xs w-full sm:w-1/2 lg:w-1/3 p-2">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3htZXZieWVobXUzZXNwbDR3empqMTUwdzNwNThsZHF5dmZ4MXJiaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cCaSeXFNKlu6zBtSGd/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3htZXZieWVobXUzZXNwbDR3empqMTUwdzNwNThsZHF5dmZ4MXJiaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cCaSeXFNKlu6zBtSGd/giphy.webp)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}>
          <div className="text relative z-2">
            <h1 className="font-bold text-xl md:text-3xl text-white relative">
              NEET
            </h1>
            <p className="font-normal text-base text-white relative my-4">
              This card is for NEET preparation resources.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-xs w-full sm:w-1/2 lg:w-1/3 p-2">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzFobDd6Y2pwZTYyMDFnOGVjaHBweHh4OGNlZzg4M3hjMTRtYjl5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOZhmE42D1WrCWATLK/giphy.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzFobDd6Y2pwZTYyMDFnOGVjaHBweHh4OGNlZzg4M3hjMTRtYjl5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOZhmE42D1WrCWATLK/giphy.webp)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}>
          <div className="text relative z-1">
            <h1 className="font-bold text-xl md:text-3xl text-white relative">
              CET
            </h1>
            <p className="font-normal text-base text-white relative my-4">
              This card is for CET preparation resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;