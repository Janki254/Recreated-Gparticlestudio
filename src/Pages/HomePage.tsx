import React from 'react';

import AboutSection from '../Components/About/AboutSection';
import Home from '../Components/Home/Home';
import PortfolioSection from '../Components/PortfolioSection/PortfolioSection';
import ServicesSection from '../Components/ServiceSection/ServicesSection';

const HomePage = () => {
    return (
        <React.Fragment>
            <main className='grow'>
                {/* Homepage content */}
                <Home />
                {/* Aboutpage content */}
                <AboutSection />

                {/* ServicesPage content */}
                <ServicesSection />

                {/* Portfolio Page */}
                <PortfolioSection />
            </main>
        </React.Fragment>
    );
};

export default HomePage;
