import React from 'react';

const gallery_tabs = [
    {id: 0, category: 'All Categories'},
    {id: 1, category: 'Exterior Gallery'},
    {id: 2, category: 'Interior Gallery'},
    {id: 3, category: '360 Views'},
    {id: 4, category: 'Video Walkthrough'},
];

const PortfolioMaincontent: React.FC<{
    onFilteredCategory: (category: string) => void;
}> = (props) => {
    return (
        <React.Fragment>
            <div className='portfolio_section_content flex flex-col md:flex-row  justify-center md:justify-around items-center text-center md:text-left text-white'>
                <div
                    className='portfolio_title max-w-full w-[300px] flex items-center justify-center shrink-0 md:ml-20  md:h-32 aos-init aos-animate md:order-1'
                    data-aos-anchor='[data-aos-id-7]'
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    <h1 className='mb-4 text-3xl md:text-4xl md:ml-28 tracking-wider text-center md:text-left'>
                        Portfolio
                    </h1>
                </div>
                <div className='max-w-lg w-full md:max-w-none md:mt-0'>
                    <div className='relative mx-auto'>
                        <div className='Portfolio_Tab flex items-center justify-center py-4 md:py-8 flex-wrap'>
                            {gallery_tabs.map((tab) => (
                                <button
                                    onClick={() =>
                                        props.onFilteredCategory(tab.category)
                                    }
                                    key={tab.id}
                                    type='button'
                                    className='portfolio_link focus:outline-none text-base font-medium px-5 py-2.5 text-center'
                                    data-aos-anchor='[data-aos-id-7]'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    {tab.category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PortfolioMaincontent;
