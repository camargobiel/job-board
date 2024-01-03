import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Overlay } from "./components/Overlay";
import { AnimatePresence, motion } from "framer-motion";

export const Enter = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggle = () => {
    setIsLoginVisible((prev) => !prev);
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <AnimatePresence >
        {isLoginVisible ? (
          <motion.div
            key="login"
            initial={{ x: "0%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5 }}
          >
            <Login />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ x: "100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <Register />
          </motion.div>
        )}
      </AnimatePresence>
      <Overlay
        isLoginVisible={isLoginVisible}
        toggle={toggle}
      />
    </section>
  );
}
