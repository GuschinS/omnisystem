// src/App.jsx
import Header from './components/Header';
import Features from './components/Features';
import Devices from './components/Devices';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Features />
        <Devices />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}