'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
    {
        id: 1,
        image: '/bpit_front.jpg',
        badge: 'Admissions Open 2026-27',
        title: 'Shaping Future',
        highlight: 'Innovators',
        subtitle: '& Global Leaders',
        desc: 'Bhagwan Parshuram Institute of Technology (BPIT) is a premier engineering and management institute dedicated to academic excellence.',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1504817745117-31de210fb279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        badge: 'World-Class Infrastructure',
        title: 'Excellence in',
        highlight: 'Research',
        subtitle: '& Innovation',
        desc: 'State-of-the-art labs, modern libraries, and a thriving ecosystem for research and development.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        badge: 'Holistic Development',
        title: 'Vibrant',
        highlight: 'Campus Life',
        subtitle: '& Culture',
        desc: 'Beyond academics, we foster talent through cultural fests, sports, and technical societies.',
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="hero">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-bg"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${slides[current].image})` }}
                />
            </AnimatePresence>

            <div className="hero-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="hero-badge">{slides[current].badge}</div>
                        <h1 className="hero-title">
                            {slides[current].title} <span className="highlight">{slides[current].highlight}</span> <br />
                            {slides[current].subtitle}
                        </h1>
                        <p className="hero-description">{slides[current].desc}</p>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="hero-actions"
                >
                    <a href="/apply" className="btn-hero-primary">
                        Apply Now <ArrowRight size={18} />
                    </a>
                    <a href="/brochure" className="btn-hero-secondary">
                        Download Brochure <Download size={18} />
                    </a>
                </motion.div>
            </div>

            <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
            <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>

            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">4000+</span>
                    <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Placement Assistance</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
