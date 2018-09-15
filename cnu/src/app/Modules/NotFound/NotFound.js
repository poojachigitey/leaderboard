import React, { Component } from 'react';
import '../NotFound/styles/NotFound.css';
import '../Leaderboard/styles/bootstrap.css';
import search_problem from '../../../assets/search-problem.svg';
import parallax_icon from '../../../assets/parallex_icons.svg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export default class NotFound extends Component {
  render() {
    return (
        <div className="sentinel notfound">
         <div className="notfound_icon">
            <img src={search_problem} alt="seach icon" title="search icon" className="img-responsive notfound_img"/>
        </div>
        <div className="responsive_div">
        
        <Header />
       
        <div class="content_middle">
			<div class="vertical">
				<h1 class="error">404</h1>
				<p class="not_found">Oops! Page not found</p>
				<p class="removed">The link you clicked may be broken or the page may have been removed.</p>
			</div>
		</div>
        </div>
        <div className="clearfix"></div>
        <Footer />
        </div>

    );
  }
}
