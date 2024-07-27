import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./assets/components/Header";

import Home from "./assets/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

import ElitePro from "./assets/pages/ElitePro";
import Calendar from "./assets/pages/Calendar";
import Rules from "./assets/pages/Rules/Index";


import EventsViews from "./assets/components/Views/home/EventsViews";
import RegistrationForm from "./assets/pages/RegistrationForm";
import Reglaments from "./assets/pages/Reglaments";

import About from "./assets/pages/About";
import Courses from "./assets/pages/Courses";
import CourseDetails from "./assets/pages/CoursesDetail";

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
         
      
          <Route path="/EventsViews/:id" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <EventsViews />
            </motion.div>
          } />

<Route path="/courses" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <Courses />
            </motion.div>
          } />
      
          {/* REGISTRATION FORM */}
          <Route path="/EventViews/:id/RegistrationForm" element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <RegistrationForm />
            </motion.div>
          } />

<Route path="/CourseDetails/:courseId"element={
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
              <CourseDetails />
            </motion.div>
          } />


        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
