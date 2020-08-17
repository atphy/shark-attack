import React from 'react';

import './introPage.scss';

import MainPage from '../MainPage/MainPage';

class IntroPage extends React.Component {
  openSiteEvent = (e) => {
    e.preventDefault();
    this.render(<MainPage />);
    console.warn('test');
  };

  render() {
    return (
            <div className="intro-page-info">
                <h2 className="intro-page-paragraph">Gather round to hear the terrible tale of cohort E12, dom'd by a string and damned by the sea...</h2>
                <button className="btn intro-button" onClick ={this.openSiteEvent}>Sail ye upon a fateful voyage</button>
            </div>
    );
  }
}

export default IntroPage;
