"use client";
import React, { useState } from 'react';
import { Input } from "../../components/ui/input";
import { Label } from "@/components/ui/label";
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

  return (
    <div className='flex items-center flex-col '>
      <p className="text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4 sm:pb-4 pt-[20vh]">
        Ask A Question
      </p>
      <div className='flex '>
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
     
      </div>
      
      <FileUploadComponent></FileUploadComponent>
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
