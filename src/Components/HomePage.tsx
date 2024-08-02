import { ReactElement } from "react";
import { motion } from "framer-motion";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import VideoSection from "./VideoSection";
import VideoOptions from "./VideoOptions";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}

interface DropMenuOptions extends SideOptionsKeys {}

const HomePage = () => {

  return (
    <div>
      <NavBar />
      <div className="border border-gray-800 display: flex flex-row justify-evenly">
        <SideBar />
        <VideoSection />
      </div>

      
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className="border border-gray-200 px-4 py-0.5 rounded-xl absolute right-14 bottom-8"
      >
        Get app
      </motion.button>
    </div>
  );
};

export default HomePage;
