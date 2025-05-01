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
  SejarahBambu,
} from "../../sections";

const Home1 = () => (
  <>
    <style jsx global>{`
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <div className="bg-primary-black overflow-hidden min-h-screen">
      <Navbar title={"Sejarah Bambu Pringgading"} />
      <SejarahBambu />
    </div>
  </>
);

export default Home1;
