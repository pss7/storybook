import { ReactNode } from 'react';

export interface TitleProps {

    /**
* 자식 요소가 있을 때 자식요소가 들어갈 수 있게 적용합니다.
*/
    children?: ReactNode;
    /**
 * h1 ~ h6 적용합니다.
 */
    level: number;

    /**
 * 입력 text를 적용합니다.
 */
    text?: string;

    /**
* 클래스명을 적용합니다.
*/
    className?: string;

}

function Title({ level, text, className, children }: TitleProps) {

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag className={className}>{children}{text}</Tag>;

}

export default Title