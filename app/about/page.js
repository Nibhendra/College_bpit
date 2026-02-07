'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './About.css';

const About = () => {
    return (
        <main className="main-container">
            <Navbar />

            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About BPIT</h1>
                    <p>A legacy of academic excellence and holistic development.</p>
                </div>
            </section>

            <section className="about-content">
                <div className="about-container">
                    <div className="about-text">
                        <h2>Our History</h2>
                        <p>
                            Bhagwan Parshuram Institute of Technology (BPIT) was established by the Bhartiya Brahmin Charitable Trust
                            in 2007. It is approved by AICTE, Ministry of HRD, Government of India, and is affiliated to
                            Guru Gobind Singh Indraprastha University (GGSIPU), Delhi.
                        </p>
                        <p>
                            Spread over an area of about 5.7 acres, BPIT is situated in a prime location in Rohini, North Delhi.
                            The institute is dedicated to producing world-class engineers and managers who are not only technically
                            competent but also socially responsible.
                        </p>

                        <h2>Vision</h2>
                        <div className="highlight-box">
                            <p>
                                To establish a leading Global center of excellence in Engineering and Management education,
                                research and innovation for the service of humanity.
                            </p>
                        </div>

                        <h2>Mission</h2>
                        <ul className="mission-list">
                            <li>To provide quality education and training to students in the field of Engineering and Management.</li>
                            <li>To foster a culture of innovation, research, and entrepreneurship.</li>
                            <li>To instill ethical values and social responsibility in students.</li>
                            <li>To collaborate with industry and academia for holistic development.</li>
                        </ul>
                    </div>

                    <div className="about-image-column">
                        <div className="about-image img-1" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)' }}></div>
                        <div className="about-image img-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80)' }}></div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default About;
