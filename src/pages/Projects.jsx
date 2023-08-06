import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import contents from "../contents.json";
import "../components/css/Projects.css";

function Projects() {
  const [projects] = useState(contents.projects);

  return (
    <div>
      <Navbar />
      <section className="projects pb-3">
        <div className="title">
          <h2>Our Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="row">
          {projects.map((e, i) => {
            return (
              <article key={i} className="col-md-6 p-m-5">
                <img src={e.src} alt="menu item" className="photo" />
                <div className="item-info w-75">
                  <header className="justify-content-center my-3">
                    <h4>{e.title}</h4>
                  </header>
                  <p className="item-text text-center">{e.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
