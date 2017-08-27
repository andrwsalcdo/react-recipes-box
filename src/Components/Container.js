import styled from 'styled-components'; 
import { css } from 'styled-components'
import Colors from '../Colors'; 


const Container = styled.div`
    background: ${Colors.lavenderBlush};
    border: 15px solid ${Colors.arepa};
    border-radius: 10px;
    display: inline-block;
    width: 85%;

    ${props => props.big_box && css`
        background: ${Colors.avocado};
        border: none; 
        border-radius: 15px;
        margin: 3em 8%; 
        padding: 15px;
        text-align: center;
        width: 80vw;
    `}

    ${props => props.newRecipe && css`
        border: none; 
    `}

 
`; 

export default Container; 