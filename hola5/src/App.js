import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./route/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import People from "./pages/people/People.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Clock from "./pages/clock/Clock.jsx";
import PersonProfile from "./pages/personProfile/PersonProfile.jsx"
import NoPage from "./route/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="contact" element={<Contact />} />
          <Route path="personProfile" element={<PersonProfile />} />
          <Route path="clock" element={<Clock />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
