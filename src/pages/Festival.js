import React from 'react'

export default function() {
  document.title = this.state.lang ? "The Access Point: Festival" : "Точка Доступа: Фестиваль";

  var workersMapped = this.state.workers.map(worker =>
    <div className="worker" key={worker.title}>
      <div className="name">{this.lang(worker.name)}</div>
      <div className="title">{this.lang(worker.title)}</div>
    </div>
  );
  var team;
  if (window.innerWidth > 1100)
    team = <div className="row">
        <div className="third margin">
          {workersMapped.filter((w, i) => i % 3 === 0)}
        </div>
        <div className="third margin">
          {workersMapped.filter((w, i) => i % 3 === 1)}
        </div>
        <div className="third">
          {workersMapped.filter((w, i) => i % 3 === 2)}
        </div>
      </div>;
    else if (window.innerWidth > 768)
      team = <div className="row">
        <div className="half margin">
          {workersMapped.filter((w, i) => i % 2 === 0)}
        </div>
        <div className="half">
          {workersMapped.filter((w, i) => i % 2 === 1)}
        </div>
      </div>;
    else
      team = <div className="row">
        {workersMapped}
      </div>;

  return (
    <div>
      <div className="upper">
        <div className="inner-container">
          <img alt="" src={"/img/fest.jpg"} className="background" />
          <h3 className="text-center">{this.lang(["О фестивале", "Festival"])}</h3>
        </div>
      </div>
      <div className="festival-container">
        {
          this.state.lang ?
          <div>
            <span>
            The Summer Festival of Arts "The Access Point" is one of the biggest event of site-specific art in Europe, a large celebration of contemporary culture that takes place annually in St. Petersburg, Russia. It gives panoramic view of the non-conventional kinds of theatre, contemporary fine and interdisciplinary arts paying its special respect to the immersive and site-specific productions. The festival attracts high attention of professional and local community. 
            </span>
            <span>
            The festival gives two types of performances: invited productions and comissioned works. In the frame of the program 2017 there were prepared the following world premieres: Mausoleum Buffo: Lennongrad revisited (Ancompany and Co., Germany), (Re)writing the (Fe)male Okt(Re)volution (Thomas Myrmel, Netherlands-USA), Afghan-Kuzminiki (Paver Arseniev, Russia), Red noise (Vokrug da Okolo, Russia), Appartment 44 (Olga Jitlina, Russia), A Butterfly Encounter (Sergei Chekhov, Russia), Green Pastures (Novoibirsk Drama Theatre, Russia), Grandmother's Glasses (Radion Bukaev, Russia). Within the frameworks the festival the conference Revolution in the Theatre Space took place and attracted the researchers from different parts of Russia, the USA, the UK, Germany, the CIS and Baltic countries. 
            </span>
            <span>
            In 2018 festival will start 19th July and will last till 5th August 2018 in St. Petersburg. This year the program includes productions from Australia, Switzerland, Iran, Germany and Russian Republic of Tatarstan and extensive educational program. 
            </span>
          </div>
          :
          <div>
            <span>
              События фестиваля проходят в необычных пространствах: с 19 июля по 5 августа в Петербурге пройдет четвертый фестиваль «Точка доступа» — крупнейший в России форум, специализирующийся на сайт-специфическом театре и искусстве. События фестиваля проходят в необычных пространствах, здесь ландшафты, архитектура, известные и закрытые локации Петербурга превращаются в территорию искусства. Начиная с первой «Точки доступа», фестиваль работает как продюсерский центр: не только приглашает спектакли, но и выпускает собственные премьеры.
            </span>
            <span>
              В 2017-м мы заявили о себе как о международном фестивале и в новом сезоне продолжаем держать курс на культурное сотрудничество с другими странами. В афише этого года — премьеры от постановщиков из Германии, Швейцарии и Ирана, гастроли оперного спектакля из Австралии и петербургские премьеры спектаклей из Москвы и Казани. Четвертая «Точка доступа» впервые выезжает за пределы Петербурга — режиссерская лаборатория «Культурный герой XXI» пройдет в выборгской Библиотеке Алвара Аалто — шедевре конструктивизма.
            </span>
          </div>
        }
        <h3>{this.lang(["Команда фестиваля", "Team"])}</h3>
        {team}
        <h3>{this.lang(["Архив «Точки доступа»", "The Access Point Archive"])}</h3>
        <a href="http://archive.tochkadostupa.spb.ru/festival2015" target="_blank" rel="noopener noreferrer" className="archive margin">
          <h3>2015</h3>
        </a>
        <a href="http://archive.tochkadostupa.spb.ru/festival2016" target="_blank" rel="noopener noreferrer" className="archive margin">
          <h3>2016</h3>
        </a>
        <a href="http://archive.tochkadostupa.spb.ru/festival2017" target="_blank" rel="noopener noreferrer" className="archive">
          <h3>2017</h3>
        </a>
      </div>
    </div>
  );
}
