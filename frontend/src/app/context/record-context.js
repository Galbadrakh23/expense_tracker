"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [record, setRecord] = useState(null);

  const fetchRecordData = async () => {
    try {
      console.log("Record", record);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/records/profile`, {
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

  useEffect(() => {
    if (!user) {
    }
    fetchRecordData();
  }, [record?.id]);

  return (
    <RecordsContext.Provider value={{ record, fetchRecordData }}>
      {children}
    </RecordsContext.Provider>
  );
};
