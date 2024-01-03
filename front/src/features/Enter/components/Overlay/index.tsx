import { motion } from "framer-motion";
import { GoToLoginOverlay } from "./components/GoToLoginOverlay";
import { GoToRegisterOverlay } from "./components/GoToRegisterOverlay";

interface OverlayProps {
  isLoginVisible: boolean;
  toggle: () => void;
}

export const Overlay = ({ isLoginVisible, toggle }: OverlayProps) => {
  return (
    <motion.section
      initial={{ x: isLoginVisible ? "0%" : "100%" }}
      animate={{ x: isLoginVisible ? "0%" : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {isLoginVisible ? (
        <GoToRegisterOverlay toggle={toggle} />
      ) : (
        <GoToLoginOverlay toggle={toggle} />
      )}
    </motion.section>
  );
};
