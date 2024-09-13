"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { apiUrl } from "../../../utils/util";
import { toast } from "react-toastify";
import BarChart from "@/app/components/dashboard/BarChart";
import Cards from "@/app/components/dashboard/Cards";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import DoughnurChart from "@/app/components/dashboard/Doughnut";
import IncomeRecords from "@/app/components/Income-data";
import Expenses from "@/app/components/expenses";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);
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
    getBarChartData();
  }, [user?.id]);

  return (
    <div>
      <div className="container mx-auto pt-12">
        {/*Cards*/}
        <Cards />
        {/*Bar*/}
        <div className="flex gap-6 mt-6">
          <div className="w-1/2 rounded-xl border border-[#0166FF]">
            <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200 justify-between">
              Income - Expense
              <p className="font-thin"> Date </p>
            </div>
            <BarChart barInfo={barInfo} />
          </div>
          {/*Donuts*/}
          <div className="w-1/2 h-full rounded-xl border border-[#0166FF] pb-28">
            <div className="flex gap-2 items-center py-4 px-6 border-b justify-between">
              Income - Expense
              <p className="font-thin"> Jun 1 - Nov 30 </p>
            </div>
            <DoughnurChart />
          </div>
        </div>
        {/*Last Records*/}
        <div className="w-full h-[full] rounded-xl border border-[#0166FF] mt-6">
          <div className="flex justify-between gap-2 items-center py-4 px-6 border-b border-gray-200">
            <span className="font-semibold">Last Records</span>
            <span className="font-thin"> Jun 1 - Nov 30</span>
          </div>
          {/*Records дууссаны дараа map ашиглах*/}
          <IncomeRecords />
          <Expenses />
          <IncomeRecords />
          <Expenses />
          <IncomeRecords />
          <Expenses />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
