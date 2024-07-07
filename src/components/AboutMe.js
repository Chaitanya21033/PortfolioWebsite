import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring/web.cjs';

const AboutMe = () => {
  const H1 = styled.h1`
  font-size: 500%;
`;
  const [hover, setHover] = React.useState(false);
  const animationProps = useSpring({
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    borderColor: hover ? 'green' : 'white',
    config: { duration: 200 }
  });

  return (
    <animated.div
      style={animationProps}
    >
      <div style={{color:'#ccd6f6' ,textAlign:'left'}}>
      <H1 style={{color:'#8892b0'}}>About Me</H1>
      <hr
        style={{
        // marginLeft:'370px',
        background: '#64ffda',
        height: "4px",
        border: "none",
        width: '90%'
        }}
/>
      <p style={{color:'#8892b0', marginRight:'20%'}}>I am an experienced developer with a passion for creating visually stunning and interactive user experiences. I specialize in using React JS to build dynamic and responsive web applications that are both efficient and easy to use.</p>
      <p style={{color:'#8892b0', marginRight:'20%'}}>As of now, I am doing my B.Tech. from IIIT Delhi and I like to do  compeitive coding in my free time. Right now I am exploring API developmetn domain. </p>
      <p style={{color:'#8892b0', marginRight:'20%'}}>Whether you're looking to build a new website or revamp an existing one, I have the skills and expertise to help you achieve your goals.</p>
      </div>
    
    </animated.div>
  );
};

export default AboutMe;

