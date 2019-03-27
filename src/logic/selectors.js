
//DOMS NOMS Logo
export const getLogo        = ({Logic}) => Logic.getIn(['info', 'logo']);


// Site Navigation names
export const getNavNames = ({Logic})=> Logic.getIn(['nav_names']);

//  Hero Background
export const getHeroBackground = ({Logic}) => Logic.getIn(['hero_background']);


//Story Component
export const getStoryTitle    = ({Logic}) => Logic.getIn(['story', 'title']);
export const getStoryTextList = ({Logic}) => Logic.getIn(['story', 'text']).toArray();

//Services Component
export const getService     = ({Logic}) => Logic.getIn(['services']).toJS();

//Food Menu Component
export const getFoodMenuTitle    = ({Logic}) => Logic.getIn(['food_menu', 'title']);
export const getFoodMenuContent    = ({Logic}) => Logic.getIn(['food_menu_content']).toArray();
export const getFoodMenuFooter    = ({Logic}) => Logic.getIn(['food_menu_footer']);


//Gallery Component
export const getGalleryTitle    = ({Logic}) => Logic.getIn(['gallery', 'title']);
export const getGallerySettings = ({Logic}) => Logic.getIn(['gallery', 'settings']);
export const getGalleryImgPaths = ({Logic}) => Logic.getIn(['gallery', 'images']);

//About-us
export const getAboutUsImage =   ({Logic}) => Logic.getIn(['about_us', 'domino']);
export const getBrands = ({Logic}) => Logic.getIn(['info' , 'social']).toJS();