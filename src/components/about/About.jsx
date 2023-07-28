import React from 'react';
import './about.css';
import ME from '../../assets/AgenSQL.png'

const About = () => {
    return (
        <div className='main__header'>
            <div className="sub_header">

            <div className="wrapper_logo">
                <img src={ME} alt="" />
            </div>
            <div className="heading__main">

                <h3>
                    <strong>An integration of Bitnine’s DB technology and PG expertise</strong>
                </h3>
            </div>
            <div className="wrapper-sentences">
                <p className='p1'>
                    AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise<br />
                    and knowledge accumulated through database research and development.
                </p>
                <p className='p2'>The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures
                    <br />the efficiency and scalability of data management.
                </p>
                <p className='p3'>Get AgensSQL now for stable operation and management services at a reduced<br />
                    maintenance cost.
                </p>
            </div>
            <div className="wrapper-btn">
                <a href="" className='btn_2'>
                    <span >CONTACT</span>
                </a>
                <a href="" className='btn_2'>
                    <span>BROCHURE</span>
                </a> <a href="" className='btn_2'>
                    <span>BLOG</span>
                </a>
            </div>


            </div>

        </div>
    );
};

export default About;
