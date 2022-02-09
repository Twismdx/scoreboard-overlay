import React from 'react';
import Layout from '../components/layout';
import Script from 'next/script';
<Script src="pages/components/overlay.js" strategy="lazyOnload" />;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div id="streamoverlay">
          <div id="scoreboardBox">
            <div className="borderline">
              <div />
            </div>
            <div className="line1">
              <div className="imgPlayerA">
                <div className="flagA" />
              </div>
              <div className="imgPlayerB">
                <div className="flagB" />
              </div>
            </div>
            <div className="line2">
              <div id="namePlayerA" className="name">
                <span className="firstname" /> <span className="lastname" />{' '}
                <span className="handicap" />
              </div>
              <div id="scorePlayerA" />
              <div className="separator">-</div>
              <div id="scorePlayerB" />
              <div id="namePlayerB" className="name">
                {' '}
                <span className="lastname" /> <span className="handicap" />
              </div>
            </div>
            <div className="line3">
              <div id="table">
                <span>Empire Bar &amp; Pool</span>
              </div>
              <div id="avgIngA" style={{ display: 'none' }}>
                Innings <span className="innings" /> &nbsp; Average{' '}
                <span className="average" />
              </div>
              <div id="matchinfo">
                <span />
              </div>
              <div id="avgIngB" style={{ display: 'none' }}>
                Innings <span className="innings" /> &nbsp; Average{' '}
                <span className="average" />
              </div>
              <div id="round">
                <span />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
