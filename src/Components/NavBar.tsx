import { useState, ReactElement, ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  IoPersonOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { MdDarkMode, MdOutlineLogin } from "react-icons/md";
import { RiPencilRulerLine, RiCopperCoinLine } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FiSend } from "react-icons/fi";
import { BiCommentMinus } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import { AiFillTikTok } from "react-icons/ai";
import userProfile from "./UserProfile";

import { useNavigate } from "react-router-dom";
import { Flex, Avatar } from "@radix-ui/themes";
import AllActivities from "./InboxMenuViews/AllActivities";
import Likes from "./InboxMenuViews/Likes";
import Comments from "./InboxMenuViews/Comments";
import MentionsAndTags from "./InboxMenuViews/MentionsAndTags";
import Followers from "./InboxMenuViews/Followers";

interface SideOptionsKeys {
  menuOption: string;
  icon: Partial<ReactElement>;
}
interface Props {
  isUserLoggedIn: boolean;
  sourceImg?: string;
  _onLoggedOut: () => void
  _onLoggedIn: () => void
}

const name = "Juewell";

export interface DropMenuOptions extends SideOptionsKeys {}

const NavBar = ({ isUserLoggedIn, sourceImg, _onLoggedOut, _onLoggedIn }: Props) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [menuIndex, setMenuIndex] = useState<number | null>();
  const [loggedOut, setIsLoggedOut] = useState<boolean>()


  const navigator = useNavigate();

  const [messageDialog, setMessageDialog] = useState<boolean>(false);
  const [commentDialog, setCommentDialog] = useState<boolean>(false);
  const [inboxModal, setInboxModal] = useState<boolean>(false);
  const [userDropdown, setUserDropdown] = useState<boolean>(false);

  const [inboxOptionsIndex, setInboxOptionsIndex] = useState<number>(0);

  const NotificationOptions = [
    "All Activity",
    "Likes",
    "Comments",
    "Mentions and tags",
    "Followers",
  ];

  const dropMenu: DropMenuOptions[] = [
    { menuOption: "Creative Tools", icon: <RiPencilRulerLine /> },
    { menuOption: "English", icon: <LiaLanguageSolid /> },
    { menuOption: "Feedback & Help", icon: <RxQuestionMarkCircled /> },
    { menuOption: "Dark mode", icon: <MdDarkMode /> },
  ];

  const userDropMenu: DropMenuOptions[] = [
    {
      menuOption: "View Profile",
      icon: <IoPersonOutline className="size-6" />,
    },
    { menuOption: "Get Coins", icon: <RiCopperCoinLine className="size-6" /> },
    {
      menuOption: "Creative Tools",
      icon: <RiPencilRulerLine className="size-6" />,
    },
    { menuOption: "Settings", icon: <IoSettingsOutline className="size-6" /> },
    { menuOption: "English", icon: <LiaLanguageSolid className="size-6" /> },
    {
      menuOption: "Feedback & Help",
      icon: <RxQuestionMarkCircled className="size-6" />,
    },
    { menuOption: "Dark mode", icon: <MdDarkMode className="size-6" /> },
    { menuOption: "Get app", icon: <AiFillTikTok className="size-6" /> },
    { menuOption: "Log out", icon: <MdOutlineLogin className="size-6" /> },
  ];

  return (
    <div className=" py-3 border-b border-gray-400 display: flex flex-row justify-between items-center">
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
          <IoSearchOutline className="text-2xl mr-3 text-gray-400" />
        </div>
      </div>

      <div className="mr-8">
        {!isUserLoggedIn ? (
          <div className="display: flex flex-row items-center">
            <button onClick={() => _onLoggedIn()} className="px-8 h-10 bg-default_red rounded-md text-white font-semibold">
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
          </div>
        ) : (
          <div className="display: flex flex-row items-center justify-around">
            <div
              onClick={() => navigator("/uploadpage")}
              className="display: flex flex-row items-center border border-gray-300 mr-7 px-4 py-1 hover:bg-gray-100"
            >
              <HiOutlinePlus className="size-5 mr-2" />
              <button className="text-lg">Upload</button>
            </div>

            <FiSend
              onClick={() => navigator("/messagespage")}
              onMouseEnter={() => setMessageDialog(true)}
              onMouseLeave={() => setMessageDialog(false)}
              className="mr-6 size-7 hover: cursor-pointer"
            />
            {messageDialog && (
              <div className="absolute top-16 right-32 border bg-gray-500 text-white p-1 rounded-lg text-lg">
                Messages
              </div>
            )}

            <BiCommentMinus
              onClick={() => {
                setCommentDialog(false);
                setInboxModal(!inboxModal);
              }}
              onMouseEnter={() => setCommentDialog(true)}
              onMouseLeave={() => setCommentDialog(false)}
              className="size-7 hover: cursor-pointer"
            />
            {commentDialog && (
              <div className="absolute top-16 right-20 border bg-gray-500 text-white p-1 rounded-lg text-lg">
                Inbox
              </div>
            )}

            {inboxModal && (
              <div
                className="absolute top-20 right-10 border bg-white rounded-lg p-3"
                style={{ height: "600px", width: "400px" }}
              >
                <h1 className="text-2xl font-bold mt-3">Notifications</h1>

                <div
                  style={{
                    height: "20%",
                    border: "1px solid red",
                    marginTop: "1em",
                    marginBottom: "0.5em",
                  }}
                >
                  <ul>
                    {NotificationOptions.map((items, index) => (
                      <li
                        onClick={() => setInboxOptionsIndex(index)}
                        id="notifications__menu"
                        style={{
                          width: index === 3 ? "40%" : "25%",
                          whiteSpace: index === 3 ? "nowrap" : "none",
                          backgroundColor:
                            inboxOptionsIndex === index ? "#0f0f0f" : "",
                          color:
                            inboxOptionsIndex === index ? "whitesmoke" : "",
                        }}
                        className=" bg-gray-200 p-0 hover:bg-gray-300 cursor-pointer rounded-full text-center font-semibold text-sm"
                      >
                        {items}
                      </li>
                    ))}
                  </ul>
                </div>
                {inboxOptionsIndex === 0 ? (
                  <AllActivities />
                ) : inboxOptionsIndex === 1 ? (
                  <Likes />
                ) : inboxOptionsIndex === 2 ? (
                  <Comments />
                ) : inboxOptionsIndex === 3 ? (
                  <MentionsAndTags />
                ) : inboxOptionsIndex === 4 ? (
                  <Followers />
                ) : (
                  ""
                )}
              </div>
            )}

              {/* Profile picture */}

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
                      onClick={() => {
                        if (index === userDropMenu.length - 1) {
                          setIsLoggedOut(true)
                          _onLoggedOut()
                          console.log("Has been clicked")
                        }
                      }}
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
        )}
        {dropdown && (
          <div className="absolute top-20 right-5 pl-4 bg-white rounded-md border border-gray-400">
            <ul>
              {dropMenu.map((items, index) => (
                <div
                  key={index}
                  className={`display: flex flex-row items-center ${
                    index === menuIndex ? "hover: bg-gray-100" : ""
                  }`}
                  onMouseEnter={() => setMenuIndex(index)}
                  onMouseLeave={() => setMenuIndex(null)}
                >
                  <li>{items.icon as ReactNode}</li>
                  <li className="p-2 w-44 hover: cursor-pointer">
                    {items.menuOption}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
