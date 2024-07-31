import { useState, ReactElement, ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdDarkMode } from "react-icons/md";
import { RiPencilRulerLine } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}

interface DropMenuOptions extends SideOptionsKeys { }

const NavBar = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);

      const dropMenu: DropMenuOptions[] = [
        { menuOption: "Creative Tools", icon: <RiPencilRulerLine /> },
        { menuOption: "English", icon: <LiaLanguageSolid /> },
        { menuOption: "Feedback & Help", icon: <RxQuestionMarkCircled /> },
        { menuOption: "Dark mode", icon: <MdDarkMode /> },
      ];
    
  return (
    <div className="py-3 border-b border-gray-400 display: flex flex-row justify-between items-center">
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
  );
}

export default NavBar