import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ContainerProps {

    /**
* 자식 요소가 있을 때 자식요소가 들어갈 수 있게 적용합니다.
*/
    children?: ReactNode;

}

function Container({ children }: ContainerProps) {

    return (
        <CommonContainer>
            {children}
        </CommonContainer>
    )

}

const CommonContainer = styled.div`

padding: 0 20px;

`;



export default Container