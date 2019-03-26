import React from 'react';
import GalleryStyles from '../../assets/style/sass/gallery.scss'
// import PropTypes from 'prop-types';

const Presenter = ({title, images}) => {

    return (
        <React.Fragment>
            <section className={GalleryStyles.gallery}>
                <div id='#gallery' className={GalleryStyles.contain}>
                    <h1>Gallery</h1>

                    {/*Gallery Images*/}
                    <div className={GalleryStyles.row}>
                        <div className={GalleryStyles.row__inner}>
                            {images.map((path, i ) => <div key={ i } className={GalleryStyles.tile}>
                                <div className={GalleryStyles.tile__media}>

                                    <img className={GalleryStyles.tile__img} src={path} alt=""  />
                                </div>
                                <div className={GalleryStyles.tile__details}>
                                    <div className={GalleryStyles.tile__title}>
                                        This could be a title
                                    </div>
                                </div>
                            </div> )}
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );
};

// Presenter.displayName = 'Gallery Presenter';
//
//
// Presenter.propTypes = {
//   title: PropTypes.string.isRequired,
//   settings: PropTypes.object.isRequired,
//   images: PropTypes.arrayOf(PropTypes.string.isRequired),
// };
//
//
// Presenter.defaultProps = {
//   title: '',
//   settings: {},
//   images: [],
// };


export default Presenter;