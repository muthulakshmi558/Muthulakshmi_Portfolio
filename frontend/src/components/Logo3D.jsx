// src/components/LogoML.jsx
import { motion } from "framer-motion";

const LogoML = () => {
  return (
    <motion.div
      className="text-[#00AEEF] font-extrabold text-3xl cursor-pointer select-none"
      animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
      transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      whileHover={{ scale: 1.2, rotate: 360 }}
    >
      ML
    </motion.div>
  );
};

export default LogoML;
