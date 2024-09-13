"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [record, setRecord] = useState(null);
  const [recordInfo, setRecordInfo] = useState(null);

  const fetchRecordData = async () => {
    try {
      console.log("Record", record);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/records/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setRecord(response.data.record);
        console.log("USER", response.record);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const getRecordData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("setRecordInfo", res.data);
      setRecordInfo(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchRecordData();
    getRecordData();
  }, []);

  return (
    <RecordsContext.Provider value={{ fetchRecordData, recordInfo }}>
      {children}
    </RecordsContext.Provider>
  );
};
