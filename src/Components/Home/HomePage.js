import React from "react";
import videoHomepage from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="homepage-content--title">
          There's a better way to ask
        </div>
        <div className="homepage-content--desc">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        <div className="homepage-content--btn">
          <button>Get started - it's free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
