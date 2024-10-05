"use client";
import React, { useState } from 'react';
import { Input } from "../../components/ui/input";
<<<<<<< HEAD
import { Label } from "@/components/ui/label";
=======
>>>>>>> 5986c0f (frontend ListQuest Exams marked)
import { cn } from "@/app/libs/utils";
import FileUploadComponent from "@/app/components/Uploader";

function Page() {
  const [question, setQuestion] = useState('');
  const [domain, setDomain] = useState('');

  // Event handler for question input
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Event handler for domain select
  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Question:", question);
    console.log("Domain:", domain);
    // You can add more logic to handle the form data, such as sending it to an API
  };

  return (
    <div className='flex items-center flex-col '>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
      <p className="text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4 sm:pb-4 pt-[20vh]">
        Ask A Question
      </p>
<<<<<<< HEAD
      <div className='flex '>
<<<<<<< HEAD
=======
      {/* Question input */}
      <div className='flex justify-evenly'>
>>>>>>> origin/main
      <LabelInputContainer className="w-[40vw] ">

            <Input
              id="question"
              placeholder="Ask A Question"
              type="text"
              value={question}
              onChange={handleQuestionChange}
              className='h-[10vh]'
            />
          </LabelInputContainer>


      {/* Domain select */}<div className='flex flex-col'>
         <label htmlFor="domain">Domain:</label>
      <select id="domain" value={domain} onChange={handleDomainChange} className={cn(
<<<<<<< HEAD
            `flex h-10  border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
=======
            `flex h-10 w-[40vw] border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
>>>>>>> origin/main
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
=======
      <LabelInputContainer className="w-[40vw] ">

            <Input
              id="question"
              placeholder="Ask A Question"
              type="text"
              value={question}
              onChange={handleQuestionChange}
              className='h-[10vh]'
            />
          </LabelInputContainer>


      {/* Domain select */}<div className='flex flex-col'>
         <label htmlFor="domain">Domain:</label>
      <select id="domain" value={domain} onChange={handleDomainChange} className={cn(
            `flex h-10  border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
>>>>>>> main
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400`)}>
        <option value="">Select Domain</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
        <option value="maths">Maths</option>
        <option value="biology">Biology</option>
      </select>
      </div>
<<<<<<< HEAD

      </div>

=======

      </div>

>>>>>>> main
      <FileUploadComponent></FileUploadComponent>
=======
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div className='flex '>
          <div className='w-[40vw] m-3'>
            <LabelInputContainer>
              <Input
                id="question"
                placeholder="Ask A Question"
                type="text"
                value={question}
                onChange={handleQuestionChange}
                className='h-[10vh]'
              />
            </LabelInputContainer>
          </div>

          {/* Domain select */}
          <div className='flex flex-col'>
            <label htmlFor="domain">Domain:</label>
            <select
              id="domain"
              value={domain}
              onChange={handleDomainChange}
              className={cn(
                `flex h-10 w-[20vw] border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
                focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400`
              )}
            >
              <option value="">Select Domain</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="maths">Maths</option>
              <option value="biology">Biology</option>
            </select>
          </div>
        </div>

        <div className='m-3'>
          <FileUploadComponent />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-4"
        >
          Submit
        </button>
      </form>
>>>>>>> 5986c0f (frontend ListQuest Exams marked)
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Page;