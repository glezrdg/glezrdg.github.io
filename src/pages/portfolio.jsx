import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="h-[100vh] flex flex-col items-center justify-evenly relative"
    >
      <div className="absolute top-0 bottom-0 -right-[16vw] -z-10 -left-[16vw] bg-zinc-100 "></div>

      <div className="text-center ">
        <span className="bg-yellow-400  p-1">Portfolio</span>
        <h1 className="text-5xl font-semibold mt-5">
          Some of my most recent projects
        </h1>
      </div>
      <div className="grid grid-cols-4  gap-20">
        <h1 className="text-5xl font-semibold">portfolio</h1>
        <h1 className="text-5xl font-semibold">portfolio</h1>
        <h1 className="text-5xl font-semibold">portfolio</h1>
        <h1 className="text-5xl font-semibold">portfolio</h1>
      </div>
    </section>
  );
};

export default Portfolio;
