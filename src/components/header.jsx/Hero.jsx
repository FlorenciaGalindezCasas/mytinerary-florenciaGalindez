import React from 'react'

function Hero() {
  return (
    <div className="row hero">
      <div className="welcome">
        <p className="cloud-text cloud-title">MY TINERARY</p>
        <p className="slogan">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <div className="callTo">
          <a href="./cities" className="underlined">
            View more!
            <img src="./public/paperplane.ico" className="floating"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero