import "./css/hero_02.css";

export default function Hero02() {
  return (
    <section className="bg-white">
      {/* <section className="hero02"> */}
      {/* <div className="hero2--cover-text">
        {" "}
        <h1>
          Software Developement & <span className="underline">IT Services</span>
        </h1>
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
      </div>  */}
      <div>
        <div className="row justify-content-around">
          <div className="col-md-4 blk text-center">
            <div>
              <img src="/dev icon.svg" alt="" />
            </div>
            <div>
              <h4>Web design</h4>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4 blk text-center">
            {" "}
            <img src="/dev icon.svg" alt="" />
            <h4>Web design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4 blk text-center">
            {" "}
            <img src="/dev icon.svg" alt="" />
            <h4>Web design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
