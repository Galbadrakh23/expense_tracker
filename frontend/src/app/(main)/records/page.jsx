"use client";

import RecordsModal from "@/app/components/records-modal";
import React from "react";
import { FaEye } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { PlusIcon } from "@/icons";
import { useState } from "react";
import Expenses from "@/app/components/expenses";
import IncomeRecords from "@/app/components/Income-data";

const Records = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="container grid grid-cols-3 mt-6 gap-2 bg py-4 mx-[120px] rounded-2xl">
        <div className="container rounded-2xl w-full h-screen flex flex-col gap-6 bg-[#F9FAFB] border border-[#E5E7EB] py-4 mx-4 px-4">
          <p className="text-2xl font-medium">Records</p>
          <button
            onClick={handleOpen}
            className="btn bg-[#0166FF] text-[#FFFFFF] font-normal text-base flex justify-center rounded-full"
          >
            <PlusIcon></PlusIcon> Add
          </button>
          <RecordsModal isOpen={open} onClose={handleClose} />
          <input
            type="text"
            placeholder="  Search"
            className="py-2 rounded-lg"
          />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold">Type</h1>
            <div>All</div>
            <div>Income</div>
            <div>Expense</div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Category</h1>
              <button className="btn bg-none font-normal opacity-50">
                Clear
              </button>
            </div>
            {/*Map*/}
            <div className="flex flex-col gap-4 mx-4">
              <div className="flex items-center gap-2">
                <FaEye />
                Food & Drinks
              </div>
              <div className="flex items-center gap-2">
                <FaEye />
                Shopping
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pl-8 justify-between">
          <div className="flex items-center gap-4">
            <button className="btn btn-square">
              <SlArrowLeft />
            </button>
            Last 30 Days
            <button className="btn btn-square">
              <SlArrowRight />
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex flex-col w-[664px] px-4">
              <span className="font-medium text-xl">Today</span>
              <Expenses />
            </div>
            <div className="flex flex-col w-[664px] mt-4 px-4">
              <span className="font-medium text-xl">Yesterday</span>
              <IncomeRecords />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
