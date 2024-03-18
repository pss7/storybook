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
* label에 들어갈 내부 텍스트를 적용합니다.
*/
    label?: string;

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

}

function Select({ disabled, className, value, id, name, label }: SelectProps) {

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
                    className="blind">
                    {label}
                </label>
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
    padding: 4px 20px 4px 10px;
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    cursor: pointer;
}

`;
export default Select