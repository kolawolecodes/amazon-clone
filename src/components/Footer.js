import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';
import amazonLogo from "../images/amazon-dark-logo-png-transparent.png"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__first__layer">
          <p className='back2top'>Back to top</p>
      </div>

      <div className="footer__second__layer">
          <div className='second_layer_content'>
              <div className='content1'>
                  <h3>Get to Know Us</h3>
                  <div className='content1__link__wrap'>
                      <Link to = '/Career'>
                         <span className='first_level_links'>Careers</span>
                      </Link>
                      <Link to = '/Blog'>
                         <span className='career'>Blog</span>
                      </Link>
                      <Link to = '/About_Amazon'>
                         <span className='first_level_links'>About Amazon</span>
                      </Link>
                      <Link to = '/Investor_relation'>
                         <span className='first_level_links'>Investor Relation</span>
                      </Link>
                      <Link to = '/Amazon_design'>
                         <span className='first_level_links'>Amazon Design</span>
                      </Link>
                      <Link to = '/Amazon_science'>
                         <span className='first_level_links'>Amazon Science</span>
                      </Link>
                  </div>
              </div>

              <div className='content2'>
                  <h3>Make Money with Us</h3>
                  <div className='content2__link__wrap'>
                      <Link to = '/SellProduct'>
                         <span className='first_level_links'>Sell products on Amazon</span>
                      </Link>
                      <Link to = '/AmazonBusiness'>
                         <span className='career'>Sell on Amazon Business</span>
                      </Link>
                      <Link to = '/SellApps'>
                         <span className='first_level_links'>Sell apps on Amazon</span>
                      </Link>
                      <Link to = '/BecomeAfiliate'>
                         <span className='first_level_links'>Become an Affiliate</span>
                      </Link>
                      <Link to = '/AdvertiseProduct'>
                         <span className='first_level_links'>Advertise Your Products</span>
                      </Link>
                      <Link to = '/SelfPublish'>
                         <span className='first_level_links'>Self-Publish with Us</span>
                      </Link>
                      <Link to = '/HostOnAmazon'>
                         <span className='first_level_links'>Host an Amazon Hub</span>
                      </Link>
                  </div>
              </div>

              <div className='content3'>
                  <h3>Amazon Payment Products</h3>
                  <div className='content3__link__wrap'>
                      <Link to = '/AmazonBusiness'>
                         <span className='first_level_links'>Amazon Business Card</span>
                      </Link>
                      <Link to = '/ShopWithPoint'>
                         <span className='career'>Shop with Points</span>
                      </Link>
                      <Link to = '/ReloadBalance'>
                         <span className='first_level_links'>Reload Your Balance</span>
                      </Link>
                      <Link to = '/AmazonCurrencyConverter'>
                         <span className='first_level_links'>Amazon Currency Converter</span>
                      </Link>
                  </div>
              </div>
          </div>
      </div>

      <div className="footer__third__layer">
            <div className='third__layer__innner__layer'>
                <Link to = '/'>
                <img className='header__logo' src= {amazonLogo} alt="amazon-logo" />
                </Link>
                <div className='thirdLayer__link__wrap'>
                <Link to = '/Countries'>
                        <div>
                            <span className='first_level_links'>English</span>
                        </div>
                </Link>
                    <Link to = '/UsDollar'>
                        <div>
                            <span className='first_level_links'>US - U.S. Dollar</span>
                        </div>
                    </Link>

                    <Link to = '/UnitedState'>
                        <div>
                            <span className='first_level_links'>United State</span>
                        </div>
                    </Link>
                </div>
            </div>
      </div>
      <div className="footer__fourth__layer">
          <h1>To be Filled Later</h1>
      </div>
    </div>
  );
}


export default Footer