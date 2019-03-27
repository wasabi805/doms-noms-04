import React from 'react';
// import PropTypes from 'prop-types';

// import LinkPresenters from './link-presenter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialStyles from '../../assets/style/sass/social.scss'

const Presenter = ({brand}) => {



    return (

        <div className={SocialStyles.social}>
            {/*{ brand.map((brands, i) => <LinkPresenters key={i} {...brands} />) }*/}
            <ul>
                {brand.map((brands, i )=>{


                    let social_icon={
                        facebook : `${SocialStyles.facebook}`,
                        instagram: `${SocialStyles.instagram}`,
                        yelp: `${SocialStyles.yelp}`
                    };

                    let icon=(name)=>{
                        return <li key={brands.name}>
                            <a href={brands.link} target="_blank" rel="noopener noreferrer">
                                <span className={`fab fa-${brands.name} ${SocialStyles.fa_stack} ${name}  ${SocialStyles.jello_horizontal}`} />
                                {/*fa-stack fa-lg icon-facebook*/}
                            </a>
                        </li>
                    };

                    //Render each icon
                    if(`${brands.name}` === 'facebook'){
                        return icon(`${social_icon.facebook}`)
                    }

                    if(`${brands.name}` === 'instagram'){
                        return icon(`${social_icon.instagram}`)
                    }

                    if(`${brands.name}` === 'yelp'){
                        return icon(`${social_icon.yelp}`)
                    }
                })}
            </ul>

            {/*<FontAwesomeIcon icon="igloo" />*/}
        </div>
    );
};

export default Presenter;