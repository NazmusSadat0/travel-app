import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link to="/" className="text-xl text-green-50 font-bold">
        FastTravel
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            to={link.href}
            key={link.key}
            className="text-sm text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <img src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-poiner lg:hidden" />
    </nav>
  );
};

export default Navbar;
