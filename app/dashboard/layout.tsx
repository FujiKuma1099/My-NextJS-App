import React from "react";
import SideNav from "../ui/dashboard/sidenav";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-1 md:overflow-y-auto ">{children}</div>
      <SideNav />
    </div>
  );
}

export default Layout;
