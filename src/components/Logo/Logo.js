import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={250}
            glareEnable={false}
            glareMaxOpacity={0.45}
            scale={1.02}
        >
            <div className="inner-element"><img alt='logo' src={brain}></img>
            </div>
        </Tilt>
    );
}

export default Logo;