import React from "react";
import { Link } from "react-router-dom";
import ProfileNav from "./ProfileNav";
import LogoText from "../assets/ToGather.svg";
import LogoEclipse from "../assets/logoEclipse.svg";

export default function Header({ match }) {
  //Tedious way of making active links
  let linkArray = [
    ["/generator", "Explore Activities"],
    ["/dashboard", "My Dashboard"],
  ];

  const LINKS = linkArray.map((obj, i) => {
    if (obj[0] === match.url) {
      return (
        <Link key={i} to={obj[0]} className="active-link">
          {obj[1]}
        </Link>
      );
    }
    return (
      <Link key={i} to={obj[0]}>
        {obj[1]}
      </Link>
    );
  });

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img className="header__logo--text" src={LogoText} alt="ToGather" />
        <img
          className="header__logo--eclipse"
          src={LogoEclipse}
          alt="eclipse"
        />
      </Link>

      <div className="header__navbar">
        <nav className="header__navbar--nav">{LINKS}</nav>

        <ProfileNav />
      </div>
    </header>
  );
}
