"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Movingcards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden antialiased  dark:bg-black dark:bg-grid-white/[0.05]">
  <div className="text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-8">
    Testimonials
  </div>
  
  {/* Ensure spacing between title and cards */}
  <div className="mt-8 flex flex-col items-center sm:flex-row sm:items-start w-full">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
      className="w-full sm:w-[calc(100%-2rem)]" // Adjust width for responsiveness
    />
  </div>
</div>

  );
}

const testimonials = [
  {
      quote: "Open-Academy has been a game-changer for my NEET preparation. The guidance I received from experienced mentors helped me tackle difficult topics with ease.",
      name: "Aarav Sharma",
      title: "Student from Open-Academy"
    },
    {
      quote: "My son was struggling with JEE, but Open-Academy provided affordable and reliable mentorship. It made a huge difference in his performance.",
      name: "Radhika Patel",
      title: "Parent"
    },
    {
      quote: "Open-Academy gave me access to personalized help from someone who recently cleared NEET. It's an incredible platform for students in need of quality guidance.",
      name: "Sneha Verma",
      title: "Student from Open-Academy"
    },
    {
      quote: "As a parent, I’m grateful for Open-Academy. It provided my daughter with the right resources and mentorship to excel in her CET exams.",
      name: "Anil Gupta",
      title: "Parent"
    },
    {
      quote: "Open-Academy helped me connect with the right mentor for my JEE preparation. The support I received gave me confidence and clarity.",
      name: "Ravi Mehta",
      title: "Student from Open-Academy"
    },
    {
      quote: "The mentors at Open-Academy made a huge difference in my son’s preparation for NEET. Their support is invaluable for students like him.",
      name: "Sonal Joshi",
      title: "Parent"
    },
];

