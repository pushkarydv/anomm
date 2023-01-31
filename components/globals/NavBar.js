"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [navBtnToggle, setNavBtnToggle] = useState(false);
  function navToggle() {
    setNavBtnToggle(navBtnToggle ? false : true);
  }
  return (
    <nav className="flex justify-between flex-row items-center px-4 sticky top-0 left-0 w-full z-50">
      <div className="py-2 gap-2 flex flex-row text-2xl text-emerald-900 font-semibold md:text-3xl justify-center items-center relative z-50">
        <img src="/logo.png" className="w-8 md:w-10" alt="" /> Anomm
      </div>

      {/* Mobile nav items - breakpoint md */}

      <div
        className={
          "transition-all flex flex-col justify-center items-center gap-2 z-40 h-screen w-full bg-white/60 backdrop-blur-md top-0 left-0 text-xl font-semibold text-slate-800 md:hidden " +
          (navBtnToggle ? "fixed" : "hidden")
        }
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/message"}>Message</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/support"}>Support</Link>
      </div>

      {/* Destop nav items - breakpoint md */}

      <div className="hidden text-xl font-semibold text-slate-800 md:flex md:flex-row md:gap-4 md:justify-between md:items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/message"}>Message</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/support"}>Support</Link>
      </div>
      <div
        className="w-9 my-2 h-5 flex flex-col justify-between cursor-pointer md:hidden relative z-50"
        onClick={() => navToggle()}
      >
        <div
          className={
            "transition-all w-9 h-[0.3rem] bg-emerald-600 rounded-full " +
            (navBtnToggle && "rotate-45 translate-y-2")
          }
        ></div>
        <div
          className={
            "transition-all w-9 h-[0.3rem] bg-emerald-600 rounded-full " +
            (navBtnToggle && "-rotate-45 -translate-y-2")
          }
        ></div>
      </div>
    </nav>
  );
}
