import React from 'react';
import { connect } from 'react-redux';
import top from "./Top.js"
import './styles/Section_3.css';
import { LinearProgress, List } from '@material-ui/core';
import lodhash from 'lodash';
var REFERRAL_VAR = 'https://version-api.sentinelgroup.io/variable?appCode=SLC&varType=LEAD';

class Section_3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        let url = REFERRAL_VAR;
        fetch(url)
            .then((resp) => resp.json())
            .then((body) =>

                this.setState({
                    loading: false,
                    data: body.info
                })

            );

    }
    render() {
        return (
            <div class="container rules">
                <div class="col3">
                    {/* <img src={cup} class="cup"></img> */}
                    {/* <img src={coins} class="coins"></img>  */}
                    <div class="inside">
                        {
                            this.state.data.map((v, i) => {
                                if (v.name == 'rulesTitle') {
                                    return v.value
                                }
                            })
                        }
                    </div>
                    {this.state.data.map((v, index) => {
                        var temp = {};
                        temp[v.name] = v.value;
                        if (v.name == 'rule') {
                            console.log(temp.rule.list1.var1)

                            return (
                                <div>
                                    <div class="numbers">
                                        <span className="number">1</span>
                                        <p class="paragraph"><span>{temp.rule.list1.var1}</span><a href="https://medium.com/sentinel" target="_blank">{temp.rule.list1.var2}</a>.</p>
                                    </div>
                                    <div class="numbers">
                                        <span className="number">2
                                                </span>
                                        <p class="paragraph">{temp.rule.list6.var1}</p>
                                    </div>
                                    <div class="numbers">
                                        <span className="number">3
                                                </span>
                                        <p class="paragraph">{temp.rule.list2.var1}<span><a href="https://play.google.com/store/apps/details?id=co.sentinel.sentinellite" target="_blank">{temp.rule.list2.var2} </a></span>{temp.rule.list2.var3}<span><a href="https://github.com/sentinel-official/sentinel/releases/download/v0.0.5-alpha/sentinel_dvpn_v0.1.7.apk" target="_blank">{temp.rule.list2.var4}</a></span>.</p>
                                    </div>
                                    <div class="numbers">
                                        <span className="number">4
                                                </span>
                                        <p class="paragraph">{temp.rule.list3.var1} <strong> {temp.rule.list3.var2}</strong> {temp.rule.list3.var3}<strong> {temp.rule.list3.var4}</strong>{temp.rule.list3.var5} </p>
                                    </div>
                                    <div class="numbers">
                                        <span className="number">5
                                                </span>
                                        <p class="paragraph">{temp.rule.list4.var1}</p>
                                    </div>
                                    <div class="numbers">
                                        <span className="number">6
                                                </span>
                                        <p class="paragraph">{temp.rule.list5.var1}<span><a href="https://medium.com/sentinel" target="_blank">{temp.rule.list5.var2} </a></span>{temp.rule.list5.var3}<span><a href="https://twitter.com/sentinel_co" target="_blank">{temp.rule.list5.var4} </a></span>{temp.rule.list5.var5}</p>
                                    </div>

                                </div>
                            );
                        }
                        // return temp.rules.map((List,j) =>
                        // {             

                        //     return (
                        //         <div class="numbers">
                        //     <span className="number">{j+1}
                        //     </span>
                        //     <span class="paragraph">
                        //     <p> { List && j+1 ? List <a href="">medium.com</a> : null } </p>


                        //     </span>
                        //     </div>
                        //     );
                        // })

                    })
                    }

                        <div className="download">
                            <a href="https://play.google.com/store/apps/details?id=co.sentinel.sentinellite" class="visit" target="_blank">Download Android App </a>
                            <a href="https://sentinel.co/" class="visit" target="_blank"> Visit Our Website </a>
                        </div>
                </div>
            </div>

        );
    }
}

export default (Section_3);
