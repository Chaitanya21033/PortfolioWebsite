import React, { useState, useEffect } from 'react';
import './scrollspy.css';

const ScrollSpy = () => {
    
  return (
    <>
    <br /><br /><br /><br /><br />
      <div style={{color:'#ccd6f6' ,textAlign:'left'}}>
      <h3 style={{color:'#8892b0',marginLeft:'15%'}}>Let's Talk more about me</h3>
      <hr
        style={{
        marginLeft:'15%',
        background: '#64ffda',
        height: "2px",
        // border: "none",
        width: '60%'
        }}
/>
      </div>
    <div className="d-flex align-items-start">
  <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="button " id='myButton' data-bs-toggle="pill" data-bs-target="#v-pills-home">Achievements</button>
    <button className="button"  data-bs-toggle="pill" data-bs-target="#v-pills-profile" >Skills</button>
    <button className="button" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" >Offices</button>
    <button className="button" data-bs-toggle="pill" data-bs-target="#v-pills-messages" >Education</button>
    <button className="button"  data-bs-toggle="pill" data-bs-target="#v-pills-settings"  >Extra Curricular</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent" style={{marginLeft:'12%',color:'#8892b0'}}>
    <div className="tab-pane fade show active" style={{marginLeft:'5%'}} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
        <br />
        <span> </span>
    <span style={{color:'#ccd6f6',marginBottom:'6%',marginLeft:'10%'}}>.Achievements(<span style={{color:'#64ffda'}}> </span>)</span>
    <br />
    <br />
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Fast Retailing </span>Global leader program recipient</p>
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Pupil </span>on Codeforces.</p>
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>State 2nd Rank </span> in Junior college Exam (I.C.S.E.)</p>
    </div>
    <div className="tab-pane fade" style={{marginLeft:'3%'}} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
        <span> </span>
        <br />

    <span style={{color:'#ccd6f6',marginLeft:'6%'}}>. Skills(<span style={{color:'#64ffda'}}> </span>)</span>
    <br />
    <br />
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>C++ | C | Java | Python</span> </p>
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong> <span style={{color:'#64ffda'}}>Front End development | </span>HTML | CSS | JavaScript | Canvas | Bootstrap | jQuery | Node.js | React JS</p>
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Management Roles | </span> Curator-TEDx Vikramshilla , Head Boy in Junior College </p>
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Languages | </span>English |Hindi | French(Elementry proficiency) </p>
    </div>
    <div className="tab-pane fade" style={{marginLeft:'6%'}} id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">

        <br />
    <span style={{color:'#ccd6f6',marginLeft:'6%'}}>.Offices(<span style={{color:'#64ffda'}}> </span>)</span>
    <br />
    <br />
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}> Curator | </span>TEDX vikramshilla</p>
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Coordinator | </span>The 65th Square </p>
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Head Boy | </span>Junior College , St. Joseph's &nbsp;&nbsp; School</p>
        <span></span>
    </div>
    <div className="tab-pane fade" style={{marginLeft:'4%'}}  id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
    <span> </span><br />
    <span style={{color:'#ccd6f6',marginLeft:'6%'}}>. Education(<span style={{color:'#64ffda'}}> </span>)</span>
    <br /><br />
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong> <span style={{color:'#64ffda'}}>Primary & Secondary  Education | </span> St. Joseph's School</p>
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Junior College | </span> St. Joseph's School </p>
    <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Bachelor's Degree | </span> IIIT Delhi </p>
    </div>
    <div className="tab-pane fade" style={{marginLeft:'4%'}} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
    <span> </span><br />
    <span style={{color:'#ccd6f6',marginLeft:'6%'}}>. Extra_Curricular(<span style={{color:'#64ffda'}}> </span>)</span>
    <br /><br />
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong> <span style={{color:'#64ffda'}}>Chess | </span>Have conducted a course for 2 credit on chess in my Institute</p>
        <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}>Swimming | </span> Casuall interest </p>
        {/* <p><strong style={{color:'#64ffda'}}>Δ &nbsp;&nbsp;</strong><span style={{color:'#64ffda'}}></span> IIIT Delhi </p> */}
    </div>
  </div>
</div>
,/.</>
  );
};

export default ScrollSpy;
