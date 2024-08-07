import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import LogInOptions from "./LogIn/LogInOptions";

import { IoCloseOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

interface Props {
  showModal?: boolean
  closeModal?: () => void
}

const LogInModal = ({showModal, closeModal}: Props) => {
  const [change, setChange] = useState<boolean>(false);

  const handleClick = () => {
    setChange(change === true);
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        textAlign: "center",
        marginTop: "3em",

        fontFamily: "arial",
        width: "480px",
        height: "720px",
        position: "absolute",
        top: 50,
        left: 498,
        right: 50,
        bottom: 50,
      }}
    >
      <IoCloseOutline
        onClick={closeModal}
        className="size-9 relative left-3/4 top-5 ml-14 bg-slate-400 rounded-full hover: cursor-pointer"
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "1em",

          fontFamily: "arial",
        }}
      >
        <h1 className="mt-16 mb-9 text-3xl font-semibold">Log in to TikTok</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to="/phone-or-email"
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.6em",

              padding: "0.7em",
              marginBottom: "1em",

              paddingInline: "4em",

              fontSize: "1em",
            }}
            className="SignUpOptions"
          >
            Use phone / email / username
          </Link>

          <button
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.6em",

              padding: "0.7em",

              paddingInline: "5.4em",

              fontSize: "1em",

              marginBottom: "1em",
            }}
            className="SignUpOptions"
          >
            Continue with Facebook
          </button>

          <button
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.6em",

              padding: "0.7em",
              marginBottom: "1em",

              paddingInline: "5.9em",

              fontSize: "1em",
            }}
            className="SignUpOptions"
          >
            Continue with Google
          </button>

          <button
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.6em",

              padding: "0.7em",
              marginBottom: "1em",

              paddingInline: "6.1em",

              fontSize: "1em",
            }}
            className="SignUpOptions"
          >
            Continue with Twitter
          </button>

          <button
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.6em",

              padding: "0.7em",
              marginBottom: "1em",

              paddingInline: "6.4em",

              fontSize: "1em",
            }}
            className="SignUpOptions"
          >
            Continue with Apple
          </button>

          <p
            style={{
              color: "rgba(22, 24, 35, 0.5)",
              fontSize: "0.8em",

              marginTop: "4em",
            }}
          >
            By continuing, you agree to TikTok’s{" "}
            <a href="" style={{ color: "#0f0f0f" }} id="TS">
              Terms of Service
            </a>{" "}
            and <br />
            confirm that you have read TikTok’s{" "}
            <a href="" style={{ color: "#0f0f0f" }} id="Privacy">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div
          style={{
            border: "1px solid rgba(192, 192, 192, 0.544)",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",

            marginTop: "1em",
            padding: "1em",
          }}
        >
          <p>
            Already have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: " rgb(254, 44, 85)",
                textDecoration: "none",
                fontWeight: "400",
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
