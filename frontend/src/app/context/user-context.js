"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [record, setRecord] = useState(null);

  const fetchUserData = async () => {
    try {
      console.log("GET-USER", user);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        console.log("USER", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  // const fetchRecordData = async () => {
  //   try {
  //     console.log("Record", record);
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(`${apiUrl}/records/profile`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.status === 200) {
  //       setRecord(response.data.record);
  //       console.log("USER", response.record);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  useEffect(() => {
    if (!user) {
    }
    fetchUserData();
  }, [user?.id]);

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
