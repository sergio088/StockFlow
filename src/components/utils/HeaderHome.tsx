"use client";

import MySidebar from "../Dashboard/Sidebar";
import { useState, useEffect, useRef } from "react";

export default function Headerdash() {
  const [open, setopen] = useState(false);
  const menuref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function outsideclick(event: MouseEvent) {
      if (menuref.current && !menuref.current.contains(event.target as Node)) {
        setopen(false);
      }
    }

    if (open) {
      document.addEventListener("click", outsideclick);
    }

    return () => document.removeEventListener("click", outsideclick);
  });

  return (
    <section>
      <div className="p-[15px] bg-white">
        <div className="flex justify-between">
          <div
            className="border border-gray-200 p-[10px] rounded-[10px]"
            onClick={() => setopen(!open)}
          >
            <div>
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex">
            <div>
              <p className="font-semibold">Sergio Santos</p>
              <p className="text-gray-400">Dev Full-Stack</p>
            </div>
          </div>
        </div>
      </div>
      {open && <MySidebar ref={menuref} />}
    </section>
  );
}
