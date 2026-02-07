'use client';
import { motion } from 'framer-motion';
import './Recruiters.css';

const Recruiters = () => {
    // Placeholder logos - in a real scenario, use actual company logos
    const recruiters = [
        { name: 'Amazon', color: '#FF9900' },
        { name: 'Google', color: '#4285F4' },
        { name: 'Microsoft', color: '#F25022' },
        { name: 'Infosys', color: '#007CC3' },
        { name: 'TCS', color: '#E91E63' },
        { name: 'Wipro', color: '#9C27B0' },
        { name: 'Accenture', color: '#A100FF' },
        { name: 'IBM', color: '#054ADA' },
        { name: 'Adobe', color: '#FF0000' },
    ];

    return (
        <section className="recruiters-section">
            <div className="recruiters-header">
                <h2>Our Key Recruiters</h2>
                <p>Top companies hiring our graduates</p>
            </div>

            <div className="marquee-container">
                <motion.div
                    className="marquee-track"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...recruiters, ...recruiters, ...recruiters].map((company, index) => (
                        <div key={index} className="recruiter-logo">
                            <div className="logo-placeholder" style={{ borderColor: company.color }}>
                                <span style={{ color: company.color }}>{company.name}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Recruiters;
