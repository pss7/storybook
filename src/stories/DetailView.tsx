
import { ReactNode } from 'react';
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';
import Card from './Card';
import Slide from './Slide';
import Title from './Title';
import { BrowserRouter, Link } from 'react-router-dom';

function DetailView() {

    return (
        <>
            <GlobalStyle />

            <DetailTop>
                <span>관광정보</span>
                <Title level={3} text="광화문 광장" />
                <BrowserRouter>
                    <Link to="#">
                        한국관광공사가 다른 콘텐츠 보기
                    </Link>
                </BrowserRouter>
            </DetailTop>

            <Slide />

            <DbDescContentWrap>
                <DbContentLeft>
                    <BreadcrumbWrap>
                        <span>
                            분류 :
                        </span>
                        <Breadcrumb>
                            <BreadcrumbItem>역사관광</BreadcrumbItem>
                            <BreadcrumbItem>역사유적지</BreadcrumbItem>
                            <BreadcrumbItem>문</BreadcrumbItem>
                        </Breadcrumb>
                    </BreadcrumbWrap>

                    <p className='desc'>
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                        설명설명설명설명설명설명설명설명설명
                    </p>

                    <Map>
                        <Title level={2} text="지도 영역" />
                    </Map>

                </DbContentLeft>
                <DbContentRight>
                    <ContentInfo>
                        <dt>정보등록 :</dt>
                        <dd>
                            <ul>
                                <li>
                                    한국관광공사
                                </li>
                                <li>
                                    국내디지털마케팅팀
                                </li>
                            </ul>
                        </dd>
                    </ContentInfo>

                    <ContentInfo>
                        <dt>전화번호 :</dt>
                        <dd>
                            00-0000-0000
                        </dd>
                    </ContentInfo>

                    <ContentInfo>
                        <dt>휴무일 :</dt>
                        <dd>
                            매주 화요일
                        </dd>
                    </ContentInfo>

                    <ContentInfo>
                        <dt>등록정보 :</dt>
                        <dd>
                            <ul>
                                <li>2020.01.01 등록</li>
                            </ul>
                        </dd>
                    </ContentInfo>
                </DbContentRight>
            </DbDescContentWrap>

            <Title level={4}>
                <BrowserRouter>
                    <Link to="#">
                        한국관광공사가 다른 콘텐츠 보기
                    </Link>
                </BrowserRouter>
            </Title>

            <CardWrap>
                <Card imageSrc="/img1.jpg" title="제목" description='설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명' />
                <Card imageSrc="/img1.jpg" title="제목" description='설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명' />
                <Card imageSrc="/img1.jpg" title="제목" description='설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명' />
                <Card imageSrc="/img1.jpg" title="제목" description='설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명' />
            </CardWrap>
        </>
    )

}

const DetailTop = styled.div`
position: relative;
margin: 20px 0 15px;
display: flex;
gap: 0 10px;
align-items: center;
span{
    display: block;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #86bfff;
    color: #fff;
    border-radius: 3px;
}
a{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right:0;
    display: block;
    font-size: 14px;
    font-weight: 500;
}
`;

const DbDescContentWrap = styled.div`
margin:20px 0 40px;
padding: 20px 20px 50px;
display: flex;
gap:0 35px;
border: 1px solid #ddd;
`;

const DbContentLeft = styled.div`
width: 50%;
`;

const BreadcrumbWrap = styled.div`
margin-bottom: 20px;
border: 1px solid #ddd;
padding: 10px;
display: flex;
gap: 0 5px;
align-items: center;
`;

const Breadcrumb = styled.ul`
display: flex;
gap: 0 22px;
align-items: center;
`;

const BreadcrumbItem = styled.div`
position: relative;
&:first-child:before{
    display: none;
}
&:first-child:after{
    display: none;
}
&::before{
    content:'';
    position: absolute;
    top:9px;
    left: -15px;
    width: 9px;
    height: 2px;
    background-color: #000;
    transform: rotate(35deg);
}
&::after{
    content:'';
    position: absolute;
    top:14px;
    left: -15px;
    width: 9px;
    height: 2px;
    background-color: #000;
    transform: rotate(-35deg);
}
`;

const DbContentRight = styled.div`
padding-top: 46px;
width: 50%;

`;

const ContentInfo = styled.dl`
margin: 20px 0;
display: flex;
gap: 0 5px;
dt{
    font-weight: 500;
}
dd{
    font-weight: 300;
}
`;

const CardWrap = styled.div`
margin-top: 20px; 0 10px;
display: flex;
gap: 0 10px;
`;

const Map = styled.div`
margin: 35px 0 15px; 
height: 450px;
border: 1px solid #ddd;
display: flex;
align-items: center;
justify-content: center;
`;

export default DetailView