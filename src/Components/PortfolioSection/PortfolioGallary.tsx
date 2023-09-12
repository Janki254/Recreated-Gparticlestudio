import React, {useState} from 'react';
import Masonry from 'react-masonry-css';

import {Media} from './PortfolioGalleryData';

interface GalleryProps {
    MediaGallery: Media[];
}
const PortfolioGallary: React.FC<GalleryProps> = ({MediaGallery}) => {
    const breakpointColumnsObj = {
        default: 3,
        768: 2,
        640: 1,
    };

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <React.Fragment>
            <div className='portfolio_section_content'>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='masonry-grid gap-4 gap-y-5'
                    columnClassName='masonry-grid_column'
                >
                    {MediaGallery.map((mediaItem) => (
                        <div
                            key={mediaItem.id}
                            className='relative my-6'
                            onMouseEnter={() => setHoveredIndex(mediaItem.id)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            data-aos='fade-right'
                            data-aos-duration='1200'
                            data-aos-delay='300'
                        >
                            <div className='relative'>
                                {mediaItem.media_type === 'image' ? (
                                    <img
                                        src={mediaItem.url}
                                        alt={`Image ${mediaItem.id}`}
                                        className='w-full rounded-lg shadow-md'
                                    />
                                ) : (
                                    <video
                                        controls
                                        src={mediaItem.url}
                                        className='w-full rounded-lg shadow-md'
                                        style={{objectFit: 'contain'}}
                                    />
                                )}
                                {hoveredIndex === mediaItem.id && (
                                    <div className='image_overlay absolute inset-0 bg-black opacity-0 rounded-lg flex items-center justify-center transition-opacity  duration-700 hover:opacity-70 ease-in-out'>
                                        <div className=' text-white z-10 transition-transform translate-y-4 duration-700 hover:transform hover:translate-y-0 px-4'>
                                            <h4 className='img_Overlay_text text-lg font-semibold uppercase  '>
                                                {mediaItem.title}
                                            </h4>
                                            <div className=' text-sm text-white  font-normal  '>
                                                {mediaItem.description}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </React.Fragment>
    );
};

export default PortfolioGallary;
