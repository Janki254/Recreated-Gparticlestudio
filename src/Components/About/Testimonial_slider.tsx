// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import avadh_group from '../../Assets/imgs/testimonial/avadh_group.png';
import pramukh_group from '../../Assets/imgs/testimonial/pramukh_group.png';
import shaligram_group from '../../Assets/imgs/testimonial/shaligram_group.jpeg';
import shreepad_group from '../../Assets/imgs/testimonial/shreepad_group.png';

const testimonials_array = [
    {
        id: 1,
        reviwer: 'Avadh Group',
        reviewer_logo: avadh_group,
        review: ` GParticle Studio is hands down the best
        architecture visualization company I've ever
        worked with. Their 3D rendering work is simply
        stunning, and they were able to bring my project
        to life in a way that I never thought possible.`,
    },
    {
        id: 2,
        reviwer: 'Shaligram Group',
        reviewer_logo: shaligram_group,
        review: `If you're looking for the best in the business when
        it comes to architecture planning and visualization, look no
        further than GParticle Studio. They are true professionals who
        go above and beyond to exceed your expectations. `,
    },
    {
        id: 3,
        reviwer: 'Pramukh Residential',
        reviewer_logo: pramukh_group,
        review: `Working with GParticle Studio was an absolute pleasure. They took the time to understand my unique needs and requirements and then delivered a beautiful and accurate 3D rendering of my project. `,
    },
    {
        id: 4,
        reviwer: 'Shreepad Group',
        reviewer_logo: shreepad_group,
        review: `I was blown away by the incredible level of detail and precision that GParticle Studio put into my architecture planning project. Their 3D rendering and visualization work is truly second to none.`,
    },
];
const Testimonial_slider = () => {
    return (
        <React.Fragment>
            <div
                className='testimonial shadow-lg p-6 max-w-[660px] md:max-w-none w-full md:w-[660px] mx-auto aos-init aos-animate'
                data-aos='fade-up'
                data-aos-anchor='[data-aos-id-4]'
                data-aos-delay='200'
            >
                {/* Swiper */}

                <Swiper
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    className='mySwiper'
                    loop={true}
                >
                    {testimonials_array.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className=' flex flex-col justify-center items-center w-[450px] mx-auto mb-4'>
                                <div className='testimonial_img'>
                                    <img
                                        src={testimonial.reviewer_logo}
                                        alt='testimonialImg1'
                                    />
                                </div>
                                <p className='mb-4 text-base text-center'>
                                    {testimonial.review}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </React.Fragment>
    );
};

export default Testimonial_slider;
