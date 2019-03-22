import React from 'react';
import ServiceStyles from '../../assets/style/sass/services.scss'
import PropTypes from 'prop-types';

import OfferPresenter from './offer-presenter';


const Presenter = ({services}) => {

    return (
        <section id='services' className={ServiceStyles.services}>
            <div className={ServiceStyles.container}>
                <h2 className={ServiceStyles.title}>Our Services</h2>

                <div className={ServiceStyles.offer_container}>

                    {
                        services.map((service, index) => {
                            return (
                                <OfferPresenter
                                    key={index}
                                    index={index + 1}
                                    title={service.title}
                                    description={service.description}
                                    fa_icon={service.fa_icon}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

Presenter.displayName = 'Services Presenter';

Presenter.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            fa_icon: PropTypes.string.isRequired,
        })
    ),
};

Presenter.defaultProps = {
    services: [],
};

export default Presenter;