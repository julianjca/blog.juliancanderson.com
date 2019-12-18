import React from 'react';

import {rhythm} from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
        color: `#0C0C0C`
      }}>
        <div style={{
          float: 'right'
        }}>
          {/* <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a> */}
        </div>
        <a
          href="https://mobile.twitter.com/juliancanderson"
          target="_blank"
          style={{ color: '#0C0C0C'}}
          rel="noopener noreferrer">
          twitter
        </a>{' '}
        &bull;{' '}
        <a href="https://github.com/julianjca"
        target="_blank"
        style={{ color: '#0C0C0C'}}
        rel="noopener noreferrer">
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://instagram.com/juliancanderson"
          target="_blank"
          style={{ color: '#0C0C0C'}}
          rel="noopener noreferrer">
          instagram
        </a>{' '}
        {/* &bull;{' '}
        <a
          href="https://itunes.apple.com/us/podcast/why-i-started/id1450092249?mt=2&uo=4"
          target="_blank"
          style={{ color: '#0C0C0C'}}
          rel="noopener noreferrer">
          podcast
        </a> */}
      </footer>
    );
  }
}

export default Footer;