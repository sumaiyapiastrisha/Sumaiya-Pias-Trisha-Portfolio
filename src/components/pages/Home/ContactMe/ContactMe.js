import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './ContactMe.css'
import { Container } from 'react-bootstrap';


const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_8a61wf9', 'template_lq8hb0v', e.target, 'user_2R9joG3isrL4ofpyJfdEW').then(res => {
            console.log(res)
        }).catch(error => console.log(error))
    }

    return (

        <form className="mb-5 bg-gray  background" onSubmit={sendEmail}>
            <h1 className="py-5">Contact Me</h1>
            <input className="mt-3  bg-white border-0 shadow w-50 p-3" type="text" placeholder="Name"></input>
            <br />
            <input className="mt-3 bg-white border-0 shadow w-50 p-3" type="email" placeholder="Your email"></input>
            <br />
            <textarea className="mt-3 bg-white border-0 shadow w-50 p-3" name="message" placeholder="write your mail"></textarea>
            <br />
            <button className="mt-3 bg-white border-0 shadow w-50 button border-0  rounded  fw-bold p-3" type=" submit">Send E-mail</button>
        </form >
    )
};
export default ContactMe;