import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import EventsNotices from '../components/EventsNotices';
import Recruiters from '../components/Recruiters';
import Stars from '../components/Stars';
import Testimonials from '../components/Testimonials';

export default function Home() {
    return (
        <main className="main-container">
            <Navbar />
            <Hero />
            <EventsNotices />
            <Stars />
            <Recruiters />
            <Testimonials />
            <Footer />
        </main>
    );
}
