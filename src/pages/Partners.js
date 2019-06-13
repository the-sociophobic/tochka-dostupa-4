import React from 'react'

import Partners from 'components/Partners'

export default function() {
  document.title = this.lang(["Точка Доступа: Партнеры", "The Access Point: Partners"]);

  var blocks4 = [
    this.lang(["Фестиваль проходит при поддержке", "Festival is supported by"]), 0, null, null,
    this.lang(["При поддержке", "Support by"]), 1, null, null,
    this.lang(["Соорганизаторы спектакля «Марат / Сад»", "\"Marat / Sade\" is a collaboration with"]), 2, this.lang(["При поддержке", "Support by"]), 3,
    this.lang(["Туристический партер", "Tourist partner"]), 4, this.lang(["Техно-логический партнер", "Techno-logical partner"]), 5,
    this.lang(["Официальный перевозчик", "Official carrier"]), 6, null, null,
    this.lang(["Площадки фестиваля", "Theatrical venues"]), 7, 8, 32,
    null, 9, 42, 39,
    null, 11, 12, 13,
    null, 14, 53, 54,
    this.lang(["Официальный перевозчик спектакля «Музей инопланетного вторжения»", "Official carrier of «The Alien Invasion Museum» show"]), 30, null, null,
    this.lang(["Участники фестиваля", "Festival participants"]), 15, 16, 17,
    null, 18, 19, null,
    this.lang(["Партнеры образовательной программы", "Educational programm partners"]), 49, 50, 12,
    null, 18, 52, 51,
    this.lang(["Генеральный интернет партнер", "General internet partner"]), 23, this.lang(["Креативный партнер", "Creative partner"]), 56,
    this.lang(["Информационные партнеры", "Informational partners"]), 22, 24, 20,
    null, 21, 26, 29,
    null, 27, 34, 37,
    null, 28, 38, 25,
    null, 45, 46, 47,
    null, 48, 55, null,
    this.lang(["Билетная система", "Ticket system"]), 35, this.lang(["Поставщик промопродукции", "Promotional merchandise provider"]), 40,
    this.lang(["Полиграфический партнер", "Polygraphic parner"]), 41, null, null,
  ];
  var blocks3 = [
    this.lang(["Фестиваль проходит при поддержке", "Festival is supported by"]), 0, null,
    this.lang(["При поддержке", "Support by"]), 1, null,
    this.lang(["Соорганизаторы спектакля «Марат / Сад»", "\"Marat / Sade\" is a collaboration with"]), 2, null,
    this.lang(["При поддержке", "Support by"]), 3, null,
    this.lang(["Туристический партер", "Tourist partner"]), 4, null,
    this.lang(["Техно-логический партнер", "Techno-logical partner"]), 5, null,
    this.lang(["Официальный перевозчик", "Official carrier"]), 6, null,
    this.lang(["Площадки фестиваля", "Theatrical venues"]), 7, 8,
    null, 32, 9,
    null, 42, 39,
    null, 11, 12,
    null, 13, 14,
    null, 53, 54,
    this.lang(["Официальный перевозчик спектакля «Музей инопланетного вторжения»", "Official carrier of «The Alien Invasion Museum» show"]), 30, null,
    this.lang(["Участники фестиваля", "Festival participants"]), 15, 16,
    null, 17, 18,
    null, 19, null,
    this.lang(["Партнеры образовательной программы", "Educational programm partners"]), 49, 50,
    null, 12, 18,
    null, 52, 51,
    this.lang(["Генеральный интернет партнер", "General internet partner"]), 23, null,
    this.lang(["Креативный партнер", "Creative partner"]), 56, null,
    this.lang(["Информационные партнеры", "Informational partners"]), 22, 24,
    null, 20, 21,
    null, 26, 29,
    null, 27, 34,
    null, 37, 28,
    null, 38, 25,
    null, 45, 46,
    null, 47, 48,
    null, 55, null,
    this.lang(["Билетная система", "Ticket system"]), 35, null,
    this.lang(["Поставщик промопродукции", "Promotional merchandise provider"]), 40, null,
    this.lang(["Полиграфический партнер", "Polygraphic parner"]), 41, null,
  ];


  return (
    <div className="partners-container">
      <h1 className="text-center">{this.state.lang ? "Partners" : "Партнеры"}</h1>
      <div className="row">
        <Partners blocks3={blocks3} blocks4={blocks4} partners={this.state.partners} />
      </div>
    </div>
  );
}
