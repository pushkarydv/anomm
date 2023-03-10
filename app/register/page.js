import Link from "next/link";
import React from "react";
import Footer from "../../components/globals/Footer";
import NavBar from "../../components/globals/NavBar";
import { ARROW_LEFT } from "../../components/svgs";
export default function Page() {
  return (
    <main className="bg-emerald-50/5">
      <NavBar />
      <div className="flex flex-col md:flex-row my-12 w-[95%] md:w-[85%] lg:w-[75%] mx-auto min-h-[80vh] items-center gap-8 sm:gap-4 shrink-0">
        <div className="w-full md:w-1/2 flex flex-col gap-2 px-4">
          <div className="text-3xl font-bold text-slate-600 mb-4 hidden sm:block">
            Experince anonymous message like never before - directly to your
            inbox
          </div>
          <ul className="text-2xl list-none font-semibold">
            <li>
              <span className="text-emerald-700">Step 1: </span> Open Anomm
              (@anomm_bot) bot in your telegram.You can{" "}
              <a
                href="https://t.me/anomm_bot"
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-2"
              >
                click here
              </a>{" "}
              to open directly.
            </li>
            <li className="mt-2">
              <span className="text-emerald-700">Step 2: </span>Click on Start
              button in bot
            </li>
          </ul>
          <div className="mt-4 mb-2 font-regular text-base">
            Completed above steps ?
          </div>
          <Link
            className="transition-all font-semibold text-lg w-fit py-2 px-4 rounded-full text-emerald-900 bg-emerald-100 ring-2 ring-emerald-300 active:scale-90"
            href={"/register/verify"}
          >
            Continue
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-[90%] sm:w-96 mx-auto min-h-[70vh] rounded-2xl relative bg-black/80">
            <div className="absolute top-0 left-0 w-full py-2 bg-sky-500 rounded-tl-xl rounded-tr-xl flex justify-left items-center px-2 gap-4">
              <ARROW_LEFT className="w-6 h-6 stroke-2 text-white" />
              <img src="/logo.png" className="w-10" alt="" />
              <div className="text-white font-normal leading-5 ">
                <span className="text-white font-semibold">Anomm</span> <br />
                bot
              </div>
            </div>
            <div className="font-base font-normal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] bg-white p-2 rounded-lg">
              <div className="font-semibold">What can this bot do?</div>
              Anomm is a free service to deliver anonymous messages directly to
              your telegram
            </div>
            <div className="absolute bottom-0 left-0 w-full rounded-br-xl rounded-bl-xl p-2 text-center bg-sky-100">
              Start
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
