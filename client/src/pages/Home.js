import React from "react";
import Header from "../components/Header";

//assets
import title from "../assets/landing_page/title.png"
import girl from "../assets/landing_page/girl.png"
import imageone from "../assets/landing_page/imageone.png"
import textone from "../assets/landing_page/textone.png"
import headerone from "../assets/landing_page/headerone.png"
import imgtwo from "../assets/landing_page/vector.png"
import imgthree from "../assets/landing_page/vector2.png";
import headertwo from "../assets/landing_page/headertwo.png"
import texttwo from "../assets/landing_page/textwo.png"
import bubbles from "../assets/landing_page/bubbles.png"
export default function Home({ match }) {
  return (
    <>
      <Header match={match} />
      <section className = "home__hero">
        <img className = "home__girl" src = {girl} alt = "girl"/>
        <header>
          <img src = {title} alt = "title"/>
          <button className = "home__hero-call-to-action">Explore New Activities</button>
          <img className= "bubbles" src = {bubbles}/>
          </header>
      </section>
      <div className = "home__box">
        <div className = "home__box-text">
          <img className = "img" src = {headerone} alt = "text"/>
          <img src = {textone} alt = "text"/>
        </div>
            
            <img className = "guy" src = {imageone} alt = "image"/>
      </div>
      <div className = "home__box">
        <div> 
          <img src = {imgtwo} alt = "image"/>
          <img className = "girlcomp"  alt = "image" src = {imgthree}/>
        </div>
 
        <div className = "home__box-text">
          <img className = "img" src = {headertwo} alt = "text"/>
          <img src = {texttwo} alt = "text"/>
        </div>
        </div>
        <div className = "bar">
      </div>
    </>
  );
}
