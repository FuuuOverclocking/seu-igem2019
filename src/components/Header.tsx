import React from 'react';
import classes from './Header.style';
import { css } from 'office-ui-fabric-react';
import './Header.css';
import { withRouter } from 'react-router';
import { assets } from '../util';

class Header extends React.Component<any, {}> {

  private _goto = (url: string) => {
    this.props.history.push(url);
  }

  private handleLinkClick(url: string) {
    return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      this._goto(url);
    };
  }

  public render() {
    return (
      <header className={css(classes.header)}>
        <div className={css(classes.headerDiv)}>
          <div className={css(classes.flexContainer)}>
            <a
              className={css(classes.homeLink)}
              href='/Team:SEU-Nanjing-China'
              onClick={this.handleLinkClick('/')}
            >
              <img
                src={assets.img.logo}
                alt='seu-logo'
                className={css(classes.logo)}
              />
              <span className={css(classes.logo_text)}>SEU-iGEM</span>
            </a>
            <nav className={css(classes.nav)}>
              <span><span>HOME</span></span>
              <span><span>TEAM</span></span>
              <span><span>PROJECT</span></span>
              <span><span>PARTS</span></span>
              <span><span>SAFETY</span></span>
              <span><span>HUMAN<br />PRATICES</span></span>
              <span><span>AWARDS</span></span>
              <span><span>JUDGING<br />FORM</span></span>
            </nav>
            <span style={{ display: 'none' }}>

            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
