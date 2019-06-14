import React from 'react'

import Partners from 'components/Partners'

import myDate from 'utils/myDate.js'

export default function(match) {
  var ficher = this.state.fichers.find(item => item.id == match.params.id);
  document.title = this.lang(["Точка доступа: Режиссерская лаборатория", "The Access Point: Director's"]);

  return (
    <div>
      <div className="upper">
        <div className="inner-container">
          <img alt="" src={"/img/fichers/" + ficher.background} className="background" />
          <h3 className="text-center">
            {this.lang(ficher.name)}
          </h3>
        </div>
      </div>
      <div className="lab-container">
        {ficher.text ? this.lang(ficher.text) : ""}
        <div className="schedule-container">
          {
            !ficher.events ? "" :
            ficher.events.map((event, index) => {
                var date = new myDate(event.date, this.state.lang ? "ENG" : "RU");
                var shows = event.shows
                .map((show, index_lower) => {
                  var buyButton;

                  if (event.link)
                    ;
                  else {
                    if (!show.link) {
                      buyButton = (
                        <button className="empty">
                          {this.lang(["Регистрация", "Register"])}
                          <span className="tooltiptext">
                            {this.lang(["Билеты скоро появятся", "tickets will be available soon"])}
                          </span>
                        </button>
                      );
                    }
                    else {
                      buyButton = <a href={show.link} target="_blank" rel="noopener noreferrer">
                          <button>
                            {this.lang(["Регистрация", "Register"])}
                          </button>
                        </a>
                    }
                  }

                  return (
                    <article className="spekt-listing" key={index_lower}>
                      <div className="time">
                        {show.time}
                      </div>
                      <div className="desc">
                        <div className="name">
                          <a className="no-link">
                            {show.name}
                          </a>
                        </div>
                        <div className="address">
                          <span>
                            {show.description}
                          </span>
                        </div>
                      </div>
                      <div className="ticket">
                        {buyButton}
                      </div>
                    </article>
                  );
                });
              let registerButton;
              if (event.link)
              registerButton = <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button>
                    {this.lang(["Регистрация", "Register"])}
                  </button>
                </a>;

              return <article className="day-listing" key={index}>
                <h3>{date.date()} {registerButton}</h3>
                <div className="spekts">
                  {shows}
                </div>
              </article>;
            })
          }
        </div>
        {
          ficher.partners ?
          <div className="partners-container">
            <h3 className="text-center">Партнеры</h3>
            <Partners blocks3={[49, 50, 12, 18, 52, 13, 51]} blocks4={[49, 50, 12, 18, 52, 13, 51]} partners={this.state.partners} path={"/../"}/>
          </div>
          : ""
        }
      </div>
    </div>
  );
}
