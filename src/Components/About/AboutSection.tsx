import React from 'react';

import About_counters from './About_counters';
import About_testimonial from './About_testimonial';
import AboutMainContent from './AboutMainContent';
import AboutOffersContent from './AboutOffersContent';

const AboutSection = () => {
    return (
        <React.Fragment>
            <section id='_about'>
                {/* About Main Content */}
                <AboutMainContent />

                {/* About Offers content */}
                <AboutOffersContent />

                {/* About Testimonial section */}
                <About_testimonial />

                {/* About Counters section */}
                <About_counters />
            </section>
        </React.Fragment>
    );
};

export default AboutSection;
