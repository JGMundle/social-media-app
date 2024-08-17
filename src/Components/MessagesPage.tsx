import { useState } from "react";
import NavBar from "./NavBar";
import { IoArrowBack, IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MessagesPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const src =
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop";

  const navigator = useNavigate();

  return (
    <div>
      <NavBar isUserLoggedIn={isLoggedIn} sourceImg={src} />

      <div className="display: flex flex-row justify-evenly mt-4">
        <div className="display: flex flex-row">
          <IoArrowBack
            onClick={() => navigator("/")}
            className="size-6 mr-6 hover: cursor-pointer"
          />

          <div className="border border-gray-400 ">
            <div className="display: flex flex-row items-center w-80">
              <h1 className="text-2xl font-bold ml-3">Messages</h1>
              <IoSettingsOutline className="size-6 ml-40 hover: cursor-pointer" />
            </div>

            <p className="mt-10 ml-3 pb-6">No messages yet</p>
          </div>
        </div>

        <div className="border border-gray-500 px-80"></div>
      </div>
    </div>
  );
};

export default MessagesPage;
