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
    <div className="flex flex-col h-screen mx-[120px] pt-8">
      {/* Sidebar */}
      <div className="flex gap-6">
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-6 rounded-lg h-full w-1/4">
          <p className="text-2xl font-medium mb-6">Records</p>
          <button
            onClick={handleOpen}
            className="bg-[#0166FF] text-white text-base py-2 px-4 rounded-full flex items-center justify-center gap-2"
          >
            <PlusIcon /> Add
          </button>
          <RecordsModal isOpen={open} onClose={handleClose} />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 rounded-lg mt-4 border border-gray-300"
          />
          <div className="mt-6">
            <h1 className="font-semibold">Type</h1>
            <div className="mt-2 text-base">All</div>
            <div className="text-base">Income</div>
            <div className="text-base">Expense</div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Category</h1>
              <button className="text-sm opacity-50">Clear</button>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <FaEye className="text-gray-400" />
                <span>Food & Drinks</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaEye className="text-gray-400" />
                <span>Shopping</span>
              </div>
              {/* Add more categories as needed */}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <button className="p-2 border rounded-full">
                <SlArrowLeft />
              </button>
              <span>Last 30 Days</span>
              <button className="p-2 border rounded-full">
                <SlArrowRight />
              </button>
            </div>
            <p className="text-[#0166FF] font-normal">Newest first</p>
          </div>

          {/* Records */}
          <div className="border-t pt-6">
            <div className="mb-6">
              <h2 className="font-medium text-lg">Today</h2>
              <Expenses />
            </div>
            <div>
              <h2 className="font-medium text-lg">Yesterday</h2>
              <IncomeRecords />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
