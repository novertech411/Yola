'use client'
import React from "react";
import NotificationIon from "../icons/NotificationIon";
import Image from "next/image";
import profile from "@/assets/image/Rectangle 918 (1).png";
import OptionIcon from "../icons/OptionIcon";
import { LogoImage } from "@/components/images";

function Navbar() {
  const user = sessionStorage.getItem("authData")
  const userData = JSON.parse(user)
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#6C8164] text-yellow py-3 px-4 flex justify-between items-center z-10">
    {/* @ts-ignore */}
      <LogoImage className="w-10 h-10 " />
      <div className="flex items-center gap-4">
        <NotificationIon />
        <div className="flex items-center gap-2">
          <Image src={profile} alt="" width={40} height={40} className="rounded-full" />
          <div>
            <h2 className="text-white text-sm font-medium">{`${userData.first_name} ${userData.last_name}`}</h2>
            <h4 className="text-[#C5C4C8] text-xs">{userData.email}</h4>
          </div>
          <OptionIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
