import React from 'react'
import './FrontEnd.css';
import ReactIcon from '../../../images/FrontEnd/react.png';
import Next from '../../../images/FrontEnd/next.png';
import Apollo from '../../../images/FrontEnd/apollo.png';
import StyledComponents from '../../../images/FrontEnd/styled-components_1.png';
import MaterialUi from '../../../images/FrontEnd/material-ui.png';
import Sass from '../../../images/FrontEnd/sass.png';




const FrontEnd = () => {
    return (
        <div className="frontend-container">
            <div className="front-row-1">
                <img src={ReactIcon} alt="react icon"/>
            </div>
            <div className="front-row-2">
                <img src={Next} alt="next icon"/>
                <img src={Apollo} alt="next icon"/>
            </div>
            <div className="front-row-3">
                <img src={StyledComponents} alt="next icon"/>
                <img src={MaterialUi} alt="next icon"/>
                <img src={Sass} alt="next icon"/>
            </div>
        </div>
    )
}

export default FrontEnd
