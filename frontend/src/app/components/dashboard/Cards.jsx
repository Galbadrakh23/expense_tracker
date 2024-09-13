import { DashboardContext } from "@/app/context/dashboard-context";
import React, { useContext } from "react";

const Cards = () => {
  const { cardInfo } = useContext(DashboardContext);
  // console.log("Card info ", expenses);

  return (
    <div>
      <div className="container grid grid-cols-3 gap-4 mx-auto">
        <div className="w-full h-[216px] rounded-xl bg-gradient-to-r from-[#0166FF] to-[#2F8FFF] shadow-lg relative">
          <img
            src="./geld-white.svg"
            alt="logo"
            className="relative top-8 left-8"
          />
          <div className="text-white pt-24 pl-8">
            <p className="opacity-50 font-normal">Cash</p>
            <span className="font-normal"> ₮ 10,000,000</span>
          </div>
        </div>
        {/* INC */}
        <div className="w-full h-[216px] rounded-xl border border-[#0166FF]">
          <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200">
            <img src="greendot.svg" alt="" />
            Your income
          </div>
          <div className="flex flex-col py-[10px] px-6">
            <p className="font-semibold text-3xl py-2">
              {cardInfo?.incomes?.sum}₮
            </p>
            <p className="font-thin text-sm py-2">Your income Amount</p>
            <p className="flex gap-2 font-normal text-sm py-4">
              <img src="income-up.svg" alt="income" /> 32% from last month
            </p>
          </div>
        </div>
        <div className="w-full h-[216px] rounded-xl border border-[#0166FF]">
          <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200">
            <img src="bluedot.svg" alt="" />
            Total Expenses
          </div>
          <div className="flex flex-col py-[10px] px-6">
            <p className="font-semibold text-3xl py-2">
              {cardInfo?.expenses?.sum}₮
            </p>
            <p className="font-thin text-sm py-2">Your expense Amount</p>
            <p className="flex gap-2 font-normal text-sm py-4">
              <img src="down-side.svg" alt="income" /> 32% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
