import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';
import Header from "../components/Header";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current, {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset();
  };

  return (
    <div>
      <Header/>

      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
              <img src="./images/contact.svg" alt="" />
          </div>
          <div className="col-md-6">
              <div className='contact-form m-2 p-5 n-box2'>
                  <h3 className='font-bold'>Contact Me</h3>

                  <hr />
                  

                  <form ref={form} onSubmit={sendEmail}>

                    <input type="text" className='form-control' placeholder='name' name="user_name" />

                    <input type="email" className='form-control' placeholder='email' name="user_email" />

                    <textarea name="message" className='form-control' rows={3} defaultValue={""} placeholder='message'/>

                    <button className='primary-button mt-3' type="submit" value="Send">SUBMIT</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact