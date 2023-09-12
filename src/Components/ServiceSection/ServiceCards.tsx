import React, {useState} from 'react';

import DownArrow from '../../Assets/svgs/DownArrow.tsx';
import UpArrow from '../../Assets/svgs/UpArrow.tsx';

const ServiceContent = [
    {
        id: '01',
        icon: 'icon-mobile',
        title: 'Architectural visualization (Exterior visualization)',
        descriptions: `Our Architectural Visualization service provides stunning 3D renderings of exterior designs that bring your project to life. Our team of experienced designers uses the latest technology to create highly-detailed visualizations that accurately depict the aesthetic of your project. We work closely with you to ensure that every detail is captured, from the materials and textures to the lighting and landscaping. Our services are perfect for architects, developers, and real estate professionals who want to showcase their designs in a realistic and immersive way.`,
        delayAnimation: '200',
        imgUrl: '/src/Assets/imgs/servicesImgs/Service_1_Architecture_visualization.png',
    },
    {
        id: '02',
        icon: 'icon-desktop',
        title: 'Interior visualization',
        descriptions: `We help you visualize your space before it's even built. Our team of talented designers works closely with you to understand your vision, ensuring that every detail is captured in the final rendering. We use the latest technology to create highly-detailed visualizations that accurately depict the lighting, textures, and materials of your project. Our services are perfect for architects, interior designers, and real estate professionals who want to showcase their designs in a realistic and immersive way. Contact us today to learn more about how we can help you bring your interior design ideas to life!`,
        delayAnimation: '200',
        imgUrl: '/src/Assets/imgs/servicesImgs/Service_2_Interior_visualization_60.png',
    },
    {
        id: '03',
        icon: 'icon-target',
        title: '3D Modeling',
        descriptions: `Our 3D modeling services blend creativity with technology to bring your ideas to life in stunning detail. Using the latest software and techniques, we create accurate and realistic digital models that help you visualize your designs and products like never before. From prototypes to animations, our team of experienced designers and engineers can handle any project, no matter how complex. With a focus on precision and attention to detail, we ensure that every aspect of your 3D model is perfect. Whether you're in architecture, product design, or gaming, our 3D modeling services can help you stand out from the competition and wow your clients and stakeholders.`,
        delayAnimation: '300',
        imgUrl: '/src/Assets/imgs/servicesImgs/Service_3_3D_Modeling_60.png',
    },
    {
        id: '04',
        icon: 'icon-target',
        title: '360 Panorama',
        descriptions: `Our 360 panorama services are designed to transform your architectural and space designs into immersive and interactive experiences. We can capture every detail and angle of your space to create a stunning 360-degree panoramic view. Whether you're in architecture or space design, our 360 panoramas can help you communicate your vision to clients and stakeholders in a new and engaging way. Additionally, our virtual space tours enable you to showcase your designs in a highly interactive and customizable format, allowing your audience to explore every aspect of your space. With the ability to add branding and interactive features, our 360 panorama services are perfect for creating a lasting impression and standing out from the competition.`,
        delayAnimation: '400',
        imgUrl: '/src/Assets/imgs/servicesImgs/Service_4_360_Panorama_60.png',
    },
    {
        id: '05',
        icon: 'icon-target',
        title: 'VR Rendering',
        descriptions: `At our architectural design firm, we offer innovative and cutting-edge services that bring your vision to life in a virtual space. Our team of experts utilizes state-of-the-art technology to create stunning 3D virtual models and renderings that allow you to explore your future space before it's even built. With our virtual space tour service, you'll be able to experience your design from every angle and make adjustments as needed to ensure your satisfaction with the final result. Our VR rendering service takes your virtual experience to the next level by immersing you in a fully interactive and realistic environment. Whether you're looking to design a new home, office, or commercial space, our team is dedicated to providing you with the highest quality services that exceed your expectations.`,
        delayAnimation: '500',
        imgUrl: '/src/Assets/imgs/servicesImgs/Service_5_VR_Rendering_60.png',
    },
    {
        id: '06',
        icon: 'icon-target',
        title: 'Architectural animation',
        descriptions: `With our architectural animation service, We bring your designs to life with a level of detail and realism that will amaze your clients. Our team of experienced animators and architects work hand-in-hand to create captivating visualizations that accurately depict your project's look, feel, and functionality. We create 3D animations that showcase your design from every angle, giving viewers a truly immersive experience. Whether you need a fly-through of a building's interior, an exterior view of a proposed development, or a detailed walkthrough of a floor plan, our team can deliver stunning visualizations that help you communicate your vision to clients, investors, and stakeholders. Let us help you elevate your designs to the next level with our architectural animation service.`,
        delayAnimation: '600',
        imgUrl: '/src/Assets/imgs/servicesImgs/Service_6_Architectural_animation_60.png',
    },
];
const ServiceCards: React.FC = () => {
    const [showDetails, setShowDetails] = useState<string | null>(null);

    const showServiceDetails = (id: string) => {
        setShowDetails((prevState) => (prevState === id ? null : id));
    };
    return (
        <React.Fragment>
            <div className='service_section_content flex justify-center items-center mt-12'>
                <div className='max-w-full grid gap-y-14 gap-x-8 md:gap-y-18  justify-center items-center sm:grid-cols-2 md:grid-cols-3 text-center mx-auto '>
                    {ServiceContent.map((val) => (
                        <div
                            key={val.id}
                            className={`card_holder ${
                                showDetails === val.id && 'expanded'
                            } flex justify-start items-center flex-col rounded px-3 h-full relative  my-3 aos-init aos-animate`}
                            onMouseLeave={() => setShowDetails(null)}
                            data-aos='fade-up'
                            data-aos-anchor='[data-aos-id-6]'
                            data-aos-delay={val.delayAnimation}
                        >
                            <div className='content_overlay'></div>
                            <div
                                className={`flex justify-center items-center p-3 mb-3 hover:mb-0 rounded-full ServiceIcon `}
                            >
                                <img
                                    src={val.imgUrl}
                                    alt={`serviceImg${val.id}`}
                                    style={{
                                        height: '60px',
                                        width: '60px',
                                    }}
                                />
                            </div>
                            <div
                                className='card_content flex flex-col justify-start items-center px-6 py-3'
                                style={{zIndex: 10}}
                            >
                                <h6 className='text-base mb-2'>{val.id}</h6>
                                <h5 className=' uppercase text-base'>
                                    {val.title}
                                </h5>
                                <button
                                    className='text-sm mt-3 mb-7 flex justify-center items-center m-0  border-b'
                                    onClick={() => showServiceDetails(val.id)}
                                >
                                    {showDetails
                                        ? 'Hide details..'
                                        : 'Show details..'}
                                    {showDetails ? <DownArrow /> : <UpArrow />}
                                </button>
                                <p className={`card-description `}>
                                    {val.descriptions}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ServiceCards;
