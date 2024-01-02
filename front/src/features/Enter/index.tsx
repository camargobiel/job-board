import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

export const Enter = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggle = () => {
    setIsLoginVisible((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggle}>{isLoginVisible ? "Cadastro" : "Login"}</button>
      <AnimatePresence>
        {isLoginVisible ? <Login /> : <Register />}
      </AnimatePresence>
    </>
  );
}
