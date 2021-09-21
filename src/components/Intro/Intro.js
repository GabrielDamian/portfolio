import React,{useState, useEffect, useRef} from 'react'
import './Intro.css';
import config_particles from './config_particles';
import Particles from "react-tsparticles";

import bg from '../../images/bg.png';
import png_neon from '../../images/png_neon.png';
import png_gol from '../../images/png_gol.png';
import AudioFile from '../../audio/broken_light.mp3';


const Intro = () => {
    const [state, setState] = useState("neon");

    const particlesInit = () => {};
    const particlesLoaded = () => {};

    // useEffect(() => {
    //     let temp_audio = new Audio(AudioFile);
    //     setAudio(temp_audio);
    //   }, []);


      const switchState = () => {
        console.log("switch state");
        setState((prev) => {
          if (prev == "neon") {
            return "basic";
          } else {
            return "neon";
          }
        });
      };
    
      const AutomaticSwitch =(times,audio) => {
        if(audio)
        {
            let temp_audio = new Audio(AudioFile);
            temp_audio.play();
            
    
            setTimeout(() => {
              switchState();
            }, 250);
        }
        
        for (let i = 0; i < times; i++) {
          setTimeout(() => {
            switchState();
          }, i * 90);
        }
      };
    
      const scrollProjects = ()=>{
        console.log("scroll here")
        let projects_Y = document.querySelector('#projects').offsetTop;
        window.scrollTo({
          top: projects_Y,
          left: 0
        })
      }
    return (
        <>
        <div className="intro-container" id="intro">
            {/* <img className="bg-intro" src={bg} alt="bg"/> */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{ ...config_particles }
            }
            />
            <img className="png_neon" src={state == "neon" ? png_neon : png_gol} alt="png_neon"/>
            <img className="fake-intro" src={png_gol} alt="fake-intro"/>
        </div>
        <div className="main-text">
            <div className="main-text-left">
                <div className="main-text-left-name">
                    <h2 data-text="Damian_Gabriel">Damian_Gabriel</h2>
                </div>
                <div className="main-text-left-full-stack">
                    <h2 data-text="FullStack">FullStack</h2>
                </div>
                <div className="main-text-left-description">
                    <h2 data-text="Web_Development">Web_Development</h2>
                </div>
                <div className="main-text-left-button">
                  <button class="btn" onClick={()=>scrollProjects()}>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                      <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                      <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />                    
                    </svg>
                    <span >PROJECTS</span>
                </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Intro
