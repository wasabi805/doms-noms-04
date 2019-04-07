import React from 'react';
import StoryStyles from '../../assets/style/sass/story.scss'
import PropTypes from 'prop-types';


const Presenter = ({title, text}) => {
    return (
        <section className={StoryStyles.story}>

            <div className={StoryStyles.story_overlay}>

               <span>
                    <h1 className={StoryStyles.story_title}>{title}</h1>

                    <p className={StoryStyles.story_text}>
                        { text.map((para, i) =>
                            para + " "
                        )}
                    </p>

               </span>
            </div>


        </section>
    );
};

Presenter.displayName = 'Story Presenter';

Presenter.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Presenter.defaultProps = {};


export default Presenter;