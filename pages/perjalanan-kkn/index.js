import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  KKN,
} from "../../sections";

const Home = () => (
  <div className="bg-primary-black overflow-hidden min-h-screen">
    <Navbar title={"Perjalanan KKN UAJY di Pringgading"} />
    <KKN />
  </div>
);

export default Home;
