import './hero.css'

export default function Hero(){
    return(
        <section className='hero'>
            <div className="hero--text">

            <h1 className='primary-heading'> We Provide You Custom <br />
            Softwares And IT Services</h1>
            <p className='secondary-heading'>We are a full service technology and digital solutions company with over 20 years of experience in industry.</p>

            </div>
            <button className='btn btn--primary--animated'>Learn More</button>

        </section>
    )
}