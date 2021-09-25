import React from 'react'
import './BackEnd.css';
import Node from '../../../images/FrontEnd/node.png';
import Mongo from '../../../images/FrontEnd/mongo.png';
import GraphQL from '../../../images/FrontEnd/graphQL.png';
import Socket from '../../../images/FrontEnd/socket.png';
import JWT from '../../../images/FrontEnd/jwt.png';
import Redis from '../../../images/FrontEnd/redis.png';

const BackEnd = () => {
    return (
        <>
        <div className="mobile-front-end">
            <div className="mobile-simple-wrappper">
                <img src={Node} alt="react icon"/>
                <img src={Mongo} alt="next icon"/>
                <img src={GraphQL} alt="next icon"/>
                <img src={Socket} alt="next icon"/>
                <img src={JWT} alt="next icon"/>
                <img src={Redis} alt="next icon"/>
            </div>            
        </div>
        <div className="frontend-container">
            <div className="front-row-1">
                <img src={Node} alt="react icon"/>
            </div>
            <div className="front-row-2">
                <img src={Mongo} alt="next icon"/>
                <img src={GraphQL} alt="next icon"/>
            </div>
            <div className="front-row-3">
                <img src={Socket} alt="next icon"/>
                <img src={JWT} alt="next icon"/>
                <img src={Redis} alt="next icon"/>
                
            </div>
        </div>
        </>
    )
}

export default BackEnd
