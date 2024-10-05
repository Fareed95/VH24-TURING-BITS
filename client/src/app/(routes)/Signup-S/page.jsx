"use client"
import React from 'react'
import {Signup} from '@/app/components/Signup'
function page() {
<<<<<<< HEAD
  const trainer = false; // Set the trainer value to false
  return (
    <div className='pt-[30vw] p-5 sm:pt-[10vw]'>
      <Signup trainer={trainer}></Signup> {/* Pass the trainer value as a prop */}
=======
  return (
    <div className='pt-[30vw] p-5 sm:pt-[10vw]'>
      <Signup></Signup>
>>>>>>> origin/main
    </div>
  )
}

export default page
