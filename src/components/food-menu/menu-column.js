import React from 'react';

const MenuColumn = (props) => {

    let unpack = (menu_item) => {

        menu_item = props.food_menu_content;

        console.log(menu_item);





        return menu_item.map( (x , index ) => {
            console.log(x)


            return <React.Fragment>
                {console.log(x.id , 'workwithme')}
                <h1 key={x.id} className='title'>{x.title}</h1>



                {/*{x.courses.map(z => {*/}


                   {/**/}
                    {/**/}


                    {/*return <React.Fragment>*/}
                        {/*<p key={`${z.name}${index}`} className='name'>{z.name}</p>;*/}
                        {/*<p key={`${z.descrip}${index}`} className='text'>{z.descrip}<span className='price'> | ${z.price} |</span></p>*/}
                    {/*</React.Fragment>;*/}
                {/*})}*/}

            </React.Fragment>;
        });
    };

    return unpack();
};

export default MenuColumn;
