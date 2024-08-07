import { ReactElement, useState, useEffect } from "react";
import { motion } from "framer-motion";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import VideoSection from "./VideoSection";
import VideoOptions from "./VideoOptions";
import LogInModal from "./LogInModal";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}
const src =
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop";
  
interface DropMenuOptions extends SideOptionsKeys {}

const HomePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const handleUserSession = () => {
    localStorage.setItem("user-login-token", "tiktok-user-juewell");
    const userLoginToken = localStorage.getItem("user-login-token");

    if (userLoginToken !== "guest") {
      setTimeout(() => {
        setShowModal(false);
        setIsLoggedIn(true);
      }, 5000);
    }

    if (userLoginToken === "user-login-token") {
      setTimeout(() => {
        localStorage.removeItem("user-login-token");
        setIsLoggedIn(false);
        setShowModal(true);
      });
    }
  };

  // useEffect(() => {
  //   handleUserSession();
  // }, []);

  return (
    <div>
      <NavBar isUserLoggedIn={isLoggedIn} sourceImg={src} />
      <div className="border border-gray-800 display: flex flex-row justify-evenly">
        <SideBar />
        <VideoSection isLoggedIn={isLoggedIn} />
        {showModal && <LogInModal closeModal={() => setShowModal(false)} />}
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
