import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="footer__row">
          <div className="footer__data">
            {logo && <div className="footer__logo-wrap">{logo}</div>}
            <p className="footer__tagline">
              Your Gateway to Maximum Privacy and Growth within the Sentinel P2P Ecosystem
            </p>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
