import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Users, Award, ChevronRight } from 'lucide-react';

const departments = {
    cse: {
        name: 'Computer Science & Engineering',
        description: 'The CSE department is committed to providing excellent education in the field of Computer Science and Engineering. We focus on both theoretical foundations and practical applications.',
        hod: 'Dr. Deepali Virmani',
        vision: 'To be a center of excellence in Computer Science and Engineering education and research.',
        stats: { students: 720, faculty: 35, labs: 12 }
    },
    it: {
        name: 'Information Technology',
        description: 'The IT department aims to produce IT professionals who are ready to meet the challenges of the dynamic IT industry.',
        hod: 'Dr. Fotis',
        vision: 'To create IT professionals with strong technical and ethical values.',
        stats: { students: 360, faculty: 20, labs: 8 }
    },
    ece: {
        name: 'Electronics & Communication',
        description: 'The ECE department provides a strong foundation in electronics and communication engineering principles.',
        hod: 'Dr. Jayant Bhardwaj',
        vision: 'To foster innovation in Electronics and Communication Engineering.',
        stats: { students: 360, faculty: 22, labs: 10 }
    },
    eee: {
        name: 'Electrical & Electronics',
        description: 'The EEE department focuses on the core areas of electrical and electronics engineering.',
        hod: 'Dr. V.K. Singh',
        vision: 'To produce competent Electrical and Electronics Engineers.',
        stats: { students: 120, faculty: 10, labs: 6 }
    },
    mba: {
        name: 'Master of Business Administration',
        description: 'The MBA department shapes future business leaders with a curriculum that blends theory and practice.',
        hod: 'Dr. S.K. Sharma',
        vision: 'To develop global business leaders with ethical values.',
        stats: { students: 120, faculty: 8, labs: 2 }
    }
};

export function generateStaticParams() {
    return Object.keys(departments).map((dept) => ({
        dept: dept,
    }));
}

export default async function DepartmentPage({ params }) {
    const { dept } = await params;
    const data = departments[dept];

    if (!data) {
        return notFound();
    }

    return (
        <div className="main-container">
            <div className="dept-header" style={{ background: '#1a365d', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{data.name}</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>{data.description}</p>
            </div>

            <div className="section-container" style={{ padding: '40px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                <div className="dept-content">
                    <div className="content-block" style={{ marginBottom: '30px' }}>
                        <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>About the Department</h2>
                        <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
                            Welcome to the Department of {data.name} at BPIT. We are dedicated to fostering an environment of academic excellence and innovation.
                            Our curriculum is designed to keep pace with the rapidly evolving technology landscape.
                        </p>
                    </div>

                    <div className="content-block" style={{ marginBottom: '30px' }}>
                        <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>Vision & Mission</h2>
                        <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3182ce' }}>
                            <p style={{ fontStyle: 'italic', color: '#2d3748' }}>"{data.vision}"</p>
                        </div>
                    </div>

                    <div className="actions" style={{ marginTop: '40px' }}>
                        <Link href={`/departments/${dept}/subjects`} className="btn-primary" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: '#3182ce',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}>
                            <BookOpen size={20} />
                            View Subjects & Syllabus
                        </Link>
                    </div>
                </div>

                <div className="dept-sidebar">
                    <div className="card" style={{ background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                        <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Users size={20} color="#3182ce" /> Department Stats
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #edf2f7', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Students</span>
                                <strong>{data.stats.students}+</strong>
                            </li>
                            <li style={{ padding: '10px 0', borderBottom: '1px solid #edf2f7', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Faculty</span>
                                <strong>{data.stats.faculty}+</strong>
                            </li>
                            <li style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Labs</span>
                                <strong>{data.stats.labs}</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="card" style={{ background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '20px' }}>
                        <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Award size={20} color="#3182ce" /> Key Highlights
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <ChevronRight size={16} color="#3182ce" style={{ marginTop: '4px' }} /> 100% Placement Assistance
                            </li>
                            <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <ChevronRight size={16} color="#3182ce" style={{ marginTop: '4px' }} /> Industry Experts Sessions
                            </li>
                            <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <ChevronRight size={16} color="#3182ce" style={{ marginTop: '4px' }} /> Modern Laboratories
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
