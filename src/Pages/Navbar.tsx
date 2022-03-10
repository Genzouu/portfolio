import { FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
   const [initMenuState, setInitMenuState] = useState(false);
   const [menuState, setMenuState] = useState(false);
   const [selectedPage, setSelectedPage] = useState<"home" | "about" | "projects" | "contact">("home");

   const manageMenu = (open: boolean) => {
      if (open) {
         setInitMenuState(true);
         setMenuState(true);
      } else {
         setInitMenuState(false);
         setTimeout(() => setMenuState(false), 400);
      }
   };

   return (
      <div className={`navbar ${initMenuState ? "open-navbar" : "close-navbar"}`}>
         <FaBars
            className={`menu-icon icon ${initMenuState ? "open-menu-icon" : ""}`}
            onClick={() => manageMenu(!initMenuState)}
         />
         <div className={`menu ${initMenuState ? "open-menu" : "close-menu"} ${menuState ? "" : "close-menu-final"}`}>
            <Link
               className={`menu-item ${selectedPage === "home" ? "menu-item-selected" : ""}`}
               to="/"
               onClick={() => setSelectedPage("home")}
            >
               Home
            </Link>
            <Link
               className={`menu-item ${selectedPage === "about" ? "menu-item-selected" : ""}`}
               to="/about"
               onClick={() => setSelectedPage("about")}
            >
               About
            </Link>
            <Link
               className={`menu-item ${selectedPage === "projects" ? "menu-item-selected" : ""}`}
               to="/projects"
               onClick={() => setSelectedPage("projects")}
            >
               Projects
            </Link>
            <Link
               className={`menu-item ${selectedPage === "contact" ? "menu-item-selected" : ""}`}
               to="/contact"
               onClick={() => setSelectedPage("contact")}
            >
               Contact
            </Link>
         </div>
      </div>
   );
}
