import React from "react";
import '../Header/header.css';
import logo from '../../../assets/logo.svg';
import Icon from '../Shared/Icon';
import '../Footer/styles/style.css';
// import LangDropDown from './LangDropDown';

export default class Header extends React.Component {
   
    render() {
        return (
            <div>
                <header className="sentinel_header">
                    
                    <div className="container header_inner">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} className="img-responsive sentienl_logo" alt="" title="Sentinel Security Group" />
                            </a>
                        </div>
                        <nav id="nav-menu-container nav_menu_social">
                            <ul className="nav-menu socialicon_list">
                                <li>
                                    <a href="https://medium.com/sentinel" className="" alt="" title="" target="_blank" rel="noopener noreferrer"> <Icon viewClass="medium-m h_social_icons" icon="medium-m" /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/SentinelGroupio" alt="" className="" title="" target="_blank" rel="noopener noreferrer"><Icon viewClass="medium-m h_social_icons" icon="twitter-logo" /></a>
                                </li>
                                <li>
                                    <div  className="dropdown">
                                        <a href="https://t.me/sentinelsecuritygroup" alt="" className="dropbtn" title="" target="_blank" rel="noopener noreferrer"><Icon viewClass="medium-m h_social_icons" icon="telegram-plane" /></a>
                                        {/* <div className="dropdown-content">
                                            <span className="right_arrow"></span>
                                            <a href="#">English</a>
                                            <a href="#">Japanese</a>
                                            <a href="#">Chineese</a>
                                        </div> */}
                                    </div>
                                </li>
                                {/* <li className="line_li"><span className="line_nav"></span></li> */}
                                <li className="flag_li">
                                    {/* <LangDropDown /> */}
                                </li>
                            </ul>
                        </nav >
                    </div >
                </header >
            </div>
        );
    }

}