import React, { useState } from 'react';

import PortfolioGallary from './PortfolioGallary';
import PortfolioImageList from './PortfolioGalleryData';
import PortfolioMaincontent from './PortfolioMaincontent';

const PortfolioSection = () => {
    const [gallleryItems, setGalleryItems] = useState(PortfolioImageList);

    const filteredGalleryItems = (category: string) => {
        const updatedItems = PortfolioImageList.filter(
            (currEle) => currEle.category === category,
        );
        if (category === 'All Categories') {
            setGalleryItems(PortfolioImageList);
        } else {
            setGalleryItems(updatedItems);
        }
    };

    return (
        <React.Fragment>
            <section className='relative' id='_portfolio' data-aos-id-7>
                <div className='md:mb-0  absolute -z-10 top-0 left-0 right-0 bottom-0  pointer-events-none bg-gradient-to-t from-slate-200'></div>
                <div className='portfolio_section'>
                    <div className='pt-12 md:py-20'>
                        {/* Portfolio  title and  content */}
                        <PortfolioMaincontent
                            onFilteredCategory={filteredGalleryItems}
                        />
                        {/* The Gallary */}
                        <div className='container mx-auto py-4'>
                            <PortfolioGallary MediaGallery={gallleryItems} />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default PortfolioSection;
