import React from 'react'

import Map from 'components/Map'

import myDate from 'utils/myDate.js'
import { capitalize, newLines } from 'utils/utils.js'

import age0 from 'svg/0.svg'
import age6 from 'svg/6.svg'
import age10 from 'svg/10.svg'
import age12 from 'svg/12.svg'
import age16 from 'svg/16.svg'
import age18 from 'svg/18.svg'

export default function(match) {
  var spekt = this.state.spekts.find(item => item.id == match.params.id);
  document.title = (this.state.lang ? "The Access Point: " : "Точка доступа: ") + this.lang(spekt.name);

  var schedule = spekt.schedule
  .map(day => {
    var date = new myDate(day.date, this.state.lang ? "ENG" : "RU");
    var shows = day.shows.sort((a, b) => a.time > b.time)
    .map(show => {
      let currentDate = new myDate();
      currentDate.addDay(-1);
      let spektDate = new myDate(day.date + " " + show.time)
      // console.log(day.date + " " + show.time + ", " + spektDate.dateTime() + ": " + currentDate.getTime() + " " + spektDate.getTime());
      // if (currentDate.getTime() > spektDate.getTime())
      if (true)
        return <button className="time empty" key={day.date + show.time}>
          {show.time}
        </button>;

      if (spekt.tickets !== undefined || show.tickets !== undefined ? "empty" : "")
        return <button className="time empty" key={day.date + show.time}>
          {show.time}
          <span className="tooltiptext">
            {
              spekt.tickets === 0 || show.tickets === 0 ?
                (this.state.lang ? "Tickets will be available soon" : "Билеты скоро в продаже")
              :
                (spekt.tickets === -1 || show.tickets === -1 ? (this.state.lang ? "No tickets" : "Билетов нет") : "")
            }
          </span>
        </button>;
      return show.radarioId ?
        <button className="time" data-radario-event-id={show.radarioId} key={day.date + show.time}>
          {show.time}
        </button>
        :
        (
          window.innerWidth < 1024 || true ?
            <a href={show.alt} target="_blank" rel="noopener noreferrer" key={day.date + show.time}>
              <button className="time">
                {show.time}
              </button>
            </a>
          :
            <div key={day.date + show.time}>
              <button className="time" onClick={() => this.setState({facelessIframe: !this.state.facelessIframe})}>
                {show.time}
              </button>
              {
                this.state.facelessIframe ?
                <div className="black-area" onClick={() => this.setState({facelessIframe: false})}>
                  <iframe title="" src={show.alt} />
                </div>
                : ""
              }
            </div>
        )
    });

    return (
      <div className="row small" key={day.date}>
          <div className="dates">
            <span>{day.additionalDate ? (this.lang(day.additionalDate) + ", ") : ""}</span>
            <span>{date.date()}, {date.dayOfWeekShort()}</span>
          </div>
          <div className="column60">
            <div className="row">
              <div className="times">
                {shows.slice(0, 2)}
              </div>
            </div>
            <div className="row">
              <div className="times">
                {shows.slice(2)}
              </div>
            </div>
          </div>
      </div>
    );
  });
  var age;
  switch(spekt.age) {
    case 18:
      age = age18;
      break;
    case 16:
      age = age16;
      break;
    case 12:
      age = age12;
      break;
    case 10:
      age = age10;
      break;
    case 6:
      age = age6;
      break;
    case 0:
      age = age0;
      break;
    default:
      age = "";
      break;
  }
  var team = spekt.team.map(position =>
    <div className="position" key={position.label}>
      <div className="row">
        {this.lang(position.label)}
      </div>
      <div className="row">
        {
          position.people.map((name, index) =>
            <b key={position.label + name}>{this.lang(name)}{index < position.people.length - 1 ? ", " : ""}</b>
          )
        }
      </div>
    </div>
  );
  var partners = spekt.partners
  .map((partnerId, index) => {
    var partner = this.state.partners.find(partner => partner.id === partnerId);
    if (partner === undefined)
      return;
    return (
      <a href={partner.link} className={(index % 2 ? "" : "margin")} target="_blank" rel="noopener noreferrer" key={partner.img}>
        <div className="partner">
          <div className="row">
            <img alt="" src={"/img/partners/1x/" + partner.img} className="logo"/>
          </div>
          <div className={[44, 43, 19, 36, 8, 56].includes(partner.id) ? "text-center" : ""}>
            {this.lang(partner.labelSpekt)}
          </div>
        </div>
      </a>
    );
  });

  var partnersPairs = [];
  partners.forEach((partner, index) => {
    if (index % 2 === 0)
      partnersPairs.push([partner, ]);
    else
      partnersPairs[Math.floor(index / 2)].push(partner);
  });
  var partnersMapped = partnersPairs.map(pair =>
    <div className="row small">
      {pair[0]}
      {pair[1]}
    </div>
  );

  if (spekt.id === 0)
    return (
      <div>
        <div className="upper">
          <img alt="" src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
          <div className="inner-container">
            <div className="row bottom">
              <h5>{capitalize(this.lang(spekt.place))}</h5>
              <h3>{capitalize(this.lang(spekt.name))}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-container">
            <div className="left-tab center">
              <div className="textarea">
                {newLines(this.lang(spekt.text))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="upper">
        <img alt="" src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
        <div className="inner-container">
          <div className="row bottom">
            <h5>{capitalize(this.lang(spekt.place))}</h5>
            {this.lang(spekt.logo) ? <img alt="" src={this.lang(spekt.logo)} className="logo" /> : <h3>{capitalize(this.lang(spekt.name))}</h3>}
            {this.lang(spekt.additionalTitleText) ? <span>{this.lang(spekt.additionalTitleText)}</span> : ""}
          </div>
        </div>
      </div>
      <div>
        <div className="small-container">
          <div className="left-tab">
            <div className="textarea">
              {
                spekt.id === 10 ?
                <div className="yellow-block">
                  {this.lang(["Посещение спектакля бесплатно, по предварительной регистрации", "Entrance is free, by prior registration."])}
                </div>
                : ""
              }
              {
                spekt.id === 6 ?
                <div className="yellow-block">
                  {this.lang([<p>Специальная цена по промокоду <b>TO4KA</b></p>, "Spezial price with promocode TO4KA"])}
                </div>
                : ""
              }
              {newLines(this.lang(spekt.text))}
            </div>
            {
              spekt.youtube ?
                <div className="youtube">
                  <div className="youtube-container">
                    <iframe title="" src={spekt.youtube} />
                  </div>
                </div>
              : ""
            }
          </div>
          <div className="right-tab">
            <div className="schedule-block">
              {/* {
                spekt.id === 6 ?
                <div className="row big">Специальная цена по промокоду <b>TO4KA</b></div>
                :
                ""
              } */}
              <div className="row big">
                <div className="row small">
                  <h5>{this.state.lang ? "Schedule and tickets" : "Расписание и билеты"}</h5>
                </div>
                {
                  spekt.id === 10 ?
                    <div className="row small">
                      <span>{this.lang(["Билеты закончились", "No tickets"])}</span>
                    </div>
                    : ""
                }
                <div className="timetable">
                  {schedule}
                </div>
              </div>
              <div className="row big">
                <span>{this.state.lang ? "Duration" : "Продолжительность"} {this.lang(spekt.duration)}</span>
              </div>
              <div className="row">
                <div className="row small">
                  <h5>{this.state.lang ? "Address" : "Адрес"}</h5>
                </div>
                <div className="row small address">
                {this.lang(spekt.address)}
                </div>
                <div className="row small">
                  <button className="directions" onClick={() => this.scrollTo("map")}>{this.state.lang ? "Directions" : "Как добраться?"}</button>
                </div>
              </div>
              <div className={"row big partners " + (spekt.partners.length > 0 ? "" : "invisible")}>
                {/* <div className="row small">
                  <h5>Спектакль создан при содействии</h5>
                </div> */}
                {partnersMapped}
              </div>
              <img alt="" src={age} />
            </div>
            {
              spekt.banners ?
                <a href={spekt.banners[this.state.abonementPic - 1].link} target="_blank" rel="noopener noreferrer">
                  <img alt="" src={"/img/spekts/" + spekt.banners[this.state.abonementPic - 1].img} className="banner" />
                </a> : ""
            }
          </div>
          <div className="left-tab">
            <h4>{this.lang(["Команда спектакля", "Team"])}</h4>
            <div className="row margin">
              <div className="half">
                {team.slice(0, Math.ceil(spekt.team.length / 2))}
              </div>
              <div className="half">
                {team.slice(Math.ceil(spekt.team.length / 2))}
              </div>
            </div>
            <h4>{this.state.lang ? "Directions" : "Как добраться?"}</h4>
            {spekt.deWay}
            {
              spekt.id === 3 ?
                <Map locations={[
                  {
                    name: ["Музей инопланетного вторжения", "The Alien Invasion Museum"],
                    description: ["Организован трансфер до форта Константин, за 30 мин до начала спектакля. Место отправления — Кронштадское ш. д 38", "from «Parnas» metro station — 30 minutes on foot, or 28 minutes by car"],
                    place: ["Форт Константин, Кронштадт", "Fort Constantine, Kronstadt"],
                  },
                  {
                    name: ["Место посадки на трансфер до Музея Инопланетного Вторжения", "Landing site for «The Alien Invasion Museum» transfer"],
                    // name: ["Посадка на автобус до Музея инопланетного вторжения", "The Alien Invasion Museum bus stop"],
                    description: ["Время в пути 30 мин", "Travel time 30 minutes"],
                    place: ["Кронштадтское ш. д 38", "Kronshtadtskoye Shosse, 38"],
                  }
                ]}
                lang={this.state.lang}
              />
              :
                <Map location={this.lang(spekt.address)} lang={this.state.lang} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
