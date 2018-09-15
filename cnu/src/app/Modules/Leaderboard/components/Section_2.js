import React from 'react';
import { connect } from 'react-redux';
import './styles/Section_2.css';
import Table from './Dashboard';
import svg from './Group.svg';
import inside_img from "./super sent.png";
import top5_img from "./Group 5.1.png";
import title from "./Group 5.png";
import media from "./medal (1).png";
import medal from "./medal .png";
import silver from './silver.png';



let REFERRAL_URL = 'https://refer-api.sentinelgroup.io';
var REFERRAL_VAR = 'https://version-api.sentinelgroup.io/variable?appCode=SLC&varType=LEAD';
// var REFERRAL_URL1 = 'https://refer-api.sentinelgroup.io/leaderboard?sortBy=referral';
// var REFERRAL_URL2 = 'https://refer-api.sentinelgroup.io/leaderboard?sortBy=bandwidth';

var REFERRAL_URL1 = 'http://192.168.0.34:3000/leaderboard?sortBy=noOfReferrals&count=10';
// 'https://refer-api.sentinelgroup.io/leaderboard?sortBy=noOfReferrals&count=10';
var REFERRAL_URL2 =  'http://192.168.0.34:3000/leaderboard?sortBy=totalUsage&count=10';

class Section_2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      data: [],
      actualData: [],
      data1: [],
      data2:[],
      data3:[],
    };
  }


  componentWillMount() {
    let url = REFERRAL_URL + '/leaderboard';
    fetch(url)
      .then((resp) => resp.json())
      .then((body) =>
        this.setState({
          loading: false,
          data: body.info,
          actualData: body.info
        }))

    let url2 = REFERRAL_VAR;
    fetch(url2)
      .then((resp) => resp.json())
      .then((body) =>
        this.setState({
          loading: false,
          data1: body.info
        }))

        let url3 = REFERRAL_URL1;
    fetch(url3)
      .then((resp) => resp.json())
      .then((body) =>
        this.setState({
          loading: false,
          data2: body.info.records
        }))


        let url4 = REFERRAL_URL2;
    fetch(url4)
      .then((resp) => resp.json())
      .then((body) =>
        this.setState({
          loading: false,
          data3: body.info.records
        }))

  }


  render() {


    return (
      <div className="container">

        <div className="col1">
          <Table />
          <div class="clearfix">
          </div>
        </div>
        <div className="col2">
          <div className="section1">
            <div className="aside_first_section">
              <div className="aside_first_section_header">
                <div className="aside_first_section_header_icon">
                  <img src={media} className="img-responsive first_media_icon" alt="icon" title="icon" />
                </div>
                <div className="aside_first_section_header_name">
                    <h4 className="header_name">
                      {
                        this.state.data1.map((v, i) => 
                        {
                            if (v.name == 'referrer') 
                            {
                              return v.value;  
                            }
                        }
                      )}
                    </h4>
                </div>

                {/* <div className="aside_first_section_header_content">
                  <span className="content">
                  {
                      this.state.data1.map((v, i) => 
                      {
                      if (v.name == 'sents') {
                        return v.value.gold;
                        
                      }
                    }
                    )}
                  
                  </span>
                </div> */}
                {/* <div className="right_side_ranking">
                   <h4 className="top_ranking">
                  Top 10
                  </h4> 
                </div> */}
              </div>
            </div>

            <div className="aside_second_section">
              <div className="aside_second_section_img">
                {/* <img src={inside_img} className="img-responsive second_media_icon"  alt="icon" title="icon" /> */}

                {this.state.data2.map((v, i) => {

                    if(i % 2 ==0 && i < 10 )
                    {
                      return (
                            <div className="ranking">
                              <div className="value1">
                                {this.state.data2[i].referralId}
                              </div>
                              <div className="image">
                                <img src={media} />
                              </div>
                              <div className="value2">
                                {this.state.data2[i+1].referralId}
                              </div>
                            </div>
                            // <li>{v}</li>
                          )
                     
                    }

                  // console.log("data ",v); 
                  // if (i % 2 == 0 && i < 10) {
                  //   return (
                  //     <div className="ranking">
                  //       <div className="value1">
                  //         {this.state.data[i].referralId}
                  //       </div>
                  //       <div className="image">
                  //         <img src={media} />
                  //       </div>
                  //       <div className="value2">
                  //         {this.state.data[i + 1].referralId}
                  //       </div>
                  //     </div>
                  //     // <li>{v}</li>
                  //   )
                  // }
                })}

              </div>



            </div>
          </div>

          <div className="section2">
            <div className="aside_first_section">
              <div className="aside_first_section_header">
                <div className="aside_first_section_header_icon">
                  <img src={media} className="img-responsive first_media_icon" alt="icon" title="icon" />
                </div>
                <div className="aside_first_section_header_name">
                  <h4 className="header_name">
                  {
                      this.state.data1.map((v, i) => {
                      if (v.name == 'bandwidth') {
                        return v.value;
                        
                      }
                    }
                    )}
                  </h4>
                </div>
                {/* <div className="aside_first_section_header_content">
                  <span className="content">
                  {
                      this.state.data1.map((v, i) => {
                      if (v.name == 'sents') {
                        return v.value.silver;
                        
                      }
                    }
                    )}
                  </span>
                </div> */}
                {/* <div className="right_side_ranking">
                  <h4 className="top_ranking">Next 20</h4>
                </div> */}
              </div>
            </div>


            <div className="aside_second_section">
              <div className="aside_second_section_img">
                {/* <img src={inside_img} className="img-responsive second_media_icon"  alt="icon" title="icon" /> */}
                {this.state.data3.map((v, i) => {
                  // console.log("data ",v); 
                  if (i % 2 == 0 && i < 10 ) {
                    return (
                      <div className="ranking">
                        <div className="value1">
                          {this.state.data3[i].referralId}
                        </div>
                        <div className="image">
                          <img src={media} />
                        </div>
                        <div className="value2">
                          {this.state.data3[i + 1].referralId}
                        </div>
                      </div>
                      // <li>{v}</li>
                    )
                  }
                })}

              </div>

            </div>

          </div>

           {/* <div className="section3">
            <div className="aside_first_section">
              <div className="aside_first_section_header">
                <div className="aside_first_section_header_icon">
                  <img src={medal} className="img-responsive first_media_icon" alt="icon" title="icon" />
                </div>
                <div className="aside_first_section_header_name">
                  <h4 className="header_name">
                  {
                      this.state.data1.map((v, i) => {
                      if (v.name == 'level') {
                        return v.value.bronze;
                        
                      }
                    }
                    )}
                  </h4>
                </div>
                <div className="aside_first_section_header_content">
                  <span className="content">
                  {
                      this.state.data1.map((v, i) => {
                      if (v.name == 'sents') {
                        return v.value.bronze;
                        
                      }
                    }
                    )}
                  </span>
                </div>
                <div className="right_side_ranking">
                  <h4 className="top_ranking">Next 20</h4>
                </div>
              </div>
            </div>


            <div className="aside_second_section">
              <div className="aside_second_section_img">
                //  <img src={inside_img} className="img-responsive second_media_icon"  alt="icon" title="icon" />  
                {this.state.data.map((v, i) => {
                  // console.log("data ",v); 
                  if (i % 2 == 0 && i < 50 && i >= 30) {
                    return (
                      <div className="ranking">
                        <div className="value1">
                          {this.state.data[i].referralId}
                        </div>
                        <div className="image">
                          <img src={medal} />
                        </div>
                        <div className="value2">
                          {this.state.data[i + 1].referralId}
                        </div>
                      </div>
                      
                    )
                  }
                })}
              </div>
            </div>
          </div>  */}

          {/* <div className="section4">
            <img src={svg} className="row_img" alt="icon" title="icon" />
          </div> */}
        </div>
        <div class="clearfix">
        </div>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    step2: state.SWIXER.step2,
    step3: state.SWIXER.step3,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Section_2);
