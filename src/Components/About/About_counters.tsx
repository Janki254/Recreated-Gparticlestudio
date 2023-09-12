import React from 'react';

import AboutcounterImg from '../../Assets/imgs/About/about-counter.jpg';
import AboutCounter from './AboutCounter';

const About_counters = () => {
    return (
        <React.Fragment>
            <section className='relative ' data-aos-id-5>
                <div className='absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-non overflow-hidden'>
                    <img
                        className=' object-cover h-[32rem] md:h-auto'
                        src={AboutcounterImg}
                        alt='AboutcounterImg'
                    />
                </div>
                <div className='absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none bg-black opacity-50'></div>
                <div className='About_Bg'>
                    <div className='py-12 md:py-20'>
                        <div className='about_section_content flex flex-col md:flex-row  justify-between items-center text-center md:text-left mt-8 text-white'>
                            <div className='max-w-full w-[300px] shrink-0 ml-0 md:ml-8 xl:ml-0'>
                                <h1
                                    className='mb-4 text-3xl md:text-4xl aos-init aos-animate text-white'
                                    data-aos-anchor='[data-aos-id-5]'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    We Love Our Job!
                                </h1>
                                <div
                                    className='mb-4 text-xl md:text-2xl aos-init aos-animate !text-white font-light'
                                    data-aos-anchor='[data-aos-id-5]'
                                    data-aos='fade-up'
                                    data-aos-delay='200'
                                >
                                    Check Our Numbers!
                                </div>
                                <button
                                    className='px-4 py-2 mt-4 md:mt-3 border border-white text-white uppercase '
                                    data-aos-anchor='[data-aos-id-5]'
                                    data-aos='fade-up'
                                    data-aos-delay='300'
                                >
                                    Check Our work
                                </button>
                            </div>
                            <AboutCounter />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About_counters;
