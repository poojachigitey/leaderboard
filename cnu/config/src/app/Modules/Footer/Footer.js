import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../Shared/Icon';
import '../Footer/styles/style.css';
// import * as actions from '../Header/actions';


 class Footer extends Component {
    constructor(props){
        super(props);
        // this.handleLanguage = this.handleLanguage.bind(this);
    }
    // handleLanguage(event){
    //     localStorage.setItem("lang",event.target.id);
    //         this.props.changeLanguage(event.target.id);
    // }
    render() {
        return (
            <div>
                <footer className="Swixer">
                    <div className="sentinel_footer container-fluid">
                        <div className="col-md-12 nopadding">
                            <nav id="nav-menu-container">
                                <ul className="nav-menu social_icon_list">
                                    <li>
                                        <a href="https://github.com/sentinel-official" title="Official GitHub Repo" target="_blank" >
                                            <Icon viewClass="github-alt social_icon_imgg" icon="github-alt" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/sentinelsecuritygroup" title="Official Telegram Group" target="_blank" >
                                            <Icon viewClass="telegram-plane social_icon_imgg" icon="telegram-plane" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/SentinelGroupio" title="Official Twitter Handle" target="_blank" >
                                            <Icon viewClass="twitter-logo social_icon_imgg" icon="twitter-logo" />
                                        </a>

                                    </li>
                                    {/* <li>
                                        <a href="" title="Official Twitter Handle" target="_blank" >
                                            <Icon viewClass="facebook social_icon_imgg" icon="facebook" />
                                        </a>
                                    </li> */}
                                </ul>
                            </nav>
                            <div className="container-fluid copy_right_sentinel">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div id="left">Sentinel &#169; 2018</div>
                                        <div id="middle">support [at] sentinel [dot] co</div>
                                        {/* <div className="llang">
                                            <div class="footer_languages" id="right">
                                            <span id='en' >EN</span>&emsp;
                                            <span id='ru' >RU</span>&emsp;
                                            <span id='es' >ES</span>&emsp;
                                            <span id='ja' >JA</span>&emsp;
                                            <span id='zh' >ZH</span>
                                            <div>Translations Coming Soon</div>
                                            </div>
                                          
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        // changeLanguage: (lang) => {
        //     dispatch(actions.changeLanguage(lang));
        // },
    };
  }
export default Footer;
