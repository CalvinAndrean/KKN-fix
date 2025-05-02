import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { SejarahBambu } from "../../sections";

const Home1 = () => (
  <div className="bg-primary-black flex flex-col h-screen">
    <Navbar title={"Sejarah Bambu Pringgading"} />
    <main className="flex-1 flex flex-col">
      <SejarahBambu />
    </main>
  </div>
);

export default Home1;
