import React from "react";
import { motion } from "framer-motion";

const Landing_uklidime: React.FC = () => {
  return (
    <div className="font-monserrat">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[10vmin]"
      >
        <span className="text-[#6CA0D8]">Uklidíme </span>
        <span>za Vás</span>
      </motion.h1>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        className="text-[3vmin] md:text-[2vmin]"
      >
        Rychle, spolehlivě a s úsměvem.
      </motion.p>
    </div>
  );
};

export default Landing_uklidime;
