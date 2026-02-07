'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Institute', href: '/institute', dropdown: ['About Us', 'Vision & Mission', 'Administration'] },
        { name: 'Departments', href: '/departments', dropdown: ['CSE', 'IT', 'ECE', 'EEE', 'MBA'] },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Placements', href: '/placements' },
        { name: 'Notices', href: '/notices' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    <div className="logo-icon">B</div>
                    <div className="logo-text">
                        <span className="logo-title">BPIT</span>
                        <span className="logo-subtitle">Bhagwan Parshuram Institute of Technology</span>
                    </div>
                </Link>

                <div className="navbar-menu-desktop">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className="menu-item-wrapper"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link href={item.href} className="menu-link">
                                {item.name}
                                {item.dropdown && <ChevronDown size={14} className="dropdown-icon" />}
                            </Link>

                            {item.dropdown && activeDropdown === item.name && (
                                <div className="dropdown-menu">
                                    {item.dropdown.map((subItem) => (
                                        <Link key={subItem} href={`/${item.name.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <a href="/portal" className="btn-portal">Student Portal</a>
                </div>

                <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="var(--text-dark)" /> : <Menu color="var(--text-dark)" />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className="mobile-link" onClick={() => setIsOpen(false)}>
                            {item.name}
                        </Link>
                    ))}
                    <a href="/portal" className="mobile-link highlight">Student Portal</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
