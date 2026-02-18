import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
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
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/admissions">Admissions</Link></li>
                            <li><Link href="/departments">Departments</Link></li>
                            <li><Link href="/placements">Placements</Link></li>
                            <li><Link href="/alumni">Alumni</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Important</h4>
                        <ul className="footer-links">
                            <li><Link href="/notices">Notices & Circulars</Link></li>
                            <li><Link href="/events">Upcoming Events</Link></li>
                            <li><Link href="/academic-calendar">Academic Calendar</Link></li>
                            <li><Link href="/grievances">Grievances</Link></li>
                            <li><Link href="/sgrc">SGRC</Link></li>
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
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
