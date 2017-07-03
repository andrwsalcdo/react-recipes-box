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
    width: 25%; 
 
    :active {
        transform: translateY(5px); 
    }

    @media only screen and (max-width: 655px) {
        width: 80%
    }

    ${props => props.add_btn && css`
        background: #F39C12;
        color: white;
        
        @media only screen and (max-width: 655px) {
            margin-right: 1em; 
        }
    `}
    
    ${props => props.recipe_btn && css`
        background: #03C9A9;
        color: white;
    `}
    
    ${props => props.edit_btn && css`
        background: #F5D76E;
        color: white;
        margin-right: 5%; 
        width: 15%; 
        
        @media only screen and (max-width: 655px) {
            width: 80%; 
            margin: 0; 
        }
    `}

    ${props => props.delete_btn && css`
        background: salmon; 
        color: white;
        margin-left: 5%; 
        width: 15%; 
        
        @media only screen and (max-width: 655px) {
            width: 80%; 
            margin: 0; 
        }
    `}

`;

export default Button; 

