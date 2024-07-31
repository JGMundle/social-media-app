import { motion, useScroll } from 'framer-motion';
import { FaHeart, FaCommentDots, FaBookmark } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import VideoOptions from './VideoOptions';

const VideoSection = () => {

    const { scrollYProgress } = useScroll();

    return (
      <>
        <div
          style={{ aspectRatio: "", width: "56%" }}
          className="border border-pink-950  display: flex flex-col i justify-center"
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
                        height="79%"
                        controls={true}
            />

            <VideoOptions />
          </div>

          <div className="display: flex flex-row items-end">
            <video autoPlay={false} src="src/assets/video2.mp4" className="" />
            <VideoOptions />
          </div>

          <div className="display: flex flex-row items-end">
            <video
              autoPlay={false}
              src="src/assets/video3.mp4"
              className=""
            />
            <VideoOptions />
          </div>

          <div className="display: flex flex-row items-end">
            <video
              autoPlay={false}
              src="src/assets/video4.mp4"
              className=""
            />
            <VideoOptions />
          </div>

          <div className="display: flex flex-row items-end">
            <video autoPlay={false} src="src/assets/video5.mp4" />
            <VideoOptions />
          </div>
        </div>
        <motion.div style={{ scaleX: scrollYProgress }} />
      </>
    );
}

export default VideoSection