import React from 'react';

const offerlist = [
    {
        id: 1,
        tittle: 'Our Services',
        description: `Discover a comprehensive range of Our Services tailored to
        meet your needs. From strategic consulting to seamless execution,
        we offer solutions designed to elevate your business`,
    },
    {
        id: 2,
        tittle: 'Our Projects',
        description: `Dive into a showcase of Our Projects, where ideas thrive
         and solutions shine. Experience innovation firsthand through
         a collection that embodies creativity and achievement`,
    },
    {
        id: 3,
        tittle: 'Our Clients',
        description: `At the core of our mission are Our Clients,With a diverse
         roster spanning industries and geographies, we take pride in
        fostering strong partnerships`,
    },
];
const About_offerlist = () => {
    return (
        <React.Fragment>
            {offerlist.map((offer) => (
                <div
                    className='relative'
                    key={offer.id}
                    data-aos-anchor='[data-aos-id-3]'
                    data-aos='fade-up'
                    data-aos-delay={offer.id * 200}
                >
                    <div className='mb-2 flex justify-center items-center md:justify-start'>
                        <div className='about_offerlist flex justify-center items-center text-white font-bold text-lg rounded-full h-12 w-12'>
                            {offer.id}
                        </div>
                        <h3 className='ms-4 text-lg md:text-2xl aos-init aos-animate'>
                            {offer.tittle}
                        </h3>
                    </div>

                    <p className='text-base tracking-tight mb-4 ms-2 aos-animate aos-init'>
                        {offer.description}
                    </p>
                </div>
            ))}
        </React.Fragment>
    );
};

export default About_offerlist;
