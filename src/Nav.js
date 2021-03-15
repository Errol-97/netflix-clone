import React, { useEffect, useState } from 'react';
import classes from './Nav.module.css';
const Nav = (props) => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return ( 
        <div className={show ? `${classes.nav} ${classes.nav_black}` : classes.nav}>
            <img 
                className={classes.nav_logo}
                src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
                alt='Netflix Logo'
            />

            <img   
                className={classes.nav_avatar}
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='Avatar'
            />
        </div>
     );
}
 
export default Nav;