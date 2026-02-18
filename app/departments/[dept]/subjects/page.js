import Link from 'next/link';
import { ArrowLeft, Book, Clock } from 'lucide-react';

const subjectsData = {
    cse: [
        { sem: 1, subjects: ['Applied Mathematics-I', 'Applied Physics-I', 'Manufacturing Processes', 'Electrical Tech', 'Fundamentals of Computing'] },
        { sem: 2, subjects: ['Applied Mathematics-II', 'Applied Physics-II', 'Electronic Devices', 'Engineering Mechanics', 'Communication Skills'] },
        { sem: 3, subjects: ['Data Structures', 'Computer Graphics', 'Digital Electronics', 'Mathematics-III', 'Foundations of CS'] },
        { sem: 4, subjects: ['Algorithms', 'Operating Systems', 'Computer Organization', 'Object Oriented Programming', 'Communication Systems'] },
        { sem: 5, subjects: ['DBMS', 'Java Programming', 'Theory of Computation', 'Digital Communication', 'Microprocessors'] },
        { sem: 6, subjects: ['Compiler Design', 'Computer Networks', 'Web Engineering', 'Artificial Intelligence', 'Data Warehousing'] },
    ],
    it: [
        { sem: 1, subjects: ['Applied Mathematics-I', 'Applied Physics-I', 'Manufacturing Processes', 'Electrical Tech', 'Fundamentals of Computing'] },
        { sem: 3, subjects: ['Data Structures', 'Circuits & Systems', 'Digital Electronics', 'Mathematics-III', 'Object Oriented Prog'] },
        { sem: 5, subjects: ['Java Programming', 'Operating Systems', 'DBMS', 'Digital Communication', 'Theory of Computation'] },
    ]
};

export default async function SubjectsPage({ params }) {
    const { dept } = await params;
    const subjects = subjectsData[dept] || subjectsData['cse']; // Fallback to CSE for demo

    return (
        <div className="main-container">
            <div className="header" style={{ background: '#f7fafc', padding: '40px 20px', borderBottom: '1px solid #e2e8f0' }}>
                <div className="section-container">
                    <Link href={`/departments/${dept}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#3182ce', marginBottom: '15px', textDecoration: 'none' }}>
                        <ArrowLeft size={16} /> Back to Department
                    </Link>
                    <h1>Course Curriculum & Subjects</h1>
                    <p style={{ color: '#4a5568' }}>Semester-wise breakdown of subjects for {dept.toUpperCase()}</p>
                </div>
            </div>

            <div className="section-container" style={{ padding: '40px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                    {subjects.map((semester) => (
                        <div key={semester.sem} className="semester-card" style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            background: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <div className="card-header" style={{ background: '#3182ce', color: 'white', padding: '15px 20px' }}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Semester {semester.sem}</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: '20px', margin: 0 }}>
                                {semester.subjects.map((sub, idx) => (
                                    <li key={idx} style={{
                                        padding: '8px 0',
                                        borderBottom: idx === semester.subjects.length - 1 ? 'none' : '1px solid #edf2f7',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        color: '#2d3748'
                                    }}>
                                        <Book size={16} color="#718096" />
                                        {sub}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
