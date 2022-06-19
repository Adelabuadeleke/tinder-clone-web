import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


import './Header.css'
function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

        <img  
            className='header__logo' 
            src='https://res.cloudinary.com/adelabuadeleke/image/upload/v1655677527/icons8-tinder-48_nlf6pp.png'
        />
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>
    </div>
  )
}

export default Header