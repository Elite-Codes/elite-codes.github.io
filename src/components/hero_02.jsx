import "./css/hero_02.css";

export default function Hero02() {
  return (
    <section className="hero02">
      <div className="hero2--cover-text">
        {" "}
        <h1>
          Software Developement & <span className="underline">IT Services</span>{" "}
        </h1>{" "}
      </div>
      <div className="cards">
        <div className="card">
          <img src="/dev icon.svg" alt="" />
          <h4>Web design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <img src="/dev icon.svg" alt="" />
          <h4>Branding</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <img src="/dev icon.svg" alt="" />
          <h4>Development</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}
