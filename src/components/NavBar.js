import React from 'react'
import { Helmet } from 'react-helmet';
function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${'#0a192f'}`} style={{color:'white',fontSize: '100%',fontWeight: "bold",marginRight:'0%',width:'120%'}}>
        <Helmet>
      <link href='brush_script_mt_kursiv.ttf' rel='stylesheet'/>
    </Helmet>
      <span className="navbar-brand " to="/" style={{fontFamily: 'cursive', fontSize: '120%', fontWeight: 'bold',color:'#64ffda'}}>&nbsp;&nbsp;YoungDragon</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{marginTop:'0.1%',marginLeft:''}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/#about"> <span style={{color:'#64ffda'}}>.</span><span style={{color:'#8892b0'}}>ABOUT</span><span style={{color:'#64ffda'}}>( )</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  aria-current="page" href="/#expi"> <span style={{color:'#64ffda'}}>.</span><span style={{color:'#8892b0'}}>EXPERIENCE</span><span style={{color:'#64ffda'}}>( )</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  aria-current="page" href="/#project"> <span style={{color:'#64ffda'}}>.</span><span style={{color:'#8892b0'}}>PROJECT</span><span style={{color:'#64ffda'}}>( )</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  aria-current="page" href="/#contac"> <span style={{color:'#64ffda'}}>.</span><span style={{color:'#8892b0'}}>REACH_ME</span><span style={{color:'#64ffda'}}>( )&nbsp;&nbsp;</span></a>
          </li>
          <a href="https://drive.google.com/file/d/1LGe-y98ENQzkKQMc1KluWyONAcindoO5/view?usp=sharing" target="_blank">
                      <button type="button" className="btn btn-outline-success">Resume</button>
                      {/* <button class="button button1">Green</button> */}
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
