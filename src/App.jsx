import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./assets/components/Header";

import Home from "./assets/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./assets/components/About/About";
import ElitePro from "./assets/pages/ElitePro";
import Calendar from "./assets/pages/Calendar";
import Rules from "./assets/pages/Rules/Index";

import MoreComite from "./assets/components/About/MoreComite";
import MoreEvents from "./assets/components/About/MoreEvents";
import MoreElite1 from "./assets/components/ElitePro/MoreElite1";
import MoreElite2 from "./assets/components/ElitePro/MoreElite2";
import EventsViews from "./assets/components/Views/home/EventsViews";
import RegistrationForm from "./assets/pages/RegistrationForm";
import Reglaments from "./assets/pages/Reglaments";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Home mode="wait" />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <About />
            </motion.div>
          } />
          <Route path="/reglaments" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Reglaments />
            </motion.div>
          } />
          <Route path="/calendar" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Calendar />
            </motion.div>
          } />
          <Route path="/rules" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Rules />
            </motion.div>
          } />
          {/* ABOUT */}
          <Route path="/moreComite" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <MoreComite />
            </motion.div>
          } />
          <Route path="/moreEvents" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <MoreEvents />
            </motion.div>
          } />
          <Route path="/EventsViews/:id" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <EventsViews />
            </motion.div>
          } />
          {/* Elite Pro */}
          <Route path="/moreElite1" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <MoreElite1 />
            </motion.div>
          } />
          <Route path="/moreElite2" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <MoreElite2 />
            </motion.div>
          } />
          {/* REGISTRATION FORM */}
          <Route path="/EventViews/:id/RegistrationForm" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <RegistrationForm />
            </motion.div>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
