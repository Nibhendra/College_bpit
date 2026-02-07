'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Stars.css';

const Stars = () => {
    const stars = [
        { title: 'Prajjwal Kapri', text: 'CSE (2021-25) | Josh Technology 12 LPA', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Jaskirat Singh', text: 'CSE (2021-25) | FNZ 15 LPA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Dhananjay Sharma', text: 'CSE (2021-25) | FNZ 15 LPA', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { title: 'Pursharth Yadav', text: 'MBA (2021-23) | Federal Bank 13.1 LPA', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ];

    return (
        <section className="stars-section">
            <div className="section-header">
                <h2>Stars of BPIT</h2>
                <div className="underline"></div>
            </div>

            <div className="stars-grid">
                {stars.map((star, index) => (
                    <motion.div
                        key={index}
                        className="star-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="star-image-container">
                            <div className="star-image" style={{ backgroundImage: `url(${star.image})` }}></div>
                            <div className="star-badge"><Star size={16} fill="gold" stroke="gold" /> Top Placer</div>
                        </div>
                        <div className="star-info">
                            <h3>{star.title}</h3>
                            <p>{star.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stars;
