import React from 'react'

import { Link } from 'react-router-dom'

export default function() {
  document.title = this.state.lang ? "The Access Point: Subscription" : "Точка доступа: Абонемент";

  var spekts = [5, 4, 3, 2, 1, /* abonement 2 */ 5, 4, 3, 2, 1, 9, 7, 6]
  .map((id, index) => {
    var spekt = this.state.spekts.find(spekt => spekt.id === id);
    return <div className="row" key={index}>
        <Link to={"spekt/" + spekt.id} onClick={() => this.setPage("spekt", spekt.id)}>{this.lang(spekt.name)}</Link>
        {(id === 0 ? (<p>{this.state.lang ? "all 4 evenings" : "все 4 вечера"}</p>) : "")}
      </div>;
  });

  return (
    <div className="abonements-container">
      <h1 className="text-center">{this.state.lang ? "Subscriptions" : "Абонементы"}</h1>
      {
        this.state.lang ?
        <span>To attend all performances of festivals, we developed two categories of subscription, each category offers a number of performances of the festival.</span>
        :
        <span>Для посещения всех спектаклей фестиваля мы разработали две категории абонементов, каждая из категорий предлагает посетить ряд спектаклей фестиваля.</span>
      }
      <div className="abonements-row">
        <div className="abonement left">
          <h3>{this.state.lang ? "Subscription" : "Абонемент"}</h3>
          <span>{this.state.lang ? "This subscription allows you to visit:" : "С этим абонементом можно поcетить спектакли:"}</span>
          {spekts.slice(0, 5)}
          <div className="buy-row">
            <button className="buy" data-radario-event-id="270697">{this.state.lang ? "BUY" : "КУПИТЬ"}</button>
            <h4>5000 ₽</h4>
          </div>
        </div>
        <div className="abonement right">
          <h3>{this.state.lang ? "Subscription+" : "Абонемент+"}</h3>
          <span>{this.state.lang ? "This subscription allows you to visit:" : "С этим абонементом можно поcетить спектакли:"}</span>
          {spekts.slice(5)}
          <div className="buy-row">
            <button className="buy" data-radario-event-id="270698">{this.state.lang ? "BUY" : "КУПИТЬ"}</button>
            <h4>9500 ₽</h4>
          </div>
        </div>
      </div>
      {
        this.state.lang ?
        ""
        :
        <div>
          <span>Первые 10 обладателей «Абонемента+» получат в подарок билет на спектакль «Вишневый сад. Тишина» в специальной программе фестиваля.</span>
          <span>После покупки абонемента на почту придет инструкция по его активации.</span>
          <span>Если у Вас возникли вопросы или сложности при активации абонемента, пожалуйста, свяжитесь с нами по почте <a href="mailto:tickets@tochkadostupa.spb.ru" className="yellow-link">tickets@tochkadostupa.spb.ru</a>.</span>
        </div>
      }
    </div>
  );
}
