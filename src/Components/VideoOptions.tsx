import { FaHeart, FaCommentDots, FaBookmark } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';

const VideoOptions = () => {
  return (
    <div className="border border-gray-600 display: flex flex-col justify-between h-80 w-20 items-center">
      <button className="p-3 bg-gray-300 rounded-full">
        <FaHeart className=" size-5" />
      </button>

      <button className="p-3 bg-gray-300 rounded-full">
        <FaCommentDots className="size-5" />
      </button>

      <button className="p-3 bg-gray-300 rounded-full">
        <FaBookmark className="size-5" />
      </button>

      <button className="p-2 bg-gray-300 rounded-full">
        <IoIosShareAlt className="size-6" />
      </button>
    </div>
  );
}

export default VideoOptions