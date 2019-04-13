import React from 'react';
import GalleryStyles from '../../assets/style/sass/gallery.scss';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor';
import PropTypes from 'prop-types';

const Presenter = (props)=>{

    //react-scrollable-anchor
    let screenWidth;
    if(screen.width < 768){
        screenWidth = -60
    }else{
        screenWidth = -90
    }
    configureAnchors({offset: screenWidth, scrollDuration: 100});

    return (
        <React.Fragment>

            <section className={GalleryStyles.gallery}>

                <div className={GalleryStyles.contain}>
                    <ScrollableAnchor id={'gallery'}>
                        <h1>Gallery</h1>
                    </ScrollableAnchor>

                    {/*Gallery Images*/}
                    <div className={GalleryStyles.row}>
                        <div className={GalleryStyles.row__inner}>
                            {props.images.map((path, i ) => <div key={ i } className={GalleryStyles.tile}>

                                <div className={GalleryStyles.tile__media} >
                                    <img id={`img_${i}`} className={GalleryStyles.tile__img} src={path} alt=""  />
                                </div>

                                <div className={GalleryStyles.tile__details} onClick={()=> props.openFormModal('gallery_modal' , {src: path})}>
                                    {/*<div className={GalleryStyles.tile__title}>*/}
                                    {/*This could be a title*/}
                                    {/*</div>*/}
                                </div>
                            </div> )}
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    );

};

Presenter.displayName = 'Gallery Presenter';

Presenter.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    openFormModal : PropTypes.func.isRequired
};

Presenter.defaultProps = {
  images: [],
};

export default Presenter;