import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/App.css';
import './../css/cards.css';

import capitalize from './../utils/utils.js';

import addressIconBlack from './../svg/address_black.svg';
import addressIconWhite from './../svg/address_white.svg';
import addressIconYellow from './../svg/address_yellow.svg';

class SpektCard extends Component {
  render() {
    var spekt = this.props.spekt;
    var mobile = this.props.mobile;

    // if (this.props.width < 1000)
    // if (this.props.mobile)
    if (window.innerWidth <= 768)
      return (
        <Link to={"spekt/" + spekt.id} onClick={() => window.scrollTo(0, 0)}>
          <div className={"card-mobile " + (this.props.mobile ? "" : this.props.align)}>
            <div className="card shadowed">
              <img alt="" src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
              <div className="contents">
                {
                  spekt.logo ?
                    <div>
                      <img alt="" src={this.props.lang(spekt.logo)} className="logo"/>
                      <img alt="" src={this.props.lang(spekt.logoHover)} className="logo hover"/>
                      <div className="logo-rep"></div>
                    </div>
                  :
                    <h1>{this.props.lang(spekt.name)}</h1>
                }
              </div>
            </div>
            <div className="text">
              <span className="new-desc">
                {this.props.lang(spekt.newText)}
              </span>
              {
                spekt.address[0] !== "" ?
                <div>
                  <div className="row">
                    <span>{this.props.lang(spekt.placeDesc)}</span>
                  </div>
                  <div className="icon-container">
                    <div className="frame">
                      <img alt="" src={addressIconBlack} className="address-icon" />
                    </div>
                  </div>
                  <span>{this.props.lang(spekt.address)}</span>
                </div>
                : ""
              }
            </div>
          </div>
        </Link>
      );
    return (
      <Link to={"spekt/" + spekt.id} onClick={() => window.scrollTo(0, 0)}>
        <div className={"card shadowed " + this.props.align}>
          <img alt="" src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
          <div className="contents">
            {
              spekt.logo ?
                <div>
                  <img alt="" src={this.props.lang(spekt.logo)} className="logo"/>
                  <img alt="" src={this.props.lang(spekt.logoHover)} className="logo hover"/>
                  <div className="logo-rep"></div>
                </div>
              :
                <h1>{this.props.lang(spekt.name)}</h1>
            }
            <span>
              {this.props.lang(spekt.newText)}
              {/* {this.props.width > 900 ? this.props.lang(spekt.newText) : ""} */}
            </span>
            {
              spekt.address[0] !== "" ?
              <div className="row bottom">
                <span className="left place-desc">{this.props.lang(spekt.placeDesc)}</span>
                <div className="left">
                  <div className="icon-container">
                    <div className="frame">
                      <img alt="" src={addressIconYellow} className="address-icon hover" />
                      <img alt="" src={addressIconWhite} className="address-icon" />
                    </div>
                  </div>
                  <span className="left">
                    {this.props.lang(spekt.address)}
                  </span>
                </div>
              </div>
              : ""
            }
          </div>
        </div>
      </Link>
    );
  }
}

export default SpektCard;
