import React from 'react'

const Header = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
            }}
        >
            <img
                src="src/Images/TikTokTitle.png"
                alt="TikTok Tilte"
                width={"9%"}
                id="TiKTokTitle"
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "68em",
                }}
            >
                <img
                    src="src/Images/help_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Help"
                    width={"15%"}
                />
                <p
                    style={{
                        marginLeft: "0.5em",
                        marginTop: "1.3em",

                        fontFamily: "arial",
                        fontSize: "0.9em",
                    }}
                    id="Feedback"
                >
                    Feedback and Help
                </p>
            </div>
        </div>
    );
}

export default Header