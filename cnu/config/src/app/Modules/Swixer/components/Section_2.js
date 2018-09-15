import React from 'react';
import { connect } from 'react-redux';
// import './styles/Section_2.css';
import Table from './Dashboard';
import svg from './Group.svg';
import inside_img from "./super sent.png";
import top5_img from "./Group 5.1.png";
import title from "./Group 5.png";
import media from "./medal (1).png";
import silver from './silver.png';
import data from './topranks';

class Section_2 extends React.Component {

  render() {
    const step2Class = this.props.step2 ? 'status_update_progress' : '';
    const step3Class = this.props.step3 ? 'status_update_progress' : '';
    const lineClass2 = !this.props.step2 ? 'line_class_start_half' : 'line_class_end';
    const lineClass3 = !this.props.step3 ? this.props.step2?'line_class_start_half':'line_class_start' : 'line_class_end';
    const mobileContent = !this.props.step2 ? 'step1' : '';
    let mobileContent2 = !this.props.step2 ? '' : 'step1';
    const mobileContent3 = !this.props.step3 ? '' : 'step1';
    if(mobileContent === ''){
      mobileContent2 = !this.props.step3 ? 'step1' : '';
    }

    return (
      <div className="container">
          <div className="col1">
          <Table />
          </div>
        <div className="col2">
            <div className="section1">
                  <div className="aside_first_section">
                      <div className="aside_first_section_header">
                          <div className="aside_first_section_header_icon">
                            <img src={media} className="img-responsive first_media_icon" alt="icon" title="icon"/>
                          </div>
                          <div className="aside_first_section_header_name">
                            <h4 className="header_name">GOLD</h4>
                          </div>
                          <div className="aside_first_section_header_content">
                            <p className="content">(10k $ENT)</p>
                            </div>
                          <div className="right_side_ranking">
                              <h4 className="top_ranking">Top 10</h4>
                          </div>
                      </div>
                  </div>

                  <div className="aside_second_section">
                    <div className="aside_second_section_img">
                      {/* <img src={inside_img} className="img-responsive second_media_icon"  alt="icon" title="icon" /> */}

                      {data.map((v,i) => {
                          // console.log("data ",v); 
                          if(i%2 ==0 && i<10)
                          {
                          return(
                            <div className="ranking">
                                <div className="value1">
                                  {data[i]}
                                </div>
                                <div className="image">
                                    <img src={media} />
                                </div>
                                <div className="value2">
                                  {data[i+1]}
                                </div>
                          </div>
                              // <li>{v}</li>
                          )
                        }
                      })}
                    
                    </div>

                    

                  </div>
            </div>

            <div className="section2">
                  <div className="aside_first_section">
                      <div className="aside_first_section_header">
                          <div className="aside_first_section_header_icon">
                            <img src={silver} className="img-responsive first_media_icon" alt="icon" title="icon"/>
                          </div>
                          <div className="aside_first_section_header_name">
                            <h4 className="header_name">SILVER</h4>
                          </div>
                          <div className="aside_first_section_header_content">
                            <p className="content">(5k $ENT)</p>
                            </div>
                          <div className="right_side_ranking">
                              <h4 className="top_ranking">Next 20</h4>
                          </div>
                      </div>
                  </div>


                  <div className="aside_second_section">
                    <div className="aside_second_section_img">
                      {/* <img src={inside_img} className="img-responsive second_media_icon"  alt="icon" title="icon" /> */}
                      {data.map((v,i) => {
                          // console.log("data ",v); 
                          if(i%2==0 && i<20)
                          {
                          return(
                            <div className="ranking">
                                <div className="value1">
                                  {data[i]}
                                </div>
                                <div className="image">
                                    <img src={silver} />
                                </div>
                                <div className="value2">
                                  {data[i+1]}
                                </div>
                          </div>
                              // <li>{v}</li>
                          )
                        }
                      })}
                    
                    </div>
                    
                  </div>

            </div>

             <div className="section3">
                  <div className="aside_first_section">
                      <div className="aside_first_section_header">
                          <div className="aside_first_section_header_icon">
                            <img src={media} className="img-responsive first_media_icon" alt="icon" title="icon"/>
                          </div>
                          <div className="aside_first_section_header_name">
                            <h4 className="header_name">BRONZE</h4>
                          </div>
                          <div className="aside_first_section_header_content">
                            <p className="content">(3k $ENT)</p>
                            </div>
                          <div className="right_side_ranking">
                              <h4 className="top_ranking">Next 20</h4>
                          </div>
                      </div>
                  </div>


                  <div className="aside_second_section">
                    <div className="aside_second_section_img">
                      {/* <img src={inside_img} className="img-responsive second_media_icon"  alt="icon" title="icon" /> */}
                      {data.map((v,i) => {
                          // console.log("data ",v); 
                          if(i%2==0 && i<20)
                          {
                          return(
                            <div className="ranking">
                                <div className="value1">
                                  {data[i]}
                                </div>
                                <div className="image">
                                    <img src={media} />
                                </div>
                                <div className="value2">
                                  {data[i+1]}
                                </div>
                          </div>
                              // <li>{v}</li>
                          )
                        }
                      })}
                    </div>
                  </div>

            </div>
            <div className="section4">
            <img src={svg} className="row_img" />
            </div>
          {/* <div className="row_img">
           <img src={svg}></img>
          </div> */}
          {/* <div className="top_5">
              <div className="head">
                <img src={media}></img>
                <h3 class="gold"> GOLD</h3><span>(10k $ENT)</span>
                <button class="button">Top 10</button>
              </div>
              <div className="body">
                <div className="inside">
                  <div>
                  <img src={inside_img}></img>
                     
                      

                
                 
                  </div>
                </div>
              </div>
          </div> */}

          {/* <div className="top_10">
              <div className="head">
              <img src={silver}></img>
                <h3 class="silver"> SILVER </h3><span>(5k $ENT)</span>
                <button class="button">Next 20</button>
              </div>
              <div className="body">
                <div className="inside">
                  <img src={inside_img}></img>
                  
                </div>
              </div>
          </div>

          <div className="top_15">
              <div className="head">
              <img src={media}></img>
                <h3 class="bronze"> BRONZE</h3><span>(3k $ENT)</span>
                <button class="button">Next 20</button>
              </div>
              <div className="body">
                <div className="inside">
                  <img src={inside_img}></img>
                </div>
              </div>
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