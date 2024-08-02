import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import { FaHeart, FaCommentDots, FaBookmark } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { IconBaseProps, IconType } from 'react-icons';
import LogInModal from './LogInModal';


interface Props {
  isUserLoggedIn: boolean
}

interface SocialIcons {
  icon?: Partial<ReactElement>;
  iconProps?: IconBaseProps
}

const VideoOptions = ({ isUserLoggedIn }: Props) => {
  const [isLiked, setIsLiked] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const iconRefs = useRef<(HTMLButtonElement| null)[]>([])
  // const dummyElement = useRef<HTMLHeadingElement>(null)
  
  const socialButtons: SocialIcons[] = [
    { icon: <FaHeart className='size-5'/> },
    { icon: <FaCommentDots className='size-5'/> },
    { icon: <FaBookmark className='size-5'/> },
    { icon: <IoIosShareAlt className='size-5'/> },
  ]

  const handleClick = (btnIndex: number) => {
    if (iconRefs.current)
        if(iconRefs.current[btnIndex]) {
      console.log(`This the button at index ${btnIndex}`)
    }
  }

  const toggleIcons = (btnIndex: number) => {
    if (isUserLoggedIn) {
      btnIndex === 0 ? <FaHeart color="red" /> : <FaHeart />;
    }
    else {
      setOpenModal(!openModal)
    
    }
  }
  return (
    <div className="border border-gray-600 display: flex flex-col justify-between h-80 w-20 items-center">
      {/* {isUserLoggedIn && isLiked && (heartIcon.current) ? <FaHeart color="red" className=" size-5" /> : <FaHeart className=" size-5" /> } */}
      <div>
        {socialButtons.map((icons, index) => (
          <button
            key={index}
            onClick={() => toggleIcons(index)}
            ref={(icon) => {
              if (iconRefs.current) iconRefs.current[index] = icon;
            }}
            className="p-3 bg-gray-300 rounded-full"
          >
            {icons.icon as ReactNode}
          </button>
        ))}
      </div>
      {openModal && (
        <div>
          <LogInModal/>
          </div>
      )}
    </div>
  );
}

export default VideoOptions