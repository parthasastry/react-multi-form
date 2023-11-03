import React from "react";

const Main = () => {
  return (
    <div>
      <div className="mb-6 text-center text-2xl font-bold  sm:text-3xl">
        Please enter details in the form below
      </div>
      <form className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-xl sm:text-2xl">
        <label>Subject</label>
        <input
          className="border border-solid"
          type="text"
          placeholder="Your subject"
        />
        <label>Message</label>
        <textarea
          className="w-full rounded-xl border border-solid  p-3 text-xl text-black sm:text-2xl"
          placeholder="Message"
        ></textarea>
        <button className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Main;
