import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';

function Tab() {

    const data = [
        {
            id: 0,
            name: 'tab1',
            content: 'content1'
        },
        {
            id: 1,
            name: 'tab2',
            content: 'content2'
        },
        {
            id: 2,
            name: 'tab3',
            content: 'content3'
        },
    ]

    const [tabMenu, setTab] = useState(0);
    const tabClick = (index: number) => {
        setTab(index);
    }

    return (
        <>
            <GlobalStyle />
            <TabWrap className="tabWrap">

                <TabListWrap className="tabListWrap">
                    {
                        data.map((data, index) => (

                            <li key={index}>
                                <BrowserRouter>
                                    <Link to="#" className={tabMenu === index ? "active" : ""} onClick={() => tabClick(index)}>
                                        {data.name}
                                    </Link>
                                </BrowserRouter>
                            </li>

                        ))
                    }
                </TabListWrap>

                <TabContentWrap className="tabContentWrap">
                    {data[tabMenu].content}
                </TabContentWrap>
            </TabWrap>
        </>
    )

}

const TabWrap = styled.div`
width: 1400px;
margin: 20px  auto;
.tabListWrap{
   display: flex;
   gap: 0 3px;
   a{
    display: block;
    font-size: 13px;
    background-color: #ebebeb;
    text-align: center;
    padding: 8px 10px 5px;
    border-radius: 10px 10px 0 0;
    font-weight: 500;
    line-height: 1;
    &:hover{
        color: #fff;
        background-color: #5b5959;
        transition: all .3s;
    }
    &.active{
        color: #fff;
        background-color: #5b5959;
    }
   }
}
`;

const TabListWrap = styled.div`
display: flex;
gap: 0 3px;
a{
    display: block;
    font-size: 13px;
    background-color: #ebebeb;
    text-align: center;
    padding: 8px 10px 5px;
    border-radius: 10px 10px 0 0;
    font-weight: 500;
    line-height: 1;
    $:hover{
        color: #fff;
        background-color: #5b5959;
        transition: all .3s;
    }
    .active{
        color: #fff;
        background-color: #5b5959;
    }
}
`;

const TabContentWrap = styled.div`
position: relative;
padding: 50px 20px;
border: 1px solid #bfbfbf;
.tabContent{
    font-weight: 500;
    font-size: 18px;  
}
`;

export default Tab