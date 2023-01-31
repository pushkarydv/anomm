"use client";
import React, { useRef, useState } from "react";
import NavBar from "../../components/globals/NavBar";
import { ARROW_LEFT } from "../../components/svgs";

export default function Page() {
  const messageText = useRef();
  const [processing, setProcessing] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);
  function sendMessage(e) {
    e.preventDefault();

    if (
      messageText.current.value != "" &&
      messageText.current.value != undefined
    ) {
      setProcessing(true);
      // axios
      //   .post("/api/message", {
      //     id: user_id,
      //     message: messageText.current.value,
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((err) => {
      //     alert(err.response.data.error);
      //   })
      //   .finally(() => {
      //     setProcessing(false);
      //   });
      setTimeout(() => {
        setProcessing(false);
        setServerResponse(true);
      }, 3000);
    }
  }
  return (
    <main className="bg-gradient-to-tr from-green-300 to-blue-400 min-h-screen">
      <NavBar />
      <div className="min-h-[80vh] rounded-2xl flex justify-center items-center">
        <div className="w-[75%] sm:w-[55%] md:w-[45%] lg:w-[35%] xl:w-[30%] 2xl:w-96 p-4 bg-white  rounded-xl shadow-2xl shadow-black/10">
          {!processing && serverResponse == null && (
            <form
              className="w-full transition-all"
              onSubmit={(e) => sendMessage(e)}
            >
              <textarea
                type="text"
                name="messageText"
                id="messageText"
                placeholder="write some message"
                min={1}
                max={200}
                required={true}
                ref={messageText}
                rows={3}
                autoCapitalize="off"
                className="transition-all font-semibold text-lg w-full py-2 px-3 mb-4 rounded-xl text-emerald-700 outline-none ring-2 ring-emerald-200 focus:ring-emerald-400 resize-none"
                autoComplete="off"
              />
              <button
                type="submit"
                className="transition-all font-semibold text-lg w-fit py-1 px-3 rounded-full text-emerald-50 ring-2 ring-emerald-600 bg-emerald-600 active:scale-90 float-right flex flex-row items-center"
              >
                SEND <ARROW_LEFT className="w-6 stroke-[2] rotate-180" />
              </button>
            </form>
          )}
          {/* In case of processing show loader */}
          {processing && (
            <div className="my-6">
              <div className="loader w-32 mx-auto bg-emerald-200 rounded-full relative h-2 overflow-hidden">
                <div className="loader-inner absolute h-2 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="font-semibold text-slate-600 pt-4 text-center">
                Encrypting and sending
              </div>
            </div>
          )}
          {/* In case of processing show loader */}
          {serverResponse && (
            <div className="my-6 font-semibold text-slate-800 text-center">
              Successfully sent! 🎉 <br /> Help us grow by sharing <br />{" "}
              <a
                className="transition-all font-semibold text-base w-fit py-1 rounded-full text-emerald-50 ring-2 ring-sky-600 bg-sky-600 active:scale-90 flex flex-row items-center mx-auto mt-4 px-4"
                target="_blank"
                rel="noopener noreferrer"
                href={`http://twitter.com/share?text=${encodeURIComponent(
                  "Anomm is a free service to deliver anonymous messages directly to your telegram. \nhttps://anomm.pushkaryadav.in"
                )}`}
              >
                Tweet
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
