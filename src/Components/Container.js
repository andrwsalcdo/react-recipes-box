import styled from 'styled-components'; 
import { css } from 'styled-components'
import Colors from '../Colors'; 


const Container = styled.div`
    background: ${Colors.lavenderBlush};
    border: 15px solid ${Colors.arepa};
    border-radius: 10px;
    display: inline-block;
    margin: 10px;
    padding-bottom: 15px;
    padding-top: 1px;
    width: 95%;

    ${props => props.big_box && css`
        background: ${Colors.avocado};
        border: none; 
        border-radius: 15px;
        margin-left: 10%; 
        margin-top: 8%;
        padding: 15px;
        text-align: center;
        width: 80vw;
    `}

    ${props => props.normal && css`
        background: ${Colors.lavenderBlush}; 
        border: none; 
    `}

 
`; 

export default Container; 