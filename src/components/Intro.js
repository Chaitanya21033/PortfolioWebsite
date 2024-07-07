import React from 'react'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring/web.cjs';

function intro() {
  const H1 = styled.h1`
  font-size: 400%;
`;
  return (
    <animated.div style={{margin:''}}>
      <div style={{color:'#ccd6f6' ,textAlign:'left',width:''}}>
        <h5 style={{color:'#64ffda'}}>Hey, My name is</h5>
      <H1 >Chirag Kumar Banka.</H1>
      <H1 style={{color:'#8892b0'}}>I'm a second year UG student.</H1>
      <hr
        style={{
        // marginLeft:'370px',
        background: '#64ffda',
        height: "2px",
        border: "none",
        width: '80%'
        }}
/>
      {/* <p style={{color:'#8892b0'}}>I'm a second year Engineering Undergraduate at IIIT Delhi who specializes in Web Development and Data Structures & Algorithms. I actively participates in coding contests related to Competitive programming. I like to play chess and watch anime in my free time.</p> */}
      <p style={{color:'#8892b0', marginRight:'15%'}}>I'm a second year Engineering Undergraduate at IIIT Delhi who specializes in Web Development and Data Structures & Algorithms. I actively participates in coding contests related to Competitive programming. I like to play chess and watch anime in my free time.</p>
      {/* <p style={{color:'#8892b0'}}>I have extensive experience in integrating animations and other creative elements into my projects, which helps to bring them to life and engage users in new and exciting ways.</p> */}
      {/* <p style={{color:'#8892b0'}}>Whether you're looking to build a new website or revamp an existing one, I have the skills and expertise to help you achieve your goals.</p> */}
      </div>
      
    </animated.div>
  )
}

export default intro

