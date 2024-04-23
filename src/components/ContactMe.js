import React, { useRef } from "react"
import emailjs from "emailjs-com"

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zd7mdnj', 'template_4nh7zb4', form.current, 'DKRr8FnTUU6nMOtkQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
        <>
            <div className="contact-container">
                <div className="hello-box">
                    <p className="contact-hello">
                        Say Hello!
                    </p>
                </div>
                <div className="intro-box">
                    <p className="contact-intro">
                        Excited to connect? Simply complete the form below, and I'll be in touch with you shortly!
                    </p>
                </div>
                <div className="form-container">
                    <form ref={form} onSubmit={sendEmail} id="form">
                        <div className="form-name">
                            <div className="label-name">
                                <label id="name-label">Name*</label>
                            </div>
                            <div className="input-name">
                                <input type="text" name="user_first" placeholder="First" id="input-first"/>
                                <input type="text" name="user_last" placeholder="Last" id="input-last"/>
                            </div>
                        </div>
                        <div className="form-email">
                            <div className="label-email">
                                <label id="email-label">Email*</label>
                            </div>
                            <input type="email" name="user_email" placeholder="Email" id="input-email" />
                        </div>
                        <div className="form-message">
                            <div className="label-message">
                                <label id="message-label">Message*</label>
                            </div>
                            <textarea name="message" placeholder="Message" id="input-message"/>
                        </div>
                        <div className="submit-button">
                            <input type="submit" value="Send" id="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactMe