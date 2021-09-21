import React,{useState} from 'react'
import './Projects.css';
import Card from './Card/Card';
import ModalComp from './ModalComp/ModalComp';
import Modal from '@mui/material/Modal';
import ProjectsData from '../../dataProjects';
import DemoProjectsData from '../../demoDataProjects';

const Projects = () => {

    const [open, setOpen] = useState({
        state: false,
        data: null
    });
    const handleOpen = (params) => {
        setOpen({
            state: true,
            data: params
        })
    }
    const handleClose = () =>{
        setOpen({
            state: false,
            data: null
        })
    }

    return (
        <>
        <div className="projects-container" id="projects">
            <div className="projects-title">
                <span><b>Projects</b></span>
                <div className="border-bottom-projects"/>
            </div>
            <div className="projects-content">
                <div className="projects-full">
                    <div className="projects-category-title">
                        <span><b>- Full Stack Apps:</b></span>

                    </div>
                    <div className="full-projects-container">
                        {/* <Card handleOpen={handleOpen} handleClose={handleClose}/> */}
                        {
                            ProjectsData.map((el)=>{
                                    return(
                                        <Card  handleOpen={handleOpen} handleClose={handleClose} data={el}/>
                                    )
                                
                            })
                        }
                    </div>
                </div>
                <div className="projects-demos">
                    <div className="projects-category-title">
                        <span><b>- Demo Apps:</b></span>
                        <span className="info-demo-apps">
                            (*specific feature purpose only)
                        </span>

                    </div>
                    <div className="full-projects-container">
                        {/* <Card  handleOpen={handleOpen} handleClose={handleClose}/> */}
                        {
                            DemoProjectsData.map((el)=>{
                                    return(
                                        <Card  handleOpen={handleOpen} handleClose={handleClose} data={el}/>
                                    )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
        <Modal
            open={open.state}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalComp dataObj={open.data}/>
        </Modal>
        </>
    )
}

export default Projects
