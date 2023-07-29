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
        <section id='contact' className="contact--form d-flex align-items-center">
            <div className="contact-con container-lg rounded-4">
                <div className="text-center">
                    <h2>Get in Touch</h2>
                    <p className="lead">Questions to ask? Fill out the form to contact us directly...</p>
                </div>

                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        <form ref={form} id="form" onSubmit={sendEmail}>
                            
                        <div className="">   
                            <label htmlFor="name" className="form-label" id="username">Name</label>
                            <i class="fas fa-user"></i>
                            <input type="text" className='form-control' id='name' name='name' />
                        </div> 
                        

                        <div> 
                            <label htmlFor="email" className="form-label" id="email">Email</label>
                            <i class="far fa-envelope"></i>
                            <input type="email" className='form-control' id='email' name='email' />
                            <i class="fas fa-exclamation-circle failure-icon"></i>
                            <i class="far fa-check-circle success-icon"></i>
                            <div class="error"></div>
                        </div> 

                        <div> 
                        <label htmlFor="phone" className="form-label">Phone no.</label>
                        <i class="fas fa-user"></i>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='form-control' id='phone' name='phone' />
                        </div> 




                            <div className="mb-4 mt-5">
                            <label className="form-label" htmlFor="query">Your Query</label>
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


