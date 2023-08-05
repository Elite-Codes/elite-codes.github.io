import '../components/css/Callus.css'
import Fade from 'react-reveal/Fade';

function Callus() {
    return (
        <section className='callus min-vh-100'>
            <Fade bottom>
            <div className='container  rounded-5 shadow rounded'>
            <h1 className='my-4'>Schedule an call with us</h1>
            <article>
                <div className="profile img-container">
                    <img src="./person-1.jpeg" alt="" />
                </div>
                <h4>Wazim Arshad</h4>
                <p className='ceo'>CEO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius quos deserunt earum vitae voluptatum soluta aspernatur ab modi odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima molestias porro rerum aliquam blanditiis, quam expedita aut vel voluptatibus! </p>
                {/* <!-- social buttons --> */}
                    <div class="button-container my-4">
                        <a href="">
                            <img src="./icons/Group 33.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="./icons/Group 33.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="./icons/Group 33.svg" alt="" />
                        </a>
                    </div>
            </article>
            </div>
            </Fade>
        </section>
    );
  }
  
  export default Callus;
  