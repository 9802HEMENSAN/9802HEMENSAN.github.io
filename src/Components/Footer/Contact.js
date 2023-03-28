import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai"

import "./contact.css"
function Contact() {
  return (
    <>
      <section className="contact" id="contact"  style={{
      // backgroundColor: "#edf2f8",
      backgroundColor: "#2c1e4a",
      color : "white"
    }} >
        <div className="contact-heading">
          <h2>Contact Me</h2>

        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="contact-widget">

                <div className="contact-widget-item">
                  <div className="icon">
                    <CiLocationOn />
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>Janjgir-Champa, Chhattisgarh
                     </p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <AiTwotonePhone />
                  </div>
                  <div className="text">
                    <h5>Phone</h5>
                    <p> +91 : 6264866332</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <AiOutlineMail />
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <p>hmahilange9802@gmail.com </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="coulmn">
              <div className="contact-form">
                <form >
                  <input type="text" placeholder='Enter name' />
                  <input type="email" placeholder='Enter email' />
                  <textarea name="" placeholder='Write message'></textarea>
                  <button type="submit" className='site-btn'>Send Message</button>
                </form>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="map-column">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28626.37993947663!2d92.32219204016026!3d26.25200657801662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ad1acafced0af%3A0x55fd068e1c7a4781!2sMorigaon%2C%20Assam%20782105!5e0!3m2!1sen!2sin!4v1673612730778!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  title="my address"
                  style={{border:"0"}}
                  allowfullscreen=""
                  loading="lazy"
                 
                  referrerpolicy="no-referrer-when-downgrade">

                </iframe>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact