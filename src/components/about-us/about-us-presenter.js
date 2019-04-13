import React from 'react';
import PropTypes from 'prop-types';
import * as AboutUsStyles from '../../assets/style/sass/about-us.scss'
import SocialContainer from './social-container';

const Presenter = ({about_us}) => {
    return (
        <section className={AboutUsStyles.about_us}>
            <div className={AboutUsStyles.about_us_container}>

               <figure>
                   <img className={AboutUsStyles.profile_img} src={about_us} alt=''/>
                   <figcaption>
                       <h5>Chef Owner | Domino Corcega</h5>
                   </figcaption>
               </figure>

                <div className={AboutUsStyles.text_container}>
                    <h2 className={AboutUsStyles.title}>Quality You Can Taste</h2>

                    <p className={AboutUsStyles.text}> "
                        From grills to thrills, my mission is to deliver to your table the most flavor packed meal for you, your friends & family , or make your next catered event the latest buzz at the office .
                        My home-style bbq is a blend of hearty traditional smokey flavors infused with a touch of island blends and spices. As a head chef and a graduate of the San Francisco Culinary Academy, I've spent
                        countless hours perfecting the craft so I can deliver a culinary experience that will satisfy the most demanding appetites!
                    </p>

                    <SocialContainer/>
                </div>


            </div>
        </section>
    );
};

Presenter.displayName = 'AboutUs Presenter';

Presenter.propTypes = {
  about_us : PropTypes.string.isRequired,
};

Presenter.defaultProps = {
  about_us: '',
};

export default Presenter;