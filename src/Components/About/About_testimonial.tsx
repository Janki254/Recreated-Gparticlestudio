import React from 'react';

import Testimonial_slider from './Testimonial_slider';

const About_testimonial = () => {
    return (
        <React.Fragment>
            <section className='relative' data-aos-id-4>
                <div className='absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none bg-gradient-to-t from-slate-200'></div>
                <div className='About_Bg'>
                    <div className='py-12 md:py-20'>
                        <div className='flex flex-col justify-center items-center pt-12 lg:pt-0 '>
                            <h1
                                className='mb-12 text-3xl md:text-4xl tracking-wider aos-init aos-animate'
                                data-aos-anchor='[data-aos-id-4]'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                Testimonials
                            </h1>
                            {/* Testimonials */}
                            <Testimonial_slider />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About_testimonial;
