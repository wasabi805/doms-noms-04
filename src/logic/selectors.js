

// Site Navigation names
export const getNavNames = ({Logic})=> Logic.getIn(['nav_names']);

//  Hero Background
export const getHeroBackground = ({Logic}) => Logic.getIn(['hero_background']);


//Story Component
export const getStoryTitle    = ({Logic}) => Logic.getIn(['story', 'title']);
export const getStoryTextList = ({Logic}) => Logic.getIn(['story', 'text']).toArray();