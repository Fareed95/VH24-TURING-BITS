"use client"
import { useState } from "react";
import Hero from "./components/Hero";
import CompareMain from './components/Compare'
import { Input } from "./components/Input";
import { Movingcards } from "./components/MovingCards";
import Footer from "./components/Footer";




export default function Home() {
  

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.03] overflow-x-hidden">
      
      <Hero />
      <div className="relative flex flex-col-reverse sm:flex-row">
  <div className="flex-1">
    <Input />
  </div>
  <div className="flex-1 ">
   <CompareMain/>
  </div>
</div>

      <div>
        <Movingcards></Movingcards>
      </div>
      <Footer></Footer>
      
    </div>

  );
}
