"use client";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import { apiUrl } from "../../../utils/util";
import { toast } from "react-toastify";
import HomeRecords from "../../components/home-records";
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
        <Cards cardInfo={transactionData} />
        <div className="flex gap-6 mt-6">
          <div className="w-full h-full rounded-xl border border-[#0166FF]">
            <div className="flex gap-2 items-center py-4 px-6 border-b border-gray-200 justify-between">
              Income - Expense
              <p className="font-thin"> Date </p>
            </div>
            <BarChart barInfo={barInfo} />

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
