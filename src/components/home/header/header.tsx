import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import plantImage from "../../../assets/pngs/plant.png";
import { DrawerPanel } from "@/components/layout/drawer";

export function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = async () => {
    setIsHovered(true);
    await controls.start({ x: 100, width: 100 });
  };

  const handleHoverEnd = async () => {
    setIsHovered(false);
    await controls.start({ x: 0, width: "100%" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg z-50"
    >
      <div className="h-24 flex justify-around items-center">
        <motion.button
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          whileHover={{ scale: 1.05, backgroundColor: "#4ade80" }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-green-600 rounded-lg text-white font-semibold shadow-md transition-all"
        >
          <DrawerPanel />
        </motion.button>
        <div className="flex gap-2 items-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <img className="w-10 h-10" src={plantImage} alt="Plant Logo" />
          </motion.div>
          <motion.span
            whileHover={{ scale: 1.05, color: "#a7f3d0" }}
            className="text-xl font-bold cursor-pointer"
          >
            پنل ادمین ارگانیک شاپ
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={{ x: 0, width: "100%" }}
        animate={controls}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-1 bg-green-500 mt-2 transform origin-left"
      />
    </motion.header>
  );
}
