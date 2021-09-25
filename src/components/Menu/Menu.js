import React,{useState,useEffect} from 'react'
import './Menu.css';
import BurgerMenu from '../../images/burger-menu.png';



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
    

    //Burger logic
    const [customBurgerClass, setCustomBurgerClass] = useState('menu-container-btn-content');
    const handleBurgerClick = ()=>{
        if(customBurgerClass == 'menu-container-btn-content' || customBurgerClass == 'menu-container-btn-content ceva')
        {
            //burger is false, tranform in true
            console.log("case a")
            setCustomBurgerClass('menu-container-btn-content menu-container-btn-content-y-axys-back'); 
        }
        else 
        {
            //burger is true, trasform in false
            console.log("TEST:", customBurgerClass);
            console.log("case b")
            setCustomBurgerClass('menu-container-btn-content ceva')
        }
    }
    const handleMouseIn = ()=>{
        console.log("in")
        setCustomBurgerClass('menu-container-btn-content menu-container-btn-content-y-axys-back')
    };
    const handleMouseOut = ()=>{
        console.log()
        setCustomBurgerClass('menu-container-btn-content ceva')
    }
    return (
        <>
        {/* Mobile burger */}
        <div onClick={()=>handleBurgerClick()} onMouseOut={()=>handleMouseOut()}onMouseOver={()=>handleMouseIn()} className='menu-container-mobile'>
           <div className={
               customBurgerClass == 'menu-container-btn-content menu-container-btn-content-y-axys-back'?
               'menu-container-mobile-btn rotate_right':
               customBurgerClass == 'menu-container-btn-content ceva'?
               'menu-container-mobile-btn rotate_back':
               'menu-container-mobile-btn'
           }>
               <img src={BurgerMenu} />
           </div>
           <div className={customBurgerClass}>
               <div className="menu-btn-item">
                   <div className="menu-btn-item-square" onClick={()=>{handleMenuClick(1)}}>
                       <div className="no-rotation">
                           <span>Intro</span>
                       </div>
                   </div>
               </div>
               <div className="menu-btn-item">
                   <div className="menu-btn-item-square" onClick={()=>{handleMenuClick(2)}}>
                        <div className="no-rotation">
                           <span>Stack</span>
                        </div>
                   </div>
               </div>
               <div className="menu-btn-item">
                    <div className="menu-btn-item-square" onClick={()=>{handleMenuClick(3)}}>
                        <div className="no-rotation">
                           <span>Projects</span>
                        </div>
                   </div>
               </div>
           </div>
        </div>

        {/* Desktop menu */}
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
        </>
        
    )
}

export default Menu
