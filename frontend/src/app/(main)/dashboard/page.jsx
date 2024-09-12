"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { apiUrl } from "../../../utils/util";
import { toast } from "react-toastify";
import HomeRecords from "../../components/home-records";
import BarChart from "@/app/components/dashboard/BarChart";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import DoughnurChart from "@/app/components/dashboard/Doughnut";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);
  const [cardInfo, setCardInfo] = useState(null);
  const [barInfo, setBarInfo] = useState(null);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setTransactionData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  const getInfoCardData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Transaction Data", res.data);
      setCardInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };
  const getBarChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/bar`);
      console.log("Bar Data", res.data);
      setBarInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchTransactions();
    getInfoCardData();
    getBarChartData();
  }, [user?.id]);

  return (
    <div>
      <div>
        {transactionData?.transactions?.map((transaction, index) => {
          return (
            <div key={index} className="flex">
              <img src="/income.svg" alt="income" />
              <div>
                <p className="mb-1">{transaction?.name}</p>
                <p className="text-[#6B7280]">{transaction?.createdat}</p>
              </div>
            </div>
          );
        })}
        <div className="container mx-auto mt-6">
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
                  {cardInfo?.incomes.sum}₮
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
                  {cardInfo?.expenses.sum}₮
                </p>
                <p className="font-thin text-sm py-2">Your expense Amount</p>
                <p className="flex gap-2 font-normal text-sm py-4">
                  <img src="down-side.svg" alt="income" /> 32% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <div className="w-full h-full rounded-xl border border-[#0166FF]">
              <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200 justify-between">
                Income - Expense
                <p className="font-thin"> Date </p>
              </div>
              <BarChart barInfo={barInfo} />
              {/* <div
                role="status"
                className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-baseline mt-4">
                  <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                  <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                  <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div> */}
            </div>
            {/* <div className="w-1/2 h-full rounded-xl border border-[#0166FF]">
              <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
                <p> Income - Expense</p>
                <p className="font-thin"> Jun 1 - Nov 30</p>
              </div>
              <div
                role="status"
                className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-baseline mt-4">
                  <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                  <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                  <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                  <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </div> */}
            <div className="w-full h-full rounded-xl border border-[#0166FF]">
              <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200 justify-between">
                Income - Expense
                <p className="font-thin"> Jun 1 - Nov 30 </p>
              </div>

              <DoughnurChart />
            </div>
          </div>

          <div className="mt-6" />
          <div className="w-full h-[full] rounded-xl border border-[#0166FF]">
            <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
              <span className="font-semibold">Last Records</span>
              <span className="font-thin"> Jun 1 - Nov 30</span>
            </div>
            {/*Records дууссаны дараа map ашиглах*/}
            <HomeRecords />
            <HomeRecords />
            <HomeRecords />
            <HomeRecords />
            <HomeRecords />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
