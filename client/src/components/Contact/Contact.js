import React, { useRef, useState } from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);
    const { t } = useTranslation('lng');

    const handleSubmit = e => {

        e.preventDefault()

        emailjs.sendForm(/*----------------------*/)
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
            });
    }

    return (
        <div className="contact">
            <h2>{t('contact')}</h2>
            <h3>+374 00 00 00</h3>
            <div className="social">
                <a href="#" target="_blank"><FaFacebook size={30} style={{ margin: "0 1rem 5px 1rem" }} />Facebook</a>
                <a href="#" target="_blank"><FaInstagram size={30} style={{ margin: "0 1rem 5px 1rem" }} />Instagram</a>
            </div>
            <form ref={ref} onSubmit={handleSubmit}>
                <div className="inputs">
                    <input placeholder={t('name')} name="name" />
                    <input placeholder={t('mail')} name="email" />
                </div>
                <textarea placeholder={t('writeMessage')} rows={10} name="message" />
                <button className="btn" type="submit">{t('send')}</button>
            </form>
            <p>{success && t('message')}</p>
        </div>
    )
}

export default Contact;