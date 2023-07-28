import React from 'react'
import './experience.css'
import ME from '../../assets/agenEnterprise.png'
import ExperienceAuto from './ExperienceAuto'

const Experience = () => {
  return (
      <div className="main_experience">
          <div className="sub_experience">
              <div className="content">
                  <div className="image_content">
                <img src={ME}alt="" />

                  </div>
              </div>
          </div>
    <ExperienceAuto/>
      </div>
  )
}

export default Experience
