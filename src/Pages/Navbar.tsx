import { FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { BsPersonFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";

import "./Navbar.scss";

export default function Navbar() {
   const [initMenuState, setInitMenuState] = useState(true);
   const [menuState, setMenuState] = useState(true);

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
         <div
            className={`menu-items ${initMenuState ? "open-menu" : "close-menu"} ${
               menuState ? "" : "close-menu-final"
            }`}
         >
            <div className="home menu-item">
               {/* <TiHome className="icon" /> */}
               <p className="text">Home</p>
            </div>
            <div className="about menu-item">
               {/* <BsPersonFill className="icon" /> */}
               <p className="text">About</p>
            </div>
            <div className="project menu-item">
               {/* <CgWebsite className="icon" /> */}
               <p className="text">Projects</p>
            </div>
            <div className="contact menu-item">
               {/* <AiFillPhone className="icon" /> */}
               <p className="text">Contact</p>
            </div>
         </div>
      </div>
   );
}
