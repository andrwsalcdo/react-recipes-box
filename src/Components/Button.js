import styled from 'styled-components'; 
import { css } from 'styled-components'
import Colors from '../Colors'; 

const Button = styled.button`
    border: none;
    border-radius: 6px;
    box-shadow: 0px 2px 4px #000;
    font-size: 1em;
    margin: 0; 
    outline: none;
    padding: 6px;
    width: 25%; 
 
    &:active {
        transform: translateY(5px); 
    }


    ${props => props.add_btn && css`
        background: ${Colors.butterCup};
        color: ${Colors.white};
        
        @media only screen and (max-width: 655px) {
            margin-right: 1em; 
            width: 80%; 
        }
    `}
    
    ${props => props.recipe_btn && css`
        background: ${Colors.caribbeanGreen};
        color: ${Colors.white};
        margin: 0.3em; 
        @media only screen and (max-width: 655px) {
            width: 80%; 
        }
    `}
    
    ${props => props.edit_btn && css`
        background: ${Colors.creamCan};
        color: ${Colors.white};
        margin-right: 5%;
        margin-bottom: 0.1%;  
        width: 15%; 
        
        @media only screen and (max-width: 655px) {
            width: 80%; 
            margin: 0; 
        }
    `}

    ${props => props.delete_btn && css`
        background: ${Colors.salmon}; 
        color: ${Colors.white};
        margin-left: 5%; 
        margin-bottom: 0.1%; 
        width: 15%; 
    
        @media only screen and (max-width: 655px) {
            width: 80%; 
            margin: 0.5em 0; 
        }
    `}

    ${props => props.save_btn && css`
        background: ${Colors.emerald};   
        text-align: center; 
        margin: 0 auto; 
    
        @media only screen and (max-width: 655px) {
            width: 25%; 
        }
    `}

    

`;

export default Button; 

