import './css/hero_03.css'

export default function Hero03() {
    return(
        <section className="hero03">
            <div className="container">
                <div className="row">
                    <div className="hero03--rhs col-md-6">
                        <div className="hero03--rhs">
                        <h1>Keep Your Business Safe & <br />Ensure  high Availbility.</h1>
                        <p className='title--describe'>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.</p>
                            <ul className='p-0'>
                                <li><img src="./svgexport-7.svg" alt="" /> Delivered more than 4k client interaction</li>
                                <li><img src="./svgexport-7.svg" alt="" /> Provided by experts to help challenge activities</li>
                                <li><img src="./svgexport-7.svg" alt="" /> Completed with peer perspectives and advice</li>
                            </ul>
                            <button className="btn mx-0 hero03--btn">Explore More &rarr;</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="./dashboard.webp" alt="" />
                        </div>
                </div>
            </div>
        </section>
    )
}