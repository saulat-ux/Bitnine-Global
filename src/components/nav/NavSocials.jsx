import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { FaWifi } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { SiMega } from 'react-icons/si';

const NavSocials = () => {
  return (
    <div className='nav__socials'>
       <a href="" target='blank'><AiOutlineGithub /></a>
          <a href="" target='blank'><FaWifi /></a>
          <a href="" target='blank'><AiFillYoutube /></a>
          <a href="" target='blank'><AiOutlineTwitter /></a>
          <a href="" target='blank'><BiLogoLinkedin /></a>
          <a href="" target='blank'><BiLogoFacebookCircle /></a>
          <a href="" target='blank'><SiMega /></a>

    </div>
  )
}

export default NavSocials
