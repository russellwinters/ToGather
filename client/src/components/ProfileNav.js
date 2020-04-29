import React from "react";
import icon from "../assets/girl.svg";

export default function ProfileNav() {
  const loggedOut = (
    <>
      <span className="header__profile--login">Notifications</span>
      <img src={icon} alt="profileImg" />
    </>
  );

  return <div className="header__profile">{loggedOut}</div>;
}
