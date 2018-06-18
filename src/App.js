import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Loadable from 'react-loadable';

// import Sortable from './Sortable.js';
import myDate from './myDate.js';

import logo from './svg/logo.svg';
import logoMobile from './svg/logo_mobile.svg';
import burger from './svg/burger.svg';
import cross from './svg/cross.svg';
import instagramLogo from './svg/instagram.svg';
import facebookLogo from './svg/facebook.svg';
import vkLogo from './svg/vk.svg';
import addressIconWhite from './svg/address_white.svg';
import addressIconYellow from './svg/address_yellow.svg';
import addressIconBlack from './svg/address_black.svg';
import age0 from './svg/0.svg';
import age6 from './svg/6.svg';
import age12 from './svg/12.svg';
import age16 from './svg/16.svg';
import age18 from './svg/18.svg';

// import appStore from './svg/app_store.svg';
// import playMarket from './svg/play_market.svg';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 0,

      code: "",
      firstRun: true,

      alert1: false,
      alert2: false,
      abonementPic: true,

      scheduleFilter: "all",
      mobileMenu: false,

      width: 0,
      height: 0,
      mobile: false,
      heightIOS: 0,
      landscape: false,
      scrollX: 0,
      scrollY: 0,
      navigationFixed: false,

      headerLinks: [
        { address: "schedule", label: ["расписание", "schedule"] },
        { address: "visit", label: ["практическая информация", "practical information"] },
        { address: "festival", label: ["фестиваль", "festival"] },
        { address: "partners", label: ["партнеры", "partners"] },
      ],

      fichers: [
        {
          id: 0,
          name: ["Режиссерская лаборатория «Культурный герой XXI»", "Theater Directing Lab «Cultural Hero XXI»"],
          place: ["Библиотека им. А. Аалто", "A. Aalto library"],
          address: ["город Выборг", "Vyborg town"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/414f67ca730bc89a0c203ea1ffe35883/5B590AAD/t51.2885-15/e35/20582724_1232904960151674_9179513050598735872_n.jpg",
        }
      ],

      spekts: [
        {
          id: 0,
          name: ["Маленькие ночи", "Little Nights"],
          place: ["Спектакль вокруг театров", "Perfomance around the theaters"],
          address: ["Литейный пр., 53", "Liteyniy pr., 53"],
          placeDesc: ["Спектакль вокруг театров", "Perfomance around the theaters"],
          metro: ["м. Маяковская/Площадь восстания, м. Гостиный двор/Невский проспект", "Mayakovskaya metro station, Gostiny Dvor metro station"],
          mapDescription: ["Ближайшие станции метро — «Гостиный двор»/«Невский проспект», «Владимирская», «Чернышевская»", "Nearest metro stations — Mayakovskaya station, Gostiny Dvor station"],
          age: 16,
          duration: ["2 часа", "2 hours"],
          category: 0,
          partners: [28, ],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/148b72445e0a27f9848418dff0fc9181/5B6D1AF0/t51.2885-15/e35/20481779_247489175771086_8234287535837151232_n.jpg",
          schedule: [
            {
              date: "21.07.2018",
              additionalDate: ["Первая ночь", "First night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268754"
                },
              ],
            },
            {
              date: "22.07.2018",
              additionalDate: ["Вторая ночь", "Second night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268754"
                },
              ],
            },{
              date: "23.07.2018",
              additionalDate: ["Третья ночь", "Third night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268754"
                },
              ],
            },{
              date: "24.07.2018",
              additionalDate: ["Четвертая ночь", "Fourth night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268754"
                },
              ],
            },
            {
              date: "26.07.2018",
              additionalDate: ["Первая ночь", "First night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268756"
                },
              ]
            },
            {
              date: "27.07.2018",
              additionalDate: ["Вторая ночь", "Second night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268756"
                },
              ]
            },{
              date: "28.07.2018",
              additionalDate: ["Третья ночь", "Third night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268756"
                },
              ]
            },
            {
              date: "29.07.2018",
              additionalDate: ["Четвёртая ночь", "Fourth night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268756"
                },
              ]
            },
            {
              date: "01.08.2018",
              additionalDate: ["Первая ночь", "First night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268758"
                },
              ]
            },
            {
              date: "02.08.2018",
              additionalDate: ["Вторая ночь", "Second night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268758"
                },
              ]
            },
            {
              date: "03.08.2018",
              additionalDate: ["Третья ночь", "Third night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268758"
                },
              ]
            },
            {
              date: "04.08.2018",
              additionalDate: ["Четвёртая ночь", "Fourth night"],
              shows: [
                {
                  time: "21:30",
                  radarioId: "268758"
                },
              ]
            }
          ],
          team: [
            {
              label: ["Режиссёр", "Director"],
              people: [["Али Асгар Дашти (Иран)", "Ali Asghar Dashti (Iran)"], ]
            },
            {
              label: ["Драматург", "Dramaturg"],
              people: [["Андрей Пронин", "Andrey Pronin"], ]
            },
          ],
          text: ["«Точка доступа» выпускает собственный театральный сериал — в четырех последовательных показах поздними вечерами, переходящими в белые ночи. Мечтательный гастарбайтер четыре раза будет бороться за сердце Настеньки, приглашая ее в театр. По странному совпадению, все четыре вечера в театрах Петербурга будут идти «Маленькие трагедии» Пушкина: «Моцарт и Сальери», «Скупой рыцарь», «Каменный гость» и «Пир во время чумы». Правда, в необычной постановке — с явным восточным колоритом. Зрители будут сопровождать Мечтателя и Настеньку до, во время и после спектаклей, придут вместе с ними в бедную квартиру Мечтателя, где тот попытается развлечь возлюбленную чтением сказок «Тысячи и одной ночи».\nСпектакль-сериал удивительным образом совмещает путешествие по Петербургу и привычный формат «зрители в зале — актеры на сцене». Взрывная смесь тем и эстетик, размышление о взаимодействии восточной и западной культур, о миграции и внутренней эмиграции, дерзкое соединение Пушкина, Достоевского и средневековых арабских текстов — всё это «Маленькие ночи», первый российский спектакль заметного иранского режиссера Али Асгара Дашти. В России известен феномен иранского кино, в последние годы появилась возможность познакомиться и с впечатляющими достижениями иранского театра. Но пригласить режиссера из Ирана на постановку в России впервые рискнула именно «Точка доступа».\nАли Асгар Дашти отличается широким разнообразием творческих поисков: он занимается как реновацией традиционного иранского театра, преобразуя древнюю иранскую традицию представлений «тазийе», так и новейшими формами документального театра, например, поставил спектакль, основанный на монологах родственников раковых больных. Среди самых известных спектаклей Дашти и его Don Quixote Theatre Group — «Монодиалоги», «Телль/ Заххак», «Пиноккио», «Мулла Насреддин», «Дон Кихот», «Маленький принц», «Кофейня/ Интерьер/ Ночь», «Зан», «Продавец рук и ног», «Любовные речи двух полицейских при красном свете».",
          "The play is based on White Nights by Fyodor Dostoevsky, The Little Tragedies by Alexander Pushkin and a collection of middle Eastern folktales One Thousand and One Nights.\nThe Access Point releases its own theatrical series as a chain of four shows taking place at late evenings that turn into white nights.\nThe starry-eyed guest worker will fight for Nastenka's heart four times by inviting her to go to the theatre. By a strange coincidence, all four evenings in the theatres of St. Petersburg The Little Tragedies by Pushkin (Mozart and Salieri, The Covetous Knight, The Stone Guest and A Feast in Time of Plague) will take place. Although these unusual performances will be presented with a distinct oriental colour.\nThroughout the performances, the audience will accompany the Dreamer and Nastenka and visit the poor Dreamer’s apartment, where he will try to entertain his beloved by reading tales from One Thousand and One Night.\nThis series of performances strikingly combines a journey around Saint Petersburg and a familiar format ‘people in the audience - actors on stage’. The explosive mix of topics and aesthetical forms, the contemplation on the interaction of Eastern and Western cultures, migration, and internal emigration, the daring combination of Pushkin, Dostoevsky and medieval Arab tales comprise Little Nights, the first Russian performance of the prominent Iranian director Ali Asghar Dashti.\nThe phenomenon of Iranian cinema is known in Russia, and in recent years it has become possible to get acquainted with the impressive achievements of the Iranian theatre. But it was The Access Point that took a chance to invite the director from Iran to the Russian production for the first time ever.\nAli Asghar Dashti is engaged in both renovation of the traditional Iranian theatre, transforming the ancient Iranian tradition of “tazyie” performances and the latest forms of documentary theatre. For example, he staged a performance based on the monologues of cancer patients’ relatives. Among the most famous performances of Dashti and his Don Quixote Theatre Group are Monodialogue, Tell/ Zahhak, Pinocchio, Molla Nasreddin, Don Quixote, The Little Prince, Café Shop/Interior/Night, Zan, Hand & Leg Seller, Amorous Conversation of Two Policemen behind the Red Light."
          ],
        },
        {
          id: 1,
          name: ["Санкт-Петербург вне себя", "Delirious Saint Petersburg"],
          place: ["Спектакль на теплоходе", "Perfomance on the ship"],
          address: ["Воскресенская наб., 20", "Pier, Voskresenskaya nab., 20"],
          placeDesc: ["Спектакль на теплоходе", "Perfomance on the ship"],
          mapDescription: ["Ближайшие станции метро — «Чернышевская»", "Nearest metro station — Chernyshevskaya"],
          metro: ["м. Чернышевская", "Chernyshevskaya station"],
          age: 12,
          duration: ["2 часа", "2 hours"],
          category: 0,
          partners: [3, 31],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d457d73c89322287200510dc3c001c8f/5B63DF85/t51.2885-15/e35/20393775_502362776778010_593456474764607488_n.jpg",
          schedule: [
            {
              date: "31.07.2018",
              shows: [
                {
                  time: "15:00",
                  radarioId: "268710"
                },
                {
                  time: "17:00",
                  radarioId: "268711"
                },
                {
                  time: "19:00",
                  radarioId: "268712"
                },
              ]
            },
            {
              date: "01.08.2018",
              shows: [
                {
                  time: "15:00",
                  radarioId: "268714"
                },
                {
                  time: "17:00",
                  radarioId: "268715"
                },
                {
                  time: "19:00",
                  radarioId: "268713"
                },
              ]
            },
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "15:00",
                  radarioId: "268717"
                },
                {
                  time: "17:00",
                  radarioId: "268716"
                },
                {
                  time: "19:00",
                  radarioId: "268718"
                },
              ]
            },
            {
              date: "04.08.2018",
              shows: [
                {
                  time: "15:00",
                  radarioId: "268721"
                },
                {
                  time: "17:00",
                  radarioId: "268720"
                },
                {
                  time: "19:00",
                  radarioId: "268719"
                },
              ]
            },
            {
              date: "05.08.2018",
              shows: [
                {
                  time: "15:00",
                  radarioId: "268722"
                },
                {
                  time: "17:00",
                  radarioId: "268723"
                },
                {
                  time: "19:00",
                  radarioId: "268724",
                  tickets: -1,
                },
              ]
            },
          ],
          team: [
            {
              label: ["Режиссёр", "Director"],
              people: [["Мартин Шик (Швейцария)", "Martin Schick (Switzerland)"], ]
            },
            {
              label: ["Драматург", "Dramaturg"],
              people: [["Анна Ильдатова", "Anna Ildatova"], ]
            },
          ],
          text: ["Город на Неве полон призраков прошлого, но живет по новым правилам, которые диктуют ему вновь построенные торговые центры, парки развлечений, небоскребы-исполины и циклопические стадионы. «Санкт-Петербург вне себя» — полуторачасовая речная прогулка по Петербургу, привычный туристический формат, на сей раз преображенный до неузнаваемости. Совместная работа швейцарского режиссера Мартина Шика и театроведа Анны Ильдатовой — первая театральная адаптация одной из самых влиятельных книг XX века по архитектуре «Нью-Йорк вне себя» Рема Колхаса. Размышления Колхаса — не об истории зданий, это история идей, образов, эстетических концепций.\nУтопический архитектурный проект под названием Нью-Йорк напрашивается на сравнение с Санкт-Петербургом, имперским утопическим проектом. Действительно ли существует это сходство, эфемерно оно или фундаментально? Колхас называет архитектуру религией Нью-Йорка, но что же тогда религия современного Петербурга? «Санкт-Петербург вне себя» — путешествие в утопию двух городов-гигантов, которое объединяет прошлое и настоящее разных континентов.\nМартин Шик — одна из заметных фигур современного швейцарского театра. Закончил Высшую школу искусств в Берне, работал в кино и на телевидении, с 2007 года занимается преимущественно театром, в том числе, сайт-специфическим, активно использует практику современного танца и перформанса. Среди самых известных работ — «Заглавие», CMMN SNS PRJCT, «Праздник на сцене», «Языковая лаборатория Вавилона», «Техника полукровки».",
          "The play is created with the support of the Swiss Arts Council Pro Helvetia.\nThe city on the Neva river is full of ghosts from the past, but it lives by the new rules dictated by newly built shopping centers, giant skyscrapers, and cyclopean stadiums. Delirious Saint Petersburg is an hour and a half riverwalk around St. Petersburg in the familiar tourist format, transformed beyond recognition. This is the joint work of the Swiss director Martin Glamor and Russian theatrologist Anna Ildatova, and the first theatrical adaptation of one of the most influential books of the twentieth century in architecture Delirious New York by Rem Koolhaas. The book is not about buildings, it is the story of ideas, images, and aesthetic concepts.\nThe utopian architectural project of New York asks for a comparison with the imperial utopian project of Saint Petersburg. Do they actually resemble each other and is this resemblance fundamental or is it just a fleeting image? If Koolhaas presents architecture as the religion of New York, then what is the religion of modern Saint Petersburg? Delirious Saint Petersburg is a journey to the utopia of these two giant cities, which unites the past and the present of two different continents.\nMartin Schick is a prominent figure of contemporary Swiss theatre. He graduated from the Highschool of Arts in Bern, worked in film production and television. Since 2007 he has been mainly engaged in theatre events, including site-specific ones, where he uses the both modern dance and performance. Among his most famous works are Title, CMMN SNS PRJCT, Holiday on Stage, Sprachlabor Babylon, Halfbreadtechnique."
          ],
        },
        {
          id: 2,
          name: ["Марат/Сад", "Marat / Sade"],
          place: ["Спектакль в торговом комплексе", "Perfomance in the Shopping Mall"],
          address: ["Невский пр., 114-116", "«Nevsky Center» Shopping Mall, Voskresenskaya nab., 20"],
          placeDesc: ["Спектакль в торговом комплексе", "Perfomance in the Mall"],
          mapDescription: ["Ближайшие станции метро — «Маяковская»/«Площадь восстания», «Гостиный двор»/«Невский проспект»", "Nearest metro stations — Mayakovskaya, Gostiny Dvor"],
          metro: ["м. Маяковская/Площадь восстания, м. Гостиный двор/Невский проспект", "Mayakovskaya metro station, Gostiny Dvor metro station"],
          age: 16,
          duration: ["1 час", "1 hour"],
          category: 0,
          additionalTitleText: ["Совместно с Гёте\u2011институтом в Санкт\u2011Петербурге", "In collaboration with Ghoethe\u2011Institut St. Petersburg"],
          banner: {
            img: "marat.jpg",
            link: "http://www.nevskycentre.ru/",
          },
          partners: [2, 8],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d2a49a2968473ad7529fe91c4b8a80d3/5B682756/t51.2885-15/e35/20393774_1840399309608789_8331557537090371584_n.jpg",
          schedule: [
            {
              date: "25.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268704"
                },
              ]
            },
            {
              date: "26.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268705"
                },
              ]
            },
            {
              date: "27.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268706"
                },
              ]
            },
            {
              date: "28.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268707"
                },
              ]
            },
            {
              date: "29.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268708"
                },
              ]
            },
            {
              date: "31.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268709"
                },
              ]
            },
          ],
          team: [
            {
              label: ["Режиссёр", "Director"],
              people: [["Йозуа Рёзинг (Германия)", "Josua Rösing (Germany)"], ]
            },
            {
              label: ["Композитор", "Composer"],
              people: [["Владимир Раннев", "Vladimir Rannev"], ]
            },
            {
              label: ["Художник", "Costume designer"],
              people: [["Сергей Илларионов", "Sergey Illarionov"], ]
            },
            {
              label: ["Драматург", "Dramaturg"],
              people: [["Софья Дымшиц", "Sophie Dymshits"], ]
            },
            {
              label: ["В ролях", "Actors"],
              people: [["Анастасия Балуева", "Anastasia Balyeva"], ["засл.арт.РФ Сергей Лосев", "Sergey Losev"], ["Гала Самойлова", "Gala Samoilova"], ["Даша Степанова", "Daria Stepanova"], ["Олег Федоров", "Oleg Fedorov"]]
            },
          ],
          text: ["Пьесы классика и реформатора немецкой драматургии XX века Петера Вайса не впервые появляются в афише «Точки доступа»: причина проста — они сохраняют и эстетическую свежесть, и идейную актуальность. Философ, знаток человеческой природы маркиз де Сад проводит остаток дней в психиатрической клинике Шаратон. Он удалился сюда добровольно, полагая, что за пределами сумасшедшего дома сумасшествия еще больше. За окнами — разгар политической реакции, идеалы Великой Французской революции втоптаны в грязь. Маркиз с помощью других пациентов устраивает театральное представление, воссоздающее печальную историю жизни и смерти одного из вождей революции — Жана-Поля Марата. Представление превращается в диспут: Марат ратует за революцию, де Сад исполнен скепсиса. Чья позиция ближе нам сегодня?\nМолодой немецкий режиссер Йозуа Рёзинг, известный работами в берлинском «Дойчес-театре», переносит действие в респектабельный торговый комплекс. Для одних он — место силы и престижа, для других — объект социальной критики и средоточие зла. Экстравагантный художник Сергей Илларионов и композитор Владимир Раннев придают пространству нужный градус безумия. А в отборном актерском ансамбле выделяется фигура актера БДТ, заслуженного артиста России Сергея Лосева. В начале 1980-х он уже играл де Сада в легендарном спектакле Вадима Голикова. 2 августа актер отметит 70-летие, и его участие в спектакле Рёзинга — это и возвращение в молодость, и творческий вызов, и заслуженный бенефис, и подарок городу.",
          "The play is a joint project of the Access Point festival and Goethe Institut in St. Petersburg.\nPlays of Peter Weiss, the XX century classic and reformer of the German drama, are not for the first time on The Access Point posters. The reason for this is quite simple — the plays retain both aesthetic freshness and ideological relevance. A philosopher and expert on human nature Marquis de Sade spent the rest of his days in Charenton, a psychiatric asylum. He admitted himself voluntarily, believing that there was more madness outside the asylum than there was inside of it. Outdoors there was the midst of political reactions and the ideals of the French revolution are trampled into the mud. With the help of other patients, Marquis arranged a theatrical performance that recreated the sad story of life and death of Jean-Paul Marat, one of the revolution leaders. The performance turned into a dispute, where Marat stood for revolution and de Sade was full of skepticism. Whose position is closer to us today?\nA young German director Josua Rösing, who is known for his works at Deutsches Theater Berlin, transfers the setting into a respectable shopping mall — a place of power and prestige for some, and the object of social criticism and the focus of evil for others. Painter Sergey Illarionov and composer Vladimir Rannev add the right degree of madness to this place. In the handpicked cast, the honored artist of Russia, an actor of Tovstonogov Bolshoi Drama Theatre Sergey Losev stands out the most. In the early 1980s, he already played the role of Marquis de Sade in the legendary play by Vadim Golikov. On the 2nd of August the actor will celebrate his 70th anniversary, and his participation in the Rösing’s performance is a return to youth, a creative challenge, a well-deserved benefit, and a gift to the city."
          ],
        },
        {
          id: 3,
          name: ["Музей инопланетного вторжения", "The Alien Invasion Museum"],
          by: ["«Театр независимых действий» (Москва)", "Theatre of Mutual Operations (Moscow)"],
          place: ["Спектакль на фортах", "Perfomance in the Fort"],
          address: ["Форт Константин, Кронштадт", "Fort Constantine, Kronstadt"],
          placeDesc: ["Спектакль на фортах", "Perfomance in the Fort"],
          metro: "",
          age: 12,
          duration: ["1 часа 30 минут", "1 hour 30 minutes"],
          category: 1,
          partners: [30],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "20.07.2018",
              shows: [
                {
                  time: "16:00",
                  radarioId: "270935"
                },
                {
                  time: "20:00",
                  radarioId: "270995"
                },
              ]
            },
            {
              date: "21.07.2018",
              shows: [
                {
                  time: "12:00",
                  radarioId: "271004"
                },
                {
                  time: "16:00",
                  radarioId: "271010"
                },
                {
                  time: "20:00",
                  radarioId: "271011"
                },
              ]
            },
            {
              date: "22.07.2018",
              shows: [
                {
                  time: "12:00",
                  radarioId: "271012"
                },
                {
                  time: "16:00",
                  radarioId: "271013"
                },
                {
                  time: "20:00",
                  radarioId: "271014"
                },
              ]
            },
          ],
          team: [
            {
              label: ["Драматург", "Playwright"],
              people: [["Наташа Боренко", "Natasha Borenko"], ]
            },
            {
              label: ["Художники", "Set design"],
              people: [["Шифра Каждан", "Shifra Kazhdan"], ["Леша Лобанов", "Alexey Lobanov"], ["Ксения Перетрухина", "Ksenia Peretrukhina"]]
            },
            {
              label: ["Видео оператор", "Video operator"],
              people: [["Максим Ефрос", "Maxim Efros"], ]
            },
            {
              label: ["Звук", "Sound"],
              people: [["Евгений Горяинов", "Evgeniy Goryaninov"], ]
            },
            {
              label: ["Свет", "Light"],
              people: [["Елена Перельман", "Elena Perelman"], ]
            },
            {
              label: ["Продюсеры", "Producers"],
              people: [["Александра Мун", "Alexandra Mun"], ["Анна Селянина", "Anna Selyanina"], ]
            },
            {
              label: ["Артисты", "Guides"],
              people: [["Матвей Матвеев", "Matvey Matveev"], ["Александра Суханова", "Alexandra Sukhanova"], "Анна Хлесткина"]
            },
            {
              label: ["Свидетели", "Witnesses"],
              people: [["Олеся Абрамова", "Olesya Abramova"], ["Филипп Гуревич", "Filipp Gurevich"], ["Михаил Ефимов", "Mihail Efimov"], ["Ольга Лапшина", "Olga Lapshina"], ["Руслан Маликов", "Ruslan Malikov"], ["Анастасия Патлай", "Anastasia Patlay"], ["Алексей Шемес", "Maxim Shemes"], ]
            },
          ],
          text: ["Февраль 1989 года. Томская область. В маленькой деревне произошло событие, о котором сотни лет грезило человечество — инопланетный разум встретился с земным. Правда, это было мало похоже на сюжеты фантастических книг и фильмов. Местные жители были больше озабочены талонами на продукты и выживанием, чем контактом с пришельцами. И о событии вселенского значения так никто и не знал, пока в 2016-м им не заинтересовалась группа театральных художников.\nСпектакль проходит в форме музейной экскурсии. Зрители изучают артефакты и свидетельства событий в сопровождении актеров-экскурсоводов: рисунки ученых, интервью с очевидцами, реконструкции скафандров и другие следы присутствия инопланетной жизни, и одновременно совершают исторический экскурс в недавнее прошлое — распадающийся СССР конца 80-х.\n«Музей инопланетного вторжения» выдержан в мало знакомом России жанре «мокьюментари» (фальшивой документалистики) и рассчитан на самого широкого зрителя. Детей заинтересует фантастическая история, а взрослые имеют шанс вычитать параллельный сюжет — о ксенофобии и терпимости, социальных парадоксах нашего вчера и сегодня.\nКроме того, перед нами «театр художника», точнее — трех заметных театральных художников страны, объединившихся в группу «Театр взаимных действий». Один из них — Леша Лобанов — для «Точки доступа» человек близкий и родной: он был одним из соавторов самого первого нашего спектакля «В сторону белого КАМАЗа».",
          "The play was created with the support of the Government of Moscow and the Department of Culture of Moscow. It is a member of the state and public support program for theatres for children and adolescents under the patronage of the President of the Russian Federation.\nFebruary, 1989. Tomsk Region. In a small village there was an event, which mankind had dreamed of for hundreds of years: the alien met the earthly one, though it looked little like the plots of sci-fi films and books. The locals cared more about the food stamps and survival rather than the contact with the aliens. So nobody knew about this event of the universal significance until the group of theatre artists took interest in it in 2016.\nThe play is in the form of a museum tour. The spectators study the artifacts and evidence of events, accompanied by the actors/tour guides: drawings of scientists, interviews with eyewitnesses, reconstruction of spacesuits and other traces of the presence of extraterrestrial life; all while making a historical trip into recent past — into the disintegrating USSR of the late 80’s.\nAlien Invasion Museum is made in an uncommon to the Russian viewer genre of mockumentary (fake documentary) and is designed for the widest audience. Children will be interested in a sci-fi story, and adults will be able to see a parallel story: one of xenophobia and tolerance, the social paradoxes of our yesterday and today. Moreover, we are presented with the artist’s theatre, three famous artists united in the group Theatre of Mutual Operations, more precisely. One of them, Alexey Lobanov, is close and dear for The Access Point: he was one of the co-authors of our very first play Towards White KAMAZ."
          ],
        },
        {
          id: 4,
          name: ["Время роста деревьев", "The Time of the Tree Growth"],
          by: ["Творческая лаборатория «Угол» (Казань)", "Ugol Creative lab (Kazan)"],
          place: "",
          address: ["Парголово (ст.м.Парнас), ул. Карьерная, 3", "Pargolovo, Karyernaya st., 3"],
          placeDesc: ["Спектакль на городской окраине", "Perfomance on the Urban Outskirts"],
          mapDescription: ["от ст. м. «Парнас» — пешком ≈ 30 мин. — на машине ≈ 28 мин", "from «Parnas» metro station — 30 minutes on foot, or 28 minutes by car"],
          metro: ["м. Парнас", "Parnas metro station"],
          age: 12,
          duration: ["1 час", "1 hour"],
          category: 1,
          partners: [],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "20:30",
                  radarioId: "268697"
                },
              ]
            },
            {
              date: "03.08.2018",
              shows: [
                {
                  time: "18:30",
                  radarioId: "268699"
                },
                {
                  time: "20:30",
                  radarioId: "268698"
                },
              ]
            },
            {
              date: "04.08.2018",
              shows: [
                {
                  time: "18:30",
                  radarioId: "268700"
                },
                {
                  time: "20:30",
                  radarioId: "268701"
                },
              ]
            },
            {
              date: "05.08.2018",
              shows: [
                {
                  time: "18:30",
                  radarioId: "268703"
                },
                {
                  time: "20:30",
                  radarioId: "268702"
                },
              ]
            },
          ],
          team: [
            {
              label: ["Режиссер", "Director"],
              people: [["Регина Саттарова", "Regina Sattarova"], ]
            },
            {
              label: ["Драматург", "Playwright"],
              people: [["Михаил Дурненков", "Mikhail Durnenkov"], ]
            },
            {
              label: ["В ролях", "Participants"],
              people: [["Булат Минкин", "Bulat Minkin"], ["Резеда Хадиуллина", "Reseda Hadiullina"], ["Дарья Андреева", "Daria Andreeva"], ["Ильнур Гарифуллин", "Ilnur Garifullin"], ["Мария Сивова", "Maria Sivova"], ["Айгуль Ахметова", "Aigul Akhmetova"], ["Павел Поляков", "Pavel Polyakov"], ]
            },
          ],
          text: ["Этот спектакль постоянно играет со зрительскими ожиданиями. Начинается как экскурсия по району, не очень хорошо известному даже опытным краеведам, — на пустыре Парнаса, ровно между деревянной церквушкой и диким прудом. Продолжается как лекция о природе и нравах далеких Маршалловых островов. Но ни экскурсии, ни лекции не состоится. Потому что постоянно придется отвлекаться на странную парочку, жертв безнадежной любви. Им бы давно забыть друг о друге, но прошлое никак не отпускает. Возможно, живи они не на Парнасе, а на Маршалловых островах, все сложилось бы иначе.\nВо «Времени роста деревьев» выдержки из книги «Укрась приусадебный участок сам» соседствуют с фактами из труда «Загадки Маршалловых островов», откровения корейского туриста — с исповедью незадачливого экскурсовода. А свел их в лирическую пьесу один из лидеров современной российской драматургии Михаил Дурненков. Прекрасно известный петербургскому зрителю — хотя бы благодаря спектаклю Андрея Могучего «Изотов» по пьесе Дурненкова.\nПостановка Регины Саттаровой «Время роста деревьев» — спектакль творческой лаборатории «Угол», в котором задействованы ведущие молодые артисты театров Казани. «Угол» существует всего несколько лет, но уже стал важным центром российского поискового театра. Чтобы создать новую, петербургскую, версию спектакля, Саттарова и Дурненков исследовали пространство и локальный контекст Парнаса.",
          "This performance always fires the audience with expectations. It begins as a tour around the place that even experienced local historians do not know well enough — the wasteland of Parnassus, exactly between the small wooden church and the wild pond, and continues as a lecture on the nature and customs of the distant Marshall Islands. But neither the tour nor the lecture will take place because a strange couple, victims of hopeless love, constantly draws spectators’ attention. It would be better for them to forget about each other a long time ago, but the past just does not let it go. Would things have been different if they lived not in Parnassus, but in the Marshall Islands?\nIn The Time of Tree Growth,  extracts from the book Decorating the Household Plot by Yourself appear side by side with the facts from Mysteries of the Marshall Islands — the revelation of the Korean tourist and the confession of the hapless guide. All of it was brought into a lyrical play by one of modern Russian drama leaders Mikhail Durnenkov, who is well-known in Saint Petersburg at least for his play Izotov directed by Andrey Moguchy.\nThe Time of Tree Growth by Regina Sattarova is the performance of creative lab Ugol that involved young leading actors of Kazan theatres. Ugol exists only a few years, but has already become an important center of Russian immersive theatre. Both Sattarova and Durnenkov explored the place and peculiarities of Parnassus to create a new, Petersburg version of the play."
          ],
        },
        {
          id: 5,
          name: ["Трехгоршковая опера", "Chamber Pot Opera"],
          by: ["Театральная компания Bontom (Сидней, Австралия)", "Theatre company Bontom (Sydney, Australia)"],
          place: ["Спектакль в отеле", "Perfomance in the Hotel"],
          address: ["Hilton St. Petersburg ExpoForum, Петербургское шоссе, 62 к1", "Hilton St. Petersburg ExpoForum, Peterburgskoye Highway, 62к1"],
          placeDesc: ["Спектакль в отеле", "Perfomance in the hotel"],
          mapDescription: ["от ст. м. «Московская» — на автобусе №187 (каждые 15 минут) до остановки КВЦ «Экспофорум» ≈ 36 мин. — на машине ≈ 20 мин.", "from Moskovskaya metro station: by bus number 187 (bus interval — 15 minutes) to Convention and Exhibition centre ExpoForum bus station (aprox 30 minutes); or 20 minutes by car"],
          metro: ["м. Московская", "Moskovskaya metro station"],
          age: 18,
          duration: ["1 час", "1 hour"],
          category: 1,
          partners: [7, ],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "20.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268673"
                },
                {
                  time: "20:30",
                  radarioId: "268674"
                },
              ]
            },
            {
              date: "21.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268676"
                },
                {
                  time: "20:30",
                  radarioId: "268675"
                },
              ]
            },
            {
              date: "22.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268677"
                },
                {
                  time: "20:30",
                  radarioId: "268678"
                },
              ]
            },
            {
              date: "24.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268680"
                },
                {
                  time: "20:30",
                  radarioId: "268679"
                },
              ]
            },
            {
              date: "25.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268681"
                },
                {
                  time: "20:30",
                  radarioId: "268682"
                },
              ]
            },
            {
              date: "27.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268684"
                },
                {
                  time: "20:30",
                  radarioId: "268683"
                },
              ]
            },
            {
              date: "28.07.2018",
              shows: [
                {
                  time: "13:00",
                  radarioId: "268686"
                },
                {
                  time: "14:30",
                  radarioId: "268687"
                },
                {
                  time: "19:00",
                  radarioId: "268685"
                },
                {
                  time: "20:30",
                  radarioId: "268688"
                },
              ]
            },
            {
              date: "31.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268690",
                  tickets: -1,
                },
                {
                  time: "20:30",
                  radarioId: "268689",
                  tickets: -1,
                },
              ]
            },
            {
              date: "01.08.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268691"
                },
                {
                  time: "20:30",
                  radarioId: "268692"
                },
              ]
            },
            {
              date: "03.08.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268694"
                },
                {
                  time: "20:30",
                  radarioId: "268693"
                },
              ]
            },
            {
              date: "04.08.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268695"
                },
                {
                  time: "20:30",
                  radarioId: "268696"
                },
              ]
            },
          ],
          team: [
            {
              label: ["Режиссер", "Director"],
              people: [["Клеменс Уильямс", "Clemence Williams"], ]
            },
            {
              label: ["Драматург", "Dramaturg"],
              people: [["Томас Де Анджелис", "Thomas De Angelis"], ]
            },
            {
              label: ["Художник-постановщик", "Production Design"],
              people: [["Изабель Хадсон", "Isabel Hudson"], ]
            },
            {
              label: ["Художник по свету", "Lighting Design"],
              people: [["Бенджамин Брокман", "Benjamin Brockman"], ]
            },
            {
              label: ["Музыкальный руководитель", ""],
              people: [["Кейрен Брандт-Соуди", ""], ]
            },
            {
              label: ["Музыкальное оформление", "Music Design"],
              people: [["Дарси Гэйфорд", "Darci Gayford"], ]
            },
            {
              label: ["В ролях", "Actors"],
              people: [["Бритт Льюис", "Britt Lewis"], ["Джессика Уэсткотт", "Jessica Westcott"], ["Салли Алрич-Смит", "Sally Aprich-Smith"], ]
            },
            {
              label: ["Продюсер", "Producer"],
              people: [["Сэмюэль Бонехам", "Samuel Boneham"], ]
            },
            {
              label: ["Помошник режиссера", "Stage Manager"],
              people: [["Мишель Свердлофф", "Michelle Sverdloff"], ]
            },
          ],
          text: ["Спектакль идет с русскими и английскими субтитрами\n«Трехгоршковая опера» — сенсация нынешней «Точки доступа». В России хорошо известен европейский театр. Американский и иберо-американский театр тоже неоднократно добирался до нас с гастролями. Новые политические тренды плотнее познакомили российскую публику с театром из Азии и Африки. Но об австралийском театре мы не знали ровным счетом ничего. Пока компания Bontom не привезла на «Точку доступа» свой нашумевший спектакль.\n«Трехгоршковая опера» — результат сотрудничества дирижера Кейрена Брандт-Соуди, драматурга Томаса Де Анджелиса и режиссера Клеменс Уильямс. Рефлексируя над проблемой ограниченности традиционного оперного репертуара, не дающего актрисам полной возможности самовыражения, создатели спектакля придумали новую, неожиданную, даже провокационную театральную форму. Великая оперная классика, но не на сцене, а там, где прежде не принято было играть спектакли, плюс актуальные вопросы сегодняшней повестки. В итоге получилась первая в мире опера, предназначенная для общественной уборной.\nТри дамы случайно сталкиваются в роскошной дамской комнате богатого отеля. Одна — жертва харассмента, другая боится, что ее имидж «сильной женщины» слишком подавляет возлюбленного, третьей гендерные предрассудки мешают получить работу мечты. Вместе они обсуждают проблемы и потаенные фантазии, подтверждая их ариями из опер Моцарта, Пуччини и Бизе. Выходит иронично, зажигательно и вполне гигиенично. Премьера «Трехгоршковой оперы» состоялась в Сиднее в ноябре 2016 года, спектакль снискал большой успех на родине и стал участником эдинбургского «Фринджа».",
          "The play has Russian and English subtitles.\nThe Chamber Pot Opera is the result of collaboration between conductor Keiren Brandt-Sawdy, playwright Thomas De Angelis and director Clemens Williams. The creators of the play came up with a new, unexpected and even provocative theatrical form while reflecting on the problem of the limitations in the traditional opera repertoire, which does not let actresses fully express themselves. It is a great classical opera performed not on the stage, but in a place where it was not accepted to play performances before, combined with relevant issues of modern life. In other words, it is the world's first opera produced for public restroom.\nThree ladies accidentally bump into each other in the luxurious ladies’ room of a rich hotel. One is a victim of harassment, the other is afraid that her image of a strong woman suppresses her lover too much, and the gender prejudices prevent the third one from getting a dream job. They discuss their problems and hidden fantasies, performing arias from the operas of Mozart, Puccini and Bizet. The opera turns out to be ironic, electric and quite hygienic. The premiere of The Chamber Pot Opera was held in Sydney in November 2016, the performance was a great success at home and became a member of Fringe  Edinburgh Festival."
          ],
        },
        {
          tickets: 0,
          id: 6,
          name: ["«Безликие»", "Faceless"],
          logo: "/img/spekts/faceless.svg",
          logoHover: "/img/spekts/faceless_yellow.svg",
          place: ["Иммерсивное шоу", "Immersive show"],
          address: ["Дворцовая наб., 20", "the Palace Embankment 20"],
          placeDesc: ["Иммерсивное шоу", "Immersive show"],
          mapLabel: ["Иммерсивное шоу «Безликие»", "Immersive show «Faceless»"],
          mapDescription: ["Ближайшие станции метро — «Адмиралтейская», «Невский проспект»/«Гостиный двор»", "Nearest metro stations — Admiralteyskaya, Nevsky prospekt/Gostiny dvor"],
          metro: ["м. Адмиралтейская, м. Невский проспект/Гостиный двор", "Admiralteyskaya metro station, Nevsky prospekt/Gostiny dvor metro station"],
          age: 18,
          duration: ["2 часа 30 минут", "2 hours 30 minutes"],
          category: 2,
          partners: [],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "25.07.2018",
              shows: [
                {
                  time: "19:30",
                  radarioId: ""
                },
              ]
            },
            {
              date: "27.07.2018",
              shows: [
                {
                  time: "19:30",
                  radarioId: ""
                },
              ]
            },
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "19:30",
                  radarioId: ""
                },
              ]
            },
          ],
          team: [
            {
              label: ["Режиссеры", "Director"],
              people: [["Мия Занетти", "Mia Zanette"], ["Мигель", "Migel"], ]
            },
            {
              label: ["Исполнители", "Performers"],
              people: [
                ["Анастасия Азеева", "Anastasia Azeeva"],
                ["Алена Александрова", "Alyona Aleksandrova"],
                ["Каринэ Асланян", "Karine Aslanyan"],
                ["Даян Ахмедгалиев", "Dayan Akhmedgaliev"],
                ["Баина Басанова", "Baina Basanova"],
                ["Геннадий Блинов", "Gennadii Blinov"],
                ["Денис Борисенко", "Denis Borisenko"],
                ["Арам Вардеванян", "Aram Vardevanyan"],
                ["Роман Вебер", "Roman Veber"],
                ["Ольга Вечерик", "Olga Vecherik"],
                ["Анастасия Вядро", "Anastasia Vyadro"],
                ["Лилия Игнатьева", "Lilia Ignateva"],
                ["Николай Карпов", "Nikolai Karpov"],
                ["Андрей Карх", "Andrei Karkh"],
                ["Руслан Комаров", "Ruslan Komarov"],
                ["Екатерина Крамаренко", "Ekaterina Kramarenko"],
                ["Сергей Липовский", "Sergei Lipovskii"],
                ["Сергей Луняка", "Sergei Lunyaka"],
                ["Егор Медведев", "Egor Medvedev"],
                ["Илья Мотов", "Ilia Motov"],
                ["Антон Мошечков", "Anton Moshechkov"],
                ["Алина Нечепуренко", "Alina Nechepurenko"],
                ["Маргарита Павлова", "Margarita Pavlova"],
                ["Вероника Панаитова", "Veronika Panaitova"],
                ["Марина Петухова", "Marina Petukhova"],
                ["Алена Плешакова", "Alyona Pleshakova"],
                ["Станислав Пономарев", "Stanislav Ponomarev"],
                ["Станислав Рочас", "Stanislav Rochas"],
                ["Алексей Синицин", "Alexei Sinitsin"],
                ["Сергей Сицинский", "Sergei Sitsinskii"],
                ["Дмитрий Собачкин", "Dmitrii Sobachkin"],
                ["Олеся Соколо", "Olesia Sokolova"],
                ["Артур Федынко", "Artur Fedynko"],
                ["Вера Фомина", "Vera Fomina"],
                ["Наталья Фукс", "Natalia Fuks"],
                ["Алексей Шильников", "Alexei Shilnikov"],
                ["София Шустрова", "Sofiya Shustrova"]
              ]
            },
          ],
          text: ["”Безликие” — это иммерсивный спектакль, в котором мы воссоздали полностью аутентичное пространство, совместили элементы классического театра и хореографии, использовали аудиовизуальные эффекты, тщательно проработали интерактивную составляющую... В результате зритель оказывается в ином измерении, где не существует привычных правил, запретов и границ. Спектакль — возможность получить качественно новый и очень личный опыт. Испытать то же самое, оставаясь наблюдателем в кресле, просто невозможно. Это театрализованная виртуальная реальность», — рассказывает американский режиссер шоу Мия Занетти. За пять месяцев репетиций, которые велись в строжайшей тайне, актеры освоили уникальные методики взаимодействия с аудиторией, а в особняке на Дворцовой набережной возникли десятки потайных ходов и дверей.\nРоссийскими продюсерами «Безликих» стали Мигель и Вячеслав Дусмухаметов, а в роли композитора выступил лидер Therr Maitz Антон Беляев, костюмы для шоу — работа петербуржского дизайнера Алины Герман.",
          "“Faceless” is an immersive performance in which we create a completely authentic space, combine elements of classical theater and choreography, use audiovisual effects and thrash out the interactive component ... As a result, the viewer founds himself in a different dimension, where there are no usual rules, prohibitions and borders. This is an opportunity to get a completely new and very personal experience. It is simply impossible to experience the same thing, while remaining an observer in the chair. “This is a dramatized virtual reality” — tell the American film director Mia Zanetti. For five months of rehearsals, which were conducted in the strictest secrecy, the actors mastered unique methods of interaction with the audience, and dozens of secret passages and doors were built in the mansion.\nThe Russian producers of “Faceless” are Miguel and Vyacheslav Dusmukhametov, and the composer is Anton Belyaev, the leader of Therr Maitz, the costumes designed by Alina German."
          ],
        },
        {
          id: 7,
          name: ["Questioning / Кто ты?", "Questioning"],
          by: ["Pop-up театр совместно с театром Magic Garden (Швейцария) и площадкой «Скороход", "Pop-up theatre in partnership with Magic Garden (Switzerland) and Skorokhod theatrical venue"],
          place: ["Площадка «Скороход»", "«Skorokhod» theatrical venue"],
          address: ["Московский пр., 107, к.5", "Skorohod, Moskovskiy prosp., 107 k. 5"],
          placeDesc: ["Спектакль-опрос", "Questioning Perfomance"],
          mapDescription: ["Ближайшая станция метро — «Московские ворота»", "Nearest metro station «Moskovskiye vorota»"],
          metro: ["м. Московские ворота", "«Moskovskiye vorota» metro station"],
          age: 18,
          duration: ["1 час 30 минут", "1 hour 30 minutes"],
          category: 2,
          partners: [19, ],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "271845"
                },
                {
                  time: "20:00",
                  radarioId: "271858"
                },
              ]
            },
            {
              date: "03.08.2018",
              shows: [
                {
                  time: "20:00",
                  radarioId: "271860"
                },
              ]
            },
          ],
          team: [
            {
              label: ["Петербургская адаптация", "Petersburg adaptation"],
              people: [["Семен Александровский", "Semyon Alexandovsky"], ]
            },
          ],
          text: ["Что можно узнать о человеке напротив, не задавая ему вопросов? Где включаются интуиция и фантазия, а где срабатывают предубеждения и проецирование? Новый камерный спектакль-игра без актеров исследует границы современного театра и глубину, на которую человек готов погрузиться в себя, придумывая ответы про другого. Два параллельных ряда стульев, смотрящие друг другу в глаза зрители, невидимый модератор и пачка бумаг в сумме дают час исследовательского и чувственного опыта. И это тот случай, когда зрительская ответственность максимальна — впечатление от перформанса прямо пропорционально интенсивности внутренней работы. На вопросы рекомендуют отвечать быстро, анкеты идут одна за другой: в первой пытаешься угадать базовые характеристики, далее предполагаешь поведенческие и психографические модели. Ближе к финалу надо ответить мысленно: что подумали про вас, увидеть себя глазами другого. В конечном итоге, это история про допущения, оценки и предположения, которые, возможно, не отражают реальность, но точно связаны с вами и с тем, как вы воспринимаете окружающий мир.",
          "What can you learn about the person in front of you without asking questions? When do intuition and imagination work and when does prejudice appear? A new chamber game performance without actors explores the boundaries of modern theatre and the ability of a person to dive into himself while answering questions about another one. Two parallel rows of chairs, spectators looking in each other’s eyes, an invisible moderator and a paper stack add up an hour of research and sensory experience. This is the case when the audience's responsibility is at its maximum because the impression from the performance is directly proportional to the intensity of their inner work. It is better to answer the questions quickly. The questionnaires go one after another: first you try to guess the basic characteristics, then — behavioural and psychographic models. At the end you have to answer the questions in your mind: what do people think about you, how do you look in the eyes of another person? In total, this performance is a story about assumptions, opinions and suggestions that may not reflect reality, but are closely related to you and your perception of the world."
          ],
        },
        {
          tickets: 0,
          id: 8,
          name: ["Вишневый сад. Тишина", "The Cherry Orchard. Silence"],
          by: ["Театр «На Литейном» при участии Музея Анны Ахматовой в Фонтанном доме", "Anna Akhmatova's Museum in the Fountain House (Liteyniy pr., 53)"],
          place: ["Спектакль в парке", "Perfomance in the Park"],
          address: ["Литейный пр., 53", "Liteyniy pr., 53"],
          placeDesc: ["Спектакль в парке", "Perfomance in the Park"],
          metro: ["м. Маяковская/Площадь восстания, м. Гостиный двор/Невский проспект", "Mayakovskaya/Ploschad\' Vosstaniya metro station, Gostiny Dvor/Nevskiy prospekt metro station"],
          age: 12,
          duration: ["2 часа", "2 hours"],
          category: 2,
          partners: [],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "01.08.2018",
              shows: [
                {
                  time: "20:00",
                  radarioId: ""
                },
              ]
            },
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "20:00",
                  radarioId: ""
                },
              ]
            },
          ],
          team: [
            {
              label: ["Автор идеи и режиссер-постановщик", "The author of idea and director"],
              people: [["Андрей Сидельников", "Andrey Sidelnikov"], ]
            },
            {
              label: ["Режиссер по пластике", "Director choreographer"],
              people: [["Ирина Ляховская", "Irina Lyakhovskaya"], ]
            },
            {
              label: ["Художник-постановщик", "Production Designer"],
              people: [["Николай Слободяник", "Nikolay Slobodyanik"], ]
            },
            {
              label: ["Художник по костюмам", "Costume Designer"],
              people: [["Анна Лаврова", "Anna Lavrova"], ]
            },
            {
              label: ["Художник по свету", "Lighting designer"],
              people: [["Игорь Тупикин", "Igor Tupikin"], ]
            },
            {
              label: ["Музыкальное оформление", "Musical design"],
              people: [["Анатолий Гонье", "Anatoly Gonje"], ]
            },
            {
              label: ["Видеохудожник", "Video artist"],
              people: [["Полина Лимье", "Polina Limieux"], ]
            },
            {
              label: ["В ролях", "Cast"],
              people: [
                ["Сергей Азеев", "Sergei Azeev"],
                ["Аглая Гершова", "Aglaya Gershova"],
                ["Виталий Гудков", "Vitaly Gudkov"],
                ["Любовь Ельцва", "Lyubov Yeltsva"],
                ["Александра Жарова", "Alexandra Zharova"],
                ["Алекандр Койгеров", "Alekandr Koigerov"],
                ["Алекандр Кошкидько", "Alekandr Koshkidko"],
                ["Николай Красноперов", "Nikolai Krasnoperov"],
                ["Никита Кузьмин", "Nikita Kuzmin"],
                ["Екатерина Кулеш", "Ekaterina Kulesh"],
                ["Сергей Матвеев", "Sergei Matveyev"],
                ["Светлана Шаврова", "Svetlana Shavrova"],
                ["Ася Ширшина", "Asya Shirshina"]
              ]
            },
          ],
          text: ["Финал пьесы А. П. Чехова «Вишневый сад» — отправная точка и начало спектакля режиссера Андрея Сидельникова «Вишневый сад. Тишина». Заколоченная усадьба, вырубленный сад и далекие воспоминания Фирса о той поре, когда все были молоды и счастливы — главные предлагаемые обстоятельства истории, которая будет сыграна в саду Фонтанного Дома. Уникальное историческое место в центре Петербурга станет дополнительной и неповторимой декорацией для театральной фантазии творческой команды, работающей над спектаклем.\nВ первой части зрители увидят ключевые сцены пьесы, во второй — пластические этюды без слов, которые расскажут о жизни персонажей Чехова, когда они были еще беспечны и юны, полны надежд и не знали разочарований. Зрители станут свидетелями и участниками незабываемого путешествия в предысторию «Вишневого сада».\nСпектакль «Вишневый сад. Тишина» — это исследование рассвета через закат. Рассказ о неотвратимости времени и поиск причин своего настоящего в своём прошлом.",
          "The performance is based on the play by Anton Chekhov.\nThe final of Chekhov’s The Cherry Orchard is the starting point of the play directed by Andrey Sidelnikov. A boarded-up mansion, a clearcut garden and distant memories of Firs about the time when everyone was young and happy — these are the main circumstances of the story that is set in the garden of the Fountain House. This historical place in the center of St. Petersburg serves as an additional and unique decoration for the creative team working on the performance.\nIn the first act the key scenes of the play are presented, and in the second act the audience will see etudes without words that represent the former life of Chekhov's characters  — their carelessness, youth and hopes. The audience will have an unforgettable journey throughout the background of  The Cherry Orchard.\nThe play The Cherry Orchard. Silence is the examination of a dawn through a sunset, a story about the time inevitability and the search for the causes of the present in its past."
          ],
        },
        {
          id: 9,
          name: ["Разговоры беженцев", "Refugee Conversations"],
          by: ["Проект фестиваля «Точка доступа»", "Project by «The Access Point» festival"],
          additional: ["Номинант Национальной театральной премии «Золотая маска»", "Nominee of Golden mask theatrical prize"], //???????????????
          place: ["Спектакль на вокзале", "Perfomance on Railway station"],
          address: ["Финляндский вокзал", "Finlyandskiy railway station"],
          placeDesc: ["Спектакль на вокзале", "Perfomance on Railway station"],
          mapDescription: ["Ближайшая станция метро — «Площадь Lenina»", "Nearest metro station Ploschad\' Lenina"],
          metro: "Ploschad\' Lenina metro station",
          age: 12,
          duration: ["2 часа", "2 hours"],
          category: 2,
          partners: [],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "28.07.2018",
              shows: [
                {
                  time: "18:00",
                  radarioId: "268670"
                },
              ]
            },
            {
              date: "29.07.2018",
              shows: [
                {
                  time: "14:00",
                  radarioId: "268672"
                },
                {
                  time: "18:00",
                  radarioId: "268671"
                },
              ]
            },
          ],
          team: [
            {
              label: ["Художественный руководитель", "Artistic Director"],
              people: [["Константин Учитель", "Konstantin Uchitel"], ]
            },
            {
              label: ["Режиссер", "Director"],
              people: [["Владимир Кузнецов", "Vladimir Kuznetsov"], ]
            },
            {
              label: ["Актеры", "Actors"],
              people: [["Сергей Волков", "Sergey Volkov"], ["Максим Фомин", "Maxim Fomin"], ["Владимир Кузнецов", "Vladimir Kuznetsov"], ]
            },
          ],
          text: ["Это первая российская постановка пьесы Бертольта Брехта, написанной в 1940-41 годах в Финляндии. Место ее действия — Центральный вокзал Хельсинки. Соответственно, действие разворачивается в залах, кафе и на перроне вокзала. Вооружившись аппаратурой для слежки, зритель получает возможность наблюдать за приватным разговором неких Циффеля и Калле. Стратегию слежки каждый вправе определить сам: можно перемещаться вслед за артистами или раствориться в толпе и построить собственный визуальный ряд, спонтанно сопровождающий звуковой канал. Герои спектакля, чьи голоса сопровождают зрителя, — два немецких беженца времен Второй мировой, обсуждающих как глобальные общечеловеческие вопросы, так и мелкие бытовые невзгоды. В образе Калле угадываются черты самого Брехта. Возможно, что-то из услышанного представится зрителю не утратившим актуальности.",
          "This is the first Russian direction of Bertolt Brecht's play written in 1940-41 in Finland. The story is set at Helsinki Central Station, and the actions take place in the halls, cafes and on the station platforms. With the help of surveillance equipment, the audience will have an opportunity to follow up the private conversation of Ziffel And Kalle. Every spectator can choose the way of surveillance for themselves: you can follow the artists or dissolve in the crowd and create your own visual imagery that spontaneously matches with sounds and noises around. The main characters of the play, whose voices accompany the viewer throughout the performance, are two German refugees from World War II times that discuss both global human issues and daily hardships. The Kalle’s image discern the features of Brecht himself. Perhaps the play will still seem relevant for the modern audience."
          ],
        },
      ],
      partners: [
        {
          id: 0,
          // img: "cult.png",
          img: "00_komitee_spb@1.png",
          label: ["при поддержке Комитета по Культуре Санкт-Петербурга", "with support of Committee on Culture of St. Petersburg"],
          link: "http://www.spbculture.ru/ru/",
        },
        {
          id: 1,
          // img: "td.png",
          img: "01_std@1.png",
          label: ["При поддержке", "With Support"],
          link: "http://stdrf.ru/",
        },
        {
          id: 2,
          // img: "goethe.svg",
          img: "02_goethe@1.png",
          label: ["соорганизатор спектакля «Марат/Сад»", "co-organizer of MARAT / SADE play"],
          labelSpekt: ["соорганизатор спектакля «Марат/Сад»", "in collaboration with"],
          link: "https://www.goethe.de/ins/ru/ru/sta/pet.html?wt_sc=petersburg",
        },
        {
          id: 3,
          // img: "pro.svg",
          img: "03_prohelvetia@1.png",
          // label: "при поддержке",
          labelSpekt: ["при поддержке", "With support"],
          link: "https://prohelvetia.ru/ru/",
        },
        {
          id: 4,
          // img: "tari.png",
          img: "04_tari@1.png",
          label: "Туристический партнёр",
          labelSpekt: "Тари тур",
          link: "http://www.tarispb.ru/",
        },
        {
          id: 5,
          // img: "r.png",
          img: "05_radioguide@1.png",
          label: "Технологический партнёр",
          labelSpekt: ["Технологический партнёр", "Technological Partner"],
          link: "http://www.radioguide.net/ru/",
        },
        {
          id: 6,
          // img: "O.png",
          img: "06_oasis@1.png",
          label: "Официальный перевозчик",
          labelSpekt: "Турфирма «Оазис»",
          link: "",
        },
        {
          id: 7,
          // img: "hilton.png",
          img: "07_hilton@1.png",
          label: "",
          labelSpekt: ["Площадка проекта", "Project Venue"],
          link: "https://www.hilton.ru/hotels/hampton-by-hilton-saint-petersburg-expoforum/",
        },
        {
          id: 8,
          // img: "nc.svg",
          img: "08_nevsky_centre@1.png",
          label: "",
          labelSpekt: ["Площадка проекта", "Project Venue"],
          link: "http://www.nevskycentre.ru/",
        },
        {
          id: 9,
          // img: "teatr.png",
          img: "09_na_liteinom@1.png",
          label: "",
          labelSpekt: ["Площадка проекта", "Project Venue"],
          link: "http://www.naliteinom.ru/",
        },
        {
          id: 10,
          // img: "zz.png",
          img: "zz.png", //???????????????????
          label: "",
          link: "http://www.zazerkal.spb.ru/",
        },
        {
          id: 11,
          // img: "btk.jpg",
          img: "11_btk@1.png",
          label: "",
          labelSpekt: ["Площадка проекта", "Project Venue"],
          link: "http://puppets.ru/",
        },
        {
          id: 12,
          // img: "new.png",
          img: "12_novaya_scena@1.png",
          label: "",
          labelSpekt: ["Площадка проекта", "Project Venue"],
          link: "https://alexandrinsky.ru/afisha-i-bilety/",
        },
        {
          id: 13,
          // img: "aa.png",
          img: "13_aalto@1.png",
          label: "",
          labelSpekt: "Библиотека Алвара Аалто",
          link: "http://www.aalto.vbgcity.ru/",
        },
        {
          id: 14,
          // img: "rzd.png",
          img: "14_rzd@1.png",
          label: "",
          labelSpekt: "Российские Железные Дороги",
          link: "http://www.rzd.ru/",
        },
        {
          id: 15,
          // img: "bontom.jpg",
          img: "15_bontom@1.png",
          label: "",
          labelSpekt: "Участник фестиваля",
          link: "http://www.bontom.com.au/",
        },
        {
          id: 16,
          // img: "ug.jpg",
          img: "16_ugol@1.png",
          label: "",
          labelSpekt: "Участник фестиваля",
          link: "https://vk.com/ugolkazan",
        },
        {
          id: 17,
          // img: "tvd.jpg",
          img: "17_tvd@1.png",
          label: "",
          labelSpekt: "Участник фестиваля",
          link: "https://sites.google.com/view/alieninvasionmuseum",
        },
        {
          id: 18,
          // img: "bzlk.png",
          img: "18_bezlikie@1.png",
          label: "",
          labelSpekt: "Участник фестиваля",
          link: "http://bezlikie.show/",
        },
        {
          id: 19,
          // img: "popup.svg",
          img: "19_popup@1.png",
          label: "",
          labelSpekt: "Участник фестиваля",
          link: "https://www.popupteatr.ru/",
        },

        {
          id: 20,
          // img: "afisha.jpg",
          img: "20_afisha@1.png",
          label: "",
          labelSpekt: "Билетный партнер",
          link: "https://daily.afisha.ru/",
        },
        {
          id: 21,
          // img: "bumaga.png",
          img: "21_bumaga@1.png",
          label: "",
          link: "https://paperpaper.ru/",
        },
        {
          id: 22,
          // img: "glagolev.png",
          img: "22_glagolev@1.png",
          label: "",
          link: "http://glagolev.fm/",
        },
        {
          id: 23,
          // img: "kudago.png",
          img: "23_kudago@1.png",
          label: "",
          link: "https://kudago.com/",
        },
        {
          id: 24,
          // img: "snob.jpg",
          img: "24_snob@1.png",
          label: "",
          link: "https://snob.ru/",
        },
        {
          id: 25,
          // img: "visit.svg",
          img: "25_visit_spb@1.png",
          label: "",
          link: "http://visit.iac.spb.ru/en/",
        },
        {
          id: 26,
          // img: "village.jpg",
          img: "26_village@1.png",
          label: "",
          link: "https://www.the-village.ru/",
        },
        {
          id: 27,
          // img: "spb.png",
          img: "27_tv_spb@1.png",
          label: "",
          link: "https://topspb.tv/",
        },
        {
          id: 28,
          // img: "iran.png",
          img: "28_rio@1.png",
          label: "",
          labelSpekt: "Информационный партнёр",
          link: "http://rusiranspb.com/",
        },
        {
          id: 29,
          // img: "p2.png",
          img: "29_peterburg2@1.png",
          label: "",
          link: "https://peterburg2.ru/",
        },
        {
          id: 30,
          // img: "3park.png",
          img: "30_tretiy_park@1.png",
          label: "",
          labelSpekt: ["Площадка проекта", "Projects venue"],
          link: "http://3park.ru/",
        },
        {
          id: 31,
          // img: "switz.png",
          img: "31_swiss_emb@1.png",
          label: "",
          labelSpekt: ["при поддержке", "With support"],
          link: "https://www.eda.admin.ch/countries/russia/ru/home.html",
        },
        {
          id: 32,
          img: "32_fort_konstantine@1.png",
          label: "",
          labelSpekt: "Историко-Культурный комплекс Форт Константин",
          link: "http://forthotel.ru/",
        },
        {
          id: 33,
          img: "33_yandex_afisha@1.png",
          label: "",
          labelSpekt: "Яндекс Афиша",
          link: "https://afisha.yandex.ru/",
        },
        {
          id: 34,
          img: "34_kp@1.png",
          label: "",
          labelSpekt: "Комсомольская Правда",
          link: "https://www.kp.ru/",
        },
        {
          id: 35,
          img: "35_radario@1.png",
          label: "",
          labelSpekt: "Билетная система",
          link: "https://radario.ru/",
        },
      ],
      workers: [
        {
          name: ["Филипп Вулах", "Filipp Vulakh"],
          title: ["Директор", "Festival Director"],
          site: "https://vk.com/ru.filipp",
        },
        {
          name: ["Андрей Пронин", "Andrey Pronin"],
          title: ["Программный директор", "Program Director"],
          site: "",
        },
        {
          name: ["Ольга Аршанская", "Olga Arshanskaya"],
          title: ["Заместитель директора фестиваля", "Deputy Director"],
          site: "https://vk.com/id532781",
        },
        {
          name: ["Ксения Малекина", "Ksenia Malekina"],
          title: ["Руководитель продюсерской службы", "Head of Production Department"],
          site: "https://vk.com/malekina",
        },
        {
          name: ["Дарья Назаркина", "Daria Nazarkina"],
          title: ["Главный администратор продюсерской службы", "Chief Administrator of Production Department"],
          site: "https://vk.com/id978095",
        },
        {
          name: ["Анастасия Грекова", "Anastasia Grekova"],
          title: ["Заместитель руководителя продюсерской службы", "Deputy Director of Production Department"],
          site: "https://vk.com/anastasia.grekova",
        },
        {
          name: ["Ксения Евдокимова", "Ksenia Evdokimova"],
          title: ["Координатор проектов", "Projects Coordinator"],
          site: "https://vk.com/nalur",
        },
        {
          name: ["Оксана Преснякова", "Oksana Presnyakova"],
          title: ["Координатор проектов", "Projects Coordinator"],
          site: "https://vk.com/id445523",
        },
        {
          name: ["Екатерина Венедиктова", "Ekaterina Venediktova"],
          title: ["Координатор проектов", "Projects Coordinator"],
          site: "https://vk.com/eaven",
        },
        {
          name: ["Екатерина Теплова", "Ekaterina Teplova"],
          title: ["Руководитель службы гостепреимства фестиваля", "Head of the Festival Hospitality Service"],
          site: "",
        },
        {
          name: ["Антон Москалёв", "Anton Moskalyov"],
          title: ["Главный администратор по работе со зрителем", "Chief Administrator"],
          site: "",
        },
        {
          name: ["Елизавета Сорокина", "Elizaveta Sorokina"],
          title: ["Ассистент проекта", "Project Assistant"],
          site: "https://vk.com/id30152702",
        },
        {
          name: ["Елизавета Готсдинер", "Elizaveta Gotsdiner"],
          title: ["Координатор волонтёрского движения", "Coordinator of Volunteers"],
          site: "https://vk.com/lost_lizard",
        },
        {
          name: ["Артём Арсенян", "Artyom Arsenyan"],
          title: ["Директор по маркетингу и коммуникациям", "Marketing&Communication Director"],
          site: "https://vk.com/arsenyan_artyom",
        },
        {
          name: ["Анна Горбунова", "Anna Gorbunova"],
          title: ["Пресс-атташе", "Press-attaché"],
          site: "https://vk.com/gorbunova_yo",
        },
        {
          name: ["Николай Филиппов", "Nickolay Filippov"],
          title: ["Дизайнер", "Designer"],
          site: "https://vk.com/the_simple_colours",
        },
        {
          name: ["Полина Назарова", "Polina Nazarova"],
          title: ["Фотограф", "Photographer"],
          site: "https://vk.com/polinanazar",
        },
        {
          name: ["Анна Разумова", "Anna Razumova"],
          title: ["Видео", "Video"],
          site: "https://vk.com/razumjtina",
        },
        {
          name: ["Лев Васильев", "Lev Vasilyev"],
          title: ["Веб-разработчик", "Web-Developer"],
          site: "https://vk.com/the_sociophobic",
        },
      ],
    };
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
      if (window.innerWidth <= 768 && this.state.width == 0 && this.state.height == 0) // MOBILE
      {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (iOS) {
          var heightPortrait = ["568", "667", "736", "812", "1024", "1366"];
          var heightLandscape = ["320", "375", "414", "768", "1024"];
          var W = window.innerWidth - 32;
          var H = window.innerWidth - 120;

          if (window.innerWidth > window.innerHeight) //Landscape orientation
            heightLandscape.forEach(height => {
              if (window.innerHeight == height || Math.abs(window.innerHeight - height) < 10 || Math.abs(window.innerHeight - (height - 50)) < 10)
                H = height;
            });
          else //Portrait orientation
            heightPortrait.forEach(height => {
              if (window.innerHeight == height || Math.abs(window.innerHeight - (height - 39)) < 10 || Math.abs(window.innerHeight - (height - 114)) < 10 || Math.abs(window.innerHeight - (height - 95)) < 10)
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
    // this.updateDimensions();
    var time = new myDate();
    this.setState({abonementPic: (time.minute() % 5 < 4)});
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
    // radarioScript.src = "http://radario.ru/scripts/widget/buy-button-widget.js";
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
        <Route exact path="/" render={() => this.renderIndexPage()}/>
        <Route path="/spekt/:id" render={({match}) => this.renderSpektPage(match)}/>
        <Route path="/admin" render={() => this.renderAdminPage()}/>

        <Route path="/schedule" render={() => this.renderSchedulePage()}/>
        <Route path="/visit" render={() => this.renderVisitPage()}/>
        <Route path="/festival" render={() => this.renderFestivalPage()}/>
        <Route path="/partners" render={() => this.renderPartnersPage()}/>
        <Route path="/abonement" render={() => this.renderAbonementPage()}/>
      </Switch>
    );

    switch (this.state.currentPage) {
      case "spekt":
        return this.renderSpektPage();
      default:
        return this.renderIndexPage();
    }
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

  renderIndexPage() {
    document.title = this.state.lang ? "The Access Point: Main Page" : "Точка Доступа: Главная страница";

    var abonementPos = 4;
    var spekts = this.state.spekts.map((spekt, index) =>
      <Link to={"spekt/" + spekt.id} onClick={() => this.setPage()}>
        <div className={"card " + ((index + (index > abonementPos ? 1 : 0)) % 2 ? "right" : "left")} onClick={() => this.setPage("spekt", spekt.id)}>
          <img src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
          {
            spekt.logo ?
              <div>
                <img src={this.lang(spekt.logo)} className="logo"/>
                <img src={this.lang(spekt.logoHover)} className="logo hover"/>
              </div>
            :
              <h4>{capitalize(this.lang(spekt.name))}</h4>
          }
          <div className="row desktop">
            <small className="left">{this.lang(spekt.placeDesc)}</small>
            <div className="icon-container">
              <img src={addressIconYellow} className="address-icon hover" />
              <img src={addressIconWhite} className="address-icon" />
            </div>
            <small className="address left">{this.lang(spekt.address)}</small>
          </div>
          <div className="row mobile">
            <div className="row">
              <small>{this.lang(spekt.placeDesc)}</small>
            </div>
            <div className="row">
              <img src={addressIconWhite} className="address-icon" />
              <small className="address">{this.lang(spekt.address)}</small>
            </div>
          </div>
        </div>
      </Link>
    );
    var abonement = <Link to="abonement" onClick={() => this.setPage("abonement")}>
        <div className="card abonement right">
          <img src={"img/abonements/" + (this.state.abonementPic ? "1.png" : "2.png")} className="background" />
          <img src={"img/abonements/" + (this.state.abonementPic ? "1_hover.png" : "2_hover.png")} className="background hover" />
          <h4>{this.state.lang ? "«The Access Point» Subscriptions" : "Абонементы «Точки доступа»"}</h4>
          <div className="row">
            <button>{this.state.lang ? "LEARN MORE" : "ПОДРОБНЕЕ"}</button>
          </div>
        </div>
      </Link>
    var fichers = this.state.fichers.map(ficher =>
      <div className="table">
        <div className="ficher desktop">
          {/* <img src={"/img/fichers/" + ficher.id + ".jpg"} className="background" /> */}
          <img src="img/fichers/0.jpg" className="background" />
          <div className="containerr">
            <h4>{capitalize(this.lang(ficher.name))}</h4>
            <div className="row">
              <small>{capitalize(this.lang(ficher.place))}</small>
              <img src={addressIconBlack} className="address-icon" />
              <small className="address">{this.lang(ficher.address)}</small>
            </div>
          </div>
        </div>

        <div className="ficher mobile">
          <div className="ficher">
            <img src="img/fichers/0.jpg" className="background" />
          </div>
          <h4>{capitalize(this.lang(ficher.name))}</h4>
          <div className="row">
            <div className="row">
              <small>{capitalize(this.lang(ficher.place))}</small>
            </div>
            <div className="row">
              <img src={addressIconBlack} className="address-icon" />
              <small className="address">{this.lang(ficher.address)}</small>
            </div>
          </div>
        </div>
      </div>
    );

    var W = this.state.width;
    var H = this.state.height;
    // alert(W);
    // var W = this.state.width - 160 - 33;
    // var H = this.state.height - 160 - 76;
    var textStyle = {
      // fontSize: (H / W > 0.7 ? W / 11 : (Math.pow(W * H, 0.454) * (W / H > 20 / 9 ? 0. 18 : 0.19))) + "px"
      fontSize: (H / W > 0.7 ? W / 11 : (Math.pow(W * H, 0.452) * (W / H > 20 / 9 ? 0.21 : 0.22))) * (this.state.lang ? 1.1 : 1) + "px"
    };
    // var W = this.state.width - 32;
    // var H = this.state.height - 160 - 63;
    var textStyleMobile = {
      // fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.1 : 0.12) : (W < 340 || H < 340 ? 0.118 : 0.133)))) + "px"
      // fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.1 : 0.12) : (W < 340 || H < 340 ? 0.118 : 0.133)))) + "px"
      fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.12 : 0.14) : (W < 340 || H < 340 ? 0.138 : 0.153)))) * (this.state.lang ? 1.1 : 1) + "px"
    };
    var landscape = W > H && W <= 768;

    if (this.state.code == "рейв")
      recursiveTimeOut(this.easterEgg.bind(this), 555, 100500);
    if (this.state.code == "ййййй")
      recursiveTimeOut(this.easterEggRomanova.bind(this), 555, 100500);


    var codeText = (this.state.lang ? "4th international summer festival of arts" : "четвертый международный летний фестиваль искусств").split("").map(letter =>
      <b onClick={() => this.setState({code: this.state.code + letter})}>{letter}</b>
    );
    var codeText2 = (this.state.lang ? "the access point" : "точка доступа").split("").map(letter =>
      <b onClick={() => this.setState({code: this.state.code + letter})}>{letter}</b>
    );
    var codeText3 = (this.state.lang ? "19\xa0July — 5\xa0August" : "19\xa0июля — 5\xa0августа").split("").map(letter =>
      <b onClick={() => this.setState({code: this.state.code + letter})}>{letter}</b>
    );


    return (
      <div>
        <div className="upper with-logo">
          <div className={"text-container" + (landscape ? " landscape" : "")}>
            <section id="title-container">
              <h1 style={this.state.mobile ? textStyleMobile : textStyle}>
                {codeText}
                {/* <h1 style={this.state.mobile ? textStyleMobile : textStyle}>
                  Санкт-Петербург
                </h1>
                <h1 style={this.state.mobile ? textStyleMobile : textStyle}>
                  <b> 19&nbsp;июля — 5&nbsp;августа </b>
                </h1> */}
              </h1>
              <h1 style={this.state.mobile ? textStyleMobile : textStyle}>
                {codeText2}
              </h1>
              <h1 style={this.state.mobile ? textStyleMobile : textStyle}>
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
  renderSpektPage(match) {
    // var spekt = this.state.spekts[this.state.currentSpekt];
    var spekt = this.state.spekts.find(item => item.id == match.params.id);
    document.title = (this.state.lang ? "The Access Point: " : "Точка доступа: ") + this.lang(spekt.name);

    var schedule = spekt.schedule.map(day => {
      var date = new myDate(day.date, this.state.lang ? "ENG" : "RU");

      return (
        <div className="row small">
            <div className="dates">
              <span>{day.additionalDate ? (this.lang(day.additionalDate) + ", ") : ""}</span>
              <span>{date.date()}, {date.dayOfWeekShort()}</span>
            </div>
            <div className="times">
              {
                day.shows.sort((a, b) => a.time < b.time)
                .map(show => {
                  if (spekt.tickets != undefined || show.tickets != undefined ? "empty" : "")
                    return <button className="time empty">
                      {show.time}
                      <span className="tooltiptext">
                        {
                          spekt.tickets == 0 || show.tickets == 0 ?
                            (this.state.lang ? "Tickets will be available soon" : "Билеты скоро в продаже")
                          :
                            (spekt.tickets == -1 || show.tickets == -1 ? (this.state.lang ? "No tickets" : "Билетов нет") : "")
                        }
                      </span>
                    </button>;
                    return <button className="time" data-radario-event-id={show.radarioId}>
                      {show.time}
                    </button>;
                })
              }
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
      case 6:
        age = age6;
        break;
      default:
        age = age0;
        break;
    }
    var team = spekt.team.map(position =>
      <div className="position">
        <div className="row">
          {this.lang(position.label)}
        </div>
        <div className="row">
          {
            position.people.map((name, index) =>
              <b>{this.lang(name)}{index < position.people.length - 1 ? ", " : ""}</b>
            )
          }
        </div>
      </div>
    );
    var partners = this.state.partners
    .filter(partner => spekt.partners.find(id => id == partner.id))
    .map((partner, index) =>
      <a href={partner.link} className={(index % 2 ? "" : "margin")} target="_blank">
        <div className="partner">
          <div className="row">
            <img src={"/img/partners/1x/" + partner.img} className="logo"/>
          </div>
          {this.lang(partner.labelSpekt)}
        </div>
      </a>
    );
    var partnersPairs = [];
    partners.forEach((partner, index) => {
      if (index % 2 == 0)
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

    return (
      <div>
        <div className="upper">
          <img src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
          <div className="title-container">
            <h5>{capitalize(this.lang(spekt.place))}</h5>
            {this.lang(spekt.logo) ? <img src={this.lang(spekt.logo)} className="logo" /> : <h3>{capitalize(this.lang(spekt.name))}</h3>}
            {this.lang(spekt.additionalTitleText) ? <span>{this.lang(spekt.additionalTitleText)}</span> : ""}
          </div>
        </div>
        <div className="row">
          <div className="small-container">
            <div className="left-tab">
              <div className="textarea">
                {newLines(this.lang(spekt.text))}
              </div>
            </div>
            <div className="right-tab">
              <div className="schedule-block">
                <div className="row big">
                  <div className="row small">
                    <h5>{this.state.lang ? "Schedule and tickets" : "Расписание и билеты"}</h5>
                  </div>
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
                  <div className="row small">
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
                <img src={age} />
              </div>
              {spekt.banner ? <a href={spekt.banner.link} target="_blank"><img src={"/img/spekts/" + spekt.banner.img} className="banner" /></a> : ""}
            </div>
            <div className="left-tab">
              <h4>{this.state.lang ? "Team" : "Команда спектакля"}</h4>
              <div className="row margin">
                <div className="half">
                  {team.slice(0, Math.ceil(spekt.team.length / 2))}
                </div>
                <div className="half">
                  {team.slice(Math.ceil(spekt.team.length / 2))}
                </div>
              </div>
              <h4>{this.state.lang ? "Directions" : "Как добраться?"}</h4>
              <Map location={this.lang(spekt.address)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAdminPagex() {
    var spekts = this.state.spekts.map(spekt => {
      return {
        number: "",
        id: spekt.id,
        id_shown: spekt.id,
        name: spekt.name,
        place: spekt.place,
        edit: "",
        move: "",
      };
    });

    return (
      <div>
        {/* <Sortable listings={spekts} setState={this.setState.bind(this)} /> */}
      </div>
    );
  }
  renderSchedulePage() {
    document.title = "Точка доступа: Расписание";

    var days = [];
    this.state.spekts
    .filter(spekt => this.state.scheduleFilter == "all" || spekt.category == this.state.scheduleFilter)
    .forEach(spekt => {
      spekt.schedule.forEach(day => {
        day.shows.forEach(show => {
          if (!days.find(d => d.date == day.date))
            days.push({
              date: day.date,
              spekts: [],
            });
          days.find(d => d.date == day.date).spekts.push({
            id: spekt.id,
            name: this.lang(spekt.name),
            address: this.lang(spekt.address),
            metro: this.lang(spekt.metro),
            time: show.time,
            tickets: spekt.tickets != undefined ? spekt.tickets : (show.tickets != undefined ? show.tickets : undefined),
            radarioId: show.radarioId,
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
      .map(spekt => {
        var buyButton;
        if (spekt.tickets != undefined) {
          // alert(spekt.name);
          buyButton = (
            <button className="empty">
              {this.state.lang ? "Buy" : "Билет"}
              <span className="tooltiptext">
                {spekt.tickets == 0 ? (this.state.lang ? "Tickets will be available soon" : "Билеты скоро в продаже") : spekt.tickets == -1 ? (this.state.lang ? "No tickets" : "Билетов нет") : ""}
              </span>
            </button>
          );
        }
        else {
          buyButton = <button data-radario-event-id={spekt.radarioId}>{this.state.lang ? "Buy" : "Билет"}</button>
        }

        return (
          <article className="spekt-listing">
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
            </div>
          </article>
        );
      });

      return (
        <article className="day-listing">
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
        className={this.state.scheduleFilter == button.id ? "active" : ""}
        onClick={() => {this.setState({scheduleFilter: button.id}); window.scrollTo(0, 0);}}
      >
        {capitalize(button.label)}
      </button>
    );

    var navigationContent = this.state.mobile ?
      <div className="container">
        {filterButtons.map(button => <div className="column center">{button}</div>)}
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

        {daysMapped}
      </div>
    );
  }
  renderVisitPage() {
    document.title = this.state.lang ? "Точка доступа: Практическая информация" : "The Access Point: Practical Information";

    var array = [
      {
        id: "late",
        title: (this.state.lang ? "how to be on time?" : "как не опоздать?"),
        text: <span>{
          this.state.lang ?
          "english text"
          :
          "Администраторы впускают и проводят необходимый инструктаж зрителей на локациях за 15 минут до начала спектакля. Пожалуйста, планируйте время и дорогу заранее — многие площадки находятся далеко от центра Петербурга."
        }</span>,
      },
      {
        id: "way",
        title: (this.state.lang ? "what is the way?" : "Как добраться?"),
        text: <div>
          <span>
            {
              this.state.lang ?
              "english text"
              :
              "До каждой из десяти локаций можно доехать на общественном транспорте."
            }
          </span>
          <span>
            {
              this.state.lang ?
              "eng text"
              :
              "Нажмите на локацию, чтобы увидеть транспорт, на котором вы сможете добраться до нее."
            }
          </span>
          <Map
            locations={this.state.spekts.map(spekt => {
              return {
                name: spekt.mapLabel || spekt.name,
                description: spekt.mapDescription,
                place: spekt.address,
              };
            })}
            lang={this.state.lang}
          />
          {/* <span>
            Универсальный способ — воспользоваться специальным предложением «Яндекс.Такси»
          </span>
          <div className="row">
            <a href="https://itunes.apple.com/ru/app/yandex-taxi/id472650686?mt=8" target="_blank">
              <img src={appStore} className="app left" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=ru.yandex.taxi&hl=ru" target="_blank">
              <img src={playMarket} className="app right" />
            </a>
          </div> */}
        </div>,
      },
      {
        id: "find",
        title: this.state.lang ? "ENG" : "Как найти?",
        text: <div>
            <span>
              {
                this.state.lang ?
                "english text"
                :
                "Ваш ориентир — черно-желтая стойка с логотипом «Точки доступа». Наших администраторов легко узнать по фирменной футболке с логотипом фестиваля."
              }
            </span>
            {
              this.state.lang ?
              <span>
                Eng Если вы не можете найти точку старта, позвоните по номеру <b className="yellow-link">+7 (812) 649-92-06</b>. Администратор фестиваля поможет вам сориентироваться.
              </span>
              :
              <span>
                Если вы не можете найти точку старта, позвоните по номеру <b className="yellow-link">+7 (812) 649-92-06</b>. Администратор фестиваля поможет вам сориентироваться.
              </span>
            }
          </div>,
      },
      {
        id: "cloth",
        title: this.state.lang ? "ENG" : "Как одеться?",
        text: this.state.lang ?
          <div>
            <span>
              ENG Главное — удобно! Выбирайте удобную одежду и комфортную обувь без каблука, в которой вы легко сможете ходить во время спектакля. Многие спектакли «Точки доступа» проходят на открытых площадках и не предполагают привычного зала с креслами.
            </span>
            <span>
              ENG На спектаклях под открытым небом — «Время роста деревьев» и «Петербург вне себя» — в случае дождя мы предоставим зрителям дождевики. Но если вам будет комфортно, вы можете взять на спектакль зонт.
            </span>
            <span>
              ENG Обычно мы не отменяет спектакли из-за погодных условий. Но вы всегда можете уточнить информацию в нашей <a href="https://vk.com/tochkadostupa" target="_blank" className="yellow-link">группе</a> или по телефону <b className="yellow-link">+7 (812) 649-92-06</b>.
            </span>
          </div>
          :
          <div>
            <span>
              Главное — удобно! Выбирайте удобную одежду и комфортную обувь без каблука, в которой вы легко сможете ходить во время спектакля. Многие спектакли «Точки доступа» проходят на открытых площадках и не предполагают привычного зала с креслами.
            </span>
            <span>
              На спектаклях под открытым небом — «Время роста деревьев» и «Петербург вне себя» — в случае дождя мы предоставим зрителям дождевики. Но если вам будет комфортно, вы можете взять на спектакль зонт.
            </span>
            <span>
              Обычно мы не отменяет спектакли из-за погодных условий. Но вы всегда можете уточнить информацию в нашей <a href="https://vk.com/tochkadostupa" target="_blank" className="yellow-link">группе</a> или по телефону <b className="yellow-link">+7 (812) 649-92-06</b>.
            </span>
          </div>,
      },
      {
        id: "ticket",
        title: this.state.lang ? "ENG" : "Как купить билет?",
        text: this.state.lang ?
          <div>
            <span>
              <b>ENG На сайте фестиваля.</b> Выберите нужный спектакль на главной странице и нажмите на кнопку «Купить билет». Следуйте инструкциям в открывшемся окне. Электронный билет после оплаты банковской картой придет на указанный вами email.
            </span>
            <span>
              <b>На сайте и в кассах Kassir.ru.</b> Нажмите кнопку «Купить билет» рядом с названием спектакля на сайте <a href="kassir.ru" target="_blank" className="yellow-link">Kassir.ru</a>. Также вы можете приобрести билеты в городских кассах Kassir, найдите ближайшую к вам в списке <a href="https://spb.kassir.ru/biletnye-kassy" target="_blank" className="yellow-link">https://spb.kassir.ru/biletnye-kassy</a>.
            </span>
            <span>
              <b>По телефону.</b> Вы можете забронировать билеты по номеру <b className="yellow-link">+7 (812) 649-92-06</b> и выкупить их не позднее, чем за 30 минут до начала спектакля (после бронь снимается). Оплатить покупку можно только наличными!
            </span>
            <span className="no-margin">
              <b>Распечатывать электронные билеты НЕ обязательно.</b>
            </span>
            <span>
              Достаточно предъявить администратору электронный с любого устройства.
            </span>
            <span>
              Чтобы вернуть билет, свяжитесь с нашим администратором по телефону <b className="yellow-link">+7 (812)-649-92-06</b>. Он объяснит, как вы можете обменять билет или вернуть деньги.
            </span>
          </div>
          :
          <div>
            <span>
              <b>На сайте фестиваля.</b> Выберите нужный спектакль на главной странице и нажмите на кнопку «Купить билет». Следуйте инструкциям в открывшемся окне. Электронный билет после оплаты банковской картой придет на указанный вами email.
            </span>
            <span>
              <b>На сайте и в кассах Kassir.ru.</b> Нажмите кнопку «Купить билет» рядом с названием спектакля на сайте <a href="kassir.ru" target="_blank" className="yellow-link">Kassir.ru</a>. Также вы можете приобрести билеты в городских кассах Kassir, найдите ближайшую к вам в списке <a href="https://spb.kassir.ru/biletnye-kassy" target="_blank" className="yellow-link">https://spb.kassir.ru/biletnye-kassy</a>.
            </span>
            <span>
              <b>По телефону.</b> Вы можете забронировать билеты по номеру <b className="yellow-link">+7 (812) 649-92-06</b> и выкупить их не позднее, чем за 30 минут до начала спектакля (после бронь снимается). Оплатить покупку можно только наличными!
            </span>
            <span className="no-margin">
              <b>Распечатывать электронные билеты НЕ обязательно.</b>
            </span>
            <span>
              Достаточно предъявить администратору электронный с любого устройства.
            </span>
            <span>
              Чтобы вернуть билет, свяжитесь с нашим администратором по телефону <b className="yellow-link">+7 (812)-649-92-06</b>. Он объяснит, как вы можете обменять билет или вернуть деньги.
            </span>
          </div>,
      },
      {
        id: "discount",
        title: this.state.lang ? "ENG" : "Как получить скидку?",
        text: this.state.lang ?
          <div>
            <span>
              ENG <b>Скидка 50% для студентов и пенсионеров.</b>
            </span>
            <span className="no-margin">
              Чтобы получить скидку:
            </span>
            <span clas>
              <ol>
                <li>
                  отправьте на почту <a href="mailto:tickets@tochkadostupa.spb.ru" className="yellow-link">tickets@tochkadostupa.spb.ru</a> письмо, в котором укажите Ваше имя, название учебного заведения, и список событий фестиваля, которые хотите посетить. <b>Не забудьте прикрепить к письму скан студенческого билета</b>;
                </li>
                <li>
                  получите ответное письмо с промокодом на скидку 50%;
                </li>
                <li>
                  зайдите на сайт фестиваля, выберите нужный спектакль, нажмите кнопку «Купить билет», введите промокод и оплатите покупку. Готово!
                </li>
              </ol>
            </span>
            <span>
              По одному студенческому можно купить только один билет на спектакль!
            </span>
          </div>
          :
          <div>
            <span>
              <b>Скидка 50% для студентов и пенсионеров.</b>
            </span>
            <span className="no-margin">
              Чтобы получить скидку:
            </span>
            <span clas>
              <ol>
                <li>
                  отправьте на почту <a href="mailto:tickets@tochkadostupa.spb.ru" className="yellow-link">tickets@tochkadostupa.spb.ru</a> письмо, в котором укажите Ваше имя, название учебного заведения, и список событий фестиваля, которые хотите посетить. <b>Не забудьте прикрепить к письму скан студенческого билета</b>;
                </li>
                <li>
                  получите ответное письмо с промокодом на скидку 50%;
                </li>
                <li>
                  зайдите на сайт фестиваля, выберите нужный спектакль, нажмите кнопку «Купить билет», введите промокод и оплатите покупку. Готово!
                </li>
              </ol>
            </span>
            <span>
              По одному студенческому можно купить только один билет на спектакль!
            </span>
          </div>,
      },
      {
        id: "accreditation",
        title: this.state.lang ? "ENG" : "Как получить аккредитацию?",
        text: this.state.lang ?
          <div>
            <span>
              ENG <b>Вы режиссер, актер, художник, искусствовед, куратор или продюсер?</b>
            </span>
            <span>
              Чтобы получить профессиональную аккредитацию и купить билет на любое событие фестиваля по фиксированной цене 300 рублей, заполните <a href="https://goo.gl/forms/jOzsUVxfQDzw4P4K3" target="_blank" className="yellow-link">гугл-форму</a>.
            </span>
            <span>
              <b>Вы журналист или критик?</b>
            </span>
            <span>
              Чтобы получить аккредитацию на спектакли и события фестиваля, отправьте заявку на почту <a href="mailto:press@tochkadostupa.spb.ru" className="yellow-link">press@tochkadostupa.spb.ru</a>.
            </span>
            <span>
              Если вы еще не получаете рассылку с информацией о фестивале, времени начала и завершения аккредитации на конкретные спектакли, напишите нам — с радостью будем делиться с вами новостями!
            </span>
          </div>
          :
          <div>
            <span>
              <b>Вы режиссер, актер, художник, искусствовед, куратор или продюсер?</b>
            </span>
            <span>
              Чтобы получить профессиональную аккредитацию и купить билет на любое событие фестиваля по фиксированной цене 300 рублей, заполните <a href="https://goo.gl/forms/jOzsUVxfQDzw4P4K3" target="_blank" className="yellow-link">гугл-форму</a>.
            </span>
            <span>
              <b>Вы журналист или критик?</b>
            </span>
            <span>
              Чтобы получить аккредитацию на спектакли и события фестиваля, отправьте заявку на почту <a href="mailto:press@tochkadostupa.spb.ru" className="yellow-link">press@tochkadostupa.spb.ru</a>.
            </span>
            <span>
              Если вы еще не получаете рассылку с информацией о фестивале, времени начала и завершения аккредитации на конкретные спектакли, напишите нам — с радостью будем делиться с вами новостями!
            </span>
          </div>,
      },
    ];
    var articles = array.map(article =>
      <article id={article.id}>
        <h3>{capitalize(article.title)}</h3>
        {article.text}
      </article>
    );

    /* NAVIGATION */
    var currentArticle = -1;
    array.forEach((article, index) => {
      var articleElement = document.getElementById(article.id);
      if (articleElement) {
        var scrollOffset = this.state.mobile ? 0 : (-document.getElementById("visit-navigation").clientHeight - 80);
        var currentScroll = 450 + scrollOffset;

        var articleStyle = articleElement.currentStyle || window.getComputedStyle(articleElement);
        var articleTop = articleElement.getBoundingClientRect().top - parseInt(articleStyle.marginTop.slice(0, -2));
        var articleBottom = articleElement.getBoundingClientRect().bottom + parseInt(articleStyle.marginBottom.slice(0, -2));

        if (currentScroll > articleTop && currentScroll <= articleBottom)
          currentArticle = index;
      }
    });

    var links = array.map((article, index) =>
      <button
        className={currentArticle == index ? "active" : ""}
        onClick={() => {
          var scrollOffset = this.state.mobile ? 0 : (-document.getElementById("visit-navigation").clientHeight - 80);
          this.scrollTo(article.id, scrollOffset);
      }}>
        {capitalize(article.title)}
      </button>
    );

    var navigationLinks = window.innerWidth - (this.state.mobile ? 0 : 160) > 770 ?
    <div className="container">
        <div className="column center">
          {links.slice(0, 5)}
        </div>
        <div className="column center">
          {links.slice(5)}
        </div>
      </div>
    :
      <div className="container">
        <div className="column center">
          {links.slice(0, 2)}
        </div>
        <div className="column center">
          {links.slice(2, 4)}
        </div>
        <div className="column center">
          {links.slice(4, 6)}
        </div>
        <div className="column center">
          {links.slice(6)}
        </div>
      </div>;
    if (window.innerWidth < 414)
      navigationLinks = links.map(link => <div className="column center">{link}</div>);

    return (
      <div className="visit">
        <h1 id="visit-title">{this.state.lang ? "Practical Information" : "Практическая информация"}</h1>
        <article id="visit-navigation">
          {navigationLinks}
        </article>
        <article id="visit-navigation" className={"fixed " + (this.state.navigationFixed && !this.state.mobile ? "visible" : "invisible")}>
          {navigationLinks}
        </article>
        <div className="visit-container">
          {articles.slice(0, -1)}
        </div>
        <div className="visit-container small">
          {articles.slice(-1)}
        </div>
      </div>
    );
  }
  renderFestivalPage() {
    document.title = this.state.lang ? "The Access Point: Festival" : "Точка Доступа: Фестиваль";

    var workersMapped = this.state.workers.map(worker =>
      <div className="worker">
        {/* <a href={worker.site} target="_blank"> */}
          <div className="name">{this.lang(worker.name)}</div>
        {/* </a> */}
        <div className="title">{this.lang(worker.title)}</div>
      </div>
    );
    var team;
    if (window.innerWidth > 1100)
      team = <div className="row">
          <div className="third margin">
            {workersMapped.slice(0, -1).filter((w, i) => i % 3 == 0)}
            {workersMapped.slice(-1)}
          </div>
          <div className="third margin">
            {workersMapped.slice(0, -1).filter((w, i) => i % 3 == 1)}
          </div>
          <div className="third">
            {workersMapped.slice(0, -1).filter((w, i) => i % 3 == 2)}
          </div>
        </div>;
      else if (window.innerWidth > 768)
        team = <div className="row">
          <div className="half margin">
            {workersMapped.slice(0, -1).filter((w, i) => i % 2 == 0)}
            {workersMapped.slice(-1)}
          </div>
          <div className="half">
            {workersMapped.slice(0, -1).filter((w, i) => i % 2 == 1)}
          </div>
          {/* <div className="row">
            {workersMapped.slice(-1)}
          </div> */}
        </div>;
      else
        team = <div className="row">
          {workersMapped}
        </div>;

    return (
      <div className="festival-container">
        <h1>{this.state.lang ? "Festival" : "Фестиваль"}</h1>
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
              С 19 июля по 5 августа в Петербурге пройдет четвертый фестиваль «Точка доступа» — крупнейший в России форум, специализирующийся на сайт-специфическом театре и искусстве. События фестиваля проходят в необычных пространствах, здесь ландшафты, архитектура, известные и закрытые локации Петербурга превращаются в территорию искусства. Начиная с первой «Точки доступа», фестиваль работает как продюсерский центр: не только приглашает спектакли, но и выпускает собственные премьеры.
            </span>
            <span>
              В 2017-м мы заявили о себе как о международном фестивале и в новом сезоне продолжаем держать курс на культурное сотрудничество с другими странами. В афише этого года — премьеры от постановщиков из Германии, Швейцарии и Ирана, гастроли оперного спектакля из Австралии и петербургские премьеры спектаклей из Москвы и Казани. Четвертая «Точка доступа» впервые выезжает за пределы Петербурга — режиссерская лаборатория «Культурный герой XXI» пройдет в выборгской Библиотеке Алвара Аалто — шедевре конструктивизма.
            </span>
          </div>
        }
        <h3>{this.state.lang ? "Team" : "Команда фестиваля"}</h3>
        {team}
      </div>
    );
  }
  renderPartnersPage() {
    document.title = this.state.lang ? "The Access Point: Partners" : "Точка Доступа: Партнеры";
    // var blocks4 = [
    //   "Фестиваль проходит при поддержке", 0, 1, 3,
    //   "Соорганизатор спектакля «Марат/Сад»", 2, null, null,
    //   "Туристический партёр", 4, "Техно-логический партнёр", 5,
    //   "Официальный перевозчик", 6, null, null,
    //   "Площадки фестиваля", 7, 8, 30,
    //   null, 32, 9, 11,
    //   null, 12, 13, 14,
    //   "Участники фестиваля", 15, 16, 17,
    //   null, 18, 19, null,
    //   "Билетная система", 35, "Билетный партнёр", 33
    // ];
    // var blocks3 = [
    //   "Фестиваль проходит при поддержке", 0, 1,
    //   null, 3, null,
    //   "Соорганизатор спектакля «Марат/Сад»", 2, null,
    //   "Туристический партёр", 4, null,
    //   "Техно-логический партнёр", 5, null,
    //   "Официальный перевозчик", 6, null,
    //   "Площадки фестиваля", 7, 8,
    //   null, 30, 32,
    //   null, 9, 11,
    //   null, 12, 13,
    //   null, 14, null,
    //   "Участники фестиваля", 15, 16,
    //   null, 17, 18,
    //   null, 19, null,
    //   "Билетная система", 35, null,
    //   "Билетный партнёр", 33, null,
    // ];
    var blocks4 = [
      (this.state.lang ? "Festival is supported by" : "Фестиваль проходит при поддержке"), 0, null, null,
      (this.state.lang ? "Support by" : "При поддержке"), 1, null, null,
      (this.state.lang ? "\"Marat/Sade\" is a collaboration with" : "Соорганизатор спектакля «Марат/Сад»"), 2, (this.state.lang ? "Support by" : "При поддержке"), 3,
      (this.state.lang ? "Tourist partner" : "Туристический партёр"), 4, (this.state.lang ? "Techno-logical partner" : "Техно-логический партнёр"), 5,
      (this.state.lang ? "Official carrier" : "Официальный перевозчик"), 6, null, null,
      (this.state.lang ? "Theatrical venues" : "Площадки фестиваля"), 7, 8, 30,
      null, 32, 9, 11,
      null, 12, 13, 14,
      (this.state.lang ? "General internet partner" : "Генеральный интернет партнёр"), 23, null, null,
      (this.state.lang ? "Informational partners" : "Информационные партнёры"), 29, 26, 25,
      null, 21, 20, 22,
      null, 34, 24, 27,
      null, 28, null, null,
      (this.state.lang ? "Festival participants" : "Участники фестиваля"), 15, 16, 17,
      null, 18, 19, null,
      (this.state.lang ? "Ticket system" : "Билетная система"), 35, null, null
    ];
    var blocks3 = [
      (this.state.lang ? "Festival is supported by" : "Фестиваль проходит при поддержке"), 0, null,
      (this.state.lang ? "Support by" : "При поддержке"), 1, null,
      (this.state.lang ? "\"Marat/Sade\" is a collaboration with" : "Соорганизатор спектакля «Марат/Сад»"), 2, null,
      (this.state.lang ? "Support by" : "При поддержке"), 3, null,
      (this.state.lang ? "Tourist partner" : "Туристический партёр"), 4, null,
      (this.state.lang ? "Techno-logical partner" : "Техно-логический партнёр"), 5, null,
      (this.state.lang ? "Official carrier" : "Официальный перевозчик"), 6, null,
      (this.state.lang ? "Theatrical venues" : "Площадки фестиваля"), 7, 8,
      null, 30, 32,
      null, 9, 11,
      null, 12, 13,
      null, 14, null,
      (this.state.lang ? "General internet partner" : "Генеральный интернет партнёр"), 23, null,
      (this.state.lang ? "Informational partners" : "Информационные партнёры"), 29, 26,
      null, 25, 21,
      null, 20, 22,
      null, 34, 24,
      null, 27, 28,
      (this.state.lang ? "Festival participants" : "Участники фестиваля"), 15, 16,
      null, 17, 18,
      null, 19, null,
      (this.state.lang ? "Ticket system" : "Билетная система"), 35, null,
    ];

    var blocks;
    var lineLength;
    var linedBlocks;
    if (window.innerWidth > 1000) {
      blocks = blocks4;
      lineLength = 4;
    }
    else {
      if (window.innerWidth > 580) {
        blocks = blocks3;
        lineLength = 3;
      }
    }
    if (lineLength) {
      var mappedBlocks = blocks.map(block => {
        switch(typeof block) {
          case "object": //null
            return <div className="block empty"></div>;
          case "string":
            return <div className="block"><span>{block}</span></div>;
          case "number":
            var partner = this.state.partners.find(partner => partner.id == block);
            return <div className="block">
              <a href={partner.link} target="_blank">
                <img src={"img/partners/1x/" + partner.img} />
              </a>
            </div>;
        }
      });
      linedBlocks = [];
      mappedBlocks.forEach((block, index) => {
        if (index % lineLength == 0)
          linedBlocks.push([block]);
        else
          linedBlocks[linedBlocks.length - 1].push(block);
        if (index % lineLength == lineLength - 1)
          linedBlocks[linedBlocks.length - 1] = <div className={"partners-row " + (mappedBlocks.length == index + 1 ? "no-border" : "")}>
            <div className="row-content">
              {linedBlocks[linedBlocks.length - 1]}
            </div>
          </div>;
      });
    } else {
      linedBlocks = blocks4.map(block => {
        switch(typeof block) {
          case "object": //null
            return;
          case "string":
            return <div className="block"><span>{block}</span></div>;
          case "number":
            var partner = this.state.partners.find(partner => partner.id == block);
            return <div className="block">
              <a href={partner.link} target="_blank">
                <img src={"img/partners/1x/" + partner.img} />
              </a>
            </div>;
        }
      });
    }

    var partners = this.state.partners;

    var mappedPartners = partners.map(partner =>
      <a href={partner.link}>
        <div className="partner">
          <div className="column center">
            <img src={"/img/partners/1x/" + partner.img} />
          </div>
          <span>{partner.label}</span>
        </div>
      </a>
    );
    var linedPartners = (window.innerWidth < 768 ?
      <div className="row">
        {mappedPartners.slice(0, 7)}
        <h5>Площадки фестиваля</h5>
        {mappedPartners.slice(7, 15)}
        {mappedPartners[30]}
        <h5>Участники фестиваля</h5>
        {mappedPartners.slice(15, 20)}
        <h5>Информационные партнёры</h5>
        {mappedPartners.slice(20, 30)}
      </div>
      :
      <div className="row">
        <div className="third center">
          {mappedPartners[0]}
          {mappedPartners[1]}
        </div>
        <div className="row">
          <div className="third left">
            {mappedPartners[2]}
          </div>
          <div className="third right">
            {mappedPartners[3]}
          </div>
        </div>

        <div className="row">
          <div className="third">
            {mappedPartners[4]}
          </div>
          <div className="third">
            {mappedPartners[5]}
          </div>
          <div className="third">
            {mappedPartners[6]}
          </div>
        </div>

        <h5>Площадки фестиваля</h5>
        <div className="row">
          <div className="third">
            {mappedPartners[7]}
            {mappedPartners[10]}
          </div>
          <div className="third">
            {mappedPartners[8]}
            {mappedPartners[11]}
          </div>
          <div className="third">
            {mappedPartners[9]}
            {mappedPartners[12]}
          </div>
        </div>
        <div className="row">
          <div className="third">
              {mappedPartners[13]}
            </div>
            <div className="third">
              {mappedPartners[14]}
            </div>
            <div className="third">
              {mappedPartners[30]}
            </div>
        </div>

        <h5>Участники фестиваля</h5>
        <div className="third">
          {mappedPartners[15]}
        </div>
        <div className="third">
          {mappedPartners[16]}
        </div>
        <div className="third">
          {mappedPartners[17]}
        </div>
        <div className="two-third center">
          <div className="half">
            {mappedPartners[18]}
          </div>
          <div className="half">
            {mappedPartners[19]}
          </div>
        </div>


        <h5>Информационные партнёры</h5>
        <div className="third">
          {mappedPartners[20]}
          {mappedPartners[23]}
          {mappedPartners[26]}
        </div>
        <div className="third">
          {mappedPartners[21]}
          {mappedPartners[24]}
          {mappedPartners[27]}
        </div>
        <div className="third">
          {mappedPartners[22]}
          {mappedPartners[25]}
          {mappedPartners[28]}
        </div>
        <div className="third center">
          {mappedPartners[29]}
        </div>
      </div>
    );

    return (
      <div className="partners-container">
        <h1 className="text-center">{this.state.lang ? "Partners" : "Партнеры"}</h1>
        {/* {linedPartners} */}
        <div className="row">
          {linedBlocks}
        </div>
      </div>
    );
  }
  renderAbonementPage() {
    document.title = this.state.lang ? "The Access Point: Subscription" : "Точка доступа: Абонемент";

    var spekts = [4, 3, 0, 2, 1, /* abonement 2 */ 5, 4, 3, 0, 2, 1, 9, 7, 6].map(id => {
      var spekt = this.state.spekts.find(spekt => spekt.id == id);
      return <div className="row">
          <Link to={"spekt/" + spekt.id} onClick={() => this.setPage("spekt", spekt.id)}>{this.lang(spekt.name)}</Link>
          {(id == 0 ? (<p>{this.state.lang ? "all 4 evenings" : "все 4 вечера"}</p>) : "")}
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
            <span>После покупки абонемента на почту придёт инструкция по его активации.</span>
            <span>Если у вас возникли вопросы или сложности при активации абонемента, пожалуйста, свяжитесь с нами по почте <a href="mailto:tickets@tochkadostupa.spb.ru" className="yellow-link">tickets@tochkadostupa.spb.ru</a>.</span>
          </div>
        }
      </div>
    );
  }

  render() {
    var currentPage = window.location.href;
    currentPage = currentPage.slice(currentPage.lastIndexOf("/") + 1);
    var headerLinks = this.state.headerLinks
    .filter(link => !this.state.lang || link.address != "visit")
    .map(link =>
      <Link to={"/" + link.address} onClick={() => this.setPage()}>
        <li className={currentPage == link.address ? "active" : ""} onClick={() => this.setPage(link.address)}>{capitalize(this.lang(link.label))}</li>
      </Link>
    );
    var headerLinksMobile = this.state.headerLinks
    .filter(link => !this.state.lang || link.address != "visit")
    .map(link =>
      <Link to={"/" + link.address} onClick={() => this.setPage()}>
        <button onClick={() => this.setPage(link.address)}>{capitalize(this.lang(link.label))}</button>
      </Link>
    );

    if (this.state.mobileMenu)
      return (
        <Router>
          <div className="menu">
            <header>
              <Link to={"/"} onClick={() => this.setPage()}>
                <img src={logoMobile} className="logo mobile" onClick={() => this.setPage("index")} />
              </Link>
              <Link to={"/"} onClick={() => this.setPage()}>
                <h4 className="mobile" onClick={() => this.setPage("index")} >точка доступа</h4>
              </Link>
              <img src={cross} className="burger mobile" onClick={() => this.toggleMenu()}/>
            </header>
            {headerLinksMobile}
            <div className="lang" onClick={() => this.setState({lang: (this.state.lang + 1) % 2})}>
              <img src={this.state.lang ? "/img/Ru.jpg" : "/img/En.jpg"} className="flag" />
              <span>{this.state.lang ? "Ru" : "En"}</span>
            </div>
            <div className="social">
              <a href="https://www.instagram.com/tochkadostupaspb/" target="_blank">
                <img src={instagramLogo} className="instagram" />
              </a>
              <a href="https://www.facebook.com/tochkadostupa" target="_blank">
                <img src={facebookLogo} className="facebook" />
              </a>
              <a href="https://vk.com/tochkadostupa" target="_blank">
                <img src={vkLogo} className="vk" />
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
              <img src={logoMobile} className="logo mobile" onClick={() => this.setPage("index")} />
            </Link>
            <Link to={"/"} onClick={() => this.setPage()}>
              <h4 className="mobile">{this.state.lang ? "the access point" : "точка доступа"}</h4>
            </Link>
            <img src={burger} className="burger mobile" onClick={() => this.toggleMenu()}/>
          </header>
          <div className="left-column">
            <Link to={"/"} onClick={() => this.setPage()}>
              <img src={logo} className="logo" onClick={() => this.setPage("index")} />
            </Link>
            <Link to={"/"} onClick={() => this.setPage()}>
              <h6>{this.state.lang ? "the access point" : "точка доступа"}</h6>
            </Link>
            <div className="social">
              <a href="https://www.instagram.com/tochkadostupaspb/" target="_blank">
                <img src={instagramLogo} className="instagram" />
              </a>
              <a href="https://www.facebook.com/tochkadostupa" target="_blank">
                <img src={facebookLogo} className="facebook" />
              </a>
              <a href="https://vk.com/tochkadostupa" target="_blank">
                <img src={vkLogo} className="vk" />
              </a>
            </div>

          </div>
          <div className="right-column">
            <div className="lang" onClick={() => this.setState({lang: (this.state.lang + 1) % 2})}>
              <img src={this.state.lang ? "/img/Ru.jpg" : "/img/En.jpg"} className="flag" />
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
              <small className="right margin">{this.state.lang ? "Site by " : "Сайт — "}<a href="https://vk.com/the_sociophobic" target="_blank">Lev</a></small>
              <small className="right">{this.state.lang ? "Design by " : "Дизайн — "}<a href="http://fnktn.com/" target="_blank">Funktion</a></small>
            </div>
          </div>
        </div>
      </Router>
    );
  }






  /* HHEHEHEHEHEHHEEHHEHHEHE */
  easterEgg() {
    document.title = "each⠀(Нигилисты⠀=>⠀{ Т 0 Ч К 4 _ Д 0 С Т У П 4; });";
    var divs = ["div", "a", "b", "body", "header", "span", 'p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'img', 'button', 'article'];
    var pics = [
      /* COVERS */
      "https://pp.userapi.com/c824501/v824501501/771d5/bU7XdFZGfZg.jpg",
      "https://pp.userapi.com/c636119/v636119299/3e95c/n1Hj3mLvM7g.jpg",
      "https://pp.userapi.com/c636119/v636119299/3e966/JiLln8wexCc.jpg",
      "https://pp.userapi.com/c636119/v636119299/3e999/AiQCbQ09A9M.jpg",
      "https://pp.userapi.com/c837420/v837420530/1a55d/-74itzrBufg.jpg",
      "https://pp.userapi.com/c637420/v637420530/32886/smBJhI4k8ac.jpg",
      "https://pp.userapi.com/c840229/v840229479/5caa1/LpCT_j7ny_g.jpg",
      "https://sun9-3.userapi.com/c840522/v840522046/120e8/jLCz84TnvKg.jpg",
      "https://pp.userapi.com/c841237/v841237143/41422/DQvw5iq2i7U.jpg",
      "https://pp.userapi.com/c824200/v824200005/534d5/4fDD05fhxdU.jpg",
      "https://pp.userapi.com/c841637/v841637479/469f0/o3Z7A3S0XaM.jpg",
      "https://pp.userapi.com/c841637/v841637479/469e6/7FY2DNlEoh4.jpg",
      /* LOGOS */
      "https://pp.userapi.com/c604821/v604821261/13997/cv1_ah5Ju_A.jpg",
      "https://pp.userapi.com/c638623/v638623299/7c84/bGiQZDp33kU.jpg",
      "https://pp.userapi.com/c638920/v638920299/138b1/D_oq44Zf-O8.jpg",
      "https://pp.userapi.com/c636119/v636119299/3e985/lHBkgwbZ300.jpg",
      "https://pp.userapi.com/c836320/v836320299/1a73b/YiFoZSrAd40.jpg",
      "https://pp.userapi.com/c637420/v637420530/32897/BowL7-CgJJI.jpg",
      "https://pp.userapi.com/c637828/v637828299/4ba79/SkfC3_Mzgxk.jpg",
      "https://pp.userapi.com/c637419/v637419089/5da0e/kLpc5WEJlsY.jpg",
      "https://pp.userapi.com/c840332/v840332818/5e8b/Hn0rLjvWsKQ.jpg",
      "https://pp.userapi.com/c639322/v639322344/4e3e3/bK3C8o8SYk4.jpg",
      "https://pp.userapi.com/c841235/v841235626/36197/4Onpf3S2V3k.jpg",
      "https://pp.userapi.com/c841128/v841128932/39d75/1XtGo2MgsVA.jpg",
      "https://pp.userapi.com/c834102/v834102738/3ab31/dQYKJ9rbrjI.jpg",
      "https://pp.userapi.com/c824504/v824504244/5d64e/07ZUDCkNceQ.jpg",
      "https://pp.userapi.com/c830108/v830108279/d5bbd/rRD_vPxlrB4.jpg",
      /* ACID MEMES */
      "https://sun9-9.userapi.com/c840634/v840634722/71977/sd5TRwkfbD8.jpg",
      "https://pp.userapi.com/c626517/v626517530/4d084/xujN6C-JKho.jpg",
      "https://pp.userapi.com/c604525/v604525089/58d6c/3Dg4lAj5R3g.jpg",
      "https://pp.userapi.com/c637520/v637520530/290b2/DjA9uFVgTfU.jpg",
      "https://pp.userapi.com/c637520/v637520089/5b4db/f2zBKmOZxw4.jpg",
      "https://pp.userapi.com/c638823/v638823530/1c87a/-CwT9e6_6Yk.jpg",
      "https://pp.userapi.com/c637721/v637721530/1c8c9/_I9If2WbSKM.jpg",
      "https://pp.userapi.com/c626829/v626829530/3f9ff/bDfQGlwUDWU.jpg",
      "https://pp.userapi.com/c639729/v639729089/38344/Jf7LyroPa9w.jpg",
      /* 3D MEMES */
      "https://pp.userapi.com/c621705/v621705123/824a4/d5xIzWMJqjk.jpg",
      "https://pp.userapi.com/c846219/v846219293/3cd3a/TgrO6Dv-Fko.jpg",
      "https://sun9-1.userapi.com/c840723/v840723340/77116/Dx_ukyuqDXg.jpg",
      "https://pp.userapi.com/c846418/v846418754/17655/azRopPgo30E.jpg",
      "https://pp.userapi.com/c844721/v844721562/4aada/mzfQIVMOwG0.jpg",
      "https://sun9-1.userapi.com/c840439/v840439048/75a79/OBfmrAcigAE.jpg",
      /* RELIGIOUS MEMES */
      "https://pp.userapi.com/c840327/v840327334/77188/VLm_diMG7Bg.jpg",
      /* COOL MEMES */
      "https://pp.userapi.com/c831408/v831408646/a21dd/fpCACj3JAw8.jpg",
      "https://pp.userapi.com/c841025/v841025800/7b1fb/fEPXapyhU7o.jpg",
      "https://pp.userapi.com/c830308/v830308800/a2384/BL3FnTX5dQ0.jpg",
      "https://pp.userapi.com/c841332/v841332771/784bd/ZurztY1znRY.jpg",
      "https://sun9-8.userapi.com/c840535/v840535885/6d9ab/XkwcSGLl1KU.jpg",
      "https://pp.userapi.com/c824603/v824603194/68b00/DdJDvmZa_u0.jpg",
      "https://pp.userapi.com/c841322/v841322470/26fc7/5eQwMrmoTsc.jpg",
      "https://pp.userapi.com/c836330/v836330089/54e24/-yl1ECznkk8.jpg",
      "https://pp.userapi.com/c637720/v637720530/1ea48/XqOJVyAC1Wc.jpg",
      "https://pp.userapi.com/c637720/v637720530/1b682/lLWKSRxFR8Q.jpg",
      /* LIFE CHANGING MEMES */
      "https://pp.userapi.com/c626829/v626829530/40060/ioXZBFoABcU.jpg",
      "https://pp.userapi.com/c626829/v626829530/3fa15/2w0J9JocXYw.jpg",
      "https://pp.userapi.com/c638623/v638623299/8198/Fdj9cYLVSEQ.jpg",
      "https://pp.userapi.com/c626829/v626829530/3f9de/e2nRVatoDz8.jpg",
      "https://pp.userapi.com/c846524/v846524797/5b4cb/PsTO0wv5QPg.jpg",
      "https://pp.userapi.com/c840325/v840325880/84b78/v-XFIybbx28.jpg",
      "https://pp.userapi.com/c637520/v637520089/5b4af/pFAtApywPPo.jpg",
      "https://pp.userapi.com/c841222/v841222914/55b4c/Ov-mnVmdjWA.jpg",
      /* FUNNY MEMES */
      "https://pp.userapi.com/c836329/v836329089/530fd/4uiqu6_Y-8o.jpg",
      "https://pp.userapi.com/c639323/v639323889/4b2e9/npFjjOFHJp0.jpg",
      "https://pp.userapi.com/c830709/v830709421/280e/_AzXO6j1zoc.jpg",
      "https://pp.userapi.com/c824602/v824602496/55fdb/HMcoRYA6LuY.jpg",
      "https://pp.userapi.com/c834203/v834203190/d594a/t1FQfVm6ukw.jpg",
      "https://pp.userapi.com/c845219/v845219868/13e75/m1tlkepmmLo.jpg",
      "https://pp.userapi.com/c638823/v638823530/1b774/6QSaoe59iFg.jpg",
      "https://pp.userapi.com/c637420/v637420089/64135/z-hC5GLXDZM.jpg",
      "https://pp.userapi.com/c830209/v830209633/ccd9a/oW0LuLOYKbI.jpg",
      "https://pp.userapi.com/c845121/v845121739/410e6/sF_ZTKBe7GY.jpg",
      "https://pp.userapi.com/c639730/v639730530/18b3a/Sg9KbkH-LVo.jpg",
      /* THEIR MEMES */
      "https://pp.userapi.com/c604419/v604419272/3fbab/jTCoj-DGRb4.jpg",
      "https://pp.userapi.com/c841123/v841123744/25d4f/wc8oA_O4fYM.jpg",
      "https://pp.userapi.com/c841520/v841520270/20d1b/S9ULKx5NY40.jpg",
      "https://pp.userapi.com/c604821/v604821261/1390a/qbq17sMrqD4.jpg",
      "https://pp.userapi.com/c636126/v636126261/328bc/E2uKfb4u72g.jpg",
      "https://pp.userapi.com/c636126/v636126261/32a51/R9y2ayRcbnw.jpg",
      "https://pp.userapi.com/c837224/v837224744/657a9/fiP9zJMRf5U.jpg",
      "https://sun9-1.userapi.com/c840429/v840429744/10633/sNUdIw1y8fE.jpg",
      "https://pp.userapi.com/c841232/v841232744/23da3/UzDW2lwBvyU.jpg",
      "https://sun9-6.userapi.com/c840430/v840430744/e722/wYB_4vCgNG4.jpg",
      "https://pp.userapi.com/c837422/v837422089/52d0e/CeUVGIGyZYs.jpg",
      "https://pp.userapi.com/c837421/v837421089/49397/yqJh5SFpLQg.jpg",
      "https://pp.userapi.com/c824201/v824201840/121505/419yH4DTzbc.jpg",
    ];

    if (this.state.firstRun) {
      var sound      = document.createElement('audio');
      sound.autoplay = "autoplay";
      sound.src      = '/img/rangers.mp3';
      sound.type     = 'audio/mp3';
      document.getElementById("title-container").appendChild(sound);
    }
    // this.setState({iterations: this.state.iterations + 1});

    if (this.state.firstRun)
    for (let i = 0; i < divs.length; i++) {
      let a = document.getElementsByTagName(divs[i]);
      for (let j = 0; j < a.length; j++) {
        // if (a[j].id == "title-container")
        //   continue;
        if (!this.state.mobile && this.state.firstRun) {
          a[j].style.transition = "all " + (Math.random() * 120 + 25) + "s";
        }
        // if (this.state.firstRun || Math.random() < 0.15) {
        //   a[j].style.backgroundPosition = (Math.random() * 5000 - 2500) + "% " + (Math.random() * 2000 - 1000) + "%";
        // }
        if (!this.state.mobile && (this.state.firstRun || Math.random() < (this.state.iterations + 10) / (this.state.iterations + 50) * 0.25) && a[j].className != "content" && a[j].className != "container" && a[j].clientHeight < window.innerHeight * .95 && a[j].clientWidth < window.innerWidth * .95) {
          a[j].style.transform = "rotate(" + (Math.random() * 150 - 75) + "deg)";
        }
        if (this.state.firstRun || Math.random() < 0.1) {
          // a[j].style.fontSize = (Math.random() + 1) * 35 + "px";
          // a[j].padding = Math.random() * 205 + "px";

          a[j].style.opacity = 0.75 + Math.random() * 0.25;
        }
        if (Math.random() < 0.1 && !a[j].innerHTML.includes("mp3")) {
          a[j].innerHTML += 'each⠀(Нигилисты⠀=>⠀{ Т 0 Ч К 4 _ Д 0 С Т У П 4; });';
        }
        if (this.state.firstRun || Math.random() < 0.35 && !a[j].innerHTML.includes("mp3")) {
          a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
        }
        if (this.state.firstRun || Math.random() < .5) {
          a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 66 + 'px';
        }
        if (Math.random() < .05 && a[j].clientHeight < window.innerHeight * .5 && a[j].clientWidth < window.innerWidth * .5) {
          // a[j].style.position = "relative";
          // a[j].style.top = Math.random() * 700 + "px";
          // a[j].style.margin = Math.random() * Math.random() * 200 + "px";
        }
      }
    }
    if (this.state.firstRun)
      this.setState({firstRun: false});
  }
  easterEggRomanova() {
    var divs = ['p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'div', 'img', 'button', 'article', 'section', 'header'];
    var pics = [
      "https://pp.userapi.com/c637520/v637520530/290b2/DjA9uFVgTfU.jpg",
      "https://pp.userapi.com/c845019/v845019623/57677/iqDYT0CM5Gs.jpg",
      "https://pp.userapi.com/c845019/v845019623/5766d/pd03ffAAY34.jpg",
      "https://pp.userapi.com/c845019/v845019623/57663/U4RkweytaXk.jpg",
      "https://pp.userapi.com/c834201/v834201205/10531b/hbJn95uXfN0.jpg",
      "https://pp.userapi.com/c638424/v638424429/4b5c6/fVcWPcHDrtQ.jpg",
      "https://pp.userapi.com/c841636/v841636863/5992/mBpqD-2vStk.jpg",
      "https://pp.userapi.com/c836235/v836235822/50bc7/yzxVWVzM_1U.jpg",
      "https://pp.userapi.com/c840326/v840326209/c97/dDNu-kkjT-4.jpg",
      "https://pp.userapi.com/c638226/v638226223/5a10d/TneBzVadgd0.jpg",
      "https://pp.userapi.com/c841224/v841224688/1f8c1/32d91Vnu2TE.jpg",
      "https://sun9-7.userapi.com/c840725/v840725300/10336/MATRZoT57gQ.jpg",
      "https://pp.userapi.com/c841225/v841225477/2ac91/Y8h1mWTnqiE.jpg",
      "https://pp.userapi.com/c834201/v834201917/11b77/S5qxdakwfis.jpg",
      "https://sun9-3.userapi.com/c840529/v840529266/1d965/LlEhGxS9jeI.jpg",
      "https://pp.userapi.com/c834303/v834303147/5485f/Z88BLyv7-90.jpg",
      "https://pp.userapi.com/c637828/v637828299/4a1e9/HKMSOuYhQRE.jpg",
      "https://pp.userapi.com/c9212/u117487465/147531382/w_e194a306.jpg",
      "https://pp.userapi.com/c637723/v637723289/5384b/HhgLVFQTMR0.jpg",
      "https://pp.userapi.com/c637723/v637723289/5362d/REG8v3H_P-w.jpg",
      "https://pp.userapi.com/c637722/v637722140/5cf3e/XZpOsD_cBIw.jpg",
      "https://pp.userapi.com/c837128/v837128289/37e8b/xrdLc0jFpTE.jpg",
      "https://pp.userapi.com/c837428/v837428289/3e95b/CxfQ4GdnnIk.jpg",
      "https://pp.userapi.com/c637828/v637828289/5012c/cUaKZMGNtYU.jpg",
      "https://pp.userapi.com/c639628/v639628423/24ea5/QQy9bqkyJm8.jpg",
      "https://pp.userapi.com/c638016/v638016725/3d16d/ZLMAyaAO3cg.jpg",
      "https://pp.userapi.com/c639525/v639525289/1a012/pk8SN3Um6G0.jpg",
      "https://pp.userapi.com/c639916/v639916299/1b78a/MdJd_LHoMas.jpg",
      "https://pp.userapi.com/c836126/v836126289/241ee/boBP7_YYvDk.jpg",
      "https://pp.userapi.com/c604323/v604323717/2ff03/9EP4gf7J16o.jpg",
      "https://pp.userapi.com/c604323/v604323717/33e3c/pFnCP7jTdkI.jpg",
      "https://pp.userapi.com/c626726/v626726717/426cf/pL6ifYPb6nA.jpg",
      "https://pp.userapi.com/c626726/v626726717/447d0/9N9fSS9pBvE.jpg",
      "https://pp.userapi.com/c837732/v837732717/18690/ZcdbGbNsEck.jpg",
      "https://pp.userapi.com/c837339/v837339299/13ed0/WsNigxZSFF8.jpg",
      "https://pp.userapi.com/c638424/v638424717/1aeb7/4_fSJS5qIC0.jpg",
      "https://pp.userapi.com/c638424/v638424717/1aed2/d5ftLMk7tcU.jpg",
      "https://pp.userapi.com/c172/v172639/66c/WcDJ0CKwq64.jpg",
      "https://pp.userapi.com/c638317/v638317717/16dbf/4bbddFIZut0.jpg",
      "https://pp.userapi.com/c1209/u10575639/20113476/x_715d454e.jpg",
      "https://pp.userapi.com/c604622/v604622717/26963/2EIBDusOvFk.jpg",
      "https://pp.userapi.com/c636821/v636821717/4d826/P3hjz7wOZ6E.jpg",
      "https://pp.userapi.com/c836126/v836126289/21291/ZWwsZwO8-3E.jpg",
      "https://pp.userapi.com/c836126/v836126289/241e5/JcdQm-_4oKI.jpg",
      "https://pp.userapi.com/c1209/u10575639/20113476/x_7d784c00.jpg",
      "https://pp.userapi.com/c836126/v836126289/247a7/Uc0TRlipQ6A.jpg",
      "https://pp.userapi.com/c639519/v639519289/f395/qxx8tlQAtm4.jpg",
    ];
    for (let i = 0; i < divs.length; i++) {
      let a = document.getElementsByTagName(divs[i]);
      for (let j = 0; j < a.length; j++) {
        if (divs[i] == 'img') {
          a[j].style.content = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
          a[j].src = pics[Math.floor(Math.random() * pics.length)];
        }
        else {
          if (divs[i] != 'div' && divs[i] != 'section' && divs[i] != 'article')
            a[j].innerHTML = 'С Днём Рождения 🎉🎉🎉';
          else
            a[j].innerHTML += 'С Днём Рождения 🎉🎉🎉';

          a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
          a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 70 + 'px';
        }
      }
    }
  }
}


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: undefined,
      placemarks: [],
    };
  }

  recursiveTimeOut(ms, iterations) {
    if (iterations <= 0)
      return;
    setTimeout(() => {
      const yandex = window.ymaps;
      if (!yandex)
        this.recursiveTimeOut(iterations - 1)
      else {
        yandex.ready(() => {
          const location = this.props.location;
          if (location) {
            yandex.geocode(location).then(result => {
              let position = result.geoObjects.get(0).geometry._coordinates;
              let myMap = new yandex.Map("map",
              {
                center: position,
                zoom: 15,
              });

              let myPlacemark = new yandex.Placemark(position, {});
              myMap.geoObjects.add(myPlacemark);
              this.pinLocation(location, myMap);
              this.setState({map: myMap});
            });
          }

          const locations = this.props.locations;
          if (locations) {
            let myMap = new yandex.Map("map",
            {
              center: [59.941054, 30.312907],
              zoom: 9,
            });
            locations.forEach(location => {
              yandex.geocode(location.place[0]).then(result => {
                let position = result.geoObjects.get(0).geometry._coordinates;

                let myPlacemark = new yandex.Placemark(position,
                  {iconCaption: this.lang(location.name), balloonContent: this.lang(location.description)},
                  {preset: 'islands#circleIcon', iconColor: '#ffa300'});
                myMap.geoObjects.add(myPlacemark);
                // this.pinLocation(location.place, myMap);
                this.setState({
                  placemarks: this.state.placemarks.slice().push({
                    address: location,
                    placemark: myPlacemark,
                  }),
                  map: myMap,
                });
                // alert(this.state.placemarks);
              });
            });
          }
        });
      }
    }, 300);
  }
  setCenter(location) {
    const yandex = window.ymaps;
    yandex.geocode(location).then(result => {
      let position = result.geoObjects.get(0).geometry._coordinates;
      this.state.map.setCenter(position, 14);
      // this.state.placemarks.forEach(placemark => {
      //   if (true)
      //     placemark.placemark.options.set({visible: false});
      // });
    });
  }

  lang(param) {
    if (Array.isArray(param))
      return param[this.props.lang];
    return param;
  }

  componentDidMount() {
    this.recursiveTimeOut(10);
  }

  render() {
    var locations = this.props.locations;
    var locationsMapped;
    if (locations) {
      locations = locations.map(location =>
        <button className="yellow-link" onClick={() => this.setCenter(this.lang(location.place))}>
          {location.label ? this.lang(location.label) : this.lang(location.name)}
        </button>
      );
      if (window.innerWidth > 768)
        locationsMapped = <div className="row">
          <div className="half">
            {locations.slice(0, locations.length / 2)}
          </div>
          <div className="half">
            {locations.slice(locations.length / 2)}
          </div>
        </div>;
      else
        locationsMapped = locations;
    }
    return <div className="map">
      <div id="map"></div>
      {locationsMapped}
    </div>;
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
function newLines(string) {
  var paragraphs = [];
  var prevI = 0;

  for (var i = 0; i < string.length; i++)
    if (string[i] === '\n') {
      paragraphs.push(string.slice(prevI, i));
      prevI = i;
    }
  paragraphs.push(string.slice(prevI));

  return <div>{paragraphs.map(paragraph => <span>{paragraph}</span>)}</div>;
}

export default App;
