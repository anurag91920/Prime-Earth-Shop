import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // ✅ Add this CSS file

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ka30qom',
      'template_qjwpl5r',
      form.current,
      'sn8MI5ilo2RB4PqKT'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('Failed to send message.');
      }
    );
  };

  return (
    <div className="container my-5">
      <div className="row border-top py-4">
        <div className="col-12 text-center mb-4">
          <h1 className="section-title">Contact Me</h1>
          <hr className="underline" />
        </div>

        <div className="col-lg-8 mx-auto">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning fw-bold px-5 py-2">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;