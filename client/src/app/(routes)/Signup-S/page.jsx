"use client"
import React from 'react'
import {Signup} from '@/app/components/Signup'
function page() {
  const trainer = false; // Set the trainer value to false
  return (
    <div className='pt-[30vw] p-5 sm:pt-[10vw]'>
      <Signup trainer={trainer}></Signup> {/* Pass the trainer value as a prop */}
    </div>
  )
}

export default page
