import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';

export interface SelectProps {

    /**
* 아이디명을 적용합니다.
*/
    id?: string;

    /**
    * 클래스명을 적용합니다.
    */
    className?: string;

    /**
* name을 적용합니다.
*/
    name?: string;

    /**
* select option 데이터를 적용합니다.
*/
    data?: Array<any>;

    /**
* 값을 적용합니다.
*/
    value?: string;

    /**
* 활성화 / 비활성화를 적용합니다.
*/
    disabled?: boolean;

    /**
* 웹 접근성을 위한 텍스트 숨김처리를 적용합니다.
*/
    blind?: string;

}

function Select({ disabled, className, value, id, name, blind }: SelectProps) {

    const [select, setSelect] = useState('');

    const handleChange = (e: any) => {
        setSelect(e.target.value)
        console.log(e.target.value)
    }

    const data = [
        {
            label: 'label1',
            value: 'option1'
        },
        {
            label: 'label2',
            value: 'option2'
        },
        {
            label: 'label3',
            value: 'option3'
        },
        {
            label: 'label4',
            value: 'option4'
        }
    ]

    return (
        <>
            <GlobalStyle />
            <SelectBox>
                <label
                    htmlFor={id}
                    className={blind}></label>
                <select
                    className={className}
                    name={name}
                    id={id}
                    onChange={handleChange}
                >
                    {
                        data.map((data, key) => (
                            <option
                                key={key}
                                value={data.value}
                            >
                                {data.label}
                            </option>
                        ))
                    }
                </select>
            </SelectBox>
        </>
    )

}

const SelectBox = styled.div`

select{
    padding: 5px 20px 5px 10px;
    border-radius: 10px;
    border: 1px solid #c5c5c5;
    cursor: pointer;
}

`;
export default Select