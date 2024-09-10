"use client";

import RecordsModal from "@/app/components/records-modal";
import React from "react";
import { FaEye } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { PlusIcon } from "@/icons";
import HomeRecords from "@/app/components/home-records";
import { useState } from "react";

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
      <div className="container grid grid-cols-3 mx-[120px] mt-6 gap-2">
        <div className="container rounded-lg w-full h-screen flex flex-col gap-6 bg-slate-100 py-4 px-4">
          <p className="text-2xl font-medium">Records</p>
          <button
            onClick={handleOpen}
            className="btn bg-[#0166FF] text-[#FFFFFF] font-normal text-base flex justify-center"
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
            <div className="flex items-center gap-2">
              <FaEye />
              Food & Drinks
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
            <div className="flex flex-col w-[664px]">
              <span className="font-medium text-xl">Today</span>
              <HomeRecords />
            </div>
            <div className="flex flex-col w-[664px] mt-4">
              <span className="font-medium text-xl">Yesterday</span>
              <HomeRecords />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
