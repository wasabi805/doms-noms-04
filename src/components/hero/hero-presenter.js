import React from 'react';
import HeroStyle from '../../assets/style/sass/hero.scss'

import PropTypes from 'prop-types';


const Presenter = ({video_landing}) => {


    return (
        <section className={HeroStyle.hero}>
            <div className={HeroStyle.content}>
                <div className={HeroStyle.iframe_container}>
                    <div id='home' className={HeroStyle.overlay}/>
                    <video width={'100%'} autoPlay={true} muted={true} loop={true} >
                        <source src={video_landing} type="video/mp4" />
                    </video>

                </div>

                <div className={HeroStyle.overlay_content}>
                    <div className={HeroStyle.overlay_text_container}>
                        <h1 className={HeroStyle.puff_in_center}>Welcome</h1>
                        <p className={HeroStyle.tracking_in_expand}>|  DOM'S NOM'S |</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

Presenter.displayName = 'Hero Presenter';


Presenter.propTypes = {
    video_landing: PropTypes.array.isRequired,
};

Presenter.defaultProps = {
    video_landing: '',
};


export default Presenter;