import React from 'react'
import styled from 'styled-components' 
import Colors from '../Colors'
import FaHeart from 'react-icons/lib/fa/heart'

const FooterDiv = styled.div`
        background: ${Colors.avocado}; 
        bottom: 0;
        color: ${Colors.creamCan}; 
        left: 0; 
        overflow: hidden;  
        position: fixed;
        padding: 1em 0;
        right: 0; 
        height: 60px;
`;

const Footer = () => (
    <FooterDiv>
        <p className="text-center">Made with <FaHeart size={25} color="salmon" /> by Andrew Salcedo</p>
    </FooterDiv>
)

export default Footer; 