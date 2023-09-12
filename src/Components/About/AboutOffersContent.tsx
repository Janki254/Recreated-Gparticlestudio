import React from 'react';

import AboutOfferImg from '../../Assets/imgs/About/AboutSlider.jpg';
import About_offerlist from './About_offerlist';

const AboutOffersContent = () => {
    return (
        <React.Fragment>
            <section className=' relative' data-aos-id-3>
                <div className='mb-24 md:mb-0  absolute -z-10 top-0 left-0 right-0 bottom-0 mt-12 md:mt-0 pointer-events-none bg-gradient-to-b from-slate-200'></div>
                <div className='About_Bg'>
                    <div className='pt-12 md:py-20'>
                        <div className='about_section_content flex flex-col md:flex-row items-center text-center md:text-left mt-8'>
                            <div className='max-w-full w-[396px] shrink-0 md:order-1'>
                                <h1
                                    className='mb-4 text-3xl md:text-4xl aos-init aos-animate'
                                    data-aos-anchor='[data-aos-id-3]'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    We Offers Answers through..
                                </h1>
                                <div className='grid gap-4 text-center items-center md:items-start md:text-left mt-8 max-w-sm md:max-w-none mx-auto aos-init aos-animate'>
                                    <About_offerlist />
                                </div>
                            </div>
                            <div className='max-w-lg w-full mt-8 md:max-w-none md:mt-0 md:mr-8'>
                                <div className='relative md:-ml-8 mx-auto'>
                                    <div className='bg-slate-300 -mt-28 -mb-20 -ml-[20rem]  mr-[12rem] -z-10 absolute top-0 bottom-0 right-0 left-0 hidden md:block'></div>
                                    <img
                                        className='max-w-lg md:max-w-none shadow-lg'
                                        src={AboutOfferImg}
                                        alt='AboutOfferImg'
                                        style={{
                                            height: '660px',
                                            width: '680px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AboutOffersContent;
