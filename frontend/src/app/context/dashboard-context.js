"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { toast } from "react-toastify";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const [cardInfo, setCardInfo] = useState(null);

  const getChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("ST", res.data.donut, res.data.bar);
      setChartData({ donut: res.data.donut, bar: res.data.bar });
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

  useEffect(() => {
    getChartData();
    getInfoCardData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        bar: chartData?.bar,
        donut: chartData?.donut,
        cardInfo,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
