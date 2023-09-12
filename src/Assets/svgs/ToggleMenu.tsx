import React from 'react';

const ToggleMenu = () => {
    return (
        <React.Fragment>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className=' w-8 h-8'
            >
                <path d='M3 12h18M3 6h18M3 18h18  ' />
            </svg>
        </React.Fragment>
    );
};

export default ToggleMenu;
