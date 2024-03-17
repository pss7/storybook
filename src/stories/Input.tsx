import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';

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
* 웹 접근성을 위한 텍스트 숨김처리를 적용합니다.
*/
    blind?: string;

    /**
* 값을 적용합니다.
*/
    value?: string;

}

function Input({ id, label, name, type, placeholder, className, blind, value }: InputProps) {

    return (
        <>
            <GlobalStyle />
            <InputBox className="inputBox">
                <label htmlFor={id} className={blind}>{label}</label>
                <input
                    className={className}
                    name={name}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
            </InputBox>
        </>
    )

}

const InputBox = styled.div`

input{
    padding: 5px 20px;
    border-radius: 10px;
    border: 1px solid #c5c5c5;
}

`;


export default Input