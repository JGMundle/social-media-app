import { FaRegCommentDots } from "react-icons/fa";

const Comments = () => {
  return (
    <div>
      {" "}
      <div className="display: flex flex-col items-center">
        <FaRegCommentDots className="size-20 mt-8 text-gray-400" />

        <h1 className="mt-5 font-semibold">Comments on your videos</h1>

        <p className="text-center mt-4">
          When someone comments on one of your videos, you’ll see it here
        </p>
      </div>
    </div>
  );
}

export default Comments