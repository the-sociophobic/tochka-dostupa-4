import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import data from './helpers/data'

import renderIndexPage from 'pages/Index'
import renderSpektPage from 'pages/Spekt'
import renderAdminPage from 'pages/Admin'
import renderSchedulePage from 'pages/Schedule'
import renderVisitPage from 'pages/Visit'
import renderFestivalPage from 'pages/Festival'
import renderPartnersPage from 'pages/Partners'
import renderAbonementPage from 'pages/Abonement'
import renderFicherPage from 'pages/Ficher'

import myDate from './utils/myDate.js';
import { capitalize } from './utils/utils.js';


import logo from './svg/logo.svg';
import logoMobile from './svg/logo_mobile.svg';
import burger from './svg/burger.svg';
import cross from './svg/cross.svg';
import instagramLogo from './svg/instagram.svg';
import facebookLogo from './svg/facebook.svg';
import vkLogo from './svg/vk.svg';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  lang(param) {
    if (Array.isArray(param))
      return param[this.state.lang];
    return param;
  }

  updateDimensions() {
    var titleContainer = document.getElementById("title-container");

    if (titleContainer)
      this.setState({width: titleContainer.clientWidth, height: titleContainer.clientHeight});
    else
      if (window.innerWidth <= 768 && this.state.width === 0 && this.state.height === 0) // MOBILE
      {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (iOS) {
          var heightPortrait = ["568", "667", "736", "812", "1024", "1366"];
          var heightLandscape = ["320", "375", "414", "768", "1024"];
          var W = window.innerWidth - 32;
          var H = window.innerWidth - 120;

          if (window.innerWidth > window.innerHeight) //Landscape orientation
            heightLandscape.forEach(height => {
              if (window.innerHeight === height || Math.abs(window.innerHeight - height) < 10 || Math.abs(window.innerHeight - (height - 50)) < 10)
                H = height;
            });
          else //Portrait orientation
            heightPortrait.forEach(height => {
              if (window.innerHeight === height || Math.abs(window.innerHeight - (height - 39)) < 10 || Math.abs(window.innerHeight - (height - 114)) < 10 || Math.abs(window.innerHeight - (height - 95)) < 10)
                // H = height - 39;
                H = height - 95;
            });
          this.setState({
            width: W,
            // height: (W > H && W < 768) ? (H - 80 - 40 - 52 - 90) : (H - 80 - 40 - 71),
            height: (W > H && W < 768) ? (H - 80 - 52 - 95) : (H - 80 - 71 - 39),
            heightIOS: H,
          });
        }
      }
      else
        this.setState({width: window.innerWidth - 160 - 33, height: window.innerHeight - 80 - 40 - 96});

    if (window.innerWidth > 768)
      this.setState({mobileMenu: false});
    if (this.state.width > this.state.height)
      this.setState({landscape: true});
    else
      this.setState({landscape: false});
    if (window.innerWidth > 768)
      this.setState({mobile: false});
    else
      this.setState({mobile: true});
  }
  updateScroll() {
    this.setState({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
    // var navigationHeight = document.getElementById("visit-navigation").clientHeight;
    if (document.getElementById("visit-title")) {
      var title = document.getElementById("visit-title");
      var titleStyle = title.currentStyle || window.getComputedStyle(title);
      var titleHeight = title.clientHeight + parseInt(titleStyle.marginTop.slice(0, -2)) + parseInt(titleStyle.marginBottom.slice(0, -2));
      this.setState({
        navigationFixed: titleHeight <= this.state.scrollY
      });
    }
  }

  componentWillMount() {
    var time = new myDate();
    this.setState({abonementPic: (time.minute() % 5 < 4 ? 1 : 2)});

    let spektsForRandomization = [6, 7, 8, 9, 10];
    let newOrder = [];

    while (newOrder.length < spektsForRandomization.length) {
      let randomStart = Math.floor(Math.random() * spektsForRandomization.length * 5) % spektsForRandomization.length;
      let i;

      for (i = randomStart; spektsForRandomization[i] === -1; )
         i = (i + 1) % spektsForRandomization.length;
      newOrder.push(spektsForRandomization[i]);
      spektsForRandomization[i] = -1;
    }
    this.setState({spektsOrder: newOrder});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    window.removeEventListener("deviceorientation", this.updateDimensions.bind(this));
    window.removeEventListener("scroll", this.updateScroll.bind(this));
    // window.removeEventListener("scroll", this.updateDimensions.bind(this));
  }
  componentDidMount() {
    //Resize window
    window.addEventListener("resize", this.updateDimensions.bind(this));
    window.addEventListener("deviceorientation", this.updateDimensions.bind(this));
    window.addEventListener("scroll", this.updateScroll.bind(this));
    // window.addEventListener("scroll", this.updateDimensions.bind(this));
    this.updateDimensions();

    //include yandex script to header
    const yandexScript = document.createElement("script");

    yandexScript.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    yandexScript.type = 'text/javascript';
    yandexScript.async = true;

    document.body.appendChild(yandexScript);

    //include radario script to header
    const radarioScript = document.createElement("script");

    {/* <script src="http://radario.ru/scripts/widget/buy-button-widget.js" data-class="radarioButtonScript" data-radario-event-id="256884"></script> */}
    radarioScript.src = "http://radario.ru/scripts/widget/buy-button-widget.js";
    radarioScript.src = "/js/radario.js";
    radarioScript.setAttribute('data-class', "radarioButtonScript");
    radarioScript.type = 'text/javascript';
    radarioScript.async = true;

    document.body.appendChild(radarioScript);
  }

  toggleMenu() {
    this.setState({mobileMenu: !this.state.mobileMenu});
  }
  renderPage() {
    return (
      <Switch>
        <Route exact path="/" render={() => renderIndexPage.bind(this)()}/>
        <Route path="/spekt/:id" render={({match}) => renderSpektPage.bind(this)(match)}/>
        <Route path="/admin" render={() => renderAdminPage.bind(this)()}/>

        <Route path="/schedule" render={() => renderSchedulePage.bind(this)()}/>
        <Route path="/visit" render={() => renderVisitPage.bind(this)()}/>
        <Route path="/festival" render={() => renderFestivalPage.bind(this)()}/>
        <Route path="/partners" render={() => renderPartnersPage.bind(this)()}/>
        <Route path="/abonement" render={() => renderAbonementPage.bind(this)()}/>
        <Route path="/ficher/:id" render={({match}) => renderFicherPage.bind(this)(match)}/>
      </Switch>
    );
  }
  setPage(page, id) {
    if (typeof id !== "undefined")
      switch(page) {
        case "spekt":
          this.setState({ currentSpekt: id });
          break;
      }
    this.setState({
      currentPage: page,
      mobileMenu: false,
      navigationFixed: false,
    });
    window.scrollTo(0, 0);
  }
  scrollTo(id, offset) {
    // document.getElementById(id).scrollIntoView();
    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = document.getElementById(id).getBoundingClientRect();

    window.scrollTo(0, elemRect.top - bodyRect.top + (offset ? offset : 0));
    this.updateScroll();
    this.updateDimensions();
  }

  render() {
    if (typeof window === "undefined")
      return ""

    var headerLinks = this.state.headerLinks
    .map(link =>
      <NavLink
        to={"/" + link.address}
        onClick={() => this.setPage()}
        activeClassName='active'
        key={"navlink-" + link.address}
      >
        <li onClick={() => this.setPage(link.address)}>
          {capitalize(this.lang(link.label))}
        </li>
      </NavLink>
    );
    var headerLinksMobile = this.state.headerLinks
    .map(link =>
      <Link
        to={"/" + link.address}
        onClick={() => this.setPage()}
        key={link.address}
      >
        <button onClick={() => this.setPage(link.address)}>{capitalize(this.lang(link.label))}</button>
      </Link>
    );

    if (this.state.mobileMenu)
      return (
        <Router>
          <div className="menu">
            <header>
              <Link to={"/"} onClick={() => this.setPage()}>
                <img alt="" src={logoMobile} className="logo mobile" onClick={() => this.setPage("index")} />
              </Link>
              <Link to={"/"} onClick={() => this.setPage()}>
                <h4 className="mobile" onClick={() => this.setPage("index")} >{this.lang(["точка доступа", "the access point"])}</h4>
              </Link>
              <img alt="" src={cross} className="burger mobile" onClick={() => this.toggleMenu()}/>
            </header>
            {headerLinksMobile}
            <div className="lang" onClick={() => this.setState({lang: (this.state.lang + 1) % 2})}>
              <img alt="" src={this.state.lang ? "/img/Ru.png" : "/img/En.png"} className="flag" />
              <span>{this.state.lang ? "Ru" : "En"}</span>
            </div>
            <div className="social">
              <a href="https://www.instagram.com/tochkadostupaspb/" target="_blank" rel="noopener noreferrer">
                <img alt="" src={instagramLogo} className="instagram" />
              </a>
              <a href="https://www.facebook.com/tochkadostupa" target="_blank" rel="noopener noreferrer">
                <img alt="" src={facebookLogo} className="facebook" />
              </a>
              <a href="https://vk.com/tochkadostupa" target="_blank" rel="noopener noreferrer">
                <img alt="" src={vkLogo} className="vk" />
              </a>
            </div>
          </div>
        </Router>
      );

    return (
      <Router>
        <div className="App">
          <header className="selected-link">
            <ul className="column center desktop">
              {headerLinks}
            </ul>
            <Link to={"/"} onClick={() => this.setPage()}>
              <img alt="" src={logoMobile} className="logo mobile" onClick={() => this.setPage("index")} />
            </Link>
            <Link to={"/"} onClick={() => this.setPage()}>
              <h4 className="mobile">{this.state.lang ? "the access point" : "точка доступа"}</h4>
            </Link>
            <img alt="" src={burger} className="burger mobile" onClick={() => this.toggleMenu()}/>
          </header>
          <div className="left-column">
            <Link to={"/"} onClick={() => this.setPage()}>
              <img alt="" src={logo} className="logo" onClick={() => this.setPage("index")} />
            </Link>
            <Link to={"/"} onClick={() => this.setPage()}>
              <h6>{this.state.lang ? "the access point" : "точка доступа"}</h6>
            </Link>
            <div className="social">
              <a href="https://www.instagram.com/tochkadostupaspb/" target="_blank" rel="noopener noreferrer">
                <img alt="" src={instagramLogo} className="instagram" />
              </a>
              <a href="https://www.facebook.com/tochkadostupa" target="_blank" rel="noopener noreferrer">
                <img alt="" src={facebookLogo} className="facebook" />
              </a>
              <a href="https://vk.com/tochkadostupa" target="_blank" rel="noopener noreferrer">
                <img alt="" src={vkLogo} className="vk" />
              </a>
            </div>

          </div>
          <div className="right-column">
            <div className="lang" onClick={() => this.setState({lang: (this.state.lang + 1) % 2})}>
              <img alt="" src={this.state.lang ? "/img/Ru.png" : "/img/En.png"} className="flag" />
              <span>{this.state.lang ? "Ru" : "En"}</span>
            </div>
            <Link to={"/schedule"} onClick={() => this.setPage("schedule")}>
              <h6>{this.state.lang ? "buy tickets" : "купить билеты"}</h6>
            </Link>
          </div>
          <div className="container">
            <div className="content">
              {this.renderPage()}
            </div>
            <div className="footer">
              <small className="left">{this.state.lang ? "St. Petersburg, 2018" : "Санкт-Петербург, 2018"}</small>
              <small className="right margin">{this.state.lang ? "Site by " : "Сайт — "}<a href="https://vk.com/the_sociophobic" target="_blank" rel="noopener noreferrer">Lev</a></small>
              <small className="right">{this.state.lang ? "Design by " : "Дизайн — "}<a href="http://fnktn.com/" target="_blank" rel="noopener noreferrer">Funktion</a></small>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
