import React from "react";
import Coursel from "../sharedComponents/Coursel";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
const courselData = [
  {
    img: "https://w0.peakpx.com/wallpaper/940/886/HD-wallpaper-small-jungle-waterfall-waterfalls-rivers-nature-jungles.jpg",
    alt: "ballLamp",
    active: "true",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/940/886/HD-wallpaper-small-jungle-waterfall-waterfalls-rivers-nature-jungles.jpg",
    alt: "ballLamp",
    active: "false",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/940/886/HD-wallpaper-small-jungle-waterfall-waterfalls-rivers-nature-jungles.jpg",
    alt: "ballLamp",
    active: "false",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/940/886/HD-wallpaper-small-jungle-waterfall-waterfalls-rivers-nature-jungles.jpg",
    alt: "ballLamp",
    active: "false",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/940/886/HD-wallpaper-small-jungle-waterfall-waterfalls-rivers-nature-jungles.jpg",
    alt: "ballLamp",
    active: "false",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/940/886/HD-wallpaper-small-jungle-waterfall-waterfalls-rivers-nature-jungles.jpg",
    alt: "ballLamp",
    active: "false",
  },
];
function Home() {
  return (
    <>
      <Navbar />
      <div className="Home">
        <Coursel data={courselData} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
