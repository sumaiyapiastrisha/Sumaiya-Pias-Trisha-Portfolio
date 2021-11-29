import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { Container } from 'react-bootstrap';


const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_8a61wf9', 'template_lq8hb0v', e.target, 'user_2R9joG3isrL4ofpyJfdEW').then(res => {
            console.log(res)
        }).catch(error => console.log(error))
    }

    return (
        <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name"></input>
            <br />
            <input type="email" placeholder="Your email"></input>
            <br />
            <textarea name="message" placeholder="write your mail"></textarea>
            <br />
            <button type="submit">send</button>
        </form>
    )
};
export default ContactMe;