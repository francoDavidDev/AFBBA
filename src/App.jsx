import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./assets/components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./assets/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";

import Calendar from "./assets/pages/Calendar";

import EventsViews from "./assets/components/Views/home/EventsViews";

import Reglaments from "./assets/pages/Reglaments";

import About from "./assets/pages/About";
import Courses from "./assets/pages/Courses";
import CourseDetails from "./assets/pages/CoursesDetail";
import Result from "postcss/lib/result";
import Results from "./assets/pages/Result";
import Footer from "./assets/components/footer";
import TournamentDetails from "./assets/pages/TournamentDetails";

import ResultsCampeonatoArgentino from "./assets/components/Results/ResultsCampeonatoArgentino";

import ScrollToTop from "./assets/utils/ScrollToTop";
import Trainers from "./assets/pages/Trainers";
import CarrouselSponsors from "./assets/components/CarrouselSponsors";

import Form from "./assets/pages/form/Form";
import PageNoFound from "./assets/components/PageNoFound";
import CampeonatoNacional from "./assets/components/Tournaments/CampeonatoNacional";
import MusumeciInscripcion from "./assets/components/musumeci/MusumeciInscripcion";
import MusumeciOpciones from "./assets/components/musumeci/MusumeciOpciones";
import MusumeciInformacionEvento from "./assets/components/musumeci/MusumeciInformacionEvento";






const App = () => {
  return (
    <div>
      <HashRouter>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home mode="wait" />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/reglaments"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Reglaments />
                </motion.div>
              }
            />
            <Route
              path="/results"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Results />
                </motion.div>
              }
            />
            <Route
              path="/calendar"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar />
                </motion.div>
              }
            />

            {/* ABOUT */}

            <Route
              path="/EventsViews/:id"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <EventsViews />
                </motion.div>
              }
            />

            <Route
              path="/courses"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Courses />
                </motion.div>
              }
            />



            <Route
              path="/courses/:courseId"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseDetails />
                </motion.div>
              }
            />

            <Route
              path="/tournament/:title"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <TournamentDetails />
                </motion.div>
              }
            />

            <Route
              path="/campeonatoArgentinoResults"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <ResultsCampeonatoArgentino />
                </motion.div>
              }
            />

            <Route
              path="/trainers"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Trainers />
                </motion.div>
              }
            />

            <Route
              path="/campeonatoNacional"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <CampeonatoNacional />
                </motion.div>
              }
            />


            <Route
              path="/formInscription"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Form />
                </motion.div>
              }
            />

            <Route
              path="/pageNoFound"
              element={
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <PageNoFound />
                </motion.div>
              }
            />
            <Route path="/opciones-musumeci" element={<MusumeciOpciones />} />
            <Route path="/evento-musumeci" element={<MusumeciInformacionEvento />} />
          </Routes>
          <CarrouselSponsors />
          <Footer />
             <ToastContainer position="top-center" autoClose={3000} />
        </ScrollToTop>
      </HashRouter>
    </div>
  );
};

export default App;
