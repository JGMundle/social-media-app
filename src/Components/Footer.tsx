import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f0f0f",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",

        padding: "2em",
      }}
    >
      <select
        style={{
          backgroundColor: "#0f0f0f",
          color: "whitesmoke",
          border: "1.5px solid  rgba(220, 217, 217, 0.66)",
          borderRadius: "0.2em",

          padding: "0.6em",
          paddingRight: "5em",

          fontSize: "0.9em",
          textAlign: "left",
        }}
      >
        <option>English</option>
        <option>Español</option>
        <option>Françias</option>
        <option>日本語</option>
      </select>

      <div className="display: flex flex-row items-center">
        <LiaCopyrightSolid style={{ color: "rgb(138, 139, 145)", marginRight:"0.5em"}} />
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",

            fontFamily: "arial",
            color: "rgb(138, 139, 145)",
          }}
        >
          2024 TikTok
        </p>
      </div>
    </footer>
  );
};

export default Footer;
