import React from 'react';
import classes from './Nav.module.css';

const Nav = (props) => {
    return ( 
        <div>
            <img 
                className={classes.nav}
                src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
                alt='Netflix Logo'
            />

            <img   
                className={classes.nav_avatar}
                src='https://pbs.twing.com/profile_imgages/'
                alt='Avatar'
            />
        </div>
     );
}
 
export default Nav;