import { ReactElement, ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { RiLiveLine, RiCopyrightLine } from "react-icons/ri";
import { BsPersonUp } from "react-icons/bs";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}

interface Props {
  isUserLoggedIn: boolean
  profileImg: string
}

const SideBar = ({ isUserLoggedIn, profileImg }: Props) => {
  
  const sideOptions: SideOptionsKeys[] = [
    { menuOption: "For You", icon: <AiFillHome className="size-6" /> },
    { menuOption: "Explore", icon: <FaRegCompass className="size-6" /> },
    { menuOption: "Following", icon: <GoPeople className="size-6" /> },
    {
      menuOption: isUserLoggedIn ? "Friends" : "",
      icon: (
        <BsPersonUp
          className="size-6"
          style={{ display: isUserLoggedIn ? "" : "none" }}
        />
      ),
    },
    { menuOption: "LIVE", icon: <RiLiveLine className="size-6" /> },
    {
      menuOption: "Profile",
      icon: isUserLoggedIn ? (
        <img src={profileImg} className="size-6" />
      ) : (
        <IoPersonOutline className="size-6" />
      ),
    },
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
        marginLeft: "-4em",
      }}
      id="sidebar"
    >
      {/* SideBar options */}

      <div className="whitespace-nowrap">
        <ul className={`pb-4 border-4 ${!isUserLoggedIn  ? "flex-shrink"  : ""}`}>
          {sideOptions.map((items, index) => (
            <div
              key={index}
              className={`${index === 3 && !isUserLoggedIn ? "absolute" : "" }   mt-5 font-bold text-xl w-52 whitespace-nowrap display: flex flex-row items-center hover:bg-gray-100`}
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


        {/* Login / Following accounts */}

        {!isUserLoggedIn ? (
          <div className="mt-3">
            <p className=" text-gray-400">
              Log in to follow creaters,
              <br /> like videos, and view
              <br /> comments
            </p>

            <button className="mt-4 mb-6 py-2 px-20 border border-rose-500 rounded-md text-rose-500 text-lg font-bold hover:bg-rose-100">
              Log in
            </button>
          </div>
        ) : (
          <div className="mt-2 border-t border-b py-3">
            <h1 className="text-sm font-semibold">Following accounts</h1>
            <p className="text-sm mt-2 text-gray-400">Accounts you follow will appear <br/> here</p>
          </div>
        )}

        
        {/* TikTok efffects / Info options */}

        <div className="display: flex flex-col w-60">
          <button className="mt-4 py-4  bg-black text-yellow-100 text-sm rounded-lg">
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
