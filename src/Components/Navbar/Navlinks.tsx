import React from 'react';
// import {NavLink} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

import {LinkItem} from './Navbar';

type ItemsProps = {
    sidebar_handler?: boolean;
    navLinks: LinkItem[];
};
const Navlinks = ({navLinks, sidebar_handler}: ItemsProps) => {
    return (
        <React.Fragment>
            <ul className={sidebar_handler ? 'sidebar_nav' : ''}>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <ScrollLink
                            spy={true}
                            activeClass='current_navlink'
                            to={link.id}
                            smooth={true}
                            offset={-200}
                            duration={500}
                        >
                            {link.title}
                        </ScrollLink>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default Navlinks;
