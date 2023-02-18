import React from "react";

export default function Home(props) {
  console.log("LOGGER: Home.js: props:", props);

  return (
    <div className="px-3 py-4 rounded-lg shadow-md shadow-slate-400">
      <h1 className="text-4xl font-semibold">Home Component</h1>
      <div className="">
        <span>No Stuff</span>
      </div>
    </div>
  );
}
