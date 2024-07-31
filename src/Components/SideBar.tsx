import {ReactElement,  ReactNode } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { RiLiveLine, RiCopyrightLine } from 'react-icons/ri';

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}

const SideBar = () => {

      const sideOptions: SideOptionsKeys[] = [
        { menuOption: "For You", icon: <AiFillHome /> },
        { menuOption: "Explore", icon: <FaRegCompass /> },
        { menuOption: "Following", icon: <GoPeople /> },
        { menuOption: "LIVE", icon: <RiLiveLine /> },
        { menuOption: "Profile", icon: <IoPersonOutline /> },
      ];

  const infoOptions = ["Company", "Program", "Terms & Policies"];

  return (
      <div
        style={{
          scrollBehavior: "smooth",
          overflowY: "scroll",
          overflowX: "hidden",

          width: "25%",
        }}
        id="sidebar"
      >
        <div className="ml-5 whitespace-nowrap">
          <ul className=" border-b border-blue-900 pb-4 ">
            {sideOptions.map((items, index) => (
              <div
                key={index}
                className="border border-green-800 display:flex p-2 w-96"
              >
                <div className="  mt-5 font-bold text-xl hover: cursor-pointer w-52">
                  <div
                    style={{ maxLines: 1, lineBreak: "inherit" }}
                    className=" whitespace-nowrap display: block border w-auto border-red-600"
                  >
                    <div className=" border border-purple-800 w-6">
                      {items.icon as ReactNode}
                    </div>
                    <li className="w-8 whitespace-nowrap border-red-500 border">
                      {items.menuOption}
                    </li>
                  </div>
                </div>
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
}

export default SideBar