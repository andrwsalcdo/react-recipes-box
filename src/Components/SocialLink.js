import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const SocialLink = ({ className, link, icon }) => (
    <a className={className} href={link} 
        rel="noopener noreferrer" target="_blank">
    { icon }
    </a>
)

// styled-components: styling any comps. as long as accepting
// the className prop. ~notice className above in SocialLink. 
const StyledLink = styled(SocialLink)`
    text-decoration: none; 
    background-color: transparent; 

    ${props => props.pull_to_right && css`
        float: right !important; 
    `}
`;

export default StyledLink; 