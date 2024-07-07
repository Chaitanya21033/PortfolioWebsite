import React from 'react'
import styled from 'styled-components';

function knowMore() {
  const H1 = styled.h1`
  font-size: 400%;
`;
  return (
    <div
    >
      <div style={{color:'#ccd6f6' ,textAlign:'center'}}>
        <h5 style={{color:'#64ffda'}}>Want to know more about me?</h5>
      <H1 >Get In Touch</H1>
      <div style={{color:'#8892b0',textAlign:'center'}}>Whether you want to discuss  </div>
      <div style={{color:'#8892b0',textAlign:'center'}}>work or just want to say hi, </div>
      <div style={{color:'#8892b0',textAlign:'center'}}>I'll try my best to get back to you!</div>
      </div>
      
    </div>
  )
}

export default knowMore

