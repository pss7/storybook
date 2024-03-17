import React from 'react';

export interface CardProps {

    /**
* 아이디명을 적용합니다.
*/
    id?: number;

    /**
* 클래스명을 적용합니다.
*/
    className?: string;

    /**
* 제목을 적용합니다.
*/
    title?: string;

    /**
* 내용을 적용합니다.
*/
    description?: string;

    /**
* 이미지 경로를 적용합니다.
*/
    imageSrc?: string;

    /**
* 이미지 대체텍스트를 적용합니다.
*/
    imageAlt?: string;

}

function Card({ id, className, title, description, imageAlt, imageSrc }: CardProps) {

    return (
        <div className="cardItem">
            <div className="imgBox">
                <img alt={imageAlt} src={imageSrc} />
            </div>
            <div className="textBox">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default Card