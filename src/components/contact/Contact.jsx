import { useRef, useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(true);

    const formRef = useRef();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, formRef.current, {
                publicKey,
            })
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                },
            );
    };

    return (
        <section className="contact">
            <div className="textContainer">
                <h1>contact.</h1>
            </div>
            <div className="formContainer">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" required name="name" />
                    <input type="email" placeholder="Email" required name="email" />
                    <textarea placeholder="Message" rows={8} name="message" />
                    <button>Submit</button>
                    {
                        error && <p>Error sending message. Please try again.</p>
                    }
                    {
                        success && open && (
                            <div className="success-container">
                                <img
                                    className="close"
                                    src="./close.png"
                                    alt="close"
                                    onClick={() => setOpen(false)}
                                />
                                <img src="./panda.png" alt="panda" />
                                <p className="success">
                                    Thank you for reaching out! Your message has been successfully sent.
                                </p>
                            </div>
                        )}
                </form>
            </div>
        </section>
    )
};

export default Contact;
