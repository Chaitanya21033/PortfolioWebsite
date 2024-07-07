import React from 'react';
import { useState } from 'react';
import './Projects.css';

const ProjectCard = () => {
    const [hover, setHover] = useState(false);
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div id="container">	
	
	<div className="product-details">
		<p style={{color:'#64ffda',fontWeight:'bold'}}>My Web Portfolio </p>
	{/* <h3>My Web Portfolio</h3> */}
		
	<p className="information">I made this Web Porfolio for my self to showcase my Skills. Credits to Brittany Chiang for color theme which made this website look so good.</p>

        <a href="https://github.com/CKBanka" target="_blank"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            className={hover ? 'hover' :''}>
          <i className=" fa fa-github fa-2x" style={{color: `${hover ? '#64ffda' : '#ccd6f6dc'}`,marginLeft:'100%'}} ></i>
      </a>
		<br />
        <p style={{color:'#64ffda'}}>React JS | HTML | CSS | Bootstrap</p>

        
</div>

<div className="product-image">
	
	<img src="myport.png" alt=""/>
	
</div>

</div>



    </>
  );
}

export default ProjectCard;
