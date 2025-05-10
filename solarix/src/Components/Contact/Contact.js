import React, { useState, useEffect } from "react";
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = ({apiKey}) => {
    const [result, setResult] = useState("");
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth <= 320 && window.innerHeight <= 467);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", `${apiKey}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email Submitted Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const email = "smartenergysolutions99@gmail.com".split("@");

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
                <p>We value your input and are here to assist you. Whether you have questions, feedback, or suggestions regarding our solar solutions, we encourage you to get in touch. Your thoughts are essential as we work towards providing sustainable and efficient solar energy solutions for our community.</p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="mail icon" />
                        <span style={{ display: "inline-block", wordBreak: "break-word", marginBottom: 0, marginTop: 0 }}>
                            {email[0]}@
                            {isMobileView ? <br /> : ""}
                            {email[1]}
                        </span>
                    </li>
                    <li><img src={phone_icon} alt="phone icon" />+91 84015 45230</li>
                    <li><img src={location_icon} alt="location icon" />Office No L-13, Akshardeep Complex, Near Jain Derasar, Shastri Nagar, Bhavnagar - 364001 (Near Jain Derasar)</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder='Enter your name' required/>
                    <label>Phone number</label>
                    <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="white arrow" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
