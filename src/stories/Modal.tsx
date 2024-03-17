

import { ReactNode, useState } from 'react';
import GlobalStyle from "../GlobalStyle";

import styled from 'styled-components';
import CommonButton from './Button';

import Title from './Title';
import Button from './Button';

import CloseIcon from '@mui/icons-material/Close';

export interface ModalProps {

    children?: ReactNode;

}

const Modal = ({ children }: ModalProps) => {

    const [modalToggle, setmodalToogle] = useState(false);

    const modalOpen = () => {
        setmodalToogle(!modalToggle);
    }

    const modalClose = () => {
        setmodalToogle(false);
    }

    return (
        <>
            <GlobalStyle />

            <Button label="modalopen" onClick={modalOpen} />

            <ModalWrap className={`modalWrap ${modalToggle === false ? "" : "active"} `}>
                <Title level={3} text="Modal" />
                {children}

                <CloseButton onClick={modalClose}>
                    <CloseIcon />
                </ CloseButton>

            </ModalWrap>
        </>
    );
};

const CloseButton = styled(CommonButton)`
position: absolute;
top: 10px;
right: 0;
box-shadow: none;
padding:0;
&:hover{
    background: none;
    color: #000;
}
`;

const ModalWrap = styled.div`
opacity: 0;
width: 500px;
height: 500px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
box-shadow: 3px 3px 15px rgba(0, 0, 0, .1);
border-radius: 10px;
background-color: #fff;
transition: all .5s;
&.active{
    opacity: 1;
}
h3{
margin: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 30px;
}
`;

export default Modal;