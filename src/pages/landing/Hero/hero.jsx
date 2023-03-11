import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1>
          Trade, sell, buy and manage crypto currencies with Zeus Exchange
        </h1>
        <p>
          Zeus Exchange gives you the perfect conditions to sell, buy and trade
          crypto currencies and gift cards as well as other useful services.
          Sign Up and Get Started.
        </p>
        <div className="input">
          <input type="text" placeholder="Example@gmail.com" />
          <button>Get Started</button>
        </div>
      </div>

      <div className="right">
        <img src={'https://zeus-exchange-bc97c.web.app/static/media/image1.52ba5d89e6ce551a22b8.png'} alt="" />
      </div>
    </div>
  );
}
