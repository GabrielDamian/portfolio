import React from 'react'
import './Stack.css';
import FrontEnd from './FrontEnd/FrontEnd';
import BackEnd from './BackEnd/BackEnd';

const Stack = () => {
    return (
        <div className="stack-container" id="stack">
            <div className="stack-title">
                <span className="span-title-stack">My Programming Stack:</span>
                <div className="bottom-border-manual"/>
            </div>
            <div className="stack-content">
                <div className="stack-content-left">
                    <div className="content-left-title">
                        <span>Front End:</span>
                    </div>
                    <div className="content-left-content">
                        <FrontEnd />
                    </div>
                </div>
                    <div className="stack-content-right">
                        <div className="content-right-title">
                            <span>Back End:</span>
                        </div>
                        <div className="content-right-content">
                            <BackEnd />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Stack
