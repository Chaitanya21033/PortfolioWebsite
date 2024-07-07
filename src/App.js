import './App.css';

import React, {useState} from 'react';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import NavBar from './components/NavBar';
import Experience from './components/Experience'
import ProjectCard from './components/Projects';
import ProjectCard2 from './components/Project2';
import Built from './components/Built';
import KnowMore from './components/KnowMore';
import './components/Flex.css'
const App = () => {
  document.body.style = 'background: #0a192f;';
  // document.getElementById("myButton").focus();
  return (
    <div style={{width:'1000px'}}>
      <NavBar />
      
      <div className="container text-center" style={{padding:'5%',marginLeft:'15%',marginTop:'6%',marginBottom:'16%'}}>
      {/* <div className="container text-center" id='one'> */}
        <div className="row">
          <div className="col">
          <Intro />
          
          </div>
          <div>
          <a href="https://www.linkedin.com/in/chiragbanka1/" target="_blank">
                <button type="button1" className="btn btn-outline-success" style={{color:'#64ffda',marginRight:'86%',marginTop:'3%'}} >Get in Touch</button>
          </a>
          </div>
        </div>
      </div>





      <div id='about' className="container text-center" style={{padding:'3%',marginBottom:'16%',marginLeft:'8%'}}>
        <div className="row">
          <div className="col" style={{marginLeft:'10%'}}>
            <AboutMe />
          </div>
          <div className="col" style={{marginTop:'6%',float:'left',marginRight:'3%'}}>
           <img src="yesme.jpg" width={300} height={400} alt="gyg" style={{float:'right'}} />
          </div>
        </div>
      </div>



      <div id='expi' className='container' style={{marginLeft:'5%'}}>
              <Experience/>
              <br /><br />
      </div>
      


      <div id='project' className='container' >
          <Built/>
          <ProjectCard />
          <ProjectCard2 />
      </div>


      <br /><br /><br />
      <br /><br /><br />



      <div id='contac' className="container text-center" style={{padding:'0%',marginLeft:'12%',marginTop:'8%',marginBottom:'0%'}}>
        <div className="row">
          <div className="col">
            <KnowMore/>
          
          </div>
          <div>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chiragbanka1@gmail.com&authuser=0"  aria-label="Email chiragbanka1@gmail.com" target="_blank">
                <button type="button1" className="btn btn-outline-success " style={{color:'#64ffda',marginTop:'3%',width:'10%',height:'70%'}} >Say Hello!</button>
          </a>
          </div>
        </div>
      </div>




      <br /><br /><br />
      <br /><br /><br />





      <div className='container' style={{color:'#a8b2d1',textAlign:'center', fontFamily:'SF Mono',marginLeft:'13%'}}>
          Built by Chirag Kumar Banka
          <br /><br />
      </div>



      
      <SocialButtons/>


    </div>
  );
};

export default App;
