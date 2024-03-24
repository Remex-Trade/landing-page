import React from "react";

const page = () => {
  return (
    <div className="flex w-[100vw]">
      <div
        id="sidebar"
        className="h-[100vh] mb-10 rounded-b-xl w-[20vw] bg-[#151415] border-[#2C2D2D] border-[1px]"
      >
        Sidebar
      </div>
      <div className="w-[60vw] h-[100vh]">
        <div className="w-[80vw] h-[4vh] bg-[#151415] border-[#2C2D2D] border-[1px]">
          Trending
        </div>
        <div className="flex">

        <div className="flex flex-col h-[92vh] justify-center items-start m-10 gap-10 ">
          <div
            id="middle-top"
            className=" rounded-xl bg-[#151415] border-[#2C2D2D] border-[1px] w-[55vw] h-[46vh]"
            ></div>
          <div
            id="middle-bottom"
            className="rounded-xl bg-[#151415] border-[#2C2D2D] border-[1px] w-[55vw] h-[46vh]"
            ></div>
        </div>
        <div id="right-order sticky inset-y-0">
          <div className="mt-10 bg-[#151415] border-[#2C2D2D] rounded-xl border-[1px] h-[70vh] sticky w-[20vw]">

          </div>
        </div>
            </div>
      </div>
    </div>
  );
};

export default page;
