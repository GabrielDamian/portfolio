import React,{useEffect} from 'react'
import './ModalComp.css';
import Slider from './Slider/Slider';
import CustomIcon from './CustomIcon/CustomIcon';
//Stack used format params:
//main :{string -> next, graphql, socket.io, pusher, jwt, redis, redux, jest, chart.js mongodb, styledcomponents, materialui, sass,  }
import LiveDemoBtn from '../../../images/external_btn.png'
import GitHubIcon from '../../../images/github.png';

const ModalComp = ({dataObj}) => {
    return (
        <>
        {
            dataObj == null ? <p>Modal null</p>:
            (
<div className="modalcomp-container">
            <Slider arrImages={dataObj.images}/>
            <div className="modalcomp-content">
                <div className="modalcomp-title">
                    <span><b>{dataObj.title}</b></span>
                </div>
                <div className="modal-comp-desc">
                    <div className="modalcomp-desc-left">
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dataObj.description}
                        </span>
                        {
                            dataObj.account != null ?
                            (
                            <span style={{color: 'red', display: 'block', width: '50%'}}>
                                Test purpose account: {dataObj.account.email}(user), {dataObj.account.pass}(pass). 
                            </span>
                            )
                            :
                            null
                        }
                        
                    </div>
                    <div className="modalcomp-desc-right">
                        <div className="modal-comp-right-title">
                            <p><b>Stack used:</b></p>
                        </div>
                        <div className="modal-comp-right-content">
                            {dataObj.stacks.map((el, index)=>{
                                return(
                                    <CustomIcon main={el} key={index}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="modalcomp-buttons">
                    <a href={dataObj.liveLink} target="_blank">
                        <button id="btn-live-demo" >
                                <span>LIVE DEMO</span>
                                <img src={LiveDemoBtn} alt="github"/>
                        </button>
                    </a>
                    <a href={dataObj.gitHubLink} target="_blank">
                        <button id="btn-code"> 
                            <span>CODE</span>
                            <img src={GitHubIcon} alt="github"/>
                        </button>
                    </a>

                </div>
            </div>
        </div>
            )
        }
        

        </>
        
    )
}

export default ModalComp
