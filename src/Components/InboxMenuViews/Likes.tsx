import React from 'react'
import { FaRegHeart } from "react-icons/fa";



interface Props {
    likesCount?: number
}
const Likes = ({likesCount}: Props) => {
  return (
    <div>
      { likesCount === 0 ? 
        <div className="display: flex flex-col items-center">
          <FaRegHeart className="size-20 mt-8 text-gray-400" />

          <h1 className="mt-5 font-semibold">Likes on your videos</h1>

          <p className="text-center mt-4">
            When someone likes one of your videos, you’ll see it here
          </p>
              </div>
              : <div>
                <h1>Likes Count is not zero</h1>
                  </div>
      }
    </div>
  );
}

export default Likes