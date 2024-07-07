import React from 'react';
import { useState } from 'react';

import './Projects.css';
const ProjectCard2 = () => {
    const [hover, setHover] = useState(false);
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div id="container">	
	
	<div className="product-details">
		<p style={{color:'#64ffda',fontWeight:'bold'}}>Tank Stars </p>
	{/* <h3>My Web Portfolio</h3> */}
		
	<p className="information">I made this replica of a game named Tank Star which allows player to choose their tank use angle, power and tank movement to favor them.It also supports saving and loading game.</p>
    <a href="https://github.com/CKBanka/Tank-Stars" target="_blank"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            className={hover ? 'hover' :''}>
          <i className=" fa fa-github fa-2x" style={{color: `${hover ? '#64ffda' : '#ccd6f6dc'}`,marginLeft:'100%'}} ></i>
      </a>
		<br />
        <p style={{color:'#64ffda'}}>LibGdx | Java</p>

			
</div>
	
<div className="product-image">
	
	<img src="myGame.png" alt=""/>
	
</div>

</div>



    </>
  );
}

export default ProjectCard2;
