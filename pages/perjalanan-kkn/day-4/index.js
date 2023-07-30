import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from '../../../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World, KKN, Day4 } from '../../../sections';

const Home1 = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Day4 />
  </div>
);

export default Home1;