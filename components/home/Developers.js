import React from "react";
import { GITHUB_ICON } from "../svgs";

export default function Developers() {
  return (
    <section className="mx-4 md:mx-8 my-12 md:my-16 lg:my-24" id="developers">
      {/* a section for open source gnu license  */}
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-4xl font-bold">Hey Developers</h2>
      </div>
      <div className="container mx-auto w-[90%] lg:w-[80%] xl:w-[70%] flex items-center flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <GITHUB_ICON className="w-full" />
        </div>
        <div className="w-full md:w-2/3">
          <div className="text-lg font-semibold">
            We are open source and you can contribute to this project on github.{" "}
            <br />
            We are using GNU license so you can use this project for your own
            use as well.
          </div>
          <div className="my-4 flex flex-row gap-4">
            <a
              className="bg-sky-700 text-white transition-all hover:scale-95 font-semibold py-2 px-4 rounded-lg cursor-pointer hover:shadow-md hover:shadow-black/10"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/pushkarydv/anomm"
            >
              View Repository 🚀
            </a>
          </div>
          <div className="text-lg font-semibold text-slate-600">
            You can star us on github if you like the project. And feel free to
            make any Pull Request, Feedback and mentioning bugs. Licensed under
            GPL-3.0 ©pushkarydv
          </div>
        </div>
      </div>
    </section>
  );
}
