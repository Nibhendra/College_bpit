'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <main className="main-container">
            <Navbar />

            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you. Reach out to us for any queries.</p>
            </div>

            <section className="contact-section">
                <div className="contact-container">

                    <div className="contact-info-card">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Address</h3>
                                <p>PSP-4, Dr. K.N. Katju Marg, Sector 17, Rohini, New Delhi-110089</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Phone</h3>
                                <p>+91-11-27572900</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <p>bpitindia@yahoo.com</p>
                            </div>
                        </div>

                        <div className="map-embed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.877024227891!2d77.11181231508204!3d28.75235898236969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sBhagwan%20Parshuram%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1628600000000!5m2!1sen!2sin"
                                style={{ border: 0, width: '100%', height: '250px', borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h2>Send us a Message</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Admissions Inquiry" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn-submit">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Contact;
