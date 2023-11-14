import React from 'react';
import amazonLogo from "../images/amazon-dark-logo-png-transparent.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./header.css";
import { Link } from 'react-router-dom';


function Header() {
    return ( 
        <div className = "header" >
            <div className = 'header__inner__wrapper' >
                <img className = 'header__logo' src = {amazonLogo} alt="amazon-logo" />

                <div className = "header__deliver__nav">
                    <LocationOnOutlinedIcon className = 'loction'/>
                    <div className = 'header__anywhere__wrapper' >
                        <span className = 'header__nav__text__up' > deliver anywhere </span> 
                        <span className = 'header__nav__text__down' > Nigeria </span> 
                    </div> 
                </div>

                <div className = "header__search__wrapper">
                    <span class = "header__all" > All </span> 
                    <input type = "text" name = "search-input" id = "search-input" />
                    <SearchOutlinedIcon className = "header__search__icon" />
                </div>

                <div className = 'header__navs' >
                    <Link to = '/LogIn' className = 'header___link' >
                        <div className = 'header__nav__links' >
                            <span className = 'header__nav__text__up' > Hello User </span>
                            <span className = 'header__nav__text__down' > Sign in & list </span> 
                        </div> 
                    </Link> 
                    
                    <Link to = '/' className = 'header___link' >
                        <div className = 'header__nav__links' >
                            <span className = 'header__nav__text__up' > Return & </span> 
                            <span className = 'header__nav__text__down' > Place Orders </span> 
                        </div> 
                    </Link>

                    <Link to = '/CheckOut' className = 'header___link' >
                        <div className = 'header__nav__links_basket' >
                            <div className = 'nav__basket__wrapper' >
                                <ShoppingBasketIcon className = 'nav__basket' />
                                <span className = 'product__count' > 2 </span> 
                            </div> 
                            <span className = 'header__nav__text__down cart' > Cart </span> 
                        </div> 
                    </Link> 
                </div> 
            </div> 
        </div>
    );
}

export default Header