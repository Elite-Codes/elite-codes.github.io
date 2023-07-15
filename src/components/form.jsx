import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './css/form.css'

export default function Form(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        "service_t6fh9nq",
        "template_vwbfhg4",
        form.current,
        "y5Yq9sK-x5FFmSmvb" //this is my cred- waseem
      )
  
    //   emailjs.sendForm('service_y3rbzgq', 'template_vxhwkrj', form.current, 'aMONavr7EDU_LxXT8') - keep this commented- use this if u want to test keep the other in code
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(
        <section className="contact--form d-flex align-items-center">
            <div className="contact-con container-lg rounded-4">
                <div className="text-center">
                    <h2>Get in Touch</h2>
                    <p className="lead">Questions to ask? Fill out the form to contact us directly...</p>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className='form-control' id='email' name='email' />

                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className='form-control' id='name' name='name' />


                            <div className="mb-4 mt-5">
                            <label htmlFor="query">Your Query...</label>
                            <textarea
                                name="message"
                                className="form-control"
                                rows="3"
                            ></textarea>
                            </div>

                            <div className="mb-4 text-center">
                                <button type="submit" id="button" className='btn btn-primary mx-0 my-4'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


