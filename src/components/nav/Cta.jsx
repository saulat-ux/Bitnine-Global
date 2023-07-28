import React from 'react';
import me from '../../assets/bitnine_logo.png';
import Sidebar from '../sidebar/Sidebar';

const Cta = () => {

    const HandleClick = (e) => {
        e.preventDefault();
        const Div = document.querySelector('.inner_div');
        Div.classList.toggle('active');
    };

    const click2 = (e) => {
        e.preventDefault();
        console.log('clicked')
    }
    return (
        <div className="main_cta">

            {/* making navbar for small screens  */}
                    <Sidebar/>













                    {/* end sidebar */}

            <div className="image">
                <a href="">
                    <img src={me} alt="" />
                </a>
            </div>
            <div className="nav_bar">
                <a href="" >
                    <span>PRODUCTS</span>
                </a>
                <a href="">
                        <span>USE CASES</span>
                </a>  <a href="">
                        <span>SERVICES</span>
                       
                </a>  <a href="">
                    
                        <span>RESOURSE</span>
             
                </a>  <a href="">
                    
                        <span>BLOG</span>
              
                </a>  <a href="">
                   
                        <span>COMPANY</span>
            
                </a>  <a href="">
                    

                        <span>IR</span>
               
                </a>  <a href="" >
                        <span className ='btn'>TRY FREE</span>  
                </a>
            </div>
        </div>
    );
};
export default Cta;
