import React, {lazy} from 'react';

const HomeBg = lazy(() => import('./HomeBg'));

const Home = () => {
    return (
        <React.Fragment>
            <section className='relative' id='_home'>
                {/* lazyloading */}
                <HomeBg />
                <div className='hero_content'>
                    <div className='pt-[20rem] md:pb-20'>
                        <div className='home_section_content text-center'>
                            <div className='flex justify-center  items-center'>
                                <h1 className='text-white font-bold text-6xl md:text-7xl tracking-wider mb-6 aos-init aos-animate'>
                                    Gparticle
                                </h1>
                                <div className='studio_text font-light text-4xl md:text-5xl text-white mt-6 ml-2 '>
                                    studio
                                </div>
                            </div>
                            <div className='Hero_text_animation mt-3'>
                                <div className='text-3xl/8 leading-snug tracking-wide font-light'>
                                    Elevating Spaces For The Future
                                </div>
                                <div className='text-3xl/8 leading-snug tracking-wide font-light'>
                                    Creating Visualize Transcends For Your Space
                                </div>
                                <div className='text-3xl/8 leading-snug tracking-wide font-light'>
                                    Creating Innovative Designs For Modern
                                    Living
                                </div>
                            </div>
                            <button className='p-4 mt-4 md:mt-3 border border-white text-white uppercase '>
                                Request a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className='relative' id='_about'>
                    {/* lazyloading
                    <HomeBg />
                    <div className='hero_content'>
                        <div className='pt-40 md:pt-[20rem] md:pb-20'>
                            <div className='relative mx-auto max-w-xl md:max-w-none text-center'>
                                <div className='flex justify-center  items-center'>
                                    <h1 className='text-white  font-bold text-6xl md:text-7xl mb-6 aos-init aos-animate'>
                                        GparticleStudio
                                    </h1>
                                    <div className='studio_text font-light text-4xl md:text-5xl text-white mt-6 ml-2 '>
                                        studio
                                    </div>
                                </div>
                                <div className='Hero_text_animation mt-3'>
                                    <div className='text-3xl/8 font-light'>
                                        Elevating Spaces For The Future
                                    </div>
                                    <div className='text-3xl font-light'>
                                        Creating Visualize Transcends For Your
                                        Space
                                    </div>
                                    <div className='text-3xl font-light'>
                                        Creating Innovative Designs For Modern
                                        Living
                                    </div>
                                </div>
                                <button className='p-4 mt-4 md:mt-3 border border-white text-white uppercase '>
                                    Request a Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                    </section> */}
        </React.Fragment>
    );
};

export default Home;
