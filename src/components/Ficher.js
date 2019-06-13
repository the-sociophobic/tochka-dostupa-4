import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/App.css';
import './../css/cards.css';

import capitalize from './../utils/utils.js';

import addressIconBlack from './../svg/address_black.svg';


class Ficher extends Component {
  render() {
    var ficher = this.props.ficher;
    var mobile = this.props.mobile;

    if (mobile)
      return (
        <Link to={"ficher/" + ficher.id} onClick={() => window.scrollTo(0, 0)}>
          <div className="ficher-mobile">
            <div className="card">
              <img alt="" src={"img/fichers/" + ficher.img} className="background" />
            </div>
            <div className="text">
              <h1>{this.props.lang(ficher.name)}</h1>
              {/* {
                ficher.address ?
                <div>
                  <div className="row">
                    <span>{this.props.lang(ficher.place)}</span>
                  </div>
                  <div className="icon-container">
                    <div className="frame">
                      <img alt="" src={addressIconBlack} className="address-icon" />
                    </div>
                  </div>
                  <span>{this.props.lang(ficher.address)}</span>
                </div>
                : ""
              } */}
            </div>
          </div>
        </Link>
      );
    return(
      <Link to={"ficher/" + ficher.id} onClick={() => window.scrollTo(0, 0)}>
        <div className="ficher">
          <div className="contents">
            <div className="card left">
              <img alt="" src={"img/fichers/" + ficher.img} className="background" />
            </div>
            <div className="text left">
              <div className="frame">
                <h1>{this.props.lang(ficher.name)}</h1>
                {/* {
                  ficher.address ?
                  <div className="row bottom">
                    <span className="left">{this.props.lang(ficher.place)}</span>
                    <div className="left">
                      <div className="icon-container">
                        <div className="frame">
                          <img alt="" src={addressIconBlack} className="address-icon" />
                        </div>
                      </div>
                      <span>{this.props.lang(ficher.address)}</span>
                    </div>
                  </div>
                  : ""
                } */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Ficher;
