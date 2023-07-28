import React from 'react'
import ME from '../../assets/feartures.png'
import './experienceAuto.css'

const ExperienceAuto = () => {
  return (
   <div className="main_autoExperience">
    <div className="outer_container">
        <div className="inner_container">
        <div className="text_content">
                    <h2>
                        <strong>
                            Key features
                        </strong>
                    </h2>
                   
                </div>
                <div className="p-text">
                <p>Manage your data with Agens Enterprise Package <br /> Essential enterprise features such as high availability and sharding are provided </p>
                </div>
            <div className="content_image">
               
                <img src={ME} alt="" />
            </div>
        </div>
    </div>
   </div>
  )
}

export default ExperienceAuto
