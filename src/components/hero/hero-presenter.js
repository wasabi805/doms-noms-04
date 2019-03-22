import React from 'react';
import HeroStyle from '../../assets/style/sass/hero.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types';


const Presenter = () => {


    return (
        <section className={HeroStyle.hero}>
            <div className={HeroStyle.content}>
                <div className={HeroStyle.iframe_container}>
                    <div id='home' className={HeroStyle.overlay}/>
                    <iframe title='bbq-video-background' src="https://streamable.com/s/lp7w1/opekoi?autoplay=1&muted=1" frameBorder="0" />
                </div>

                <div className={HeroStyle.overlay_content}>
                    <div className={HeroStyle.overlay_text_container}>
                        <h1 className={HeroStyle.puff_in_center}>Welcome</h1>
                        <p className={HeroStyle.tracking_in_expand}>|  DOM'S NOMS |</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Presenter.displayName = 'Hero Presenter';
//
//
// Presenter.propTypes = {
//     images: PropTypes.array.isRequired,
// };
//
// Presenter.defaultProps = {
//     images: [],
// };


export default Presenter;