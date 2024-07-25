import React, { ReactElement, ReactNode } from "react";
import constants from "../config/constants";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext, IconType } from "react-icons";



interface SideOptionsKeys {
  menuOption: string
  icon: Partial<ReactElement>
}

const HomePage = () => {

  const sideOptions: SideOptionsKeys[] = [
    { menuOption: "For You", icon: <AiFillHome /> },
    { menuOption: "Explore", icon: <FaRegCompass /> },
    { menuOption: "Following", icon: <GoPeople /> },
    { menuOption: "LIVE", icon: <RiLiveLine /> },
    { menuOption: "Profile", icon: <IoPersonOutline /> },
  ];

  const infoOptions = ["Company", "Program", "Terms & Policies"]

  return (
    <div>
      <div className="px-5 py-3 border-b border-gray-400 display: flex flex-row justify-between">
        <img src="src/Images/TikTokTitle.png" alt="TikTok" width={"10%"} />

        <div className="rounded-full px-3 pl-3 w-96 bg-gray-200 display: flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-80 bg-inherit rounded-bl-full rounded-tl-full"
          />
          <div className="border-l border-gray-950 pl-2">
            <IoSearchOutline />
          </div>
        </div>

        <button className="px-8 bg-default_red rounded-md">Log in</button>
      </div>

      <section id="sidebar">
        <div
          style={{
            scrollBehavior: "smooth",
            overflowY: "scroll",
            overflowX: "hidden",

            width: "25%",

            border: "2px solid pink",
          }}
        >
          <div className="ml-5">
            <ul className="border-b border-gray-300 w-28">
              {sideOptions.map((items, index) => (
                <div key={index} className="display:flex flex-row w-32">
                  <li className="mt-5 font-bold text-xl">
                    {items.icon as ReactNode}
                    {items.menuOption}
                  </li>
                </div>
              ))}
            </ul>

            <p className="mt-7 text-gray-400">
              Log in to follow creaters,
              <br /> like videos, and view
              <br /> comments
            </p>

            <div className="display: flex flex-col w-60 border">
              <button className="mt-4 py-3 px-20 border border-rose-500 rounded-md">
                Log in
              </button>

              <button className="mt-4 py-4 px-15 bg-black text-yellow-100 text-sm rounded-lg">
                Create TikTok effects, get a reward
              </button>
            </div>

            <ul>
              {infoOptions.map((items, index) => (
                <li
                  key={index}
                  className="mt-4 font-bold text-ms text-gray-400"
                >
                  {items}
                </li>
              ))}
            </ul>

            <div>
              <p>2024 TikTok</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="main-video section">
        <div>
          <video src="src/assets/video1.mp4" />


        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
