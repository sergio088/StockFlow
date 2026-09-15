import React, { forwardRef } from "react";

type EmailInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  erro?: boolean;
};

const Emailinput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ onChange, erro }, ref) => {
    return (
      <div>
        <p className="text-gray-400">E-mail de trabalho</p>
        <input
          onChange={onChange} // espalha props se quiser customizar no futuro
          ref={ref}
          className={` w-full  p-2 rounded focus:border-blue-500 
            ${
              erro
                ? "border border-gray-400 placeholder:text-gray-500"
                : "border border-red-500 placeholder:text-red-500"
            }`}
          type="text"
          required
          placeholder="Insira seu endereço de e-mail"
        />
      </div>
    );
  },
);
Emailinput.displayName = "Emailinput";

export default Emailinput;
