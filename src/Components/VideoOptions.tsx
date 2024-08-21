import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { FaHeart, FaCommentDots, FaBookmark } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { IconBaseProps, IconType } from 'react-icons';
import LogInModal from './LogInModal';


interface Props {
  isUserLoggedIn: boolean
}

interface SocialIcons {
  counts: number
  icon?: Partial<ReactElement>;
  iconProps?: IconBaseProps;
}



const VideoOptions = ({ isUserLoggedIn }: Props) => {
  
  const [isLiked, setIsLiked] = useState(false)
  const [isBookMarked, setIsBookMarked] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const [likesCount, setLikesCount] = useState<number>(13849)
  const [commentCount, setCommentCount] = useState<number>(21589)
  const [bookmarkCount, setBookmarkCount] = useState<number>(1_180_800)
  const [shareCount, setShareCount] = useState<number>(1_200_003_000);

  const iconRefs = useRef<(HTMLButtonElement | null)[]>([])
  
  async function getUserLikes() {
    const response = fetch("endpoint")
    const data = (await response).json()
    return data
  }


  // useEffect(() => {
  //   let userVideoLikes = getUserLikes()
    
  // }, [likesCount, commentCount, bookmarkCount, shareCount])

  // const dummyElement = useRef<HTMLHeadingElement>(null)
  
  const socialButtons: SocialIcons[] = [
    {
      icon: (
        <FaHeart
          onClick={() => setIsLiked(!isLiked)}
          color={isLiked ? "red" : ""}
          className="size-5"
        />
      ),
      counts: likesCount,
    },

    { icon: <FaCommentDots className="size-5" />, counts: commentCount },
    {
      icon: (
        <FaBookmark
          onClick={() => setIsBookMarked(!isBookMarked)}
          color={isBookMarked ? "yellow" : ""}
          className="size-5"
        />
      ),
      counts: bookmarkCount,
    },
    {
      icon: <IoIosShareAlt className="size-5" />,
      counts: shareCount,
    },
  ];

  const handleClick = (btnIndex: number) => {
    if (iconRefs.current)
        if(iconRefs.current[btnIndex]) {
      console.log(`This the button at index ${btnIndex}`)
    }
  }

  const toggleIcons = (btnIndex: number) => {
    if (isUserLoggedIn === true) {
      btnIndex === 0 ? <FaHeart color="red" /> : <FaHeart />;
   
    }
    else { 
      <LogInModal />
    }
  
  }
  return (
    <div className="border border-gray-600 display: flex flex-col justify-between h-80 w-20 items-center">
      {/* {isUserLoggedIn && isLiked && (heartIcon.current) ? <FaHeart color="red" className=" size-5" /> : <FaHeart className=" size-5" /> } */}
      <div className="display: flex flex-col justify-center items-center border-2 border-yellow-300">
        {socialButtons.map((icons, index) => (
          <div className="display: flex flex-col items-center">
            <button
              key={index}
              onClick={() => {
                toggleIcons(index);
                index === 0
                  ? setLikesCount(likesCount + 1)
                  : index === 1
                  ? setCommentCount(commentCount + 1)
                  : index === 2
                  ? setBookmarkCount(bookmarkCount + 1)
                  : index === 3
                  ? setShareCount(shareCount + 1)
                  : null;
              }}
              ref={(icon) => {
                if (iconRefs.current) iconRefs.current[index] = icon;
              }}
              className="p-3 bg-gray-300 rounded-full"
            >
              {icons.icon as ReactNode}
            </button>
            <p className="font-semibold">
              {icons.counts >= 10_000 && icons.counts < 1_000_000
                ? (icons.counts / 1000).toFixed(1)
                : icons.counts >= 1_000_000 && icons.counts < 1_000_000_000
                ? (icons.counts / 1000000).toFixed(1)
                : icons.counts >= 1_000_000_000 ? (icons.counts / 1000000000).toFixed(1) : icons.counts}

              {icons.counts >= 10_000 && icons.counts < 1_000_000
                ? "K"
                : icons.counts >= 1_000_000 && icons.counts < 1_000_000_000
                ? "M"
                : icons.counts >= 1_000_000_000
                ? "B"
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoOptions