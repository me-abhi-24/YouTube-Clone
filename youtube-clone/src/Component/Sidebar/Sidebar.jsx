import React from 'react'
import './Sidebar.css'
import home from '../../assets/assets/home.png'
import game_icon from '../../assets/assets/game_icon.png'
import automobiles from '../../assets/assets/automobiles.png'
import sports from '../../assets/assets/sports.png'
import entertainment from '../../assets/assets/entertainment.png'
import tech from '../../assets/assets/tech.png'
import music from '../../assets/assets/music.png'
import bolgs from '../../assets/assets/blogs.png'
import news from '../../assets/assets/news.png'
import jack from '../../assets/assets/jack.png'
import simon from '../../assets/assets/simon.png'
import tom from '../../assets/assets/tom.png'
import megan from '../../assets/assets/megan.png'
import cameron from '../../assets/assets/cameron.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="sortcut-link">
        <div className="side-link">
          <img src={home} alt="" /><p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="side-link">
          <img src={bolgs} alt="" /><p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-link">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" /><p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" /><p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" /><p>5-Minute Craft</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
