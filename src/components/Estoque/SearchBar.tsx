"use client";
import { ChangeEvent } from "react";
interface searchBarprops {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ onChange }: searchBarprops) {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        required
        placeholder="Pesquisar"
        className="w-full px-2 bg-white py-1.5 rounded focus:border-blue-500 border border-gray-400 placeholder:text-black"
      />
      {/* {open && (<div></div>)} */}
    </div>
  );
}
