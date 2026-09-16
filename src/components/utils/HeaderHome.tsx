"use client";

import MySidebar from "../Dashboard/Sidebar";
import { useState, useEffect, useRef } from "react";
import { User } from "@/lib/perfil.user";
import { signOut } from "next-auth/react";

export default function Headerdash() {
  const [open, setopen] = useState(false);
  const menuref = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("sem nome");
  const [image, setImage] = useState<string>();

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

  useEffect(() => {
    async function userData() {
      const user = await User();
      const nome = user.name;
      setName(nome);
      setImage(user.image);
    }
    userData();
  }, []);

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
            <div></div>
            <div className="flex items-center space-x-3">
              <span>
                <img
                  src={image}
                  alt="imagem de perfil"
                  className="border border-none size-12 rounded-full"
                />
              </span>
              <p className="font-semibold">{name}</p>
              <button
                onClick={async () =>
                  await signOut({
                    callbackUrl: "/login",
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out"
                >
                  <path d="m16 17 5-5-5-5" />
                  <path d="M21 12H9" />
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && <MySidebar ref={menuref} />}
    </section>
  );
}
