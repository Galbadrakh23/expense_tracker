"use client";

import { Header } from "../components";
import { DashboardProvider } from "../context/dashboard-context";
import { RecordsProvider } from "../context/record-context";

const Layout = ({ children }) => {
  return (
    <DashboardProvider>
      <RecordsProvider>
        <Header />
        <main className="bg-[#F3F4F6] h-screen">{children}</main>
      </RecordsProvider>
    </DashboardProvider>
  );
};

export default Layout;
