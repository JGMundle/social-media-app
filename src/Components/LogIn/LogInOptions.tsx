import { Link } from "react-router-dom";
import SignUpOptions from "../SignUp/SignUpOptions";
import LogInSEU from "./LogInSEU";

import { BsQuestionCircle } from "react-icons/bs";

const LogInOptions = () => {
  return (
    <div>
      <div className="display: flex flex-row items-center p-1">
        <img
          src="src/Images/TikTokTitle.png"
          alt="TikTok"
          width={"9%"}
          className="ml-2 hover: cursor-pointer"
        />

        <div className="relative left-3/4 ml-14 text-sm display: flex flex-row justify-center items-center">
          <BsQuestionCircle className="mr-1.5 size-5 text-gray-500"/>
          <a href="">Feedback and help</a>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "1em",

          fontFamily: "arial",
        }}
      >
        <h1 className="text-3xl font-semibold">Log in to TikTok</h1>

        <p
          style={{
            color: "rgba(22, 24, 35, 0.5)",
            marginTop: "2em",
            marginBottom:"1em"
          }}
        >
          Manage your account, check notifications,<br></br> comment on videos,
          and more.
        </p>

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

            marginTop: "3em",
            padding:"1em"
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

export default LogInOptions;
