import React from "react";
import Image1 from "../Images/Image 1.jpg";
import Image2 from "../Images/Image 2.jpg";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="mainTitle">Teams build better products with Align</h1>
      <p className="caption">
        Align is constantly improving to move forward through dashboard,
        statistics, data and verify and superior human resources.
      </p>
      <br />
      <br />
      <br />
      <span></span>
      <button>Get Started</button>
      <br />
      <br />
      <br />
      <br />
      <div className="Work">
        <div className="sec">
          <div className="content">
            <h1>Discover the power of creative freedom with Align.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </p>
            <button>Explore Section</button>
          </div>
          <div className="image">
            <img src={Image1} alt="img1" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="sec">
          <div className="image">
            <img src={Image2} alt="img2" />
          </div>
          <div className="content">
            <h1>Build a beautiful product with Align</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
