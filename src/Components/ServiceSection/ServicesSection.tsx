import React from 'react';

import ServiceCards from './ServiceCards';

const ServicesSection = () => {
    return (
        <React.Fragment>
            <section className='relative border-b' id='_services' data-aos-id-6>
                <div className='mb-24 md:mb-0  absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none bg-gradient-to-b from-slate-200'></div>
                <div className='service_section'>
                    <div className='pt-12 md:py-20'>
                        {/* Service title and  content */}
                        <div className='service_section_content flex flex-col md:flex-row  justify-around items-center text-center md:text-left mt-8 text-white'>
                            <div
                                className='service_title max-w-full w-[300px] flex  items-center justify-center shrink-0 ml-0 md:ml-8 xl:ml-0 md:h-36 aos-init aos-animate'
                                data-aos-anchor='[data-aos-id-6]'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <h1 className='mb-4 text-3xl md:text-4xl tracking-wider  text-center md:text-left'>
                                    Services
                                </h1>
                            </div>
                            <div className='max-w-lg w-full md:max-w-none md:mt-0 mr-0  md:ml-8'>
                                <div className='relative md:mr-8 mx-auto'>
                                    <p
                                        className='text-base tracking-tight mt-4 mb-8 aos-animate aos-init'
                                        data-aos-anchor='[data-aos-id-6]'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        Explore our services to discover how we
                                        can help you transform your vision into
                                        reality.With our cutting-edge technology
                                        and creative expertise, we strive to
                                        exceed our client's expectations and
                                        deliver exceptional results. Whether
                                        you're looking to showcase your latest
                                        architectural design or promote your new
                                        product, we're here to help you bring
                                        your ideas to life
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Service Cards */}
                        <ServiceCards />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ServicesSection;
