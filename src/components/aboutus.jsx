import './css/aboutus.css'
import Fade from 'react-reveal/Fade';

export default function Aboutus(){
    return(
        <section className='aboutus d-flex align-content-center '>
            <Fade bottom>
            <div className="container my-5 rounded-5 shadow bg-body-tertiary rounded">
                <div className="row ">
                    <h1 className='text-center mt-5'>Our customers and their experiences</h1>                 
                </div>
            </div>
            </Fade>
        </section>
    )
}