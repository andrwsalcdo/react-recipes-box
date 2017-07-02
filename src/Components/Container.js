import styled from 'styled-components'; 
import { css } from 'styled-components'
 
const avocado = '#50c473';
const arepa = '#E7CD84';  
const lavenderBlush = '#FEF1F3'; 

const Container = styled.div`
    background: #FEF1F3;
    border: 15px solid ${arepa};
    border-radius: 10px;
    display: inline-block;
    margin: 10px;
    padding-bottom: 15px;
    padding-top: 1px;
    width: 95%;

    ${props => props.big_box && css`
        background: ${avocado};
        border: none; 
        border-radius: 15px;
        margin-left: 10%; 
        margin-top: 8%;
        padding: 15px;
        text-align: center;
        width: 80vw;
    `}

    ${props => props.normal && css`
        background: ${lavenderBlush}; 
        border: none; 
    `}

 
`; 

export default Container; 