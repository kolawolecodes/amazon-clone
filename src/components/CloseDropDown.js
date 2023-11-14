import React, { useState } from 'react';
import "./closeDrop.css"

function CloseDropDown() {
    const [hide, setHide] = useState(false);
    const toggleClass = ()=> {
        setHide(!hide)};

    return (
      <div id='blank'>
              <div id='overlay__menu_close' onClick={toggleClass}>
                  <div id='overlay_nav__line1'>Line one</div>
                  <div id='overlay_nav__line2'>Line one</div>
              </div>
      </div>
    );
}

export default CloseDropDown;

