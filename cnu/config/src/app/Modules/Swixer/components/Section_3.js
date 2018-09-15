import React from 'react';
import { connect } from 'react-redux';
import DropDown from '../../../Shared/DropDown/DropDown';
import './styles/Section_3.css';
import ethLogo from '../../../../assets/ETH_LOGO.svg';
import sentLogo from '../../../../assets/SENT_LOGO.svg';
import pivixLogo from '../../../../assets/PIVX_LOGO.svg';
import bnbLogo from '../../../../assets/BNB_LOGO.svg';
import swixSwap from '../../../../assets/rotate.svg';
import copy from '../../../../assets/copy.svg';
import loader_spin from '../../../../assets/loader_spin.svg';
import axios from 'axios';
import { pivxAddress, TokenSname, URL, nodeAddress, decimals, coinType } from '../constants';
import * as actions from '../actions';
import copyText from 'copy-to-clipboard';
import cup from "./cup.png";
import coins from './coins.svg';

class Section_3 extends React.Component {
   
   
    render() {
   

        

        return (
            <div class="container rules">
            <div class="col3">
            <img src={cup} class="cup"></img>
            <img src={coins} class="coins"></img>
           
                
                <div class="inside"> Rules to claim Tokens </div>
                
                <div class="numbers">
                <div class="name">
                    <div class="number"> <span>1</span> </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
    <div class="name">
                    <div class="number"> <span>2</span> </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div class="name">
                    <div class="number"> <span>3</span> </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div class="name">
                    <div class="number"> <span>4</span> </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
                </div>
                <span class="visit"> Visit our website </span>
                </div>
                
            </div>

        );
    }
}

export default (Section_3);