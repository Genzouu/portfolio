import "./Projects.scss";

export default function Projects() {
   const projects = [
      {
         headerText: "Discord Clone",
         imageURL:
            "https://www.wallpapers13.com/wp-content/uploads/2016/01/Hd-wallpaper-morning_summer_reflection_grass_lake_water-26807-1280x960.jpg",
         url: "https://github.com/Genzouu/discord-clone",
      },
      {
         headerText: "Workout Log",
         imageURL:
            "https://www.wallpapers13.com/wp-content/uploads/2016/01/Beautiful-scenery-tree-sea-sunset-HD-wallpaper-3842.jpg",
         url: "https://github.com/Genzouu/Workout-Log",
      },
      {
         headerText: "",
         imageURL:
            "https://getwallpapers.com/wallpaper/full/f/a/b/1336178-best-woods-desktop-wallpaper-1920x1080-for-computer.jpg",
      },
      {
         headerText: "",
         imageURL: "https://www.bwallpaperhd.com/wp-content/uploads/2019/06/ManitobaSky.jpg",
      },
      {
         headerText: "",
         imageURL:
            "https://www.10wallpaper.com/wallpaper/1920x1440/1704/waterfall_iceland_forest-Scenery_Photo_HD_Wallpaper_1920x1440.jpg",
      },
      {
         headerText: "",
         imageURL:
            "http://www.wallpapers13.com/wp-content/uploads/2016/01/Wallpaper-hd-Kirkjufell-iceland-Waterfall-river-mountain.jpg",
      },
      {
         headerText: "",
         imageURL:
            "https://www.wallpapers13.com/wp-content/uploads/2016/01/Beautiful-scenery-tree-sea-sunset-HD-wallpaper-3842.jpg",
      },
      {
         headerText: "",
         imageURL:
            "https://www.10wallpaper.com/wallpaper/1280x960/1606/Forest_turquoise_lake_guarded-scenery_HD_wallpaper_1280x960.jpg",
      },
      {
         headerText: "",
         imageURL:
            "http://www.wallpapers13.com/wp-content/uploads/2015/12/Winter-River-Nature-Trees-Landscape-HD-Wallpaper-1920x1200.jpg",
      },
   ];

   return (
      <div className="projects">
         {projects.map((project, index) => (
            <a className="project" href={project.url} target="_blank" rel="noreferrer" key={index}>
               <div className="header">{project.headerText}</div>
               <img className="project-img" src={project.imageURL} alt="" />
            </a>
         ))}
      </div>
   );
}
