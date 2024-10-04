"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/libs/utils";
import Link from "next/link";
import {useUserContext} from '@/app/context/Userinfo'
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { contextisLoggedIn } = useUserContext();
  const Logout=()=>{
    localStorage.setItem('authToken',"-")
    window.location.reload();
  }
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
  <Menu setActive={setActive}>
    <Link href="/">
      <MenuItem setActive={setActive} active={active} item="Home" />
    </Link>
    <MenuItem setActive={setActive} active={active} item="Discover">
      <div className="flex flex-col space-y-4 text-sm sm:text-base">
        <HoveredLink href="/nutrition-info">Your Questions</HoveredLink>
        <HoveredLink href="/user-info">User Info</HoveredLink>
        {/* <HoveredLink href="/dietary-suitability">Dietary Suitability</HoveredLink>
        <HoveredLink href="/product-scanner">Product Scanner</HoveredLink> */}
      </div>
    </MenuItem>
    
    <MenuItem setActive={setActive} active={active} item="Resources">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 text-sm sm:text-base">
        <ProductItem
          title="Study Material"
          href="/StudyMaterial"
          src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Read the Best and latest Study Material."
        />
        <ProductItem
          title="Ask A Question"
          href="/Questions"
          src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          description="Ask your questions and get answers from experts."
        />
        <ProductItem
          title="Test Series"
          href="/Test"
          src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          description="Check your knowledge with our Test Series."
        />
        <ProductItem
          title="Community"
          href="/community"
          src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          description="Join our community to share tips and experiences."
        />
      </div>
    </MenuItem>

    {/* Commented out section for future use */}
    {/* <MenuItem setActive={setActive} active={active} item="Plans">
      <div className="flex flex-col space-y-4 text-sm sm:text-base">
        <HoveredLink href="/free-plan">Free Plan</HoveredLink>
        <HoveredLink href="/premium-plan">Premium Plan</HoveredLink>
      </div>
    </MenuItem> */}
    {
      !contextisLoggedIn?<MenuItem setActive={setActive} active={active} item="Authenticate">
      <div className="flex flex-col space-y-4 text-sm sm:text-base">
        <HoveredLink href="/Signup">Sign-Up</HoveredLink>
        <HoveredLink href="/Login">Login-In</HoveredLink>
      </div>
    </MenuItem>:''
    }
    {
      contextisLoggedIn? <div onClick={Logout}>
        <MenuItem setActive={setActive} active={active}  item="LogOut" />
      </div>
       
       :""
    }
    
  </Menu>
</div>

  );
}

export default Navbar;
