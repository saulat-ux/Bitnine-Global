import React from 'react';
import './footer.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaWifi } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { SiMega } from 'react-icons/si';
import {AiOutlineCopyright} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sub_footer">
            <div className="container">
                <div className="footer_elements">
                    <div className='product_elements'>PRODUCTS
                        <div className='sub_ele'>
                            <ul>
                                <a href="">Relational Database</a>
                            </ul>
                            <ul>
                                <a href=""> Graph Database</a>
                            </ul>
                            <ul>
                                <a href="">Graph-based Solution</a>

                            </ul>


                        </div>

                    </div>
                    <div className='usecase_elements'>USE CASES
                        <div className='sub_use'>
                            <ul>
                                <a href=""></a>
                            </ul>
                            <ul>
                                <a href=""> </a>
                            </ul>
                            <ul>
                                <a href=""></a>

                            </ul>


                        </div>

                    </div>
                    <div className='service_elements'>SERVICES
                        <div className='sub_ser'>
                            <ul>
                                <a href=""></a>
                            </ul>
                            <ul>
                                <a href=""> </a>
                            </ul>
                            <ul>
                                <a href=""></a>

                            </ul>


                        </div>
                    </div>
                    <div className='resourse_elements'>RESOURSES
                        <div className='sub_res'>
                            <ul>
                                <a href="">Documentation</a>
                            </ul>
                            <ul>
                                <a href=""> Learn</a>
                            </ul>



                        </div>
                    </div>
                    <div className='blog_elements'>BLOG

                        <div className='sub_blog'>
                            <ul>
                                <a href=""></a>
                            </ul>
                            <ul>
                                <a href=""> </a>
                            </ul>
                            <ul>
                                <a href=""></a>

                            </ul>


                        </div>

                    </div>
                    <div className='company_elements'>COMPANY
                        <div className='sub_comp'>
                            <ul>
                                <a href="">About Us</a>
                            </ul>
                            <ul>
                                <a href=""> Contact</a>
                            </ul>



                        </div>

                    </div>
                </div>
            </div>
            <div className="bottom_elements">
                <div className="copy_rights">
                    <p>2023 by Bitnine Global Inc. All Rights Reserved.</p>
                </div>
                <div className="footer_icons">
                    <a href="" target='blank'><AiOutlineGithub /></a>
                    <a href="" target='blank'><FaWifi /></a>
                    <a href="" target='blank'><AiFillYoutube /></a>
                    <a href="" target='blank'><AiOutlineTwitter /></a>
                    <a href="" target='blank'><BiLogoLinkedin /></a>
                    <a href="" target='blank'><BiLogoFacebookCircle /></a>
                    <a href="" target='blank'><SiMega /></a>
                    <a href="">CONTACT</a>
                </div>
            </div>

            </div>
            <div className='last'>
            
                <div className='end-icon'><AiOutlineCopyright/></div>
                <div className='p-end'>
                <p>2023 by Bitnine Global Inc. All Rights Reserved.</p>
                    </div>
            </div>
            <div className='horizontal' ></div>
        
            
        </div>
    );
};

export default Footer;
