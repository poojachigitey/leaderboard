import React from 'react';
import '../styles/bootstrap.css';
import './styles/Section_1.css';
import '../styles/Swixer.css';

import Swixer_Logo from '../../../../assets/Swixer_Logo.svg';
class Section_1 extends React.Component {
  render() {
    return (
      <div className="container">
         <div className="col_1">
            <h2 className="swixer_title">LEADERBOARD</h2>
            <h3 className="swixer_sub_tag"><span >dVPN</span> referrals who helped stay <a href="#" >private</a></h3>
          </div>
      </div>

    );
  }
}
export default Section_1;