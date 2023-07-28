import React from 'react'
import './agenEnterprise.css'
import ME from '../../assets/enterprise.png'

const AgenEnterprise = () => {
  return (
   <div className="main_enterprise">
    <div className="main_text_content">
        <h2>
            <strong>
            Agens Enterprise Package
            </strong>
        </h2>
        <p>
        Agens Enterprise Package comes with a high availability management server that <br /> 
supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently.
        </p>
    </div>
    <div className="ha_manager">

        <div className="image_div">
            <h5>
                <strong>Agens HA Manager</strong>
            </h5>

            <h5 className='tag_adjust'>
                <strong style={{color:'#0082cb'}}> HA Clustering</strong>
                – Failover/Failback, Load-balancing
            </h5>
            <img src={ME} alt="" />
            
        </div>
        <div className="agen_manager">
            <h5>
                <strong>
                Agens Enterprise Manager
                </strong>
            </h5>
            <div className="all_cards">
            <div className='container'>
                <div className="card">
                    <div className="front">
                        <p>Backup/Restore</p>
                    </div>
                    <div className="back">
                        <ul>
                            <li>provides a convenient interface for backup & restore</li>
                            <li>provides backup & restore features for DB and table objects</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card">
                    <div className="front">
                        <p>DB Monitoring Dashboard</p>
                    </div>
                    <div className="back">
                        <ul>
                            <li>monitors real-time session & transaction lock</li>
                            <li>provides status for server CPU & memory</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card">
                    <div className="front">
                        <p>Schedule Management</p>
                    </div>
                    <div className="back">
                        <ul>
                            <li>provides module for script, SQL job, and scheduling management</li>
                            <li>provides UX dedicated to scheduling</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card">
                    <div className="front">
                        <p>Database Audit</p>
                    </div>
                    <div className="back">
                        <ul>
                            <li>enables auditing via user interface</li>
                            <li>view audit results via user interface</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card">
                    <div className="front">
                        <p>SQL Monitoring</p>
                    </div>
                    <div className="back">
                        <ul>
                            <li>collects query statistics required for performance analysis</li>
                            <li>extracts monitoring results in query</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="card">
                    <div className="front">
                        <p>Perfomance Management</p>
                    </div>
                    <div className="back">
                        <ul>
                            <li>monitors and collects operation status & statistical data</li>
                            <li>provides status reports required for improving performance</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default AgenEnterprise
