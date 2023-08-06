import "../components/css/Callus.css";
import Fade from "react-reveal/Fade";
import Navbar from "../components/Navbar";

// import contents from "../contents.json"

function Callus() {
  return (
    <>
      <Navbar />
      <section className="callus min-vh-100">
        <Fade bottom>
          <div className="container  rounded-5 shadow rounded">
            <h1 className="my-4">Schedule a call with us</h1>
            <article>
              <div className="profile img-container">
                <img
                  src="https://avatars.githubusercontent.com/u/53007599?s=400&u=e523633a9b096396748fd8d647a2efb792db7838&v=4"
                  alt=""
                />
              </div>
              <h4>Waseem Arshad</h4>
              <p className="ceo">Project Head</p>
              <a className="ceo" href="tel:+44 7384182486">
                +44 7384182486
              </a>
              <a className="ceo" href="tel:+91 7907842451">
                +91 7907842451
              </a>
            </article>

            <article>
              <div className="profile img-container">
                <img
                  src="https://avatars.githubusercontent.com/u/31400505?v=4"
                  alt=""
                />
              </div>
              <h4>Akbar</h4>#<p className="ceo">Business Development Head</p>
              <a href="tel:+971 527468099">+971 527468099</a>
            </article>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default Callus;
