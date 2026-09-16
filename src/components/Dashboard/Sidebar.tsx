"use client";

import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { forwardRef } from "react";

const MySidebar = forwardRef<HTMLDivElement, object>((props, ref) => {
  return (
    <div ref={ref} className="fixed top-0 left-0 flex h-screen w-64 z-[9999] ">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "transparent !important",
          },
          [`.${sidebarClasses.root}`]: {
            opacity: 1,
            backgroundColor: "transparent !important",
          },
        }}
        className="bg-[#212B36] text-white "
      >
        <Menu>
          <MenuItem href="/" className="mb-5">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 w-5 h-5 rounded"></div>
              <span>StockFlow</span>
            </div>
          </MenuItem>
          <h1 className="text-white font-semibold ml-5">Menu</h1>
          <div className="ml-5">
            <MenuItem href="/Dashboard" className="hover:bg-blue-950">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span>Home</span>
              </div>
            </MenuItem>
            <MenuItem href="/Estoque">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <span>Estoque</span>
              </div>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
});
MySidebar.displayName = "MySidebar";

export default MySidebar;
