import React from 'react'
import './sidebar.css'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { useState } from 'react';

const Sidebar = () => {
    const [open , setOpen ] = useState(false);
  return (
    <div className='my_sidebar'>
      <div className={open ? 'container_sidebar open' : 'container_sidebar'} onClick={() => setOpen(!open)}>
        <div className="arrange">
        <div className="sidebar-title">
           <div>PRODUCTS</div>
            <div className='element_icon'> <MdOutlineKeyboardArrowDown/></div>

      <div className="sidebar_content">Graph Database </div>
        </div>
        </div>
      

      
      </div>
            
    </div>
  )
}

export default Sidebar
