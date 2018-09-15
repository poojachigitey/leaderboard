import React, { Component } from 'react';
import { connect } from 'react-redux';
import flag from '../../../assets/usa.png';
import Rflag from '../../../assets/Flag_of_Russia.svg';
import Sflag from '../../../assets/Flag_of_Spain.svg';
import Jflag from '../../../assets/Flag_of_Japan.svg';
import Cflag from '../../../assets/Flag_of_China.svg';
import * as actions from './actions';

class LangDropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            Locale: 'en',
            flag : flag,
        }
        this.handleLanguage = this.handleLanguage.bind(this);
    }
    handleLanguage(event){
        localStorage.setItem("lang",event.target.id);
        let Flag = flag;
        switch(event.target.id){
            case 'es': Flag =Sflag; break;
            case 'ru': Flag =Rflag; break;
            case 'zh': Flag =Cflag; break;
            case 'ja': Flag =Jflag; break;
            default: Flag =flag; break;
        }
           this.setState({Locale: event.target.id,  flag: Flag});
            this.props.changeLanguage(event.target.id);
    }

    render() {
        return (
            <div>
                <div className="dropdown lang_change">
                    <div className="flag_name">
                        <img src={this.state.flag} className="img-responsive" alt="" title="" />
                        <div className="lang_name">{this.state.Locale}</div>
                    </div>
                    <div className="dropdown-content">
                        <span className="right_arrow"></span>
                        <a id='en' onClick={this.handleLanguage}><img src={flag} alt="" className="img-responsive flag" />English</a>
                        <a id='ru' onClick={this.handleLanguage}><img src={Rflag} alt="" className="img-responsive flag" />Russian</a>
                        <a id='es' onClick={this.handleLanguage}><img src={Sflag} alt="" className="img-responsive flag" />Spanish</a>
                        <a id='ja' onClick={this.handleLanguage}><img src={Jflag} alt="" className="img-responsive flag" />Japanese</a>
                        <a id='zh' onClick={this.handleLanguage}><img src={Cflag} alt="" className="img-responsive flag" />Chinese</a>
                    </div>
                </div>
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
        changeLanguage: (lang) => {
            dispatch(actions.changeLanguage(lang));
        },
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(LangDropDown);