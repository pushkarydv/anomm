"use client";
import axios from "axios";
import Link from "next/link";
import React, { useRef, useState } from "react";
import NavBar from "../../../components/globals/NavBar";
import { ARROW_LEFT } from "../../../components/svgs";

export default function Page() {
  const username = useRef();
  const [processing, setProcessing] = useState(false);
  const [user, setUser] = useState(null);
  function botRegister(e) {
    e.preventDefault();

    if (username.current.value != "" && username.current.value != undefined) {
      setProcessing(true);
      console.log(username.current.value);
      axios
        .post("/api/bot/register", {
          username: username.current.value,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.response.data.error);
        })
        .finally(() => {
          setProcessing(false);
        });
    }
  }
  return (
    <main className="bg-emerald-50/5">
      <NavBar />
      <div className="my-12 px-4">
        <Link
          className="transition-all font-semibold text-lg w-fit py-1 px-3 mb-4 rounded-full text-emerald-700 ring-2 ring-emerald-400 active:scale-90 flex flex-row gap-1 justify-center items-center"
          href={"/register"}
        >
          <ARROW_LEFT className="w-6" /> Previous
        </Link>
        <div className="mt-12 text-xl text-justify sm:text-center">
          Now once you press start on bot, Just verify it by entering your
          telegram username
        </div>
        <div className="font-bold text-slate-800 mt-2 md:text-center">
          Small and Capital letters matter in username
        </div>
        <div className="transition-all w-full sm:w-96 mx-auto my-8 py-4 text-center">
          {/* only show form if not processign and no user data return from api */}
          {!processing && user == null && (
            <form
              onSubmit={(e) => botRegister(e)}
              className="w-full transition-all"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                min={1}
                max={200}
                required={true}
                ref={username}
                autoCapitalize="off"
                className="transition-all font-semibold text-lg w-full py-2 px-3 mb-4 rounded-full text-emerald-700 outline-none ring-2 ring-emerald-200 focus:ring-emerald-400"
                autoComplete="off"
              />
              <button
                type="submit"
                className="transition-all font-semibold text-lg w-fit py-1 px-3 rounded-full text-emerald-50 ring-2 ring-emerald-600 bg-emerald-600 active:scale-90 float-right"
              >
                Continue
              </button>
            </form>
          )}
          {/* In case of processing show loader */}
          {processing && (
            <>
              <div className="loader w-32 mx-auto bg-emerald-200 rounded-full relative h-2 overflow-hidden">
                <div className="loader-inner absolute h-2 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="font-semibold text-slate-600 pt-4">
                Please wait we are checking data on server
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
