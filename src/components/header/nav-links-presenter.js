import React from 'react';
import NavLinksStyle from '../../assets/style/sass/nav-links.scss'
import PropTypes from 'prop-types';

import { configureAnchors } from 'react-scrollable-anchor'

const Presenter = ({nav_names}) => {
    //Scroll to section id
    configureAnchors({offset: -40, scrollDuration: 150});

    return (
        <div className={NavLinksStyle.container}>

            <ul>
                {nav_names.map(( name, i)=>{
                    return <li key={`${name}${i}`}>
                        <a href={`#${name}`}>
                            {/*Capital First Letter*/}
                            {name.split(' ')
                                .map((s) => s.charAt(0)
                                    .toUpperCase() + s.substring(1)).join(' ') }
                        </a>
                    </li>
                })}
            </ul>

        </div>
    );
};

Presenter.propTypes={
    nav_names : PropTypes.array.isRequired
};


export default Presenter;