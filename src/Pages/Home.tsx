import TriangleSVG from "../TriangleSVG";
import "./Home.scss";

export default function Home() {
   return (
      <div className="home">
         <div className="background">
            <div className="stars stars-background"></div>
            <div className="stars stars-middleground"></div>
            <div className="stars stars-foreground"></div>
         </div>
         <TriangleSVG />
         <div className="name">GENZOU</div>
         <div className="intro-text introduction">
            Hi, I'm Sebastian Cosentino, also know as Genzou. I'm predominantly a front-end web developer with some
            back-end experience.
         </div>
         <div className="intro-text welcome">Welcome to my portfolio.</div>
         <div className="top"></div>
         <div className="left-right-container">
            <div className="left"></div>
            <div className="right"></div>
         </div>
         <div className="triangle"></div>
         <div className="middle"></div>
      </div>
   );
}
