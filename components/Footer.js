import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-container">
                    <div className="footer-column brand-column">
                        <h3 className="footer-logo">BPIT</h3>
                        <p className="footer-desc">
                            Bhagwan Parshuram Institute of Technology is a pioneer in engineering and management education, strictly adhering to the highest standards of academic excellence.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/admissions">Admissions</a></li>
                            <li><a href="/departments">Departments</a></li>
                            <li><a href="/placements">Placements</a></li>
                            <li><a href="/alumni">Alumni</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Important</h4>
                        <ul className="footer-links">
                            <li><a href="/notices">Notices & Circulars</a></li>
                            <li><a href="/events">Upcoming Events</a></li>
                            <li><a href="/academic-calendar">Academic Calendar</a></li>
                            <li><a href="/grievances">Grievances</a></li>
                            <li><a href="/sgrc">SGRC</a></li>
                        </ul>
                    </div>

                    <div className="footer-column contact-column">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <MapPin size={18} className="contact-icon" />
                            <span>PSP-4, Dr. K.N. Katju Marg, Sector 17, Rohini, New Delhi-110089</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="contact-icon" />
                            <span>+91-11-27572900</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="contact-icon" />
                            <span>bpitindia@yahoo.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <p>&copy; {new Date().getFullYear()} Bhagwan Parshuram Institute of Technology. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
