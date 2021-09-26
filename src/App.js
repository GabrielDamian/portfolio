import React, {useState, useEffect} from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Stack from './components/Stack/Stack';
import Menu from './components/Menu/Menu';
import Projects from './components/Projects/Projects';

function App() {

  const [selected, setSelected] = useState(1);

  const forceMeScroll = (where)=>{
    if(where == 1)
    {
      let intro_Y = document.querySelector('#intro').offsetTop;
      window.scrollTo({
        top:intro_Y,
        left:0
      })
    }else if(where == 2)
    {
      let stack_Y = document.querySelector('#stack').offsetTop;
      window.scrollTo({
        top:stack_Y,
        left:0
      })
    }else if (where ==3)
    {
      let projects_Y = document.querySelector('#projects').offsetTop;
      window.scrollTo({
        top: projects_Y,
        left: 0
      })
    }
  }

  useEffect(()=>{
    console.log("update selced", selected);
  },[selected])
  // const slowerUpdate = ()=>
  // {
  //   let currentTime = new Date();
  //   console.log("current time", currentTime.getTime());
  //   console.log("diferenta:",currentTime.getTime()/1000 - lastUpdate.getTime()/1000)
  //   if(currentTime.getTime()/1000 - lastUpdate.getTime()/1000 > 3)
  //   {
  //     return true
  //   }
  //   else 
  //   {
  //     return false;
  //   }
  // }

  useEffect(()=>{
    window.scrollTo({
      left: 0,
      top: 0
    })
  },[])
  useEffect(()=>{
    let intro_Y = document.querySelector('#intro').offsetTop;
    let stack_Y = document.querySelector('#stack').offsetTop;
    let projects_Y = document.querySelector('#projects').offsetTop;
    //0 -----------350-----------1000---------1400
    window.addEventListener('scroll',(e)=>{
      let current_pos = window.scrollY;
      console.log(current_pos)

      if(current_pos >0 && current_pos < stack_Y /2)
      {
        //-----320[----]350
        if(current_pos >stack_Y/2-100 )
        {
          console.log("trigger 1")
          setSelected(1);
        }

      }
      else if(current_pos > stack_Y/2 && current_pos < projects_Y/2 +stack_Y/2)
      {
        //350[----]370-------980[---]1000
        if(current_pos<stack_Y/2+100)
        {
          setSelected(2);
        }
        else if(current_pos>(projects_Y/2 +stack_Y/2)-100)
        {
          setSelected(2);

        }
      }
      else if (current_pos > projects_Y/2 +stack_Y/2)
      {
        if(current_pos <projects_Y/2 +stack_Y/2+100)
        {
          setSelected(3);
        }
      }
    })
  },[])


  return (
    <div className="App">
      <div className="loading-anim">
        <div class="loadingOuter">
		    <div class="loadingInner"></div>
	    </div>
      </div>
      <Intro />
      <Stack />
      <Menu selectedItem={selected} forceMeScroll={forceMeScroll}/>
      <Projects />
    </div>
  );
}

export default App;
