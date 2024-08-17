import { ReactElement, ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { RiLiveLine, RiCopyrightLine } from "react-icons/ri";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}

const SideBar = () => {
  const sideOptions: SideOptionsKeys[] = [
    { menuOption: "For You", icon: <AiFillHome className="size-6" /> },
    { menuOption: "Explore", icon: <FaRegCompass className="size-6" /> },
    { menuOption: "Following", icon: <GoPeople className="size-6" /> },
    { menuOption: "LIVE", icon: <RiLiveLine className="size-6" /> },
    { menuOption: "Profile", icon: <IoPersonOutline className="size-6" /> },
  ];

  const infoOptions = ["Company", "Program", "Terms & Policies"];

  return (
    <div
      style={{
        scrollBehavior: "smooth",
        overflowY: "scroll",
        overflowX: "hidden",

        width: "25%",
        border: "pink solid 3px",
        marginLeft: "-4em"
      }}
      id="sidebar"
    >
      <div className="whitespace-nowrap">
        <ul className="pb-4 ">
          {sideOptions.map((items, index) => (
            <div
              key={index}
              className="  mt-5 font-bold text-xl w-52 whitespace-nowrap display: flex flex-row items-center hover:bg-gray-100"
            >
              <li className="w-8 whitespace-nowrap hover: cursor-pointer">
                {items.icon as ReactNode}
              </li>
              <li className="w-12 whitespace-nowrap cursor-pointer">
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
  );
};

export default SideBar;
