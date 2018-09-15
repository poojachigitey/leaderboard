import React from 'react';
import '../styles/bootstrap.css';
import './styles/Section_1.css';
import '../styles/Leaderboard.css';

import Leaderboard_Logo from '../../../../assets/Leaderboard_Logo.svg';


var REFERRAL_URL = 'https://version-api.sentinelgroup.io/variable?appCode=SLC&varType=LEAD';
class Section_1 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

      data: [],


    };
  }
  componentWillMount() {
    let url = REFERRAL_URL;
    fetch(url)
      .then((resp) => resp.json())
      .then((body) => 
        this.setState({
          loading: false,
          data: body.info,
        })
      );
  }

  render() {
    return (

      <div className="container">
        <div className="col_1">

          {this.state.data.map((v, i) => {

            if (v.name === 'header_title_1') {
              return <h2 className="leaderboard_title" name="Leaderboard_title">{v.value}</h2>
            }

            if (v.name === 'header_title_2') {
              return <h2 className="leaderboard_title_refer" name="Leaderboard_title">{v.value}</h2>
            }

            if (v.name === 'header_sub_title_1') {
              return <h3 className="leaderboard_sub_tag" name="Leaderboard_title">{v.value.var1}<span className="leaderboard_sub_tag"><a target="_blank" href="https://play.google.com/store/apps/details?id=co.sentinel.sentinellite">{v.value.var2}</a>.</span></h3>
            }
          }
          )}
    

          <h4 className="leaderboard_sub_tag2">
         
          {this.state.data.map((v, i) => {
            if (v.name === 'header2_description1') {
              return (
                <span> {v.value} </span>
              )
            }
          
            if (v.name === 'header2_description2') {
              return (
                <span className="airdropBlog"> <a target="_blank" href="https://medium.com/sentinel/new-sentinel-dvpn-android-client-launched-on-the-google-play-store-50d645cb827d">{v.value}  </a></span>
              )
            }
            if (v.name === 'header2_description3') {
              return (
                <span> {v.value} </span>
              )
            }

          }
          )}
                   
          </h4>

          
        </div>
      </div>

    );
  }
}
export default Section_1;
