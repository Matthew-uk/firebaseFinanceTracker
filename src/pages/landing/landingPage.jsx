import React from "react";
import Hero from "./Hero/hero";
import Navbar from "./navbar/navbar";
import { useState } from "react";

export default function LandingPage() {
  const [navBtn, setNavBtn] = useState(false);

  const handleMobileMenu = () => {
    setNavBtn(!navBtn);
  };
  return (
    <div>
      <div className="header">
        <Navbar navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
        <Hero />
      </div>
    </div>
  );
}
