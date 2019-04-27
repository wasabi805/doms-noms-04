import {Map, List} from 'immutable';
import chicken  from '../../assets/img/chicken.jpg';
import domino   from '../../assets/img/domino.jpg';
import ribs     from '../../assets/img/rig.jpg';
import rig      from '../../assets/img/ribs.jpg';
import spice    from '../../assets/img/spice.jpg';

export const INITIAL_STATE = Map({


    //Header Component
    nav_names: ['home ', 'services ' , 'menu ' , 'gallery ' , 'contact '],




    //Hero Component
    hero_background : ['https://streamable.com/s/lp7w1/opekoi?autoplay=1&muted=1'],

    //Story Component
    story: Map({
        title: 'Homestyle flavors to your table',
        text: List([
            `Since 2013 we've brought  our family outback flavors and tastes, to tables and events in the Bay Area.`,
            'Whether dining for one or entertaining a group, allow the perfection of your next meal to be (the simplest part of your planning) in the Master Grillers hands.  With matchless homemade sauces and dry spice rub recipes, we guarantee a taste that will surpass your expectations, and please you and your guests.',
            'Using 100% all natural apple, cherry, mesquite, oak, and pecan smoked woods; we deliver unforgettable savory taste.'
        ]),
    }),



    //Services Component
    services: List([
        Map({
            title: 'Catering',
            fa_icon: 'utensils',
            description: `The best way to enjoy your event, is to spend time with those who attended. Don't get stuck preparing a meal and missing all the action. Let our team cater your next event!`,
        }),
        Map({
            title: 'Events',
            fa_icon: 'glass-cheers', //need pro version
            description: `Whether a Backyard BBQ , Family Reunion, or Open House, we can bring the event to you! With access to tents, chairs, tables & linens. We are the ONLY call you need to make before your event starts.`
        }),
        Map({
            title: 'Delivery',
            fa_icon: 'truck',
            description: `Don’t want the hassle of sparking up the grill before the party arrives?  We've got you covered. We'll drop off a prepared meal, allowing  you and your guests to enjoy great food and the company of each other.`,
        }),
    ]),

    //Food Menu Component
    food_menu_content:List([

        {id: 1, title: 'appetizers',
            courses:[
                {id: 100, name: 'Lumpia', descrip: 'Traditional , golden crispy deep fried Filipino pork egg roll '},
                {id: 101, name: 'Bacon wrapped scallops', descrip: 'Our smoked scallops are the juiciest.'},
                {id: 102, name: "Chicken Wings", descrip: "Your choice of Original   classic BBQ, Hot n' Spicy , or Tangy Sweet n' Sour ."},
                {id: 103, name: 'Thai Chicken Skewers', descrip: 'Served with w/ peanut sauce'},
                {id: 104, name: 'Yakitori Beef Skewers', descrip: 'Served with w/ Teriyaki sauce.'},
                {id: 105, name: 'Savory Meatballs Plate', descrip: 'Covered in our silky, signature gravy.'},
                {id: 106, name: 'Beef Wellington', descrip: 'A juicy cut wrapped in a puffed pastry shell.'},
                {id: 107, name: 'Mini Crab Cakes', descrip: 'Served with w/ zesty lemon aioli.'},
                {id: 108, name: 'Bruschetta', descrip: 'Fresh tomatoes with garlic, basil, olive oil, and vinegar served on top of crispy slices of toasted baguettes  .'},
                {id: 109, name: 'Caprese Skewers', descrip: 'Moist slices of Mozzarella covered with tomatoes,sweet basil , and olive oil served with a balsamic reduction. .'},

            ]
        },

        {id: 2, title: 'sides',
            courses:[
                {id: 201, name: 'Loaded Creamy Mac & Cheese', descrip: 'Made with Wisconsin Sharp Cheddar & Smoked Gouda topped with crunchy a panko crust. '},
                {id: 202, name: 'Creamy Cole Slaw', descrip: 'Sliced cabbage & carrots in a mayo & sour cream base.'},
                {id: 203, name: 'Kale Slaw', descrip: 'Cranberries, carrots, almonds, & house vinaigrette.'},
                {id: 204, name: "Crisetelie's Corn Muffin", descrip: 'A golden moist cornbread topped with sweet honey.'},
                {id: 205, name: "DOM's NOMS Baked Beans", descrip: 'Made with my special secret blend of sweet and savory spices to complement for any  BBQ. '},
                {id: 206, name: 'Corn on the Cobb', descrip: 'Grilled sweet & juicy corn.'},
                {id: 207, name: 'Mashed Potatoes', descrip: 'Choose from either Classic or Garlic mashed.'},
                {id: 208, name: 'Wild Rice Pilaf', descrip: 'A light seasoned blend of spices on fluffy jasmine rice. '},
                {id: 209, name: 'Season Grilled Vegetables', descrip: 'The garden variety'},
                {id: 210, name: "Sautee'd Aricovert", descrip: 'The garden variety'},
                {id: 211, name: 'Roasted Red Potatoes', descrip: 'Made with hearty seasoning and roasted garlic.'},

            ]
        },

        {id: 3,title: 'Main Course',
            courses:[

                //  Red Meat

                {id: 300,  name: 'Brisket', descrip: 'So Fresh We literally just shot the cow!'},
                {id: 301,  name: 'Roasted Ribeye', descrip: 'Juicy Ribeye accompanied with Au jus.'},
                {id: 302,  name: 'Seared Sirloin', descrip: 'Sirloin Cut w/ Mushroom peppercorn Sauce'},
                {id: 303,  name: 'Steak Fajitas ', descrip: 'Grilled Steak Fajitas w/ sautéed onion & peppers'},

                //  Pork
                {id: 304, name: "DOM's NOMS Pulled Pork", descrip: 'All Natural bone in pork butt charred & smoked for 10 hrs!'},
                {id: 305, name: "Applewood Pork Spareribs", descrip: 'St. Louis pork spareribs smoked for 8 hours'},
                {id: 306, name: 'Smoked Pork Belly', descrip: 'Smothered in my signature soy & bourbon sauce blend.'},
                {id: 307, name: 'Grilled Pork Belly', descrip: 'Grilled & served w/ soy, ginger, & vinaigrette.'},
                {id: 308, name: 'Marinated Pork Loin', descrip: 'Served with a w/balsamic, cranberry sauce.'},

                //Chicken
                {id: 309, name: 'Jerk Chicken', descrip: 'Juicy chicken thighs marinated with an authentic blend of Caribbean spices'},
                {id: 310, name: 'Herb Roasted Chicken', descrip: 'Marinated w/ a rustic seasoned blend of spices topped with a Marsala sauce. '},

                //Burgers
                {id: 311, name: 'Angus Beef Burgers', descrip: 'Juicy burgers grilled to perfection'},
                {id: 312, name: 'Gourmet Veggie Burgers', descrip: 'A flavor-filled vegan delight. '},
                {id: 313, name: 'Eggplant Parmesan', descrip: 'Traditional roasted veggie .'},


            ]
        },

        {id:4 , title: 'Salads',
            courses:[
                {id: 401, name: 'Mix Green Salad', descrip: 'Crisp Romaine lettuce, tomatoes, red onion, and carrots tossed with a italian dressing.'},
                {id: 402, name: 'Classic Ceaser', descrip: 'Romaine lettuce tossed with aged parmesan, buttery croutons, and zesty Ceaser dressing.'},
                {id: 403, name: 'Arugala', descrip: 'A leafy blend mixed with apples, walnuts , and cranberries.'},
                {id: 404, name: 'Frisee', descrip: 'Spring batch leaves with a crispy texture tossed with tomatoes, red onions, and carrots in our house dressing. '},
            ]
        }
    ]),

    food_menu_footer: {logo: '../../public/bin/img/logo.png' , text: ' * All prices include taxes *' },

    gallery: Map({
        title: 'Gallery',

        images: [
            chicken,
            ribs,
            rig,
            spice,
            chicken,
            ribs,
            rig,
            spice,
        ]
    }),

    about_us: Map({
        domino: domino,
        text: 'Stuff About Domino'
    }),

    info: Map({
        social: List([
            Map({name: 'facebook',  link:'https://www.facebook.com/domino.corcega/'}),
            Map({name: 'instagram', link:'https://www.instagram.com/dcorcega00/'}),
            Map({name: 'yelp',      link:'https://www.yelp.com/'}),
        ])
    }),


    contact: Map({
        inputs: List([
            Map({name: 'contact_first_name' , placeholder: 'FIRST NAME:'}),
            Map({name: 'contact_last_name' , placeholder: 'LAST NAME:'}),
            Map({name: 'contact-email' , placeholder: 'EMAIL:'}),
            Map({name: 'contact-phone' , placeholder: 'PHONE:'}),
            Map({name: 'contact-subject' , placeholder: 'SUBJECT:'}),
        ]),
    }),

});