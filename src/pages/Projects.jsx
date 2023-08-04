import '../components/css/Projects.css'
import Navbar from "../components/Navbar";

function Projects() {




  return (
    <div className="">
    <Navbar />
    <section className="projects">
    {/* <!-- title --> */}
      <div class="title">
        <h2>Our Projets</h2>
        <div class="underline"></div>
      </div>
      <div className="section-center">
      {/* <!-- single item --> */}
      <article class="menu-item">
          <img src="./project-03-90a4795a.jpg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>Streameo - Movie Website</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        {/* <!-- end of single item --> */}
        <article class="menu-item">
          <img src="./project-02-3100ce66.jpg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>Lofi - A Music App For Focus And Motivation</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="./project-02-3100ce66.jpg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>The Quote</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
        <article class="menu-item">
          <img src="./project-02-3100ce66.jpg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>The Quote</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
    </div>
  );
}

export default Projects;
