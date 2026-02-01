import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Feature from '../components/Feature';
import Stats from '../components/Stats';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Feature />
            <ContactForm />
        </>
    );
};

export default Home;
