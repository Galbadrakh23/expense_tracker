import React, { useContext } from "react";
import { RecordsContext } from "../context/record-context";

const Expenses = () => {
  const { recordInfo } = useContext(RecordsContext);

  return (
    <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
      <div className="flex flex-row gap-4 items-center">
        <span className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
          <img src="home.svg" alt="home" />
        </span>
        <div className="py-2">
          {recordInfo?.expenses?.transaction_type}
          <p className="font-thin text-sm">3 hours ago</p>
        </div>
      </div>
      <span className="text-[#F54949]"> {recordInfo?.expenses?.sum}₮</span>
    </div>
  );
};

export default Expenses;
