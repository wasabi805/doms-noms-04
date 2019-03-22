import React from 'react';
import StoryStyles from '../../assets/style/sass/story.scss'
import PropTypes from 'prop-types';


const Presenter = ({title, text}) => {
    return (
        <section className={StoryStyles.story}>
            <div className={StoryStyles.story_overlay}>
                <h1 className={StoryStyles.story_title}>{title}</h1>
                { text.map((para, i) => <p key={i} className={StoryStyles.story_text}>{para}</p>) }
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