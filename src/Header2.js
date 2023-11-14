import React, { useState, useContext, useEffect } from 'react';
import "./components/dropdownAll.css";

import "./header2.css";
import { Link } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { TestDownContext } from './components/TestDownContext';

const Header2 = () => { 
    
//   const [hide, setHide] = useState(true);

  const [MainLinks] = useState(
    [
        {title: "customer service", id: 1},
        {title: "Gift card", id: 2},
        {title: "Sell", id: 3},
        {title: "Learn More", id: 4},
        {title: "Hint", id: 5}
])

    const {services} = useContext(TestDownContext);
    const {departments} = useContext(TestDownContext);
    
    // const {toggleShow} = useContext(StateContext);
    const [show, setShow] = useState(false);

    useEffect(() => {
      let handler = () => {
        setShow(false);
      };
      document.addEventListener("mousedown", handler)
    });
    
    
  
  return (
    <div className="header2">
        <div className='main__nav__wrapper'>
            <div className='main__nav'>
                <div className='all__and_line_btn'>
                    <div onClick={() => setShow(!show)} id='header__nav__btn'>
                        <div id='nav__all__line'></div>
                        <div id='nav__all__line'></div>
                        <div id='nav__all__line'></div>
                    </div>
                </div>
                <h3 className='for_all'>All</h3>

                <div className='header2__nav__links_wrap'>
                    {
                        MainLinks.map((mainlink) => {
                            return <Link to='/{mainlink.title}' className='header2___link'>
                                <span key={mainlink.id} className='header2__nav__links'>{mainlink.title}</span>
                            </Link>
                        })
                    }
                </div>
            </div>
           
        </div>
        {/* The drop down */}
        
        {
            show && (
                <div id='main__dropdown_wrapper' className= {show ? "show" : "hide"}>
                    <div id='dropdown__wrap' className= {show ? "show" : "hide"}>
                        <div id='dropdown__top__sign_text' className= {show ? "show" : "hide"}>
                            <PermIdentityIcon className='identyIcon'/>
                            <h3 className='hello'>Hello, Sign In</h3>    
                        </div>

                        <nav id='dropdown__nav__wrapper' className= {show ? "show" : "hide"}>

                            <ul id='nav__dropdown'className= {show ? "show" : "hide"}>
                                <h3>product and services</h3>
                                {
                                    services.map(service => {
                                        return(
                                            <Link to='/{service.title}' className='all_Links'>
                                                <li key={service.id}>{service.title}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>

                            <ul id='nav__dropdown'>
                                <h3>Department and categories</h3>
                                {
                                    departments.map(department => {
                                        return(
                                            <Link to='/{department.title}' className='all_Links'>
                                                <li key={department.id}>{department.title}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>

                            <ul id='nav__dropdown'>
                                <h3>Repeat prod and services</h3>
                                {
                                    services.map(service => {
                                        return(
                                            <Link to='/{service.title}' className='all_Links'>
                                                <li key={service.id}>{service.title}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    {/* <div id='blank' className= {show ? "show" : "hide"}>
                        <div id='overlay__menu_close' onClick={() => setShow(!hide)}>
                            <div id='overlay_nav__line1'></div>
                            <div id='overlay_nav__line2'></div>
                        </div>
                    </div> */}
                </div>
            )
        }
    </div>
  );
}

export default Header2