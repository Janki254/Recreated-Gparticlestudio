export interface Media {
    id: number;
    media_type: 'image' | 'video';
    url: string;
    title: string;
    category: string;
    description: string;
}
const PortfolioImageList : Media[] = [
    // Exterior
    {
        id: 1,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/Wide-view.jpg',
        title: 'Wide View',
        category: 'Exterior Gallery',
        description: `A stunning modern masterpiece, with sleek lines and contemporary
        finishes that exude sophistication and luxury. The surrounding lush greenery
        and the sparkling blue pool create a serene oasis that is both visually
        stunning and inviting.`,
    },
    {
        id: 2,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/Landscape-view.jpg',
        title: 'Landscape View',
        category: 'Exterior Gallery',
        description: `Immerses you in a lush urban retreat, with a harmonious blend of
        natural and man-made elements that create a tranquil oasis in the heart of the city.
        The carefully curated landscape design, featuring vibrant foliage and a stunning
        water feature, adds to the overall beauty and serenity of the space..`,
    },
    {
        id: 3,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/Gazebo-seatings.jpg',
        title: 'Gazebo seatings',
        category: 'Exterior Gallery',
        description: `A stunning design with a spacious outdoor living area,
        featuring a charming gazebo that provides a cozy and shaded spot for
        relaxation and entertainment. The lush greenery and well-maintained
        landscaping create a serene ambiance that is perfect for unwinding
        and connecting with nature.`,
    },
    {
        id: 4,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/DIRECTION-GUIDE.jpg',
        title: 'Direction Guide',
        category: 'Exterior Gallery',
        description: `with strategically placed directional signage that
        enhances the user experience and ensures seamless navigation
        throughout the space. The clean lines and modern finishes of the building's
        facade add to the overall aesthetic appeal of the property..`,
    },

    {
        id: 5,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Interior/Bedroom-1.jpg',
        title: 'BEDROOM',
        category: 'Interior Gallery',
        description: `A large, comfortable bed with plush pillows and blankets
            takes center stage, while natural light streams in from the windows,
            illuminating the space and creating a cozy atmosphere.`,
    },

    {
        id: 6,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/Yoga-area.jpg',
        title: 'Yoga Area',
        category: 'Exterior Gallery',
        description: `A peaceful and serene space, with lush greenery and calming
        natural elements that create the perfect atmosphere for yoga and meditation.
        he modern facilities and amenities cater to residents' physical and mental
        well-being, encouraging healthy habits and promoting a strong sense of community.`,
    },
    {
        id: 7,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Interior/Office.jpg',
        title: 'Office1',
        category: 'Interior Gallery',
        description: `A beautifully designed office space is a sanctuary of productivity and inspiration,
        where aesthetics seamlessly blend with functionality. From thoughtfully selected
        color schemes and ergonomic furniture to strategically placed every element
        contributes to a harmonious work environment.`,
    },

    {
        id: 8,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/Cricket-Area.jpg',
        title: 'Cricket Area',
        category: 'Exterior Gallery',
        description: `A vibrant and energetic space, designed to bring residents
        together and foster a strong sense of community through the sport of cricket.
        The lush green turf, well-maintained pitch, and modern amenities make it the
        perfect place for cricket enthusiasts to come together and engage in friendly
        competition..`,
    },
    {
        id: 9,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Interior/Bedroom3.jpg',
        title: 'BEDROOM',
        category: 'Interior Gallery',
        description: `A beautifully upholstered headboard adds a touch of elegance,
        while soft lighting and cozy textiles make the room a welcoming retreat
        at the end of the day.`,
    },
    {
        id: 10,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Interior/Bedroom-2.jpg',
        title: 'BEDROOM',
        category: 'Interior Gallery',
        description: `A king-size bed with crisp white linens dominates the space,
        complemented by warm wood finishes and delicate floral accents, creating
        a tranquil and inviting atmosphere perfect for a good night's sleep.`,
    },
    {
        id: 11,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/KIDS-PLAY-AREA.jpg',
        title: 'Kids-Play AREA',
        category: 'Exterior Gallery',
        description: `A vibrant and colorful space that is designed to provide a
        safe and engaging environment for children to play and explore. The modern
        amenities and well-maintained equipment ensure that children are entertained
        and supervised, while parents can relax and enjoy the beautiful surroundings.`,
    },
    {
        id: 12,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Exterior/Swimming-pool.jpg',
        title: 'Swimming-Pool Area',
        category: 'Exterior Gallery',
        description: `A luxurious and inviting oasis, featuring a stunning infinity-edge
        pool surrounded by a spacious deck area that is perfect for lounging and soaking
        up the sun. The well-manicured landscaping and tranquil ambiance of the space
        make it the ideal spot for relaxation and leisurely enjoyment.`,
    },
    {
        id: 13,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/Interior/office2.jpg',
        title: 'Office2',
        category: 'Interior Gallery',
        description: `A beautifully designed office space is a sanctuary of productivity and inspiration,
        where aesthetics seamlessly blend with functionality. From thoughtfully selected
        color schemes and ergonomic furniture to strategically placed every element
        contributes to a harmonious work environment..`,
    },

    // Video walkthrough
    {
        id: 14,
        media_type: 'video',
        url: '/src/Assets/video/walk_through_one.mp4',
        title: 'Video Walkthrough',
        category: 'Video Walkthrough',
        description: `A video walkthrough is of a our visual journey that provides
        an immersive experience, allowing you to witness the intricate details and
        transformative outcomes of our endeavors. Step inside our world of innovation
        and creativity through these captivating visual narratives.`,
    },

    // 360View
    {
        id: 15,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-BEDROOM1.jpg',
        title: '360 View BEDROOM1',
        category: '360 Views',
        description: `The panoramic 360-degree view showcases a cozy queen-sized bed,
        framed by two bedside tables, while the walls are adorned with botanical prints,
        adding a touch of serenity to the overall ambiance.`,
    },
    {
        id: 16,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-BEDROOM2.jpg',
        title: '360 View BEDROOM2',
        category: '360 Views',
        description: `The view of the bedroom reveals a spacious layout with
        a cozy bed as the centerpiece. The natural lighting enhances the room's
        warm ambiance and highlights the elegant decor.`,
    },
    {
        id: 17,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-BEDROOM3.jpg',
        title: '360 View BEDROOM3',
        category: '360 Views',
        description: `A welcoming and sophisticated space with luxurious bedding
        and elegant furniture pieces. The warm lighting adds a touch of intimacy
        and coziness to the overall atmosphere.`,
    },
    {
        id: 18,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-BEDROOM4.jpg',
        title: '360 View BEDROOM4',
        category: '360 Views',
        description: `The view of the bedroom captures the eye with its striking
        black-and-white color scheme, creating a modern and stylish look.
        The clean lines of the furniture and minimalistic decor add to the
        overall contemporary feel of the room.`,
    },
    {
        id: 19,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-BEDROOM5.jpg',
        title: '360 View BEDROOM5',
        category: '360 Views',
        description: `Reveals a tranquil oasis with soft, muted colors and minimalist
        decor that create a sense of calmness. The natural light flowing in through
        the windows further enhances the serene ambiance of the space.`,
    },
    {
        id: 20,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-Hall.jpg',
        title: '360 View Living Room',
        category: '360 Views',
        description: `The view of the living room showcases a stylish space with
        a harmonious blend of neutral tones and patterned accents, creating a cozy
        and inviting ambiance. The carefully selected decor pieces and soft lighting
         contribute to the overall warmth and comfort of the room.`,
    },
    {
        id: 21,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-KITCHEN.jpg',
        title: 'KITCHEN AND DINING ',
        category: '360 Views',
        description: `The kitchen reveals a bright and airy space with clean lines
        and modern finishes. The minimalist design, blended with the ample natural light,
         creates a welcoming and refreshing atmosphere that is perfect for culinary
         creativity.`,
    },
    {
        id: 22,
        media_type: 'image',
        url: '/src/Assets/imgs/PortfolioImgs/360view/360-view-SEATING_AREA.jpg',
        title: 'FAMILY SEATING ',
        category: '360 Views',
        description: `A cozy and inviting space, with plush seating arrangements
        and warm lighting that create a relaxed and intimate atmosphere.
        The use of natural textures and earthy tones adds depth and character to
        the space, making it the perfect spot for quality family time and bonding. `,
    },
];

export default PortfolioImageList;
