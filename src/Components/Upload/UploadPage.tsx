import { Flex, Avatar } from "@radix-ui/themes";
import { ReactNode, useState } from "react";
import { DropMenuOptions } from "../NavBar";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";

interface Props {
  sourceImg?: string;
}
const name = "Juewell";

const NavBarStudio = ({ sourceImg }: Props) => {
  const [userDropdown, setUserDropdown] = useState<boolean>(false);

  const userDropMenu: DropMenuOptions[] = [
    {
      menuOption: "View Profile",
      icon: <IoPersonOutline className="size-6" />,
    },

    { menuOption: "Log out", icon: <MdOutlineLogin className="size-6" /> },
  ];

  return (
    <div className="py-3 border-b border-gray-400 display: flex flex-row justify-between items-center">
      <img src="src/assets/TikTokStudio.png" />

      <Flex gap="2" className="ml-7">
        <Avatar
          src={sourceImg ? sourceImg : ""}
          fallback={name.slice(0, 1).toUpperCase()}
          onMouseEnter={() => setUserDropdown(true)}
          onMouseLeave={() => {
            setTimeout(() => setUserDropdown(false), 3000);
          }}
          className="hover: cursor-pointer"
        />
        {/* <Avatar fallback="A" /> */}
      </Flex>
      {userDropdown && (
        <div className="absolute right-4 top-20 p-4 bg-white rounded-md border border-gray-400">
          <ul>
            {userDropMenu.map((items, index) => (
              <div
                key={index}
                onClick={() => console.log(userDropMenu.length)}
                className={`display: flex flex-row items-center ${
                  index === userDropMenu.length - 1
                    ? "border-t border-gray-300"
                    : ""
                } hover:bg-gray-100 cursor-pointer`}
              >
                <li>{items.icon as ReactNode}</li>
                <li className="p-2">{items.menuOption}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarStudio;
