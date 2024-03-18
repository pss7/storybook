import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';
import CommonButton from "./Button";

import SearchIcon from '@mui/icons-material/Search';

export interface InputProps {

    /**
* 아이디명을 적용합니다.
*/
    id?: string;

    /**
* 클래스명을 적용합니다.
*/
    className?: string;

    /**
 * label에 들어갈 내부 텍스트를 적용합니다.
 */
    label?: string;

    /**
* input type 적용합니다.
*/
    type: React.HTMLInputTypeAttribute;

    /**
* 안내텍스트를 적용합니다.
*/
    placeholder?: string;

    /**
* name을 적용합니다.
*/
    name?: string;

    /**
* 값을 적용합니다.
*/
    value?: string;

}

function Input({ id, label, name, type, placeholder, className, value }: InputProps) {

    return (
        <>
            <GlobalStyle />
            <InputBox className="inputBox">
                <label htmlFor={id} className="blind">{label}</label>
                <input
                    className={className}
                    name={name}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
                <SearchButton type="submit">
                    <SearchIcon style={{ fill: '#8c8c8c' }}/>
                </SearchButton>
            </InputBox>
        </>
    )

}

const InputBox = styled.div`

position: relative;

input{
    padding: 7px 20px 7px 40px;
    border-radius: 50px;
    border: 1px solid #c5c5c5;
    font-size: 14px;
}

`;

const SearchButton = styled(CommonButton)`

position: absolute;
top: 50%;
left:9px;
transform: translateY(-50%);
height: 90%;
box-shadow: none;
padding:0;
font-size: 0;
curser:pointer;
&:hover{
    background: none;
    color: #000;
}
`;



export default Input