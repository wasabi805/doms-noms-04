import React from 'react';
import ServiceStyles from '../../assets/style/sass/services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //see: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import PropTypes from 'prop-types';


const Presenter = ({title, description, index, fa_icon}) => {

    return (
        <article className={ServiceStyles.offer}>

            <div className={ServiceStyles.offer_title}>

                <FontAwesomeIcon className={ServiceStyles.offer_number} icon={fa_icon}/>

                <hr />
                <span className={ServiceStyles.offer_name}>{title}</span>
            </div>
            <p  className={ServiceStyles.offer_description}>{description} </p>
        </article>
    );
};

Presenter.displayName = 'Offer Presenter';

Presenter.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fa_icon : PropTypes.string.isRequired,
};


Presenter.defaultProps = {
    index: 0,
    title: '',
    description: '',
    fa_icon : '',
};


export default Presenter;