import React, { useState, useContext } from 'react';
import { TestDownContext } from "../components/TestDownContext"
import { Link } from 'react-router-dom';
import "./dropdownAll.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import { StateContext } from './StateProvider';

function DropdownAll() {
    const {services} = useContext(TestDownContext);
    const {departments} = useContext(TestDownContext);

    // const {toggleShow} = useContext(StateContext);

    const [hide, setHide] = useState(false);
    const hideDrop = (e) => {
        e.preventDefault();
        setHide(!hide)
    }

    

return (
    <div id='main__dropdown_wrapper' className= {hide ? "hide" : ""}>
        <div id='dropdown__wrap' className= {hide ? "hide" : ""}>
            <div id='dropdown__top__sign_text'>
                <PermIdentityIcon className='identyIcon'/>
                <h3 className='hello'>Hello, Sign In</h3>    
            </div>

            <nav id='dropdown__nav__wrapper'>
                <ul id='nav__dropdown'>
                    <h3>Product and Services</h3>
                    {
                        services.map((service) => {
                            return <Link to='/{service.title}' className='all_Links'>
                            <li key={service.id}>{service.title}</li>
                            </Link>
                        })
                    }
                </ul>

                <ul id='nav__dropdown'>
                    <h3>Department and Category</h3>
                    {
                        departments.map((department) => {
                            return <Link to='/{department.title}' className='all_Links'>
                            <li key={department.id}>{department.title}</li>
                            </Link>
                        })
                    }
                </ul>

                <ul id='nav__dropdown'>
                    <h3>Product and Services</h3>
                    {
                        services.map((service) => {
                            return <Link to='/{service.title}' className='all_Links'>
                            <li key={service.id}>{service.title}</li>
                            </Link>
                        })
                    }
                </ul>
            </nav>
        </div>
        <div id='blank' className= {hide ? "hide" : ""}>
              <div id='overlay__menu_close' onClick={hideDrop}>
                  <div id='overlay_nav__line1'>Line one</div>
                  <div id='overlay_nav__line2'>Line one</div>
              </div>
      </div>
    </div>
);
}

export default DropdownAll;

