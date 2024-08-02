import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";

const SignUpOptions = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",

          fontFamily: "arial",
        }}
      >
        <div className="display: flex flex-row items-center p-1">
          <img
            src="src/Images/TikTokTitle.png"
            alt="TikTok"
            width={"9%"}
            className="ml-2 hover: cursor-pointer"
          />

          <div className="relative left-3/4 ml-14 text-sm display: flex flex-row justify-center items-center">
            <BsQuestionCircle className="mr-1.5 size-5 text-gray-500" />
            <a href="">Feedback and help</a>
          </div>
        </div>

        <h1 className="text-3xl font-semibold mt-11">Sign up for TikTok</h1>

        <p
          style={{
            color: "rgba(22, 24, 35, 0.5)",
            marginTop: "2em",
            marginBottom: "1em",
          }}
        >
          Create a profile, follow other accounts, make
          <br /> your own videos, and more.
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
            to={"/phone-or-email"}
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

              paddingInline: "6em",

              fontSize: "1em",
            }}
            className="SignUpOptions"
          >
            Continue with Google
          </button>

          <p
            style={{
              color: "rgba(22, 24, 35, 0.5)",
              fontSize: "0.8em",
              marginTop: "9em",
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
            padding: "1em",
          }}
        >
          <p>
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: " rgb(254, 44, 85)",
                textDecoration: "none",
                fontWeight: "400",
              }}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpOptions;
