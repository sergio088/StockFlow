import { forwardRef } from "react";

interface Senhaprops {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hidden?: boolean;
}

const Senha = forwardRef<HTMLInputElement, Senhaprops>(
  ({ onChange, hidden = false }, ref) => {
    return (
      <div ref={ref} className={`${hidden ? "hidden" : ""}`}>
        <input
          type="password"
          placeholder="Senha"
          onChange={onChange}
          className="border border-gray-400 placeholder:text-gray-500 px-1 py-2 w-full"
        />
        <p className="text-gray-400">Senha deve ter no minimo 6 digitos</p>
      </div>
    );
  },
);
Senha.displayName = "Senha";
export default Senha;
