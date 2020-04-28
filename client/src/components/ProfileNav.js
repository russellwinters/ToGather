import React from "react";

export default function ProfileNav() {
  const loggedOut = (
    <>
      <span className="header__profile--login">Log In</span>
      <span className="header__profile--signup">Sign Up</span>
    </>
  );

  return <div className="header__profile">{loggedOut}</div>;
}
