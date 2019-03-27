import React from 'react';
// import PropTypes from 'prop-types';



import * as AboutUsStyles from '../../assets/style/sass/about-us.scss'


import SocialContainer from './social-container';


const Presenter = ({about_us , brand}) => {
    console.log(brand, 'brand')
    return (
        <section className={AboutUsStyles.about_us}>
            <div className={AboutUsStyles.about_us_container}>

                <img className={AboutUsStyles.profile_img} src={about_us} alt=''/>

                <div className={AboutUsStyles.text_container}>


                    <h2 className={AboutUsStyles.title}>Quality You Can Taste</h2>

                    <p className={AboutUsStyles.text}>HI, My name is Domino, you may know me from such movies as ...Yeah, this album is dedicated
                        To all the teachers that told me I'd never amount to nothin'
                        To all the people that lived above the buildings that I was hustlin' in front of
                        Called the police on me when I was just tryin' to make some money to feed my daughter (it's all good)
                        And all the ninjas in the struggle
                        You know what I'm sayin'? It's all good, baby baby

                    </p>

                    <SocialContainer/>
                </div>




            </div>
        </section>
    );
};

// Presenter.displayName = 'AboutUs Presenter';
//
// Presenter.propTypes = {
//   about_us : PropTypes.string.isRequired,
// };
//
// Presenter.defaultProps = {
//   about_us: '',
// };

export default Presenter;