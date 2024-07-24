import { Link } from "react-router-dom";

const SignUpSEU = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "3em",

        fontFamily: "arial",
      }}
    >
      <h1>Sign up</h1>

      <form action="submit">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ marginRight: "9em" }}>Phone</p>
            <Link
              to={""}
              style={{
                fontSize: "0.8em",

                color: "#0f0f0f",
              }}
              className="LogInWith"
            >
              Sign up with Email
            </Link>
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.3em",

              padding: "0.8em",

              fontSize: "1em",

              marginBottom: "1em",

              width: "24%",
            }}
          />

          <input
            type="number"
            placeholder="Enter 6-digit code"
            style={{
              border: "1.5px solid  rgba(220, 217, 217, 0.66)",
              borderRadius: "0.3em",

              padding: "0.8em",

              fontSize: "1em",

              marginBottom: "1em",

              width: "24%",
            }}
          />
        </div>

        <button
          style={{
            border: "1.5px solid  rgba(220, 217, 217, 0.66)",
            borderRadius: "0.3em",

            padding: "0.8em",

            fontSize: "1em",

            marginBottom: "1em",
            marginTop: "2em",

            width: "26%",
          }}
        >
          Log in
        </button>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        <img src="src/assets/ArrowBack.svg" />
        <Link
          to={"/"}
          style={{
            fontSize: "0.9em",

            color: "#0f0f0f",
          }}
        >
          Go Back
        </Link>
      </div>

      <p
        style={{
          color: "rgba(22, 24, 35, 0.5)",
          fontSize: "0.8em",
          marginBottom: "7em",
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

      {/* Don't have an account? */}
      <div
        style={{
          border: "1px solid rgba(192, 192, 192, 0.544)",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",

          marginTop: "3em",
        }}
      >
        <p>
          Dont have an account?{" "}
          <Link
            to="signup"
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
  );
};

export default SignUpSEU;
