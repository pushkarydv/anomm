import React from "react";

export default function Features() {
  return (
    <section className="m-4 md:m-8" id="features">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-4xl font-bold">Why Us?</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] xl:w-[70%]">
        <Feature
          title="Lightening Fast"
          description="It takes just less then a second and delivered into your telegram"
        />
        <Feature
          title="Free"
          description="As of now this service is completely free with unlimites messages per account"
        />
        <Feature
          title="Privacy"
          description="We don't save any of your messages or data. Direct end to end transfer"
        />
      </div>
    </section>
  );
}

export const Feature = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-violet-50 rounded-lg py-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        ></path>
      </svg>
      <h3 className="my-3 text-3xl font-semibold">{title}</h3>
      <div className="space-y-1 leading-tight text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};
