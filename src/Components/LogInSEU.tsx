import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import LogInOptions from "./LogInOptions";

const LogInSEU = () => {
  const [change, setChange] = useState<boolean>(false);

  const handleClick = () => {
    setChange(change === true);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "3em",

          fontFamily: "arial",
        }}
      >
        <h1>Log in</h1>

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
                Log in with Email or username
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

            {
              <Link
                to={""}
                style={{
                  fontSize: "0.8em",
                  marginRight: "19em",

                  color: "#0f0f0f",
                }}
                className="LogInWith"
              >
                Log in with password
              </Link>
            }
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
            marginBottom: "8em",
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
    </>
  );
};

export default LogInSEU;
