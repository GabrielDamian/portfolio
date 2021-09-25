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
        <>
        {/* The next div si visible just in mobile mode resolution */}
        <div className="mobile-front-end">
            <div className="mobile-simple-wrappper">
                <img src={ReactIcon} alt="react icon"/>
                <img src={Next} alt="next icon"/>
                <img src={Apollo} alt="next icon"/>
                <img src={StyledComponents} alt="next icon"/>
                <img src={MaterialUi} alt="next icon"/>
                <img src={Sass} alt="next icon"/>
            </div>
        </div>

        <div className="frontend-container">
            <div className="front-row-1">
                <img src={ReactIcon} alt="react icon"/>
            </div>
            <div className="front-row-2">
                <img src={ReactIcon} alt="react icon"/>
                <img src={Next} alt="next icon"/>
            </div>
            <div className="front-row-3">
                <img src={StyledComponents} alt="next icon"/>
                <img src={MaterialUi} alt="next icon"/>
                <img src={Sass} alt="next icon"/>
            </div>
        </div>
        </>
    )
}

export default FrontEnd
