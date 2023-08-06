import "./css/feature.css";
import Fade from "react-reveal/Fade";
import contents from "../contents.json";

export default function Feature() {
  return (
    <section id="feature" className="feature-section">
      <Fade left>
        <div className="container-fluid feat-contain">
          <div className="container contents-contain">
            <div className="contents-contain-text">
              <h1>{contents.feature[1]}</h1>
              <p>{contents.feature[2]}</p>
            </div>
            <div className="row justify-content-around">
              <div className="col-md-4 feature-box">
                <img src="rapidicon_team.svg" alt="" />
                <h4>{contents.feature[3]}</h4>
                <p>{contents.feature[4]}</p>
              </div>
              <div className="col-md-4 feature-box">
                <img src="rapidicon_payment.svg" alt="" />
                <h4>{contents.feature[5]}</h4>
                <p>{contents.feature[4]}</p>
              </div>
              <div className="col-md-4 feature-box">
                <img src="rapidicon_feat.svg" alt="" />
                <h4>Prompt service</h4>
                <p>{contents.feature[4]}</p>
              </div>
              <div className="col-md-4 feature-box">
                <img src="rapidicon_topnotch.svg" alt="" />
                <h4>Top notch software</h4>
                <p>{contents.feature[4]}</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
