'use client';
import { useState } from 'react';
import { Calendar, Bell, FileText, ArrowRight } from 'lucide-react';
import './EventsNotices.css';

const EventsNotices = () => {
    const [activeTab, setActiveTab] = useState('notices');

    const notices = [
        { id: 1, title: 'Notice for Election of Student Representative to SGRC', date: 'Jan 28, 2026', link: '#' },
        { id: 2, title: 'Revised Final Datesheet B.Tech (Affiliated) Dec 2025', date: 'Jan 28, 2026', link: '#' },
        { id: 3, title: 'MBA End Term Theory Examination Center List', date: 'Jan 25, 2026', link: '#' },
        { id: 4, title: 'Urgent Examination Notice regarding Registration', date: 'Jan 24, 2026', link: '#' },
        { id: 5, title: 'Grant of Mercy Chance to students under ordinance 10, 11 & 25', date: 'Jan 20, 2026', link: '#' },
    ];

    const admissions = [
        { id: 1, title: 'Admission Notice for B.Tech Management Quota 2025-26', date: 'Aug 08, 2025', link: '#' },
        { id: 2, title: 'Vacancy Status of MQ Seats after first round', date: 'Aug 08, 2025', link: '#' },
        { id: 3, title: 'MQ Merit List B.Tech 2025-26', date: 'Aug 05, 2025', link: '#' },
        { id: 4, title: 'Online Fee Payment Procedure', date: 'Jul 20, 2025', link: '#' },
    ];

    const events = [
        { id: 1, title: 'Alumni Meet Abhigyan 2025', date: 'Dec 06, 2025', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
        { id: 2, title: 'Basant Panchami & Foundation Day', date: 'Jan 23, 2026', image: 'https://images.unsplash.com/photo-1561489401-fc2876ced162?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ];

    return (
        <section className="events-section">
            <div className="section-container">

                {/* Events Column */}
                <div className="section-column events-column">
                    <div className="column-header">
                        <Calendar className="icon" size={24} />
                        <h2>Upcoming Events</h2>
                    </div>
                    <div className="events-list">
                        {events.map((event) => (
                            <div key={event.id} className="event-card">
                                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}></div>
                                <div className="event-details">
                                    <span className="event-date">{event.date}</span>
                                    <h3>{event.title}</h3>
                                    <a href="#" className="read-more">View Details <ArrowRight size={14} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn-view-all">View All Events</button>
                </div>

                {/* Notices Column */}
                <div className="section-column notices-column">
                    <div className="column-header">
                        <Bell className="icon" size={24} />
                        <h2>Notices / News</h2>
                    </div>
                    <div className="news-ticker-container">
                        <ul className="news-list">
                            {notices.map((notice) => (
                                <li key={notice.id} className="news-item">
                                    <a href={notice.link}>
                                        <span className="news-date">{notice.date}</span>
                                        <p>{notice.title}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="btn-view-all">All Notices</button>
                </div>

                {/* Admissions Column */}
                <div className="section-column admission-column">
                    <div className="column-header">
                        <FileText className="icon" size={24} />
                        <h2>Admission Update</h2>
                    </div>
                    <div className="news-ticker-container">
                        <ul className="news-list">
                            {admissions.map((item) => (
                                <li key={item.id} className="news-item admission-item">
                                    <a href={item.link}>
                                        <span className="news-date">{item.date}</span>
                                        <p>{item.title}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="btn-view-all btn-admission">Admission Portal</button>
                </div>

            </div>
        </section>
    );
};

export default EventsNotices;
