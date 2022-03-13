import { useEffect } from "react";
import TriangleSVG from "../TriangleSVG";
import "./Home.scss";

export default function Home() {
   useEffect(() => {
      if (typeof window !== undefined) {
         document.addEventListener("mousemove", (e) => {
            const baseParallaxStrength = 10;
            document.querySelectorAll<HTMLElement>(".parallax").forEach((element) => {
               let layerParallaxStrength = 0;
               element.classList.forEach((className) => {
                  if (className.includes("parallax")) {
                     let layer = parseInt(className[className.length - 1]);
                     if (!isNaN(layer)) layerParallaxStrength = layer;
                  }
               });
               let x =
                  ((e.pageX - window.innerWidth / 2) / (window.innerWidth / 2)) *
                  baseParallaxStrength *
                  layerParallaxStrength;
               let y =
                  ((e.pageY - window.innerHeight / 2) / (window.innerHeight / 2)) *
                  baseParallaxStrength *
                  layerParallaxStrength;
               element.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
         });

         let home = document.getElementsByClassName("home")[0];
         let moon = document.getElementsByClassName("moon")[0] as HTMLElement;
         // let backgroundElements = document.querySelectorAll<HTMLElement>(".stars");
         home.addEventListener("scroll", () => {
            // Move the circle down as the user scrolls. 28rem is the circle's usual top value, and 60px is half the height of the header
            let y = 27 + (home.scrollTop <= 60 ? 0 : (home.scrollTop - 60) / 10);
            moon.style.top = y + "rem";

            if (home.scrollTop <= 1000) {
               home.classList.add("night");
               home.classList.remove("day");

               moon.classList.add("moon");
               moon.classList.remove("sun");

               // backgroundElements.forEach((element, index) => {
               //    element.classList.add("stars" + (index + 1));
               //    element.classList.remove("clouds" + (index + 1));
               // });
            } else {
               home.classList.add("day");
               home.classList.remove("night");

               moon.classList.add("sun");
               moon.classList.remove("moon");

               // backgroundElements.forEach((element, index) => {
               //    element.classList.add("clouds" + (index + 1));
               //    element.classList.remove("stars" + (index + 1));
               // });
            }
         });
      }
   }, []);

   return (
      <div className="home">
         <div className="circle moon parallax parallax8"></div>
         <div className="background">
            <div className="stars stars1 parallax parallax1"></div>
            <div className="stars stars2 parallax parallax2"></div>
            <div className="stars stars3 parallax parallax3"></div>
         </div>
         <div className="name">GENZOU</div>
         <div className="top">
            <div className="intro-text introduction">
               Hi, I'm Sebastian Cosentino, also know as Genzou. I'm predominantly a front-end web developer with some
               back-end experience.
            </div>
            <div className="intro-text welcome">Welcome to my portfolio.</div>
         </div>
         <div className="middle"></div>
      </div>
   );
}
