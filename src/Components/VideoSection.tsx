import { motion, useScroll } from 'framer-motion';
import { FaHeart, FaCommentDots, FaBookmark } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import VideoOptions from './VideoOptions';
import { useEffect, useState } from 'react';


interface Props {
  isLoggedIn: boolean
}
const VideoSection = ({isLoggedIn}: Props) => {
  const [videoLikes, setVideoLikes] = useState<number>(0)
  useEffect(() => {
    console.log("Likes are being updated from the backend")
  }, [videoLikes])
    const { scrollYProgress } = useScroll();

    return (
      <>
        <div
          style={{ aspectRatio: "", width: "56%" }}
          className="border border-pink-950  display: flex flex-col justify-center"
          id="main-video section"
        >
          {/* {renderVideos().map((video) => {
            <div>
              {video}
            </div>
          })as ReactNode} */}
          <div className="display: flex flex-row items-end">
            <video
              autoPlay={false}
              src="src/assets/video1.mp4"
              className=" rounded-lg"
              width={"51%"}
            />

            <VideoOptions isUserLoggedIn={isLoggedIn} />
          </div>

          {/* <div className="display: flex flex-row items-end">
            <video autoPlay={false} src="src/assets/video2.mp4" width={"51%"} />
            <VideoOptions isUserLoggedIn={isLoggedIn} />
          </div>

          <div className="display: flex flex-row items-end">
            <video autoPlay={false} src="src/assets/video3.mp4" width={"51%"} />
            <VideoOptions isUserLoggedIn={isLoggedIn} />
          </div>

          <div className="display: flex flex-row items-end">
            <video autoPlay={false} src="src/assets/video4.mp4" width={"51%"} />
            <VideoOptions isUserLoggedIn={isLoggedIn} />
          </div>

          <div className="display: flex flex-row items-end">
            <video autoPlay={false} src="src/assets/video5.mp4" width={"51%"} />
            <VideoOptions isUserLoggedIn={isLoggedIn} />
          </div> */}
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} />
      </>
    );
}

export default VideoSection