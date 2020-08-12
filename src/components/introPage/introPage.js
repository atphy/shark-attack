import React from 'react';

import './introPage.scss';

class IntroPage extends React.Component {
  render() {
    return (
            <div className="intro-page-info">
                <h2 className="intro-page-paragraph">Gather round to hear the tale of cohort E12, dom'd by a string and damned by the sea...</h2>
                <button className="btn intro-button" openSite={this.openSiteEvent}>Sail ye upon a fateful voyage</button>
            </div>
    );
  }
}

export default IntroPage;
