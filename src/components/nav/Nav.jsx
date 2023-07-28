import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';


import './nav.css';
import NavSocials from './NavSocials';
import Cta from './Cta';
import ME from '../../assets/hu.jpg';
import me from '../../assets/bitnine_logo.png';
import {BiMenu} from 'react-icons/bi';
import {MdOutlineClose} from 'react-icons/md';


const Nav = () => {

  const searchButton = document.querySelector('.search__button');
  const searchBar = document.querySelector('.main__search');
  
  
  const [isToggle, setIsToggle] = useState(false);
  
  const HandleToggle = () => {
    console.log('you clicked me ');
    setIsToggle(prevState => !prevState);

  };
  
  const handleClick = (e) => {
    e.preventDefault();
     const cta = document.querySelector('.main_cta');
     cta.classList.toggle('active');

  }

  return (
    <header>
      <div className="first_content">
        <div className="section-part">

          <select name="" id="" className='section-bar'>
            <option value="">select language</option>
            <option value="">English</option>
            <option value="">한국어</option>
          </select>
        </div>
        <div className="first_image">
          <img src={ME} alt="" />
          <div className="initial_text">
            <a href="">
              <b>AG Cloud Express : </b>
              Experience graph database in a cloud environment for FREE!
            </a>
          </div>
        </div>

        <div className="bitnine-logo">

          <div className="image">
            <a href="">
              <img src={me} alt="" />
            </a>
          </div>
        </div>
        <div className="mini_navbar" onClick={handleClick}>
          <nav>
            <a href=""><BiMenu/></a>
          </nav>
        </div>
        <div className="navigation_bar">
          <div className="container">
            <div className='nav_element'>
              <a href="">
                <span>PRODUCTS</span>
              </a>
              <div className='arrow'> > </div>
            </div>

            <div className='nav_element'>
              <a href="">
                <span>USE CASES</span>
              </a>
              <div className='arrow'>  </div>
            </div>
            <div className='nav_element'>
              <a href="">
                <span>SERVICES</span>
              </a>
              <div className='arrow'>  </div>
            </div>
            <div className='nav_element'>
              <a href="">
                <span>RESOURSES</span>
              </a>
              <div className='arrow'> > </div>
            </div>
            <div className='nav_element'>
              <a href="">
                <span>BLOG</span>
              </a>
              <div className='arrow'>  </div>
            </div>
            <div className='nav_element'>
              <a href="">
                <span>COMPANY</span>
              </a>
              <div className='arrow'> > </div>
            </div>
            <div className='nav_element'>
              <a href="">
                <span>IR</span>
              </a>
              <div className='arrow'> > </div>
            </div>
            <div className='nav_element'>
              <a href="">
                <span>TRY FREE</span>
              </a>
              <div className='arrow'>  </div>
            </div>


          </div>
        </div>


      </div>

      <div className="main__container">
        <div className={`${isToggle ? 'main__search show-search' : 'main__search'}`}>

              <input type="text" placeholder='SEARCH' className='search__input' />
              <div className="search__button" onClick={HandleToggle}>
              <span className='search__icon'><BiSearch /></span>
              <span className='search__close'><MdOutlineClose /></span>
              </div>

        </div>
        <a href="">
          <span>AG Cloud</span>
        </a>
        <a href="">
          <span>Apache AGE</span>
        </a> <a href="">
          <span>CONTACT</span>
        </a>
        <NavSocials />
      </div>

      <Cta />

    </header>

  );
};

export default Nav;
