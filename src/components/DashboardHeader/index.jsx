import React from 'react';

import './styles.css';


function DashboardHeader () {
    return(
        <div className='dashbord-header-container'>
            
            <div className='dashbord-header-right'>
                Admin&emsp;
                <img
                    alt="profile"
                    className='dashbord-header-avatar'
                    src='https://reqres.in/img/faces/9-image.jpg' />
            </div>
        </div>
    )
}

export default DashboardHeader;