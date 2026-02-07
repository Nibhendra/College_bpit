'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Placements() {
    return (
        <main className="main-container">
            <Navbar />
            <div style={{ padding: '8rem 2rem 4rem', textAlign: 'center', background: 'var(--bg-light-blue)' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>Training & Placements</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)' }}>Building careers, one student at a time.</p>
            </div>

            <section style={{ padding: '4rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-red)', fontWeight: '800' }}>95%</h3>
                        <p>Placement Record</p>
                    </div>
                    <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', fontWeight: '800' }}>50 LPA</h3>
                        <p>Highest Package</p>
                    </div>
                    <div style={{ padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', fontWeight: '800' }}>200+</h3>
                        <p>Recruiters</p>
                    </div>
                </div>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Top Recruiters</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                    {['Amazon', 'Adobe', 'Google', 'Microsoft', 'Zomato', 'Infosys', 'Wipro', 'TCS'].map(company => (
                        <div key={company} style={{
                            padding: '1.5rem 2.5rem',
                            background: '#f1f5f9',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            color: '#475569'
                        }}>
                            {company}
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
