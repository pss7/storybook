import { ReactNode, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';

import CommonButton from './Button';
import CloseIcon from '@mui/icons-material/Close';
import WidgetsIcon from '@mui/icons-material/Widgets';

export interface DrawerProps {

    children?: ReactNode;
}

function Drawer({ children }: DrawerProps) {

    const [drawerToggle, setDrawerToggle] = useState(false);

    const drawerOpen = () => {
        setDrawerToggle(!drawerToggle);
    }

    const drawerClose = () => {
        setDrawerToggle(false);
    }

    const data = [
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
        {
            href: '/',
            link: 'MenuMenuMenu'
        },
    ]

    return (
        <>
            <GlobalStyle />

            <OpenButton onClick={drawerOpen}>
                <WidgetsIcon />
            </OpenButton>

            <MenuWrap className={`menuWrap ${drawerToggle === false ? "" : "active"} `}>

                <div className="menuBox">
                    {children}

                    <ListWrap className="listWrap">

                        {
                            data.map((data, key) => (
                                <li key={key}>
                                    <BrowserRouter>
                                        <Link to={data.href} className="textHover">
                                            {data.link}
                                        </Link>
                                    </BrowserRouter>
                                </li>
                            ))
                        }

                    </ListWrap>
                </div>

                <CloseButton onClick={drawerClose}>
                    <CloseIcon />
                </ CloseButton>

            </MenuWrap>
        </>
    )

}

const MenuWrap = styled.div`
padding: 20px 45px 20px 20px;
position: fixed;
top: 0;
left: -300px;
height: 100%;
background-color: #fff;
box-shadow: 3px 3px 13px rgba(0, 0, 0, .1);
transition: all .3s;
z-index: 999;
&.active{
    left: 0;
}
`;

const ListWrap = styled.ul`
margin-top: 25px;
a{
    margin-bottom: -1px;
    padding: 12px 0 12px 12px;
    display: block;
    text-align: left;
    border: 1px solid #ececec;
    border-width: 0 0 1px;
    font-weight: 500;
}
`;

const CloseButton = styled(CommonButton)`
position: absolute;
top: 10px;
right: 0;
box-shadow: none;
padding:0;
&:hover{
    background: none;
    color: #000;
}
`;

const OpenButton = styled(CommonButton)`
box-shadow: none;
padding:0;
&:hover{
    background: none;
    color: #000;
}
`;



export default Drawer