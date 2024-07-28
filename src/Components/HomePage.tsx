import React, { ReactElement, ReactNode, useState } from "react";
import constants from "../config/constants";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RiCopyrightLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiPencilRulerLine } from "react-icons/ri";
import { LiaLanguageSolid } from "react-icons/lia";

import { IconContext, IconType } from "react-icons";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}

interface DropMenuOptions extends SideOptionsKeys {}

const HomePage = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const sideOptions: SideOptionsKeys[] = [
    { menuOption: "For You", icon: <AiFillHome /> },
    { menuOption: "Explore", icon: <FaRegCompass /> },
    { menuOption: "Following", icon: <GoPeople /> },
    { menuOption: "LIVE", icon: <RiLiveLine /> },
    { menuOption: "Profile", icon: <IoPersonOutline /> },
  ];

  const dropMenu: DropMenuOptions[] = [
    { menuOption: "Creative Tools", icon: <RiPencilRulerLine /> },
    { menuOption: "English", icon: <LiaLanguageSolid /> },
    { menuOption: "Feedback & Help", icon: <RxQuestionMarkCircled /> },
    { menuOption: "Dark mode", icon: <MdDarkMode /> },
  ];

  const infoOptions = ["Company", "Program", "Terms & Policies"];

  return (
    <div>
      <div className="px-5 py-3 border-b border-gray-400 display: flex flex-row justify-between items-center">
        <img
          src="src/Images/TikTokTitle.png"
          alt="TikTok"
          width={"8%"}
          className="hover: cursor-pointer"
        />

        <div className="rounded-full first-line: w-96 bg-gray-200 display: flex flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-80 py-3 pl-3 bg-inherit rounded-bl-full rounded-tl-full"
          />
          <div className="border-l border-gray-400 pl-2 py-1">
            <IoSearchOutline className="text-2xl mr-3" />
          </div>
        </div>

        <div className="display: flex flex-row items-center">
          <button className="px-8 h-10 bg-default_red rounded-md text-white font-semibold">
            Log in
          </button>

          <BsThreeDotsVertical
            className="text-lg ml-5 hover: cursor-pointer"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                setDropdown(false);
              }, 10000);
            }}
          />

          {dropdown && (
            <div className="border border-slate-600 absolute top-20 right-5 ">
              <ul>
                {dropMenu.map((items, index) => (
                  <li key={index} className="p-2 w-48 hover: cursor-pointer">
                    {items.icon as ReactNode}
                    {items.menuOption}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <section id="sidebar">
        <div
          style={{
            scrollBehavior: "smooth",
            overflowY: "scroll",
            overflowX: "hidden",

            width: "25%",
          }}
        >
          <div className="ml-5">
            <ul className="border-b pb-4 border-gray-300 w-28">
              {sideOptions.map((items, index) => (
                <div key={index} className="display:flex flex-row w-40">
                  <li className="mt-5 font-bold text-xl hover: cursor-pointer">
                    {items.icon as ReactNode}
                    {items.menuOption}
                  </li>
                </div>
              ))}
            </ul>

            <p className="mt-6 text-gray-400">
              Log in to follow creaters,
              <br /> like videos, and view
              <br /> comments
            </p>

            <div className="display: flex flex-col w-60">
              <button className="mt-4 py-3 px-20 border border-rose-500 rounded-md">
                Log in
              </button>

              <button className="mt-10 py-4 px-15 bg-black text-yellow-100 text-sm rounded-lg">
                Create TikTok effects, get a reward
              </button>
            </div>

            <ul>
              {infoOptions.map((items, index) => (
                <li
                  key={index}
                  className="mt-4 font-bold text-ms text-gray-400 hover: cursor-pointer"
                >
                  {items}
                </li>
              ))}
            </ul>

            <div className="mt-1 display: flex flex-row">
              <RiCopyrightLine className="text-gray-400" />
              <p className="text-xs text-gray-600 ml-1">2024 TikTok</p>
            </div>
          </div>
        </div>
      </section>

      <button className="border border-gray-200 px-4 py-0.5 rounded-xl absolute right-14 bottom-8">
        Get app
      </button>

      {/* <section id="main-video section">
        <div>
          <video src="src/assets/video1.mp4" />


        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
