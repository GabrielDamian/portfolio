import React,{useEffect} from 'react'
import './Card.css';
import LinkIcon from '../../../images/link_img.png';
import GitHubIcon from '../../../images/github.png';
import LiveDemoBtn from '../../../images/external_btn.png';
import MoreIconBtn from '../../../images/more.png';
const Card = ({handleOpen, handleClose,data}) => {
    const trimStringDesc = (param) =>{
        if(param.length > 100)
        {
            let temp = param.substring(0,100);
            temp = temp + " ...";
            return temp
        }
        else 
        {
            return param;
        }
    }
    return (
        <div className="card-container">
            <span className="right-border-fancy"></span>
            <span className="bottom-border-fancy"></span>
            <div className="card-image-content">
                <div className="dark-trick" onClick={()=>{window.open(data.liveLink,"_blank")}}>
                        <div className="dark-trick-fake-child"></div>
                        <img src={data.images[0]} alt="imgur" ceva="red"/>
                        <img className="link-icon" src={LinkIcon} alt="link icon"/>
                </div>
            </div>
            <div className="card-data-content">
                <div className="card-data-content-title">
                    <span>{data.title}</span>
                </div>
                <div className="card-data-content-desc">
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {
                            trimStringDesc(data.description)
                        }
                    </span>
                </div>
                <div className="card-data-buttons">
                    <div className="card-data-btns-left-group">
                        <a href={data.liveLink} target="_blank">
                            <button id="btn-live-demo" >
                                <span>LIVE DEMO</span>
                                <img src={LiveDemoBtn} alt="github"/>
                            </button>
                        </a>
                        <a href={data.gitHubLink} target="_blank">
                            <button id="btn-code"> 
                                <span>CODE</span>
                                <img src={GitHubIcon} alt="github"/>
                            </button>
                        </a>
                    </div>
                    <button id="btn-details" onClick={()=>{handleOpen(data)}}>
                        <span>MORE</span>
                        <img src={MoreIconBtn} alt="github"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
