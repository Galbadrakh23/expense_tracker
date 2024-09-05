import React from "react";

const HomeRecords = () => {
  return (
    <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
      <div className="flex flex-row gap-4 items-center">
        <span className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
          <img src="home.svg" alt="home" />
        </span>
        <p className="py-2">
          Lending & Renting <p className="font-thin text-sm">3 hours ago</p>
        </p>
      </div>
      <p className="text-[#84CC16]">-1,000₮</p>
    </div>
  );
};

export default HomeRecords;
