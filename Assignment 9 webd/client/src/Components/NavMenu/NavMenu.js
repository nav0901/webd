import React, { useState } from "react";
import logo from "../../Images/logo1.png";
import hamburger from "../../Images/Menu.png";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [toggle, settoggle] = useState(false);
  const Click = () => {
    settoggle(!toggle);
  };

  return (
    <div className="NavMenu">
      <div className="Bar">
        <Link to="/auth">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <img src={hamburger} alt="Hamburger" className="ham" onClick={Click} />
      </div>
      <div className={`Menu ${toggle ? "active" : ""}`}>
        <Link to="/auth" onClick={Click}>
          <h1>Home</h1>
        </Link>
        <Link to="/auth/about" onClick={Click}>
          <h1>About</h1>
        </Link>
        <Link to="/auth/jobs" onClick={Click}>
          <h1>Jobs</h1>
        </Link>
        <Link to="/auth/contact" onClick={Click}>
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
