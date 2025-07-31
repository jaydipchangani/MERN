import React from "react";
import SocialLink from "./SocialLink";

function LeftComponent({ onScrollToAbout, onScrollToExperience, onScrollToProjects }) {

  return (
    <div className="w-1/3 bg-blue-300 hover:bg-blue-200 transition-all duration-500 ">
      <div className=" flex justify-start items-end text-4xl h-1/4 ml-20 bg-orange-500 font-bold">
        Jaydip Changani
      </div>
      <div className="flex justify-start items-center text-2xl bg-red-600 ml-20 ">
        Software Developer
      </div>

      <div className=" flex justify-start items-end text-1xl mt-5 ml-20 bg-green-500 w-1/2">
        I build accessible, pixel-perfect digital experiences for the web.
      </div>

      <div className="flex justify-start items-end mt-10 ml-20 bg-yellow-500 w-1/2">
        <ul>
          <li   onClick={onScrollToAbout} className="my-3 tracking-wider font-normal hover:tracking-widest hover:font-bold cursor-pointer  ">
            ABOUT
          </li>
          <li onClick={onScrollToExperience} className="my-3 tracking-wider hover:font-bold hover:tracking-widest cursor-pointer">
            EXPERIENCE
          </li>
          <li onClick={onScrollToProjects} className="my-3 tracking-wider hover:font-bold hover:tracking-widest cursor-pointer">
            PROJECTS
          </li>
        </ul>
      </div>

      <SocialLink />
    </div>
  );
}

export default LeftComponent;
