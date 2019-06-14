import React from 'react'

import { Link } from 'react-router-dom'

import myDate from 'utils/myDate.js'
import { capitalize } from 'utils/utils.js'

export default function() {
  document.title = "Точка доступа: Расписание";

  var days = [];
  this.state.spekts
  .filter(spekt => this.state.scheduleFilter === "all" || spekt.category === this.state.scheduleFilter)
  .forEach(spekt => {
    spekt.schedule.forEach(day => {
      day.shows
      .forEach(show => {
        if (!days.find(d => d.date === day.date))
          days.push({
            date: day.date,
            spekts: [],
          });
        days.find(d => d.date === day.date).spekts.push({
          id: spekt.id,
          name: this.lang(spekt.name),
          address: this.lang(spekt.address),
          metro: this.lang(spekt.metro),
          time: show.time,
          tickets: spekt.tickets !== undefined ? spekt.tickets : (show.tickets !== undefined ? show.tickets : undefined),
          radarioId: show.radarioId,
          alt: show.alt,
        });
      });
    });
  });
  var daysMapped = days
  .sort((a, b) => {
    var date = new myDate(b.date);
    return (date.comp(a.date));
  })
  .map(day => {
    var date = new myDate(day.date, this.state.lang ? "ENG" : "RU");
    var spekts = day.spekts
    .sort((a, b) => a.time > b.time)
    .map((spekt, index) => {
      var buyButton;
      buyButton = <button className="empty">
          {this.lang(["Билет", "Ticket"])}
          <span className="tooltiptext">
            {this.lang(["Событие закончилось", "Event has finished"])}
          </span>
        </button>;

      return (
        <article className="spekt-listing" key={index}>
          <div className="time">
            {spekt.time}
          </div>
          <div className="desc">
            <div className="name">
              <Link to={"/spekt/" + spekt.id} onClick={() => this.setPage("spekt", spekt.id)}>
                {spekt.name}
              </Link>
            </div>
            <div className="address">
              <span>
                {spekt.address}
              </span>
              <span>
                {spekt.metro}
              </span>
            </div>
          </div>
          <div className="ticket">
            {buyButton}
            {/* <iframe title="" className="faceless" src="https://iframeab-pre1303.intickets.ru/node/10741271" /> */}
            {
              spekt.id === 6 ?
              <div className="row big">Специальная цена по промокоду <b>TO4KA</b></div> : ""
            }
          </div>
        </article>
      );
    });

    return (
      <article className="day-listing" key={date.date()}>
        <h3>{date.date()}</h3>
        <div className="spekts">
          {spekts}
        </div>
      </article>
    );
  });

  var filterButtons = [
    {
      id: "all",
      label: (this.state.lang ? "All plays" : "Все спектакли"),
    },
    {
      id: 0,
      label: (this.state.lang ? "Own program" : "Собственная программа"),
    },
    {
      id: 1,
      label: (this.state.lang ? "Guest program" : "Гастрольная программа"),
    },
    {
      id: 2,
      label: (this.state.lang ? "Special program" : "Специальная программа"),
    },
  ].map(button =>
    <button
      className={this.state.scheduleFilter === button.id ? "active" : ""}
      onClick={() => {this.setState({scheduleFilter: button.id}); window.scrollTo(0, 0);}}
      key={button.id}
    >
      {capitalize(button.label)}
    </button>
  );

  var navigationContent = this.state.mobile ?
    <div className="container">
      {filterButtons
        .map((button, index) =>
          <div className="column center" key={index}>
            {button}
          </div>
        )
      }
    </div>
    :
    <div className="container">
      <div className="column center">
        {filterButtons.slice(0, 2)}
      </div>
      <div className="column center">
        {filterButtons.slice(2)}
      </div>
    </div>;

  return (
    <div className="schedule-container">
      <h2 className="text-center" id="visit-title">{this.state.lang ? "Schedule" : "Расписание"}</h2>
      <article id="visit-navigation">
        {navigationContent}
      </article>
      <article id="visit-navigation" className={"fixed " + (this.state.navigationFixed && !this.state.mobile ? "visible" : "invisible")}>
        {navigationContent}
      </article>
      {/* <Abonement pic={this.state.abonementPic} lang={this.lang.bind(this)} /> */}
      {daysMapped}
    </div>
  );
}