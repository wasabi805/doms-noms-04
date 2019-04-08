import React,{Component} from 'react';
import GalleryStyles from '../../assets/style/sass/gallery.scss';

import chicken  from '../../assets/img/chicken.jpg';
import domino   from '../../assets/img/domino.jpg';
import ribs     from '../../assets/img/rig.jpg';
import rig      from '../../assets/img/ribs.jpg';
import spice    from '../../assets/img/spice.jpg';

// import PropTypes from 'prop-types';

class Presenter extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <React.Fragment>

                <section className={GalleryStyles.gallery}>
                    <div id='gallery' className={GalleryStyles.contain}>
                        <h1>Gallery</h1>

                        {/*Gallery Images*/}
                        <div className={GalleryStyles.row}>
                            <div className={GalleryStyles.row__inner}>
                                {this.props.images.map((path, i ) => <div key={ i } className={GalleryStyles.tile}>

                                    <div className={GalleryStyles.tile__media} >
                                        <img id={`img_${i}`} className={GalleryStyles.tile__img} src={path} alt=""  />
                                    </div>

                                    <div className={GalleryStyles.tile__details} onClick={()=> this.props.openFormModal('gallery_modal' , {src: path})}>


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
    }
}

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