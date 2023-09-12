import React from 'react';

import videoBg from '../../Assets/video/walk_through_one_trim-video.mp4';

const HomeBg = React.memo(() => {
    return (
        <React.Fragment>
            <div className='hero_background absolute mb-28 md:mb-0 -z-10 top-0 bottom-0 right-0 left-0'>
                <video preload='metadata' src={videoBg} autoPlay loop muted />
            </div>
        </React.Fragment>
    );
});

export default HomeBg;
