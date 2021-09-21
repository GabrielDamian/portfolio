import React,{useState,useEffect} from 'react'
import './Menu.css';

const Menu = ({selectedItem,forceMeScroll}) => {
    const [selected, setSelected] = useState(selectedItem);
    useEffect(()=>{
        console.log("update in child:",selectedItem);
        setSelected(selectedItem)
    },[selectedItem])
    const handleMenuClick = (newSelected)=>{
        console.log("handle menu click:", newSelected);
        setSelected(newSelected);
        forceMeScroll(newSelected);
    }
    
    const spansGenerator = ()=>{
            return(
                <>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </>
            )
    }

    
    return (
        <div className="menu-container">
            <div className="menu-container-center">
                <ul>
                    <li 
                        onClick={()=>{handleMenuClick(1)}}
                        className={selected == 1 ? 
                            "list-elem-diamond selected-diamond"
                            :
                            "list-elem-diamond"
                    }>
                        {
                          selected == 1 ? spansGenerator(true):null
                        }
                        
                        <div className={
                            selected == 1 ? 
                            "list-elem-text selected-text"
                            :
                            "list-elem-text"

                        }>
                            <p>Intro</p>
                        </div>    
                    </li>
                        
                        <div className="vertical-bar">
                            <div className="center-vertical-bar">
                            </div>
                        </div>
                    <li 
                        onClick={()=>{handleMenuClick(2)}}
                        className={selected == 2 ? 
                            "list-elem-diamond selected-diamond"
                            :
                            "list-elem-diamond"
                        }>
                        {selected == 2? spansGenerator():null}
                        <div className={
                            selected == 2 ? 
                            "list-elem-text selected-text"
                            :
                            "list-elem-text"

                        }>
                            <p>Stack</p>
                        </div>    
                    </li>
                        <div className="vertical-bar">
                            <div className="center-vertical-bar">
                            </div>
                        </div>
                    <li className={selected == 3? 
                            "list-elem-diamond selected-diamond"
                            :
                            "list-elem-diamond"
                        }>
                        {selected == 3? spansGenerator():null}
                        
                        <div
                            onClick={()=>{handleMenuClick(3)}} 
                            className={
                            selected == 3 ? 
                            "list-elem-text selected-text"
                            :
                            "list-elem-text"

                        }>
                            <p>Projects</p>
                        </div>    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
