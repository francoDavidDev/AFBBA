import { useState } from "react";
import Header from "./assets/components/Header";

import Home from "./assets/pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./assets/components/About/About";
import ElitePro from "./assets/pages/ElitePro";
import Calendar from "./assets/pages/Calendar";
import Rules from "./assets/pages/Rules/Index";
import ViewPageHome from "./assets/components/Home/ViewPageHome";
import MoreComite from "./assets/components/About/MoreComite";
import MoreEvents from "./assets/components/About/MoreEvents";
import MoreElite1 from "./assets/components/ElitePro/MoreElite1";
import MoreElite2 from "./assets/components/ElitePro/MoreElite2";
import EventsViews from "./assets/components/Views/home/EventsViews";
import RegistrationForm from "./assets/pages/RegistrationForm";
import NoticesPage from "./assets/pages/Notices";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home mode="wait" />} />
          <Route path="/about" element={<About />} />
          <Route path="/elite-pro" element={<ElitePro />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/rules" element={<Rules />} />


          <Route path="/viewPageHome/:titleParams" element={<ViewPageHome />} />
          {/* ABOUT */}


          {/* VIEWS */}
          <Route path="/moreComite" element={<MoreComite />} />
          <Route path="/moreEvents" element={<MoreEvents />} />
          <Route path="/EventsViews/:id" element={<EventsViews />} />


          {/* elite pro */}
          <Route path="/moreElite1" element={<MoreElite1 />} />
          <Route path="/moreElite2" element={<MoreElite2 />} />

          {/* REGISTRATION FORM */}
          <Route path="/EventViews/:id/RegistrationForm" element={<RegistrationForm />} />


          <Route path="/notices" element={<NoticesPage />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
