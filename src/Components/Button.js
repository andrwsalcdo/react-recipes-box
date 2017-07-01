import styled from 'styled-components'; 
import { css } from 'styled-components'

const Button = styled.button`
    border: none;
    border-radius: 6px;
    box-shadow: 0px 2px 4px #000;
    font-size: 1em;
    margin: 0; 
    outline: none;
    padding: 6px;

    ${props => props.add_btn && css`
    background: #F39C12;
    color: white;
    `}
    
    ${props => props.recipe_btn && css`
    background: #03C9A9;
    color: white;
    `}
    
    ${props => props.edit_btn && css`
    background: #F5D76E;
    color: white;
    `}

    ${props => props.delete_btn && css`
    background: salmon; 
    color: white;
    `}

`;

export default Button; 

