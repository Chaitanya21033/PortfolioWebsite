import React from 'react';
import { useState } from 'react';
function SocialButtons() {
  const [hover, setHover] = useState(false)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  return (
    <>
    {/* <hr style={{position: 'fixed', left: '5%',bottom:'5%' ,transform: 'rotate(90deg)', border: '2% solid white', height: '25%'}} />
    <hr style={{position: 'fixed', left: '2.5%',top:'33%' ,transform: 'rotate(0deg)', border: '1% solid white', height: '15%'}} /> */}
    <div  style={{
        position: 'fixed',
        bottom: '20%',
        left: '1%',
        display: 'flex',
        flexDirection: 'column'
      }}>

      

        
      <a href="https://github.com/CKBanka" target="_blank"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            className={hover ? 'hover' :''}>
          <i className=" fa fa-github fa-2x" style={{color: `${hover ? '#64ffda' : '#ccd6f6dc'}`, margin: '60%' }} ></i>
      </a>
      <a href="https://www.instagram.com/chiragbanka1/" target="_blank" onMouseEnter={()=> setHover1(true)}
            onMouseLeave={()=> setHover1(false)}
            className={hover1 ? 'hover' :''}>
          <i className=" fa fa-instagram fa-2x" style={{color: `${hover1 ? '#64ffda' : '#ccd6f6dc'}`,  margin: '60%' }}></i>
      </a>
      <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=chiragbanka1@gmail.com&authuser=0"  aria-label="Email chiragbanka1@gmail.com" target="_blank"onMouseEnter={()=> setHover2(true)}
            onMouseLeave={()=> setHover2(false)}
            className={hover2 ? 'hover' :''}>
          <i className=" fa fa-send fa-2x" style={{color: `${hover2 ? '#64ffda' : '#ccd6f6dc'}`, margin: '60%' }}></i>
      </a>
      <a href="https://www.linkedin.com/in/chiragbanka1/" target="_blank"onMouseEnter={()=> setHover3(true)}
            onMouseLeave={()=> setHover3(false)}
            className={hover3 ? 'hover' :''}>
          <i className=" fa fa-linkedin fa-2x" style={{color: `${hover3 ? '#64ffda' : '#ccd6f6dc'}`, margin: '60%' }}></i>
      </a>
    </div>
    </>
  )
}

export default SocialButtons;
