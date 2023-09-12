import React from 'react';

import aboutImg from '../../Assets/imgs/About/about-img.jpg';

const AboutMainContent = () => {
    return (
        <React.Fragment>
            <section data-aos-id-2>
                <div className='relative'>
                    <div className='mb-24 md:mb-0  absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none bg-gradient-to-b from-slate-200'></div>
                    <div className='About_Bg'>
                        <div className='pt-12 md:py-20'>
                            <div className='about_section_content flex flex-col md:flex-row items-center text-center md:text-left mt-8'>
                                <div className='max-w-full w-[512px] shrink-0 ml-0 md:ml-8 xl:ml-0'>
                                    <h1
                                        className='mb-4 text-3xl md:text-4xl tracking-wide aos-init aos-animate'
                                        data-aos-anchor='[data-aos-id-2]'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        About Gparticle studio
                                    </h1>
                                    <h3
                                        className='mb-4 text-xl md:text-3xl aos-init aos-animate'
                                        data-aos-anchor='[data-aos-id-2]'
                                        data-aos='fade-up'
                                        data-aos-delay='200'
                                    >
                                        bring your visions to life through
                                        stunningly realistic 3D renderings and
                                        artist impressions.
                                    </h3>
                                    <p
                                        className='text-base tracking-tight mt-8 mb-4 aos-animate aos-init'
                                        data-aos-anchor='[data-aos-id-2]'
                                        data-aos='fade-up'
                                        data-aos-delay='300'
                                    >
                                        Thank you for visiting our expansive
                                        visualization, architectural, and design
                                        studio. We skillfully produce
                                        masterpieces to inspire you and bring
                                        your thoughts and desires to life.
                                    </p>
                                    <p
                                        className=' text-base tracking-tight md:text-justify mb-8 aos-animate aos-init'
                                        data-aos-anchor='[data-aos-id-2]'
                                        data-aos='fade-up'
                                        data-aos-delay='300'
                                    >
                                        At GParticle Studio,Our team of
                                        experienced artists and designers is
                                        dedicated to providing high-quality and
                                        customized solutions for a variety of
                                        industries, including architecture, real
                                        estate, interior design, and product
                                        visualization.
                                    </p>
                                </div>
                                <div className='max-w-lg w-full mt-8 md:max-w-none md:mt-0 md:ml-8 aos-init aos-animate'>
                                    <div className=' about_img_bg relative max-w-lg mx-auto'>
                                        <div className='bg-slate-300 -mt-28 -mb-28 ml-[12rem] -mr-[20rem] -z-10 absolute top-0 bottom-0 right-0 left-0 hidden md:block'></div>
                                        <div className='bg-slate-300 absolute top-0 bottom-0 right-0 left-0 -z-10 md:hidden h-[29rem] w-[36rem] -ml-8 -mt-8'></div>
                                        <img
                                            className='max-w-lg md:max-w-none mx-auto shadow-md shadow-slate-500 aos-init aos-animate'
                                            src={aboutImg}
                                            alt='aboutImg'
                                            data-aos='fade-up'
                                            data-aos-delay='100'
                                            data-aos-anchor='[data-aos-id-2]'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AboutMainContent;
