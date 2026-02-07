'use client';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="section-header-dark">
                    <h2>Student Testimonials</h2>
                    <p>What our alumni say about their journey</p>
                </div>

                <div className="testimonial-card">
                    <Quote size={40} className="quote-icon" />
                    <p className="testimonial-text">
                        "My experience at Bhagwan Parshuram Institute of Technology (BPIT) is great and memorable.
                        The professors guided and motivated me at each step. Finally, I cracked the GATE exam on my
                        first attempt and secured a seat in IIT Patna."
                    </p>
                    <div className="testimonial-author">
                        <div className="author-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60)' }}></div>
                        <div className="author-info">
                            <h4>Vishal Singh Roha</h4>
                            <span>CSE (2016-20) | M.Tech IIT Patna</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
