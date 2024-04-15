import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/assets/video.mp4'
import like from '../../assets/assets/like.png'
import dislike from '../../assets/assets/dislike.png'
import share from '../../assets/assets/share.png'
import save from '../../assets/assets/save.png'
import jack from '../../assets/assets/jack.png'
import user_profile from '../../assets/assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best YouTube Channel To Learn Web Development</h3>
            <div className='play-video-info'>
                <p>1525 Views • 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>Awesome</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>JackNicholson <span>1 day ago</span></h3>
                        <p>Great one</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>JackNicholson <span>1 day ago</span></h3>
                        <p>Good</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>JackNicholson <span>1 day ago</span></h3>
                        <p>Like it</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>JackNicholson <span>1 day ago</span></h3>
                        <p>Love it</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
