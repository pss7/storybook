
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {

    /**
* 아이디명을 적용합니다.
*/
    id?: string;

    /**
    * 클래스명을 적용합니다.
    */
    className?: string;

    /**
* 활성화 / 비활성화를 적용합니다.
*/
    disabled?: boolean;

    /**
* 내부 텍스트를 적용합니다.
*/
    label?: string;

    /**
* button type 적용합니다.
*/
    type?: "submit" | "reset" | "button" | undefined;

    /**
* 타이틀을 적용합니다.
*/
    title?: string;

    /**
* 자식 요소가 있을 때 자식요소가 들어갈 수 있게 적용합니다.
*/
    children?: ReactNode;

    /**
* onClick 이벤트를 적용합니다.
*/
    onClick?: () => void;
}

function Button({ children, id, className, title, type, onClick, disabled, label }: ButtonProps) {

    return (
        <>
            <CommonButton
                id={id}
                title={title}
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
                {label}
            </CommonButton>
        </>
    )

}

const CommonButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius:5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 2px 2px 7px rgba(0,0,0,.2);
  &:hover {
    background-color: #007bff;
    color: #fff;
    transition: all 0.3s;
  }
`;

export default Button