
import './agens.css';
import ME from '../../assets/Password-Profile.png';
import AB from '../../assets/Data-Redaction.png'
import CD from '../../assets/Auditing.png'

const Agens = () => {
   
    return (
        <div className="agens_main">
            <div className="sub_contentText">
                <h2>
                    <strong>AgensSQL DB Engine</strong>
                </h2>
                <h5>
                    <span>
                        <strong>
                            Enhanced Data Security
                        </strong>
                    </span>
                </h5>
                <p>AgensSQL is a PostgreSQL-based DBMS <br />
                    that guarantees optimal security and stability.</p>
            </div>
            <div className="bars">
                <div className='bar_1' >
                  <div className='the_image'>
                        <img src={ME} className='my_img' alt="" />


                    </div> <div className='list_text'>
                        <ul>
                            <li>user password policy reinforces login security</li>
                            <li>excessive failed login attempts lock an account</li>
                            <li>define rules for password complexity</li>
                        </ul>
                    </div>
                    
                   
                </div>
                <div className='bar_1'  >
                    <div className='the_image'>
                        <img src={AB} className='my_img' alt="" />
                    </div> <div className='list_text'>
                        <ul>
                            <li>enhanced data security of user personal information</li>
                            <li>resolve privacy issues in preparation for security audits</li>
                            <li>encryption or masking with unidentifiable special characters</li>
                        </ul>
                    </div>
                   
                   
                </div>
                
                
                <div className='bar_1' >
                    <div className='the_image'>
                        <img src={CD} className='my_img' alt="" />
                    </div> <div className='list_text'>
                        <ul>
                            <li>monitors database activities and collects data</li>
                            <li>traces object accessed or DDL & DML statements executed by a user</li>
                            <li>records all actions in logs</li>
                        </ul>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    );
};

export default Agens;
