import React from 'react';

const CloseIcon = () => {
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
                <path d='M6 18L18 6M6 6l12 12' />
            </svg>
        </React.Fragment>
    );
};

export default CloseIcon;
