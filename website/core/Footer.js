/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <div>
        <footer className="nav-footer" id="footer">
          <section className="sitemap">
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="66"
                />
              )}
            </a>
            <div>
              <h5>My sites</h5>
              <a href={this.pageUrl('about.html', this.props.language)}>
                About me
              </a>
              <a
                href="https://stackoverflow.com/users/9198801/daniel-diment"
                target="_blank"
                rel="noreferrer noopener">
                Stack Overflow
              </a>
              <a href="https://www.linkedin.com/in/daniel-diment-rodriguez/">LinkedIn</a>
            </div>
            <div>
              <h5>More</h5>
              <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
              <a href="https://github.com/dandimrod">GitHub</a>
            </div>
          </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
        <canvas id="footer-canvas" className="footer-canvas"></canvas>
      </div>
    );
  }
}

module.exports = Footer;
