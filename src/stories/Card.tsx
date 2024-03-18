import React from 'react';
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';

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
        <>
            <GlobalStyle />
            <CardItem>
                <BrowserRouter>
                    <Link to="">
                        <div className="imgBox">
                            <img alt={imageAlt} src={imageSrc} />
                        </div>
                        <div className="textBox">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </Link >
                </BrowserRouter>
            </CardItem>
        </>
    )

}

const CardItem = styled.div`
flex: 1;
padding: 10px 10px 30px 10px;
overflow: hidden;
box-shadow: 3px 3px 8px rgba(0,0,0,.1);
border-radius: 10px;
background-color: ##fcfcfc;
.imgBox{
    position: relative;
    padding-top: 60%;
    margin: 0 auto 20px;
    height: 0;
    border-radius: 3px;
    overflow: hidden;
    img{
        position: absolute;
        top:0; 
        left:0;
        right:0;
        bottom:0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
}
.textBox{
    h3{
        margin-bottom: 20px;
        text-align:center;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
    }
    p{
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical;
    }

}

`;



export default Card