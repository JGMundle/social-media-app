import React from 'react'

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
      <button
        style={{
          backgroundColor: "#0f0f0f",
          color: "whitesmoke",
          border: "1.5px solid  rgba(220, 217, 217, 0.66)",
          borderRadius: "0.2em",

          padding: "0.6em",
          paddingRight: "5em",

          marginBottom: "1em",

          fontSize: "0.9em",
          textAlign: "left",
        }}
      >
        Language option
      </button>

      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

          fontFamily: "arial",
          color: "rgb(138, 139, 145)",

          marginLeft: "30em",
        }}
      >
        <img
          src="src/Images/copyright_24dp_FILL0_wght300_GRAD0_opsz24.svg"
          alt="Copyright"
          style={{
            marginRight: "0.4em",
          }}
        />
        2024 TikTok
      </p>
    </footer>
  );
}

export default Footer