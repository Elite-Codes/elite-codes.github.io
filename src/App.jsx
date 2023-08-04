import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
//<-- components for navbar routing -->
import Contacts from "../src/components/form";
import Services from "../src/components/hero_02";
import Aboutus from "../src/components/feature";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="whatwedo" element={<AboutUs />}>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="contact" element={<Contacts />}/>
        <Route path="aboutus" element={<Aboutus />}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
