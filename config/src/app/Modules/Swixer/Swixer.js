import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/Swixer.css';
import './styles/bootstrap.css';
import Section_1 from './components/Section_1';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
class Swixer extends Component {
    render() {
        //set token1 options
        return (
            <div className="Swixer">
                <Header />
                <Section_1 />
	        	{/* <Section_4 /> */}
                <Section_2 />
                <Section_3 />
                {/* //<div className="clearfix"></div> */}
                <Footer />
                {/* <Section_4/> */}

            </div>
        );
    }
}

export default connect(

)(Swixer);
