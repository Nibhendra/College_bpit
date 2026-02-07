'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Monitor, Cpu, Server, Zap, PieChart } from 'lucide-react';
import './Departments.css';

const Departments = () => {
    const departments = [
        {
            id: 'cse',
            name: 'Computer Science & Engineering',
            icon: <Monitor size={40} />,
            desc: 'Focusing on cutting-edge technologies like AI, ML, and Data Science.',
            link: '/departments/cse'
        },
        {
            id: 'it',
            name: 'Information Technology',
            icon: <Server size={40} />,
            desc: 'Bridging the gap between hardware and software with modern IT solutions.',
            link: '/departments/it'
        },
        {
            id: 'ece',
            name: 'Electronics & Communication',
            icon: <Cpu size={40} />,
            desc: 'Innovating in VLSI, Embedded Systems, and IoT communications.',
            link: '/departments/ece'
        },
        {
            id: 'eee',
            name: 'Electrical & Electronics',
            icon: <Zap size={40} />,
            desc: 'Powering the future with sustainable energy and smart grid systems.',
            link: '/departments/eee'
        },
        {
            id: 'mba',
            name: 'School of Business Admin',
            icon: <PieChart size={40} />,
            desc: 'Creating future leaders with a blend of management and technology skills.',
            link: '/departments/mba'
        },
    ];

    return (
        <main className="main-container">
            <Navbar />
            <div className="page-header">
                <h1>Academic Departments</h1>
                <p>Explore our diverse range of engineering and management programs designed to foster innovation.</p>
            </div>

            <section className="departments-grid-section">
                {departments.map((dept) => (
                    <div key={dept.id} className="department-card">
                        <div className="dept-icon-wrapper">{dept.icon}</div>
                        <h2>{dept.name}</h2>
                        <p>{dept.desc}</p>
                        <a href={dept.link} className="dept-link">Learn More &rarr;</a>
                    </div>
                ))}
            </section>
            <Footer />
        </main>
    );
};

export default Departments;
