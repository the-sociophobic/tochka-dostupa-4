
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../css/App.css';
import './../css/cards.css';

class Abonement extends Component {
  render() {
    var pic = this.props.pic

    return (
      <Link to="abonement" onClick={() => window.scrollTo(0, 0)}>
        <div className={"card abonement " + (this.props.align ? this.props.align : "")}>
          <img src={"img/abonements/" + pic + ".png"} className="background" />
          <img src={"img/abonements/" + pic + "_hover.png"} className="background hover" />
          <div className="contents">
            <div className="frame">
              <h1>{this.props.lang(["Абонементы «Точки доступа»", "«The Access Point» Subscriptions"])}</h1>
              <button className="bottom">{this.props.lang(["ПОДРОБНЕЕ", "LEARN MORE"])}</button>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Abonement;
