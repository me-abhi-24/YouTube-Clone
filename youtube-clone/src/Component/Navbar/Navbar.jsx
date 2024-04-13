import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/assets/menu.png'
import logo from '../../assets/assets//logo.png'
import search_icon from '../../assets/assets/search.png'
import upload_icon from '../../assets/assets/upload.png'
import more_icon from '../../assets/assets/more.png'
import notification_icon from '../../assets/assets/notification.png'
import profile_icon from '../../assets/assets/jack.png'

const Navbar = ({setSidebar}) => {
    return (
        <div>
            <nav className='flex-div'>
                <div className="nav-left flex-div">
                    <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt=''></img>
                    <img className='logo' src={logo} alt=''></img>
                </div>

                <div className="nav-middle flex-div">
                    <div className="search-box flex-div">
                        <input type='text' placeholder='Search'></input>
                        <img src={search_icon} alt=''></img>
                    </div>
                </div>

                <div className="nav-right flex-div">
                    <img src={upload_icon} alt=''></img>
                    <img src={more_icon} alt=''></img>
                    <img src={notification_icon} alt=''></img>
                    <img src={profile_icon} alt=''></img>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
