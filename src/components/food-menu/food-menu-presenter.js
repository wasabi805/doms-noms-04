import React from 'react';
import FoodMenuStyles from '../../assets/style/sass/food-menu.scss'
// import PropTypes from 'prop-types';


import MenuColumn from './menu-column';
import Footer from './footer';

const Presenter = ({food_menu_content, food_menu_footer, logo}) => {

    return(
        <section id='menu' className={FoodMenuStyles.food_menu} >


            <div className={FoodMenuStyles.container_menu}>

                <h1>MENU</h1>

                <div className={FoodMenuStyles.row_menu}>

                    <article className={FoodMenuStyles.col_left_menu}>
                        {food_menu_content.map(items=>{
                            //if ids are 1 or 2 , place the mapped item in left col
                            // console.log(items.id);
                            if(items.id === 1 || items.id ===2){
                                return <div key={items.id} >

                                    <h2 className={FoodMenuStyles.food_grouping}> {items.title}</h2>

                                    {console.log(items.courses)}

                                    {items.courses.map(z=>{
                                        return <div>
                                            <h4 className={FoodMenuStyles.food_name}>{z.name}</h4>
                                            <p className={FoodMenuStyles.food_descrip}>{z.descrip}</p>
                                        </div>

                                    })}
                                </div>
                            }
                        })}
                    </article>

                    <article className={FoodMenuStyles.col_right_menu}>
                        {food_menu_content.map(items=>{
                            //if ids are 3 or 4 , place the mapped item in right col
                            // console.log(items.id);

                            if(items.id === 3 || items.id ===4){
                                return <div key={items.id} >

                                    <h2 className={FoodMenuStyles.food_grouping}> {items.title}</h2>

                                    {console.log(items.courses)}

                                    {items.courses.map(z=>{
                                        return <div>
                                            <h4 className={FoodMenuStyles.food_name}>{z.name}</h4>
                                            <p className={FoodMenuStyles.food_descrip}>{z.descrip}</p>
                                        </div>

                                    })}
                                </div>
                            }
                        })}
                    </article>
                </div>
            </div>
        </section>
    )

};

Presenter.displayName = 'Food Menu Presenter';

// Presenter.propTypes = {
//   food_menu_content: PropTypes.arrayOf(
//
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//
//       courses: PropTypes.string.isRequired,
//     })
// ),
// };

// Presenter.defaultProps = {
//     food_menu_content: [],
//     food_menu_footer: {},
//     logo: '',
// };

export default Presenter;