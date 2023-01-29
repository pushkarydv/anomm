"use client";
import axios from "axios";
import React, { useRef } from "react";
import { ARROW_LEFT } from "../../components/svgs";
export default function Page() {
  const username = useRef();

  function botRegister(e) {
    e.preventDefault();

    if (username.current.value != "" && username.current.value != undefined) {
      console.log(username.current.value);
      // axios.post("api/bot/register", {
      //   username: username.current.value,
      // });
    }
  }
  return (
    <div className="bg-emerald-50/5">
      <div className="navbar">navbar</div>
      <div className="flex flex-col md:flex-row my-12 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto min-h-[80vh] items-center gap-4">
        <div className="w-full md:w-1/2">
          <div className="text-xl font-bold text-slate-600">
            Experince anonymous message like never before
          </div>
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
      {/* <form onSubmit={(e) => botRegister(e)}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          ref={username}
        />
        <button type="submit">Proceed</button>
      </form> */}
    </div>
  );
}
