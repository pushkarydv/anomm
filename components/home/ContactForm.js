"use client";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../../config/firebase";
import { ARROW_LEFT } from "../svgs";

export default function ContactForm() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [processing, setProcessing] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);
  function sendMessage(e) {
    e.preventDefault();
    if (
      email.current.value != "" &&
      name.current.value != "" &&
      message.current.value != ""
    ) {
      setProcessing(true);
      axios
        .post("/api/contact", {
          name: name.current.value,
          email: email.current.value,
          message: message.current.value,
        })
        .then((res) => {
          setServerResponse(true);
          // Save to firestore as contact data might lost in telegram
          addSupport(res.data.data.result.text);
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
    <section className="m-4 md:m-8">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>
      <div className="w-[75%] sm:w-[55%] md:w-[45%] lg:w-[35%] xl:w-[30%] 2xl:w-96 p-4  rounded-xl  bg-emerald-100 mx-auto">
        {!processing && serverResponse == null && (
          <form
            className="w-full transition-all"
            onSubmit={(e) => sendMessage(e)}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              min={1}
              max={200}
              ref={name}
              required={true}
              autoCapitalize="off"
              className="transition-all font-semibold text-lg w-full py-2 px-3 mb-4 rounded-xl text-emerald-700 outline-none ring-2 ring-emerald-100 focus:ring-emerald-400 resize-none"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              min={1}
              max={200}
              ref={email}
              required={true}
              autoCapitalize="off"
              className="transition-all font-semibold text-lg w-full py-2 px-3 mb-4 rounded-xl text-emerald-700 outline-none ring-2 ring-emerald-100 focus:ring-emerald-400 resize-none"
              autoComplete="off"
            />
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="write some message"
              min={1}
              max={200}
              ref={message}
              rows={3}
              required={true}
              autoCapitalize="off"
              className="transition-all font-semibold text-lg w-full py-2 px-3 mb-4 rounded-xl text-emerald-700 outline-none ring-2 ring-emerald-100 focus:ring-emerald-400 resize-none"
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
    </section>
  );
}

async function addSupport(text) {
  await addDoc(collection(db, "support"), {
    data: text,
  });
}
