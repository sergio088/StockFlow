"use client";

import LoginGoogle from "@/components/login-cadastro/Loginbutton";
import Emailinput from "@/components/login-cadastro/input";
import Title1e2 from "@/components/login-cadastro/title1e2";
import { useRef, useState } from "react";
import ButtonContinuar from "@/components/login-cadastro/buttonContinuar";
import VerificarEmail from "@/components/login-cadastro/verificaremail";
import Senha from "@/components/login-cadastro/senha";

import { signIn } from "next-auth/react";

export default function Cadastro() {
  const emailref = useRef<HTMLInputElement>(null);
  const [email, setemail] = useState("");
  const [codeEmail, setcodeEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarInputSenha, setInputSenha] = useState(false);
  const [message, setmessage] = useState(
    "O codigo de verificaçao expira em 10 minutos",
  );

  async function Continuar() {
    if (codeEmail === "") {
      if (!email) {
        return;
      }

      await fetch("/api/users/cadastro/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      emailref.current?.classList.remove("hidden");
    } else {
      if (senha === "") {
        if (codeEmail === "") {
          return;
        }
        const res = await fetch("/api/users/cadastro/verificationCode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ codeEmail }),
        });
        if (res.status === 200) {
          setInputSenha(true);
        } else {
          setmessage("Codigo errado ou expirado");
        }
      } else {
        if (senha === "") {
          return;
        }
        const res = await fetch("/api/users/cadastro/senha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        });
        if (res.status === 200) {
          signIn("credentials", {
            email,
            senha,
            redirect: true,
            callbackUrl: "/Dashboard",
          });
        }
      }
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="space-y-6 lg:w-1/4 ">
        <Title1e2
          title1="O seu espaço de controle de estoque"
          title2="Crie sua conta no StockFlow"
        ></Title1e2>

        <LoginGoogle></LoginGoogle>

        <Emailinput
          erro
          onChange={(e) => setemail(e.target.value)}
        ></Emailinput>

        <VerificarEmail
          mensagem={message}
          onChange={(e) => setcodeEmail(e.target.value)}
          ref={emailref}
        ></VerificarEmail>
        <Senha
          hidden={!mostrarInputSenha}
          onChange={(e) => setSenha(e.target.value)}
        ></Senha>
        <div className="space-y-5">
          <ButtonContinuar onClick={Continuar} />
        </div>
      </div>
    </div>
  );
}
