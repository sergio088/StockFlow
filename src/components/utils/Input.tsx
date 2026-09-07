import { ChangeEvent } from "react";

interface Inputprops {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  p?: string;
  placeholder: string;
  value?: string | number;
  type?: string;
  className?: string;
}

export default function Input({
  onChange,
  p,
  placeholder,
  value,
  type,
  className,
}: Inputprops) {
  return (
    <div>
      <p className="text-gray-400">{p}</p>
      <input
        type={type ?? "text"}
        required
        placeholder={placeholder}
        onChange={onChange}
        className={
          className ??
          "w-full  p-2 rounded focus:border-blue-500 border border-gray-400 placeholder:text-gray-500"
        }
        value={value}
      />
    </div>
  );
}
