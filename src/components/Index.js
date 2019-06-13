import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import myDate from './../utils/myDate.js';

import './../css/App.css';

import addressIconWhite from './../svg/address_white.svg';
import addressIconYellow from './../svg/address_yellow.svg';
import addressIconBlack from './../svg/address_black.svg';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abonementPic: true,
    }
  }

  componentWillMount() {
    // this.updateDimensions();
    var time = new myDate();
    this.setState({abonementPic: (time.minute() % 5 < 4)});
  }

  lang(param) {
    if (Array.isArray(param))
      return param[this.props.lang];
    return param;
  }

  render() {
    document.title = this.props.lang ? "The Access Point: Main Page" : "Точка Доступа: Главная страница";

    var abonementPos = 4;
    var spekts = this.props.spekts.map((spekt, index) =>
      <Link to={"spekt/" + spekt.id} onClick={() => this.setPage()}>
        <div className={"card " + ((index + (index > abonementPos ? 1 : 0)) % 2 ? "right" : "left")} onClick={() => this.setPage("spekt", spekt.id)}>
          <img alt="" src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
          <div className="contents">
            {
              spekt.logo ?
                <div>
                  <img alt="" src={this.lang(spekt.logo)} className="logo"/>
                  <img alt="" src={this.lang(spekt.logoHover)} className="logo hover"/>
                  <div className="logo-rep"></div>
                </div>
              :
                <h4>{capitalize(this.lang(spekt.name))}</h4>
            }
            <div className="row desktop">
              <small>{this.lang(spekt.newText)}</small>
            </div>
            <div className="row desktop place">
              <small className="left">{this.lang(spekt.placeDesc)}</small>
              <div className="icon-container">
                <img alt="" src={addressIconYellow} className="address-icon hover" />
                <img alt="" src={addressIconWhite} className="address-icon" />
              </div>
              <small className="address left">{this.lang(spekt.address)}</small>
            </div>
            <div className="row mobile place">
              <div className="row">
                <small>{this.lang(spekt.placeDesc)}</small>
              </div>
              <div className="row">
                <img alt="" src={addressIconWhite} className="address-icon" />
                <small className="address">{this.lang(spekt.address)}</small>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
    var abonement = <Link to="abonement" onClick={() => this.setPage("abonement")}>
        <div className="card abonement right">
          <img alt="" src={"img/abonements/" + (this.state.abonementPic ? "1.png" : "2.png")} className="background" />
          <img alt="" src={"img/abonements/" + (this.state.abonementPic ? "1_hover.png" : "2_hover.png")} className="background hover" />
          <div className="contents">
            <h4>{this.props.lang ? "«The Access Point» Subscriptions" : "Абонементы «Точки доступа»"}</h4>
            <div className="row place">
              <button>{this.props.lang ? "LEARN MORE" : "ПОДРОБНЕЕ"}</button>
            </div>
          </div>
        </div>
      </Link>
    var fichers = [
      {
        id: 0,
        name: ["Режиссерская лаборатория «Культурный герой XXI»", "Theater Directing Lab «Cultural Hero XXI»"],
        place: ["Библиотека им. А. Аалто", "A. Aalto library"],
        address: ["город Выборг", "Vyborg town"],
        img: "https://scontent-arn2-1.cdninstagram.com/vp/414f67ca730bc89a0c203ea1ffe35883/5B590AAD/t51.2885-15/e35/20582724_1232904960151674_9179513050598735872_n.jpg",
      }
    ].map(ficher =>
      <div className="table">
        <div className="ficher desktop">
          {/* <img alt="" src={"/img/fichers/" + ficher.id + ".jpg"} className="background" /> */}
          <img alt="" src="img/fichers/0.jpg" className="background" />
          <div className="containerr">
            <h4>{capitalize(this.lang(ficher.name))}</h4>
            <div className="row place">
              <small>{capitalize(this.lang(ficher.place))}</small>
              <img alt="" src={addressIconBlack} className="address-icon" />
              <small className="address">{this.lang(ficher.address)}</small>
            </div>
          </div>
        </div>

        <div className="ficher mobile">
          <div className="ficher">
            <img alt="" src="img/fichers/0.jpg" className="background" />
          </div>
          <h4>{capitalize(this.lang(ficher.name))}</h4>
          <div className="row">
            <div className="row">
              <small>{capitalize(this.lang(ficher.place))}</small>
            </div>
            <div className="row">
              <img alt="" src={addressIconBlack} className="address-icon" />
              <small className="address">{this.lang(ficher.address)}</small>
            </div>
          </div>
        </div>
      </div>
    );

    var W = this.props.width;
    var H = this.props.height;
    // alert(W);
    // var W = this.props.width - 160 - 33;
    // var H = this.props.height - 160 - 76;
    var textStyle = {
      // fontSize: (H / W > 0.7 ? W / 11 : (Math.pow(W * H, 0.454) * (W / H > 20 / 9 ? 0. 18 : 0.19))) + "px"
      fontSize: (H / W > 0.7 ? W / 11 : (Math.pow(W * H, 0.452) * (W / H > 20 / 9 ? 0.21 : 0.22))) * (this.props.lang ? 1.1 : 1) + "px"
    };
    // var W = this.props.width - 32;
    // var H = this.props.height - 160 - 63;
    var textStyleMobile = {
      // fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.1 : 0.12) : (W < 340 || H < 340 ? 0.118 : 0.133)))) + "px"
      // fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.1 : 0.12) : (W < 340 || H < 340 ? 0.118 : 0.133)))) + "px"
      fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.12 : 0.14) : (W < 340 || H < 340 ? 0.138 : 0.153)))) * (this.props.lang ? 1.1 : 1) + "px"
    };
    var landscape = W > H && W <= 768;

    if (this.state.code === "рейв")
      recursiveTimeOut(this.easterEgg.bind(this), 555, 100500);
    if (this.state.code === "ййййй")
      recursiveTimeOut(this.easterEggRomanova.bind(this), 555, 100500);


    var codeText = (this.props.lang ? "4th international summer festival of arts" : "четвертый международный летний фестиваль искусств").split("").map(letter =>
      <b onClick={() => this.setState({code: this.state.code + letter})}>{letter}</b>
    );
    var codeText2 = (this.props.lang ? "the access point" : "точка доступа").split("").map(letter =>
      <b onClick={() => this.setState({code: this.state.code + letter})}>{letter}</b>
    );
    var codeText3 = (this.props.lang ? "19\xa0July — 5\xa0August" : "19\xa0июля — 5\xa0августа").split("").map(letter =>
      <b onClick={() => this.setState({code: this.state.code + letter})}>{letter}</b>
    );


    return (
      <div>
        <div className="upper with-logo">
          <div className={"text-container" + (landscape ? " landscape" : "")}>
            <section id="title-container">
              <h1 style={this.props.mobile ? textStyleMobile : textStyle}>
                {codeText}
                {/* <h1 style={this.props.mobile ? textStyleMobile : textStyle}>
                  Санкт-Петербург
                </h1>
                <h1 style={this.props.mobile ? textStyleMobile : textStyle}>
                  <b> 19&nbsp;июля — 5&nbsp;августа </b>
                </h1> */}
              </h1>
              <h1 style={this.props.mobile ? textStyleMobile : textStyle}>
                {codeText2}
              </h1>
              <h1 style={this.props.mobile ? textStyleMobile : textStyle}>
                {codeText3}
              </h1>
              {/* <div className="mobile" style={textStyleMobile}>
                <h1>
                  международный летний фестиваль искусств.
                </h1>
                <h1 className="black">
                  Санкт-Петербург.
                </h1>
                <h1 className="date">
                  19&nbsp;июля — 5&nbsp;августа.
                </h1>
                <h1 className="black">
                  сайт специфик, иммерсивный театр
                </h1>
              </div> */}
            </section>
          </div>
        </div>
        <div className="small-container">
          <div className="row">
            {spekts.slice(0, Math.floor(spekts.length / 2) - 1)}
            {fichers}
            {spekts.slice(Math.floor(spekts.length / 2) - 1, abonementPos)}
            {abonement}
            {spekts.slice(abonementPos)}
            {/* <div className={"card special left"} >
              <h4>Абонемент на все спектакли фестиваля 6000&nbsp;₽</h4>
              <div className="down">
                <div className="buy">
                  <h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5><h5>КУПИТЬ</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

function recursiveTimeOut(func, ms, iterations = 1) {
  if (iterations <= 0)
    return;
  setTimeout(() => {
    func();
    recursiveTimeOut(func, ms, iterations - 1);
  }, ms);
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Index;
