import { FiAtSign } from "react-icons/fi";

const MentionsAndTags = () => {
  return (
    <div>
      {" "}
      <div className="display: flex flex-col items-center">
        <FiAtSign className="size-20 mt-8 text-gray-400" />

        <h1 className="mt-5 font-semibold">Mentions of You</h1>

        <p className="text-center mt-4">
          When someone mentions you, you’ll see it here
        </p>
      </div>
    </div>
  );
};

export default MentionsAndTags;
