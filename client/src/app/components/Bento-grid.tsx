//@ts-nocheck
"use client";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import BarcodeResp from "@/app/components/userinfoComp/BarcodeResp";
import BotResp from "@/app/components/userinfoComp/BotResp";
import { useEffect, useState } from "react";

import { useUserContext } from "@/app/context/Userinfo";
import { useToast } from "@/components/ui/use-toast";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  const { contextisLoggedIn, contextimg } = useUserContext(); // Updated hook
  const [info, setinfo] = useState("");
  const { toast } = useToast();

  const Getuserinfo = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch("https://nutriscan-1ahz.onrender.com/api/user", {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user info"); // Handle error properly
      }
      if (response.ok) {
        const result = await response.json();

        setinfo(result);

        // router.push("/")
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };
  useEffect(() => {
    if (contextisLoggedIn) {
      Getuserinfo();
    }
  }, []);

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const Imgs = () => (
    <img src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
  );
  const Profile = () => <img src={contextimg} className=" h-52 mx-auto"></img>;
  const items = [
    {
      title: "Bot Responses",
      description: "Questions asked from BOT",

      header: <BotResp />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: `Edit Your Profile ${info.name}`,
      description: info.email,
      header: <Profile />,

      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      link: "/EditProfiles",
    },
    {
      title: "Book A meeting With a Health Coatch",
      description: "Get to know more about nutrition and excercise",
      header: <Imgs />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      link: "/health-guides",
    },
    {
      title: "The Barcode Responses !",
      description: "Nutritional values of Food that You Scanned",
      header: <BarcodeResp />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <div>
      {contextisLoggedIn ? (
        <BentoGrid className="py-[12%] mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </BentoGrid>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-6xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4 sm:py-8">
            Please Login First
          </p>
        </div>
      )}
    </div>
  );
}

export default BentoGridDemo;
