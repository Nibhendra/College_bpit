'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Admissions() {
    return (
        <main className="main-container">
            <Navbar />
            <div style={{ padding: '8rem 2rem 4rem', textAlign: 'center', background: 'var(--bg-light-blue)' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>Admissions 2026-27</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)' }}>Join the BPIT family and shape your future.</p>
            </div>

            <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>Admission Procedure</h2>
                <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                    Admissions to all courses are conducted through the Common Entrance Test (CET) conducted by Guru Gobind Singh Indraprastha University (GGSIPU).
                    Candidates must qualify the IPU-CET or JEE Main (for B.Tech) to be eligible for counseling.
                </p>

                <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px', marginTop: '2rem', borderLeft: '4px solid var(--primary-red)' }}>
                    <h3 style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}>Important Dates</h3>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Application Start:</strong> February 1st, 2026</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Entrance Exam (CET):</strong> May 15th, 2026</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Counseling Rounds:</strong> June - July 2026</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </main>
    );
}
