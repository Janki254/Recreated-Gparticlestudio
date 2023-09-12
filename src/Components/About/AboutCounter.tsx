import React, { useEffect, useMemo, useState } from 'react';

import BuildingIcon from '../../Assets/svgs/BuildingIcon';
import ClientsIcon from '../../Assets/svgs/ClientsIcon';
import GlobeIcon from '../../Assets/svgs/GlobeIcon';

type CounterNumbers = {
    projects: number;
    countries: number;
    clients: number;
};

const AboutCounter = () => {
    const [numbers, setNumbers] = useState<CounterNumbers>({
        projects: 0,
        countries: 0,
        clients: 0,
    });
    const targetedNumbers: CounterNumbers = useMemo(
        () => ({
            projects: 170,
            countries: 15,
            clients: 117,
        }),
        [],
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumbers((prevCounts) => {
                const newCounts = {...prevCounts};

                for (const platform in targetedNumbers) {
                    if (
                        newCounts[platform as keyof CounterNumbers] <
                        targetedNumbers[platform as keyof CounterNumbers]
                    ) {
                        newCounts[platform as keyof CounterNumbers] +=
                            Math.round(Math.random() * 5);
                    } else {
                        newCounts[platform as keyof CounterNumbers] =
                            targetedNumbers[platform as keyof CounterNumbers];
                    }
                }
                return newCounts;
            });
        }, 300);
        return () => clearInterval(intervalId);
    }, [targetedNumbers]);

    // Render specific platform's icon function
    const renderIcon = (platform: string) => {
        switch (platform) {
            case 'projects':
                return <BuildingIcon />;
            case 'countries':
                return <GlobeIcon />;
            case 'clients':
                return <ClientsIcon />;
            default:
                return null;
        }
    };

    // Function to get the proper platform name (capitalize the first letter)
    const getPlatformName = (platform: string) => {
        return platform.charAt(0).toUpperCase() + platform.slice(1);
    };

    return (
        <React.Fragment>
            <div className='grid text-center justify-around items-center mt-8 max-w-full w-[660px] grid-flow-col auto-cols-max  aos-init aos-animate'>
                {Object.keys(targetedNumbers).map((platform) => (
                    <div
                        key={platform}
                        className='relative about_counter'
                        data-aos-anchor='[data-aos-id-5]'
                        data-aos='fade-up'
                        data-aos-delay='100'
                    >
                        <div className='flex flex-col justify-center items-center'>
                            {renderIcon(platform)}
                            <div className='counter'>
                                {`${
                                    numbers[platform as keyof CounterNumbers]
                                }+`}
                            </div>
                            <span className='text-lg'>
                                {getPlatformName(platform)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default AboutCounter;
