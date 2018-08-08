import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Map from './components/Map';
import SpektCard from './components/SpektCard';
import Ficher from './components/Ficher';
import Abonement from './components/Abonement';
import Partners from './components/Partners';

import myDate from './utils/myDate.js';
import { capitalize, newLines, recursiveTimeOut } from './utils/utils.js';
import { easterEgg, easterEggRomanova, easterEggCramp, easterEggNata } from './utils/easterEggs.js';


import logo from './svg/logo.svg';
import logoMobile from './svg/logo_mobile.svg';
import burger from './svg/burger.svg';
import cross from './svg/cross.svg';
import instagramLogo from './svg/instagram.svg';
import facebookLogo from './svg/facebook.svg';
import vkLogo from './svg/vk.svg';
import age0 from './svg/0.svg';
import age6 from './svg/6.svg';
import age10 from './svg/10.svg';
import age12 from './svg/12.svg';
import age16 from './svg/16.svg';
import age18 from './svg/18.svg';

// import appStore from './svg/app_store.svg';
// import playMarket from './svg/play_market.svg';

import Index from './components/Index'

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 0,

      code: "",
      firstRun: true,
      abonementPic: 1,
      spektsOrder: [],
      facelessIframe: false,

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
          type: "ficher",
          name: ["Режиссерская лаборатория «Культурный герой XXI»", "Theater Directing Lab «Cultural Hero XXI»"],
          place: ["Библиотека им. А. Аалто", "A. Aalto library"],
          address: ["Выборг, проспект Суворова, 4", "Vyborg, Suvorova pr., 4"],
          background: "fest.jpg",
          img: "0.jpg",
          text: [
            <div>
              <span>
                «Библиотека Алвара Аалто в Выборге – шедевр архитектурного функционализма — проект, по сути, утопический, примиряющий три начала: природное, антропогенное и техногенное. Идеально встроенный в естественную среду «умный дом» адресован человеку будущего. Человек здесь и потребитель, пользующийся удобствами «фабрики» по интеллектуальному и духовному развитию, и в то же время «винтик» системы, где все подчинено целесообразности.
              </span>
              <span>
                Сегодня, как и всегда, пролегает отчетливая граница между миром «рацио» и импульсами «подпольного человека», стихией бессознательного, неотрефлексированного и нерефлексируемого. Кто тот культурный герой XXI века, что подобно древнему Гераклу, расчистит нынешние Авгиевы конюшни, даст простой и гармоничный взгляд на мир? И куда должен быть обращен этот взгляд: в техногенное будущее или природное прошлое?
              </span>
              <span>
                Три лабораторных театральных эскиза, серьезно и иронически, размышляют о столкновениях модерности и архаики, о фигуре героя-просветителя. Время действия — наши дни, место действия — Библиотека Аалто. Мы изучили более 50 заявок от режиссеров из разных городов (и даже стран) и выбрали самые смелые и многообещающие»
              </span>
            </div>
          ],
          events: [
            {
              date: "01.08.2018",
              place: "Пространство иммерсионного шоу «Безликие» (Дворцовая наб., 20)",
              shows: [
                {
                  name: "Театральная инсталляция «ВИД НА ЖИТЕЛЬСТВО»",
                  time: "13:00",
                  link: "https://tochkadostupaspb.timepad.ru/event/769782/",
                  description: <div>
                    <span>
                      Хотя жизнь художника, блогера, дауншифтера Дмитрия Горчева оборвалась в 2010 году, он — герой XXI века. Его голос особенно ярко прозвучал, когда появился «Живой журнал», именно Горчев стал первым «тысячником» в ЖЖ. Символично, что он переехал в Петербург на границе столетий, в 1999-м, — именно в момент перехода творится мифология творчества и жизни этого человека, парадоксально вписывающегося в схему «деятеля эпохи Возрождения».
                    </span>
                    <h6>
                      Мария Критская
                    </h6>
                    <span className="big-margin">
                      До учебы в СПбГАТИ была студенткой школы клоунады «Лицедеев», в 2007-ом получила режиссерский диплом на курсе Ю.Красовского. Как автор детских спектаклей отмечена премией для молодых «Прорыв», была участником спецпрограммы фестиваля «Золотая маска» — «Детский Weekend».
                    </span>
                  </div>
                },
                {
                  name: "«Последняя опись перед распродажей» режиссер Александр Вислов",
                  time: "16:00",
                  link: "https://tochkadostupaspb.timepad.ru/event/769789/",
                  description: <div>
                    <span>
                      Ведущий театральный критик России, преподаватель ГИТИСа Александр Вислов не так давно попробовал себя в качестве театрального режиссёра. Любимый жанр Вислова экзотичен — спектакль-лекция, а уж материал, взятый им, комментированный список самых популярных книг прошедшего столетия, напоминает тот самый телефонный справочник, который, как известно, поставить нельзя, но очень хочется. Впрочем, скучно не будет: порукой тому имя комментатора - Фредерика Бегбедера.
                    </span>
                  </div>
                },
                {
                  name: "«ДРУГОЙ» по роману Юрия Мамлеева",
                  time: "18:00",
                  link: "https://tochkadostupaspb.timepad.ru/event/769786/",
                  description: <div>
                    <span>
                      Выбор романа русского классика, мистика Мамлеева предлагает лаборатории неожиданный поворот в сторону метафизических поисков. Главный герой Леня Одинцов переживает клиническую смерть, во время которой видит себя пассажиром поезда, несущегося сквозь миры, ни в одном из которых душе Лени не находится места. Сквозным образом эскиза станет фотография — попытка фиксации невидимого и непознаваемого. А источником визуального облика будут фильмы Владимира Кобрина — гения советского научно-популярного кино.
                    </span>
                    <h6>
                      Роман Муромцев
                    </h6>
                    <span className="big-margin">
                      В 2018 году окончил РГИСИ (режиссерский курс А. Праудина). Кроме студенческих постановок в Учебном театре, выпустил детский спектакль «Пес и Пом» в Музее-квартире Блока.
                    </span>
                  </div>
                },
                // {
                //   name: "«АНТИХРИСТ» По сценарию фильма Ларса фон Триера",
                //   time: "16:30",
                //   link: "",
                //   description: <div>
                //     <span>
                //       Страшный и одновременно самопародийный фильм Триера — копилка неврозов современного человека, то ли горячечный бред, то ли адское пророчество. Шедевр или смакование жестокости? Споры вокруг «Антихриста» не утихают. Для Владимира Золотаря сегодняшний культурный герой — незадачливый психотерапевт, пытающийся урезонить царящий вокруг хаос сумрачных природных сил. А вместо членовредительства режиссер предлагает элегантное решение, не лишенное сарказма. Под раздачу попадет самое святое – великая скандинавская культура XIX-XX столетий с ее гротескным интересом к психопатии.
                //     </span>
                //     <h6>
                //       Владимир Золотарь
                //     </h6>
                //     <span>
                //       В разные годы руководил Алтайским театром драмы им. В.М. Шукшина, Нижегородским ТЮЗом, пермским Театра-Театром, Омским ТЮЗом. Поставил 68 спектаклей в разных регионах России. Лауреат спецпремии жюри «Золотой маски» за спектакль «Войцек» (Барнаул).
                //     </span>
                //   </div>
                // },
              ]
            },
          ]
        },
        {
          id: 1,
          type: "ficher",
          name: ["Образовательная программа «Что такое эксперимент?»", "Educational programm «What is experiment?»"],
          // place: ["Библиотека им. А. Аалто", "A. Aalto library"],
          // address: ["Выборг, проспект Суворова, 4", "Vyborg, Suvorova pr., 4"],
          img: "edu.jpg",
          background: "edu.jpg",
          partners: true,
          text: [
            <div>
              <span>
                С 2017 года фестиваль включает себя образовательную программу – лекции, конференции, круглые столы, обсуждения спектаклей.
              </span>
              <span>
                В этом году образовательная программа носит подзаголовок «Что такое эксперимент?»: наши критерии экспериментального все время меняются, как и понимание того, что можно и что нельзя считать театром. Размышлениями на эту тему участники программы смогут поделиться на итоговом семинаре, который заменит привычный формат конференции. Широта темы спровоцирует спикеров на осмысление современного понимания границ театральности, на рассуждения о парадоксальном – и все более популярном – соединении сверхреального и условного в современном театре, на вновь актуальные разговоры об этичности экспериментов над зрителями. И просто на высказывания об увиденных на фестивале спектаклях и эскизах. Приглашенными спикерами станут известные театроведы и практики театра, но возможность высказаться получит любой участник.
              </span>
              <span className="big-margin">
                Откроют образовательную программу лекции признанных специалистов по истории и теории сайт-специфик театра.
              </span>
              {/* <h4 className="text-center">
                Расписание
              </h4> */}
            </div>
          ],
          events: [
            {
              date: "31.07.2018",
              place: "Пространство иммерсионного шоу «Безликие» (Дворцовая наб., 20)",
              link: "https://tochkadostupaspb.timepad.ru/event/765090/",
              shows: [
                {
                  name: "Сайт-специфик театр и технологии",
                  time: "11:00",
                  link: "",
                  description: <div>Лекция «Сайт-специфик театр и технологии» профессора Aberystwyth University (Великобритания) <b>Майка Пирсона</b> – автора книг «Site-specific Performance» (2010), «MarkingTime:performance, archaeology and the city» (2013).</div>
                },
                {
                  name: "Размышляя в пространстве: к вопросу о политической экологии театра",
                  time: "12:30",
                  link: "",
                  description: <div>Лекция «Размышляя в пространстве: к вопросу о политической экологии театра» профессора Института театральных исследований Университета Париж-III — Новая Сорбонна (Франция) <b>Орели Мутон-Резук</b>. Среди ее последних исследований: «Remediations: Performance in Exhibition, an Art of Manipulation» «Exposer le théâtre?», «L’opéra baroque sur la scène muséale.</div>
                },
              ]
            },
            {
              date: "02.08.2018",
              link: "https://tochkadostupaspb.timepad.ru/event/765091/",
              place: "Новая сцена Александринского театра (наб. Фонтанки, 49А)",
              shows: [
                {
                  name: "Семинар «Что такое эксперимент?»",
                  time: "12:00",
                  description: <div>Наши критерии экспериментального все время меняются, как и понимание того, что можно и нельзя считать театром. Размышлениями на эту тему участники программы поделятся на итоговом семинаре, который заменит привычный формат конференции. Широта темы спровоцирует спикеров высказаться о том, как они представляют границы театральности сегодня, рассуждать о парадоксальном соединении сверхреального и условного в современном театре, говорить на вновь актуальную тему об этичности экспериментов над зрителями. И просто на высказывания об увиденных на фестивале спектаклях и эскизах. Приглашенными спикерами станут известные театроведы и практики театра, но возможность высказаться получит любой участник.</div>
                },
              ]
            },
          ]
        }
      ],

      spekts: [
        {
          id: 0,
          type: "spekt",
          name: ["Маленькие ночи", "Little Nights"],
          place: ["Спектакль вокруг театров", "Perfomance around the theaters"],
          // place: ["", ""],
          // address: ["Литейный пр., 53", "Liteyniy pr., 53"],
          address: ["", ""],
          // placeDesc: ["Спектакль вокруг театров", "Perfomance around the theaters"],
          placeDesc: ["", ""],
          metro: ["м. «Маяковская» / «Площадь восстания», м. «Гостиный двор» / «Невский проспек»т", "«Mayakovskaya» metro station, «Gostiny Dvor» metro station"],
          mapDescription: ["Ближайшие станции метро — «Гостиный двор» / «Невский проспект», «Владимирская», «Чернышевская»", "Nearest metro stations — Mayakovskaya station, Gostiny Dvor station"],
          age: 16,
          // duration: ["2 часа 30 минут", "2 hours 30 minutes"],
          duration: ["", ""],
          category: 0,
          partners: [28, 36, 5, 26, 42],
          // newText: ["История любви Мечтателя в четырех частях под небом Петербурга", "A four-part story of Dreamer’s love under the St. Petersburg sky"],
          newText: ["Спектакль отменен", "Perfomance was cancelled"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/148b72445e0a27f9848418dff0fc9181/5B6D1AF0/t51.2885-15/e35/20481779_247489175771086_8234287535837151232_n.jpg",
          schedule: [],
          // [
          //   {
          //     date: "21.07.2018",
          //     additionalDate: ["Первая ночь", "First night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268754"
          //       },
          //     ],
          //   },
          //   {
          //     date: "22.07.2018",
          //     additionalDate: ["Вторая ночь", "Second night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268754"
          //       },
          //     ],
          //   },{
          //     date: "23.07.2018",
          //     additionalDate: ["Третья ночь", "Third night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268754"
          //       },
          //     ],
          //   },{
          //     date: "24.07.2018",
          //     additionalDate: ["Четвертая ночь", "Fourth night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268754"
          //       },
          //     ],
          //   },
          //   {
          //     date: "26.07.2018",
          //     additionalDate: ["Первая ночь", "First night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268756"
          //       },
          //     ]
          //   },
          //   {
          //     date: "27.07.2018",
          //     additionalDate: ["Вторая ночь", "Second night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268756"
          //       },
          //     ]
          //   },{
          //     date: "28.07.2018",
          //     additionalDate: ["Третья ночь", "Third night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268756"
          //       },
          //     ]
          //   },
          //   {
          //     date: "29.07.2018",
          //     additionalDate: ["Четвертая ночь", "Fourth night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268756"
          //       },
          //     ]
          //   },
          //   {
          //     date: "01.08.2018",
          //     additionalDate: ["Первая ночь", "First night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268758"
          //       },
          //     ]
          //   },
          //   {
          //     date: "02.08.2018",
          //     additionalDate: ["Вторая ночь", "Second night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268758"
          //       },
          //     ]
          //   },
          //   {
          //     date: "03.08.2018",
          //     additionalDate: ["Третья ночь", "Third night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268758"
          //       },
          //     ]
          //   },
          //   {
          //     date: "04.08.2018",
          //     additionalDate: ["Четвертая ночь", "Fourth night"],
          //     shows: [
          //       {
          //         time: "21:30",
          //         radarioId: "268758"
          //       },
          //     ]
          //   }
          // ],
          team: [
            {
              label: ["Режиссер", "Director"],
              people: [["Али Асгар Дашти (Иран)", "Ali Asghar Dashti (Iran)"], ]
            },
            {
              label: ["Драматург", "Dramaturg"],
              people: [["Андрей Пронин", "Andrey Pronin"], ]
            },
          ],
          text: [
            <div>
              <span>
                Оргкомитет фестиваля «Точка доступа» вынужден сообщить, что премьера спектакля «Маленькие ночи» режиссера Али Асгара Дашти отменена. Но сотрудничество между постановщиками из России и Ирана не обрывается, зрители фестиваля увидят новый проект.
              </span>
              <span>
                Совместно с режиссером и актрисой Тегеранского Городского театра Рамоной Шах, инициатором сотрудничества с «Точкой доступа» и создания проекта «Маленькие ночи», мы выпустим спектакль «Железную дорогу построили, и стало удобно». В творческую группу постановки вошли программный директор фестиваля Андрей Пронин, молодой режиссер Андрей Слепухин и значительная часть актерской труппы «Маленьких ночей».
              </span>
              <span>
                Премьера спектакля состоится 21 июля в 17:00 в пространстве Мультимедийного центра Русского музея (Инженерная, 8) — партнерской площадки фестиваля, где в прошлом году открылась третья «Точка доступа». Вход для зрителей свободный, по предварительной регистрации.
              </span>
              <span>
                <div>
                  Мы приносим извинения тем, кто планировал посетить спектакль «Маленькие ночи», собирался или уже приобрел билеты. Мы вернем деньги за билеты в течение 10 дней.
                </div>
                <div>
                  Для владельцев абонементом мы продумали два специальных предложения. Первое — получить 4 дополнительных билета на спектакли собственной и гастрольной программы фестиваля, а именно: «Санкт-Петербург вне себя», «Марат/Сад», «Время роста деревьев», «Трёхгоршковая опера», «Музей инопланетного вторжения». Вы сможете пригласить с собой еще одного гостя. Второе — вернуть часть стоимости абонемента.
                </div>
              </span>
              <span>
                До 19 июля мы свяжемся по электронной почте с каждым обладателем билета и абонемента. Если у вас возникли вопросы, пожалуйста, напишите нам на <a href="mailto:tickets@tochadostupa.spb.ru" className="yellow-link">tickets@tochadostupa.spb.ru</a>.
              </span>
            </div>,
            <div>
              <span>
                We're sorry to inform you, that the premiere of the play «Little Nights» by Ali Asghar Dashti was cancelled. Nevertheless, cooperation between directors from Russia and Iran continues, so the new project will be presented.
              </span>
              <span>
                In collaboration with Ramona Shakh director and actor of Tehran City Theater, who initiated cooperation with «The Access Point» and creation of the play «Little Nights», we will present the play «The railway was built, and it became convenient». The creative group included program director of the festival Andrey Pronin, young director Andrey Slepukhin and substantial part of «Little Nights» actor's troupe.
              </span>
              <span>
                The premiere of the play will be held on July 21 at 5:00PM in the Multimedia Centre of Russian Museum (Inzhenernaya st., 8) — the festival's partner site, where last year the third «The Access Point» festival was opened. Entrance is free, by prior registration.
              </span>
              <span>
                <div>
                  We apologize to those who planned to visit «Little Nights» and was going or has already bought the tickets. We will make full refund in the next 10 days.
                </div>
                <div>
                  For abonement owners we made two special options. First option — you can get 4 tickets to Own programm and Guest programm of the festival for free, the plays are: «Delirious Saint Petersburg», «Marat / Sade», «The Time of the Tree Growth», «Chamber Pot Opera», «The Alien Invasion Museum». You can invite one person with you. Second option — you can get partial refund.
                </div>
              </span>
              <span>
                We will contact all ticket and abonement owners till 19th of july. If you have any questions please contact as by <a href="mailto:tickets@tochadostupa.spb.ru" className="yellow-link">tickets@tochadostupa.spb.ru</a>.
              </span>
            </div>
          ],
          // [
          //   <div>
          //     <span>
          //       <i>
          //         Романтический спектакль в четырех сериях придуман на удивительных сочетаниях. Смешиваются культуры и эстетики — “Белые ночи” Достоевского, “Маленькие трагедии” Пушкина со сказками “Тысячи и одной ночи”. Совмещаются театральные формы — зритель вместе с героями гуляет по ночному городу, а после оказывается на спектакле в одном из четырех театров Петербурга.
          //       </i>
          //     </span>
          //     <span>
          //       Четыре встречи под ночным небом в тихом саду. Мечтательный юноша четыре вечера подряд будет бороться за сердце Настеньки, приглашая ее в театр. По странному совпадению в каждый из вечеров на сцене будет идти одна из «Маленьких трагедий» Пушкина: «Моцарт и Сальери», «Скупой рыцарь», «Каменный гость» и «Пир во время чумы». Правда, поставленных в традициях древнего восточного театра. Зрители будут сопровождать Мечтателя и Настеньку до, во время и после спектаклей, будут слышать каждое их слово — и в саду, и во время прогулки, и в темноте зала. Вместе с ними они придут в бедную квартиру Мечтателя, где тот попытается развлечь возлюбленную чтением сказок «Тысячи и одной ночи».
          //     </span>
          //     <span>
          //       Театральный сериал в четырех последовательных спектаклях от иранского режиссера Али Асгара Дашти — соединение Пушкина, Достоевского и средневековых арабских текстов, смесь тем и эстетик, размышление о взаимодействии восточной и западной культур, о миграции и внутренней эмиграции и, конечно, о любви.
          //     </span>
          //     <h5 className="no-margin">
          //       Али Асгар Дашти
          //     </h5>
          //     <span>
          //       <div>
          //         Постановка Дашти в России — большое событие. Российский зритель хорошо знаком с иранским кино, все чаще имеет возможность видеть постановки выдающихся иранских театров. Но выпуск спектакля иранским режиссером в России — редкость.
          //       </div>
          //       <div>
          //         На родине Али Асгар Дашти развивает традиции иранского театра — преобразует древнюю форму представлений «тазийе». Одновременно работает с новейшими формами, например, ставит документальный спектакль, основанный на монологах родственников раковых больных. Среди самых известных спектаклей Дашти и его Don Quixote Theatre Group — «Монодиалоги», «Телль/ Заххак», «Мулла Насреддин», «Дон Кихот», «Маленький принц», «Кофейня/ Интерьер/ Ночь», «Продавец рук и ног», «Любовные речи двух полицейских при красном свете».
          //       </div>
          //     </span>
          //     <h5 className="no-margin">
          //       Рекомендация для зрителей:
          //     </h5>
          //     <span>
          //       Выберете удобную обувь, в которой легко сможете следовать за героями спектакля по улицам Петербурга. На случай дождя лучше взять с собой зонт.
          //     </span>
          //   </div>,
          // "The play is based on White Nights by Fyodor Dostoevsky, The Little Tragedies by Alexander Pushkin and a collection of middle Eastern folktales One Thousand and One Nights.\nThe Access Point releases its own theatrical series as a chain of four shows taking place at late evenings that turn into white nights.\nThe starry-eyed guest worker will fight for Nastenka's heart four times by inviting her to go to the theatre. By a strange coincidence, all four evenings in the theatres of St. Petersburg The Little Tragedies by Pushkin (Mozart and Salieri, The Covetous Knight, The Stone Guest and A Feast in Time of Plague) will take place. Although these unusual performances will be presented with a distinct oriental colour.\nThroughout the performances, the audience will accompany the Dreamer and Nastenka and visit the poor Dreamer’s apartment, where he will try to entertain his beloved by reading tales from One Thousand and One Night.\nThis series of performances strikingly combines a journey around Saint Petersburg and a familiar format ‘people in the audience - actors on stage’. The explosive mix of topics and aesthetical forms, the contemplation on the interaction of Eastern and Western cultures, migration, and internal emigration, the daring combination of Pushkin, Dostoevsky and medieval Arab tales comprise Little Nights, the first Russian performance of the prominent Iranian director Ali Asghar Dashti.\nThe phenomenon of Iranian cinema is known in Russia, and in recent years it has become possible to get acquainted with the impressive achievements of the Iranian theatre. But it was The Access Point that took a chance to invite the director from Iran to the Russian production for the first time ever.\nAli Asghar Dashti is engaged in both renovation of the traditional Iranian theatre, transforming the ancient Iranian tradition of “tazyie” performances and the latest forms of documentary theatre. For example, he staged a performance based on the monologues of cancer patients’ relatives. Among the most famous performances of Dashti and his Don Quixote Theatre Group are Monodialogue, Tell / Zahhak, Pinocchio, Molla Nasreddin, Don Quixote, The Little Prince, Café Shop / Interior / Night, Zan, Hand & Leg Seller, Amorous Conversation of Two Policemen behind the Red Light."
          // ],
          // text: ["«Точка доступа» выпускает собственный театральный сериал — в четырех последовательных показах поздними вечерами, переходящими в белые ночи. Мечтатель четыре раза будет бороться за сердце Настеньки, приглашая ее в театр. По странному совпадению, все четыре вечера в театрах Петербурга будут идти «Маленькие трагедии» Пушкина: «Моцарт и Сальери», «Скупой рыцарь», «Каменный гость» и «Пир во время чумы». Правда, в необычной постановке — с явным восточным колоритом. Зрители будут сопровождать Мечтателя и Настеньку до, во время и после спектаклей, придут вместе с ними в бедную квартиру Мечтателя, где тот попытается развлечь возлюбленную чтением сказок «Тысячи и одной ночи».\nСпектакль-сериал удивительным образом совмещает путешествие по Петербургу и привычный формат «зрители в зале — актеры на сцене». Смесь тем и эстетик, размышление о взаимодействии восточной и западной культур, о миграции и внутренней эмиграции, соединение Пушкина, Достоевского и средневековых арабских текстов — все это «Маленькие ночи», первый российский спектакль заметного иранского режиссера Али Асгара Дашти. В России известен феномен иранского кино, в последние годы появилась возможность познакомиться и с впечатляющими достижениями иранского театра. Но пригласить режиссера из Ирана на постановку в России впервые рискнула именно «Точка доступа».\nАли Асгар Дашти отличается широким разнообразием творческих поисков: он занимается как реновацией традиционного иранского театра, преобразуя древнюю иранскую традицию представлений «тазийе», так и новейшими формами документального театра, например, поставил спектакль, основанный на монологах родственников раковых больных. Среди самых известных спектаклей Дашти и его Don Quixote Theatre Group — «Монодиалоги», «Телль / Заххак», «Пиноккио», «Мулла Насреддин», «Дон Кихот», «Маленький принц», «Кофейня / Интерьер / Ночь», «Зан», «Продавец рук и ног», «Любовные речи двух полицейских при красном свете».",
          // "The play is based on White Nights by Fyodor Dostoevsky, The Little Tragedies by Alexander Pushkin and a collection of middle Eastern folktales One Thousand and One Nights.\nThe Access Point releases its own theatrical series as a chain of four shows taking place at late evenings that turn into white nights.\nThe starry-eyed guest worker will fight for Nastenka's heart four times by inviting her to go to the theatre. By a strange coincidence, all four evenings in the theatres of St. Petersburg The Little Tragedies by Pushkin (Mozart and Salieri, The Covetous Knight, The Stone Guest and A Feast in Time of Plague) will take place. Although these unusual performances will be presented with a distinct oriental colour.\nThroughout the performances, the audience will accompany the Dreamer and Nastenka and visit the poor Dreamer’s apartment, where he will try to entertain his beloved by reading tales from One Thousand and One Night.\nThis series of performances strikingly combines a journey around Saint Petersburg and a familiar format ‘people in the audience - actors on stage’. The explosive mix of topics and aesthetical forms, the contemplation on the interaction of Eastern and Western cultures, migration, and internal emigration, the daring combination of Pushkin, Dostoevsky and medieval Arab tales comprise Little Nights, the first Russian performance of the prominent Iranian director Ali Asghar Dashti.\nThe phenomenon of Iranian cinema is known in Russia, and in recent years it has become possible to get acquainted with the impressive achievements of the Iranian theatre. But it was The Access Point that took a chance to invite the director from Iran to the Russian production for the first time ever.\nAli Asghar Dashti is engaged in both renovation of the traditional Iranian theatre, transforming the ancient Iranian tradition of “tazyie” performances and the latest forms of documentary theatre. For example, he staged a performance based on the monologues of cancer patients’ relatives. Among the most famous performances of Dashti and his Don Quixote Theatre Group are Monodialogue, Tell / Zahhak, Pinocchio, Molla Nasreddin, Don Quixote, The Little Prince, Café Shop / Interior / Night, Zan, Hand & Leg Seller, Amorous Conversation of Two Policemen behind the Red Light."
          // ],
        },
        {
          id: 1,
          type: "spekt",
          name: ["Санкт-Петербург вне себя", "Delirious Saint Petersburg"],
          place: ["Спектакль на теплоходе", "Perfomance on the ship"],
          address: ["Воскресенская наб., 20", "Pier, Voskresenskaya nab., 20"],
          placeDesc: ["Спектакль на теплоходе", "Perfomance on the ship"],
          mapDescription: ["Ближайшая станция метро — «Чернышевская»", "Nearest metro station — Chernyshevskaya"],
          metro: ["м. Чернышевская", "Chernyshevskaya station"],
          age: 12,
          duration: ["2 часа", "2 hours"],
          category: 0,
          partners: [3, 31, 5],
          newText: ["Двухчасовой спектакль-речная прогулка, в котором главным действующим лицом становится не артист, а сам Петербург", "A two-hour riverwalk performance, in which the main actor is not an artist, but Saint Petersburg itself"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d457d73c89322287200510dc3c001c8f/5B63DF85/t51.2885-15/e35/20393775_502362776778010_593456474764607488_n.jpg",
          schedule: [
            {
              date: "31.07.2018",
              shows: [
                {
                  time: "15:00",
                  tickets: -1,
                  radarioId: "268710"
                },
                {
                  time: "17:30",
                  tickets: -1,
                  radarioId: "268711"
                },
                {
                  time: "20:00",
                  radarioId: "268712",
                  tickets: -1,
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
                  time: "17:30",
                  radarioId: "268715"
                },
                {
                  time: "20:00",
                  tickets: -1,
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
                  time: "17:30",
                  radarioId: "268716"
                },
                {
                  time: "20:00",
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
                  time: "17:30",
                  radarioId: "268720"
                },
                {
                  time: "20:00",
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
                  time: "17:30",
                  radarioId: "268723"
                },
                {
                  time: "20:00",
                  radarioId: "268724",
                  // tickets: -1,
                },
              ]
            },
          ],
          team: [
            {
              label: ["Режиссер", "Director"],
              people: [["Мартин Шик (Швейцария)", "Martin Schick (Switzerland)"], ]
            },
            {
              label: ["Драматург", "Dramaturg"],
              people: [["Анна Ильдатова", "Anna Ildatova"], ]
            },
          ],
          text: [
            <div>
              {/* <span>
                Двухчасовой спектакль-речная прогулка, в котором главным действующим лицом становится не артист, а сам Петербург
              </span>
              <h5 className="with-margin">
                12+
              </h5> */}
              <span>
                <i>
                  Зритель поднимается на палубу речного теплохода и становится участником, казалось бы, привычной «прогулки по рекам и каналам». Но швейцарец Мартин Шик сталкивает прошлое и настоящее Петербурга с историей еще одного города-исполина — Нью-Йорка. В поиске сходств между двумя гигантами рождается новое понимание философии мегаполиса и его жителей.
                </i>
              </span>
              <span>
                <div>
                  Главный герой этого спектакля — Петербург. Оптику для его обзора создатели спектакля — режиссер Мартин Шик и театровед Анна Ильдатова — заимствуют у автора бестселлера «Нью-Йорк вне себя» Рема Колхаса, обладателя Притцкеровской премии («Нобелевской» в архитектуре), одного из самых авторитетных современных архитекторов. Колхас в 1970-е написал манифест американского мегаполиса. Он размышлял не столько о зданиях, сколько об истории идей, образов, культурной и социальной жизни города-фантазии, придуманного и сконструированного исключительно силами человека. Само напрашивается сравнение с утопическим проектом Санкт-Петербурга.
                </div>
                <div>
                  Во время спектакля сталкиваются призраки прошлого города на Неве и его настоящее — с торговыми центрами, парками развлечений и  циклопическими стадионами. Колхас называет архитектуру религией Нью-Йорка. Можно ли назвать ее и религией Петербурга? Во время путешествия утопии двух городов-гигантов сталкиваются, объединяя прошлое и настоящее разных континентов.
                </div>
              </span>
              <h5 className="no-margin">
                Мартин Шик
              </h5>
              <span>
                Закончил Высшую школу искусств в Берне, работал в кино и на телевидении, с 2007 года занимается преимущественно театром, в том числе, сайт-специфическим, активно использует практику современного танца и перформанса. Среди самых известных работ — «Заглавие», CMMN SNS PRJCT, «Праздник на сцене», «Языковая лаборатория Вавилона», «Техника полукровки».
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителей:
              </h5>
              <span>
                Если Вы сможете прийти на точку старта за 10-15 минут до отправления, то сможете без спешки занять место на теплоходе. К сожалению, мы не сможем ждать опоздавших — судоходное расписание не допускает задержек.
              </span>
            </div>,
            // "Город на Неве полон призраков прошлого, но живет по новым правилам, которые диктуют ему вновь построенные торговые центры, парки развлечений, небоскребы-исполины и циклопические стадионы. «Санкт-Петербург вне себя» — двухчасовая речная прогулка по Петербургу, привычный туристический формат, на сей раз преображенный до неузнаваемости. Совместная работа швейцарского режиссера Мартина Шика и театроведа Анны Ильдатовой — первая театральная адаптация одной из самых влиятельных книг XX века по архитектуре «Нью-Йорк вне себя» Рема Колхаса. Размышления Колхаса — не об истории зданий, это история идей, образов, эстетических концепций.\nУтопический архитектурный проект под названием Нью-Йорк напрашивается на сравнение с Санкт-Петербургом, имперским утопическим проектом. Действительно ли существует это сходство, эфемерно оно или фундаментально? Колхас называет архитектуру религией Нью-Йорка, но что же тогда религия современного Петербурга? «Санкт-Петербург вне себя» — путешествие в утопию двух городов-гигантов, которое объединяет прошлое и настоящее разных континентов.\nМартин Шик — одна из заметных фигур современного швейцарского театра. Закончил Высшую школу искусств в Берне, работал в кино и на телевидении, с 2007 года занимается преимущественно театром, в том числе, сайт-специфическим, активно использует практику современного танца и перформанса. Среди самых известных работ — «Заглавие», CMMN SNS PRJCT, «Праздник на сцене», «Языковая лаборатория Вавилона», «Техника полукровки».",
          "The play is created with the support of the Swiss Arts Council Pro Helvetia.\nThe city on the Neva river is full of ghosts from the past, but it lives by the new rules dictated by newly built shopping centers, giant skyscrapers, and cyclopean stadiums. Delirious Saint Petersburg is an hour and a half riverwalk around St. Petersburg in the familiar tourist format, transformed beyond recognition. This is the joint work of the Swiss director Martin Schick and Russian theatrologist Anna Ildatova, and the first theatrical adaptation of one of the most influential books of the twentieth century in architecture Delirious New York by Rem Koolhaas. The book is not about buildings, it is the story of ideas, images, and aesthetic concepts.\nThe utopian architectural project of New York asks for a comparison with the imperial utopian project of Saint Petersburg. Do they actually resemble each other and is this resemblance fundamental or is it just a fleeting image? If Koolhaas presents architecture as the religion of New York, then what is the religion of modern Saint Petersburg? Delirious Saint Petersburg is a journey to the utopia of these two giant cities, which unites the past and the present of two different continents.\nMartin Schick is a prominent figure of contemporary Swiss theatre. He graduated from the Highschool of Arts in Bern, worked in film production and television. Since 2007 he has been mainly engaged in theatre events, including site-specific ones, where he uses the both modern dance and performance. Among his most famous works are Title, CMMN SNS PRJCT, Holiday on Stage, Sprachlabor Babylon, Halfbreadtechnique."
          ],
        },
        {
          id: 2,
          type: "spekt",
          name: ["Марат / Сад", "Marat / Sade"],
          place: ["Спектакль в торговом комплексе", "Perfomance in the Shopping Mall"],
          address: ["Торговый комплекс «Невский Центр», Невский проспект, 114-116", "«Nevsky Center» Shopping Mall, Nevsky prospekt, 114-116"],
          placeDesc: ["Спектакль в торговом комплексе", "Perfomance in the Mall"],
          mapDescription: ["Ближайшие станции метро — «Маяковская» / «Площадь восстания», «Гостиный двор» / «Невский проспект»", "Nearest metro stations — «Mayakovskaya», «Gostiny Dvor»"],
          metro: ["м. «Маяковская» / «Площадь восстания», м. «Гостиный двор» / «Невский проспект»", "«Mayakovskaya» metro station, «Gostiny Dvor» metro station"],
          age: 16,
          duration: ["1 час", "1 hour"],
          category: 0,
          additionalTitleText: ["Совместно с Гёте\u2011институтом в Санкт\u2011Петербурге", "In collaboration with Ghoethe\u2011Institut St. Petersburg"],
          banners: [
            {
              img: "marat.jpg",
              link: "http://www.nevskycentre.ru/",
            },
            {
              img: "goete.jpg",
              link: "https://www.goethe.de/ins/ru/ru/sta/pet.html?wt_sc=petersburg",
            },
          ],
          partners: [2, 8, 55],
          newText: ["На четырех этажа «Невского Центра» развернется спектакль-диспут о свободе и революции. Спектакль создан совместно с Гёте-институтом в Санкт-Петербурге.", "A play-debate about freedom and revolution will take place on four floors of the Nevsky Center. Perfomance was made in collaboration with Ghoethe\u2011Institut St. Petersburg"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d2a49a2968473ad7529fe91c4b8a80d3/5B682756/t51.2885-15/e35/20393774_1840399309608789_8331557537090371584_n.jpg",
          schedule: [
            {
              date: "25.07.2018",
              shows: [
                {
                  time: "23:15",
                  radarioId: "268704",
                  tickets: 0,
                },
              ]
            },
            {
              date: "26.07.2018",
              shows: [
                {
                  time: "23:15",
                  tickets: -1,
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
              label: ["Режиссер", "Director"],
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
          text: [
            <div>
              <span>
                <i>
                  Как только последний посетитель покинет торговый комплекс «Невский Центр», его коридоры и эскалаторы станут площадкой театрального действия. Немецкий режиссер Йозуа Рёзинг вместе с известными петербургскими актерами представит здесь свою версию знаменитой пьесы-диспута о революции.
                </i>
              </span>
              <span>
                Главный герой пьесы Петера Вайса — философ и знаток человеческой природы маркиз де Сад проводит остаток дней в психиатрической клинике Шаратон. Он удалился сюда добровольно, полагая, что за пределами сумасшедшего дома сумасшествия еще больше. За окнами — разгар политической реакции, идеалы Великой Французской революции втоптаны в грязь. Маркиз с помощью других пациентов устраивает театральное представление, воссоздающее печальную историю жизни и смерти одного из вождей революции — Жана-Поля Марата. Представление превращается в диспут: Марат ратует за революцию, де Сад исполнен скепсиса. Чья позиция ближе нам сегодня?
              </span>
              <span>
                Молодой немецкий режиссер Йозуа Рёзинг, известный работами в берлинском «Дойчес-театре», переносит действие в респектабельный торговый комплекс. Для одних он — место силы и престижа, для других — объект социальной критики и средоточие зла. Художник Сергей Илларионов и композитор Владимир Раннев придают пространству нужный градус безумия. А в отборном актерском ансамбле выделяются фигуры актера БДТ, заслуженного артиста России Сергея Лосева, актрисы Александринского театра Галы Самойловой и актера Театр им. Ленсовета Олега Федорова. Спектакль создан совместно с Гёте-институтом в Санкт-Петербурге.
              </span>
              <h5 className="no-margin">
                Йозуа Рёзинг
              </h5>
              <span>
                Выпускник венской театральной школы Макса Рейнхардта и факультета права берлинского Университета Гумбольда не раз в своем творчестве пытался разобраться в современном миропорядке. Так, его спектакль Lehman Brothers по пьесе Штефана Массини о банковской империи братьев Леман с успехом идет в театре Регенсбурга. Молодой постановщик также известен работами в берлинском «Дойчес-театре». «Марат / Сад» — вторая работа Рёзинга  в России: в 2017-м он выпустил спектакль по современной немецкой пьесе «Лебеди капитализма» вместе с петербургским «Новым Императорским театром».
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителей:
              </h5>
              <span>
                Обращаем Ваше внимание, что спектакль закончится в 00:30, после закрытия метрополитена.
              </span>
            </div>,
            // "Пьесы классика и реформатора немецкой драматургии XX века Петера Вайса не впервые появляются в афише «Точки доступа»: причина проста — они сохраняют и эстетическую свежесть, и идейную актуальность. Философ, знаток человеческой природы Маркиз де Сад проводит остаток дней в психиатрической клинике Шаратон. Он удалился сюда добровольно, полагая, что за пределами сумасшедшего дома сумасшествия еще больше. За окнами — разгар политической реакции, идеалы Великой Французской революции втоптаны в грязь. Маркиз с помощью других пациентов устраивает театральное представление, воссоздающее печальную историю жизни и смерти одного из вождей революции — Жана-Поля Марата. Представление превращается в диспут: Марат ратует за революцию, де Сад исполнен скепсиса. Чья позиция ближе нам сегодня?\nМолодой немецкий режиссер Йозуа Рёзинг, известный работами в берлинском «Дойчес-театре», переносит действие в респектабельный торговый комплекс. Для одних он — место силы и престижа, для других — объект социальной критики и средоточие зла. Экстравагантный художник Сергей Илларионов и композитор Владимир Раннев придают пространству нужный градус безумия. А в отборном актерском ансамбле выделяется фигура актера БДТ, заслуженного артиста России Сергея Лосева. В начале 1980-х он уже играл де Сада в легендарном спектакле Вадима Голикова. 2 августа актер отметит 70-летие, и его участие в спектакле Рёзинга — это и возвращение в молодость, и творческий вызов, и заслуженный бенефис, и подарок городу.",
          "The play is a joint project of the Access Point festival and Goethe Institut in St. Petersburg.\nPlays of Peter Weiss, the XX century classic and reformer of the German drama, are not for the first time on The Access Point posters. The reason for this is quite simple — the plays retain both aesthetic freshness and ideological relevance. A philosopher and expert on human nature Marquis de Sade spent the rest of his days in Charenton, a psychiatric asylum. He admitted himself voluntarily, believing that there was more madness outside the asylum than there was inside of it. Outdoors there was the midst of political reactions and the ideals of the French revolution are trampled into the mud. With the help of other patients, Marquis arranged a theatrical performance that recreated the sad story of life and death of Jean-Paul Marat, one of the revolution leaders. The performance turned into a dispute, where Marat stood for revolution and de Sade was full of skepticism. Whose position is closer to us today?\nA young German director Josua Rösing, who is known for his works at Deutsches Theater Berlin, transfers the setting into a respectable shopping mall — a place of power and prestige for some, and the object of social criticism and the focus of evil for others. Painter Sergey Illarionov and composer Vladimir Rannev add the right degree of madness to this place. In the handpicked cast, the honored artist of Russia, an actor of Tovstonogov Bolshoi Drama Theatre Sergey Losev stands out the most. In the early 1980s, he already played the role of Marquis de Sade in the legendary play by Vadim Golikov. On the 2nd of August the actor will celebrate his 70th anniversary, and his participation in the Rösing’s performance is a return to youth, a creative challenge, a well-deserved benefit, and a gift to the city."
          ],
        },
        {
          id: 3,
          type: "spekt",
          name: ["Музей инопланетного вторжения", "The Alien Invasion Museum"],
          by: ["«Театр независимых действий» (Москва)", "Theatre of Mutual Operations (Moscow)"],
          place: ["Спектакль на фортах", "Perfomance in the Fort"],
          address: ["Форт Константин, Кронштадт", "Fort Constantine, Kronstadt"],
          placeDesc: ["Спектакль на фортах", "Perfomance in the Fort"],
          mapDescription: ["Организован трансфер до форта Константин, за 30 мин до начала спектакля. Место отправления — Кронштадское ш. д 38", "from «Parnas» metro station — 30 minutes on foot, or 28 minutes by car"],
          metro: "",
          age: 10,
          duration: ["1 час 30 минут", "1 hour 30 minutes"],
          category: 1,
          partners: [30, 56],
          newText: ["Во время экскурсии зрители знакомятся с коллекцией свидетельств и артефактов фантастического события — встречи человека и пришельцев, произошедшей в советские 1980-е.", "During the tour, the audience gets acquainted with the collection of evidence and artifacts of a fantastic event — the meeting with aliens, which took place in the Soviet 80s"],
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
                  radarioId: "270995",
                  // tickets: -1,
                },
              ]
            },
            {
              date: "21.07.2018",
              shows: [
                {
                  time: "12:00",
                  radarioId: "271004",
                  tickets: -1,
                },
                {
                  time: "16:00",
                  radarioId: "271010",
                  tickets: -1,
                },
                {
                  time: "20:00",
                  radarioId: "271011",
                  tickets: -1,
                },
              ]
            },
            {
              date: "22.07.2018",
              shows: [
                {
                  time: "12:00",
                  radarioId: "271012",
                  tickets: -1,
                },
                {
                  time: "16:00",
                  radarioId: "271013",
                  tickets: -1,
                },
                {
                  time: "20:00",
                  radarioId: "271014",
                  tickets: -1,
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
          text: [
            <div>
              <span>
                <i>
                  Чтобы показать петербургским зрителям этот московский спектакль, «Точка доступа» создаст четыре выставочных зала внутри артиллерийского форта «Константин», который защищает южные гавани Кронштадта. Прибывшие в Форт зрители увидят свидетельства события, о котором грезило человечество, — встречи инопланетного разума с земным.
                </i>
              </span>
              <span>
                Это произошло в морозный февраль 1989 года. В маленькой деревне в Томской области. Правда встреча с пришельцами не была похожа на сюжет фантастического фильма. Местные жители были больше озадачены выживанием и талонами на продукты, чем контактом с инопланетянами. И о событии вселенского масштаба так никто бы и не узнал, если бы им не заинтересовалась команда театральных художников. Они собрали и реконструировали скафандры пришельцев, чертежи ученых, интервью очевидцев, которые объединили в одну экспозицию. Зрители исследуют артефакты в сопровождении актеров-экскурсоводов. И одновременно соприкасаются с атмосферой недавнего прошлого — 1980-х, последнего десятилетия перед крахом СССР.
              </span>
              <span>
                «Музей инопланетного вторжения» — спектакль для семейной аудитории: увлекательная фантастическая история, интересная детям, сочетается здесь с параллельным серьезным сюжетом об историческом времени,  социальных парадоксах нашего вчера и сегодня.
              </span>
              <h5 className="no-margin">
                «Театр взаимных действий»
              </h5>
              <span>
                Новое открытое объединение художников Леши Лобанова, Ксении Перетрухной и Шифры Каждан и продюсера Александры Мун дебютировало спекатклем «Музей иноплантеного вторжения». Это пример «театра художника», в котором главным становится визуальные образы и организация пространства. Команда выбрала набирающий популярность способ организации работы: здесь нет режиссера, который оставляет за собой решающее слово — спектакль рождается в совместной равноправной работе участников. «Театр взаимных действий» уже стал участником Международного театрального фестиваля NET (Москва, 2017), а первый спектакль попал в число главных экспериментов сезона 2016-2017, по мнению экспертов Национальной театральной премии «Золотая маска».
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителя:
              </h5>
              <span>
                Рекомендуем выбирать удобную спортивную обувь — спектакль предполагает долгую прогулку.
              </span>
            </div>,
            // "Февраль 1989 года. Томская область. В маленькой деревне произошло событие, о котором сотни лет грезило человечество — инопланетный разум встретился с земным. Правда, это было мало похоже на сюжеты фантастических книг и фильмов. Местные жители были больше озабочены талонами на продукты и выживанием, чем контактом с пришельцами. И о событии вселенского значения так никто и не знал, пока в 2016-м им не заинтересовалась группа театральных художников.\nСпектакль проходит в форме музейной экскурсии. Зрители изучают артефакты и свидетельства событий в сопровождении актеров-экскурсоводов: рисунки ученых, интервью с очевидцами, реконструкции скафандров и другие следы присутствия инопланетной жизни, и одновременно совершают исторический экскурс в недавнее прошлое — распадающийся СССР конца 80-х.\n«Музей инопланетного вторжения» выдержан в мало знакомом России жанре «мокьюментари» (фальшивой документалистики) и рассчитан на самого широкого зрителя. Детей заинтересует фантастическая история, а взрослые имеют шанс вычитать параллельный сюжет — о ксенофобии и терпимости, социальных парадоксах нашего вчера и сегодня.\nКроме того, перед нами «театр художника», точнее — трех заметных театральных художников страны, объединившихся в группу «Театр взаимных действий». Один из них — Леша Лобанов — для «Точки доступа» человек близкий и родной: он был одним из соавторов самого первого нашего спектакля «В сторону белого КАМАЗа».",
          "The play was created with the support of the Government of Moscow and the Department of Culture of Moscow. It is a member of the state and public support program for theatres for children and adolescents under the patronage of the President of the Russian Federation.\nFebruary, 1989. Tomsk Region. In a small village there was an event, which mankind had dreamed of for hundreds of years: the alien met the earthly one, though it looked little like the plots of sci-fi films and books. The locals cared more about the food stamps and survival rather than the contact with the aliens. So nobody knew about this event of the universal significance until the group of theatre artists took interest in it in 2016.\nThe play is in the form of a museum tour. The spectators study the artifacts and evidence of events, accompanied by the actors / tour guides: drawings of scientists, interviews with eyewitnesses, reconstruction of spacesuits and other traces of the presence of extraterrestrial life; all while making a historical trip into recent past — into the disintegrating USSR of the late 80’s.\nAlien Invasion Museum is made in an uncommon to the Russian viewer genre of mockumentary (fake documentary) and is designed for the widest audience. Children will be interested in a sci-fi story, and adults will be able to see a parallel story: one of xenophobia and tolerance, the social paradoxes of our yesterday and today. Moreover, we are presented with the artist’s theatre, three famous artists united in the group Theatre of Mutual Operations, more precisely. One of them, Alexey Lobanov, is close and dear for The Access Point: he was one of the co-authors of our very first play Towards White KAMAZ."
          ],
          deWay: [
            <div>
              <span>
                <div>
                  Вы можете воспользоваться общественным транспортом — автобусы и маршрутные такси идут от трех станций метро. Время пути составит ок. 40 минут:
                </div>
                <div>
                  От ст. м. Черная речка: маршрутка 405, цена 79 руб, интервал движения 15-30 мин.
                </div>
                <div>
                  Выходить на остановке «Кронштадтское шоссе, д.38»
                </div>
                <div>
                  От ст. м. Старая деревня: автобус 101, цена 40 руб, интервал движения 10-20 мин.
                </div>
                <div>
                  Выходить на остановке «Кронштадтское шоссе, д.38»
                </div>
                <div>
                  От ст. м. Проспект Просвещения: маршрутка 407, цена 79 руб, интервал движения 15-30 мин. Выходить на остановке «Кронштадтское шоссе, д.38»
                </div>
              </span>
              <span>
                <div>
                  От остановки «Кронштадтское шоссе, д. 38» до Форта «Константин» для зрителей спектакля организован бесплатный трансфер, автобусы будут отправляться за 30 минут до начала спектакля и доставят вас обратно после окончания спектакля.
                </div>
              </span>
              <h5 className="no-margin">
                Подробное расписание автобуса:
              </h5>
              <span>
                <div>
                  Кронштадт — Форт:
                </div>
                <div>
                  20.07: 15:30, 19:30
                </div>
                <div>
                  21.07: 11:30, 15:30, 19:30
                </div>
                <div>
                  22.07: 11:30, 15:30, 19:30
                </div>
                <div>
                  Форт — Кронштадт:
                </div>
                <div>
                  20.07: 17:45, 21:45
                </div>
                <div>
                  21.07: 13:45, 17:45, 21:45
                </div>
                <div>
                  22.07: 13:45, 17:45, 21:45
                </div>
              </span>
              <span>
                Если Вы опоздали на трансфер, рекомендуем воспользоваться услугами такси.
              </span>
            </div>,

            // <div>
            //   <span>
            //     <div>
            //       You get by via public transport. Buses and taxies drives from 3 metro stations:
            //     </div>
            //     <div>
            //       «Chernaya rechka» metro station: маршрутка 405, цена 79₽, интервал движения 15-30 мин.
            //     </div>
            //     <div>
            //       Выходить на остановке «Кронштадтское шоссе, д.38»
            //     </div>
            //     <div>
            //       «Staraya derevnya» metro station: автобус 101, цена 40₽, интервал движения 10-20 мин.
            //     </div>
            //     <div>
            //       Выходить на остановке «Кронштадтское шоссе, д.38»
            //     </div>
            //     <div>
            //       «Prospekt Prosvescheniya»: 407 shuttle bus, 79₽, интервал движения 15-30 мин. Выходить на остановке «Кронштадтское шоссе, д.38»
            //     </div>
            //   </span>
            //   <span>
            //     <div>
            //       От остановки «Кронштадтское шоссе, д. 38» до Форта «Константин» для зрителей спектакля организован бесплатный трансфер, автобусы будут отправляться за 30 минут до начала спектакля и доставят вас обратно после окончания спектакля.
            //     </div>
            //     <h5 className="no-margin">
            //       Подробное расписание автобуса:
            //     </h5>
            //     <div>
            //       Кронштадт — Форт:
            //     </div>
            //     <div>
            //       20.07: 15:30, 19:30
            //     </div>
            //     <div>
            //       21.07: 11:30, 15:30, 19:30
            //     </div>
            //     <div>
            //       22.07: 11:30, 15:30, 19:30
            //     </div>
            //     <div>
            //       Форт — Кронштадт:
            //     </div>
            //     <div>
            //       20.07: 17:45, 21:45
            //     </div>
            //     <div>
            //       21.07: 13:45, 17:45, 21:45
            //     </div>
            //     <div>
            //       22.07: 13:45, 17:45, 21:45
            //     </div>
            //   </span>
            //   <span>
            //     Если вы опоздали на трансфер, рекомендуем воспользоваться услугами такси.
            //   </span>
            // </div>
          ]
        },
        {
          id: 4,
          type: "spekt",
          name: ["Время роста деревьев", "The Time of the Tree Growth"],
          by: ["Творческая лаборатория «Угол» (Казань)", "Ugol Creative lab (Kazan)"],
          place: "",
          address: ["Парголово (ст.м.Парнас), ул. Карьерная, 3", "Pargolovo, Karyernaya st., 3"],
          placeDesc: ["Спектакль на городской окраине", "Perfomance on the Urban Outskirts"],
          mapDescription: ["от ст. м. «Парнас» — пешком ≈ 10 мин. — на машине ≈ 5 мин", "from «Parnas» metro station — 30 minutes on foot, or 28 minutes by car"],
          metro: ["м. Парнас", "Parnas metro station"],
          age: 18,
          duration: ["1 час", "1 hour"],
          category: 1,
          partners: [],
          newText: ["Экскурсия по мало исследованному району города переплетается с лирической историей несложившейся любви", "A tour in the little-explored area of the city is intertwined with the lyrical history of failed love"],
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
          text: [
            <div>
              <span>
                <i>
                  Декорации этого спекаткля — линии многоэтажек Парнаса, граница Шуваловского парка, велосипед, кем-то прикрепленный к фонарному столбу, полузаброшенные дачи и низкорослая церквушка. Во время часовой экскурсии в сопровождении чудаковатого гида по тропкам и улочкам, будто прикованные к пространству лесные духи, появляются настоящие герои спектакля, чтобы рассказать свою историю несостоявшейся любви.
                </i>
              </span>
              <span>
                <div>
                  Спектакль постоянно играет со зрительскими ожиданиями. Начинается как экскурсия по району, не очень хорошо известному даже опытным краеведам, — на пустыре Парнаса, ровно между деревянной церквушкой и диким прудом. Продолжается как лекция о природе и нравах далеких Маршалловых островов. Но ни экскурсии, ни лекции  на самом деле не состоится. Потому  что зрителю придется отвлекаться на странную парочку, жертв безнадежной любви. Им бы давно забыть друг о друге, но прошлое никак не отпускает, преследует, словно проклятье. Возможно, живи они не на Парнасе, а на Маршалловых островах, все сложилось бы иначе?
                </div>
                <div>
                  Во «Времени роста деревьев» выдержки из книги «Укрась приусадебный участок сам» соседствуют с фактами из труда «Загадки Маршалловых островов», откровения корейского туриста — с исповедью незадачливого экскурсовода. А свел их в лирическую пьесу один из лидеров современной российской драматургии Михаил Дурненков. Постановка Регины Саттаровой «Время роста деревьев» — спектакль творческой лаборатории «Угол», в котором задействованы ведущие молодые артисты театров Казани. «Угол» существует всего несколько лет, но уже стал важным центром российского поискового театра. Чтобы создать новую, петербургскую, версию спектакля, Саттарова и Дурненков исследовали пространство и локальный контекст Парнаса.
                </div>
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителя:
              </h5>
              <span>
                Рекомендуем выбирать удобную спортивную обувь — спектакль предполагает долгую прогулку, в том числе, по лесной дороге. На случай дождя стоит взять с собой зонт.
              </span>
            </div>,
          "This performance always fires the audience with expectations. It begins as a tour around the place that even experienced local historians do not know well enough — the wasteland of Parnassus, exactly between the small wooden church and the wild pond, and continues as a lecture on the nature and customs of the distant Marshall Islands. But neither the tour nor the lecture will take place because a strange couple, victims of hopeless love, constantly draws spectators’ attention. It would be better for them to forget about each other a long time ago, but the past just does not let it go. Would things have been different if they lived not in Parnassus, but in the Marshall Islands?\nIn The Time of Tree Growth,  extracts from the book Decorating the Household Plot by Yourself appear side by side with the facts from Mysteries of the Marshall Islands — the revelation of the Korean tourist and the confession of the hapless guide. All of it was brought into a lyrical play by one of modern Russian drama leaders Mikhail Durnenkov, who is well-known in Saint Petersburg at least for his play Izotov directed by Andrey Moguchy.\nThe Time of Tree Growth by Regina Sattarova is the performance of creative lab Ugol that involved young leading actors of Kazan theatres. Ugol exists only a few years, but has already become an important center of Russian immersive theatre. Both Sattarova and Durnenkov explored the place and peculiarities of Parnassus to create a new, Petersburg version of the play."
          ],
        },
        {
          id: 5,
          type: "spekt",
          name: ["Трехгоршковая опера", "Chamber Pot Opera"],
          by: ["Театральная компания «Bontom» (Сидней, Австралия)", "Theatre company «Bontom» (Sydney, Australia)"],
          place: ["Спектакль в отеле", "Perfomance in the Hotel"],
          address: ["Hilton St. Petersburg ExpoForum, Петербургское шоссе, 62, к. 1", "Hilton St. Petersburg ExpoForum, Peterburgskoye Highway, 62, building 1"],
          placeDesc: ["Спектакль в отеле", "Perfomance in the hotel"],
          mapDescription: ["Ближайшая ст. м. «Московская». Примерное время в пути на общественном транспорте 30 минут, на личном — 20 минут. Есть парковка.", "from «Moskovskaya» metro station: by bus number 187 (bus interval — 15 minutes) to Convention and Exhibition centre ExpoForum bus station (aprox 30 minutes); or 20 minutes by car"],
          metro: ["м. «Московская»", "«Moskovskaya» metro station"],
          age: 18,
          duration: ["1 час", "1 hour"],
          category: 1,
          partners: [7, 56],
          newText: ["Трогательная история о женской солидарности от театральной компании «Bontom» переносит магию классической оперы в повседневный мир", "A touching story about women's solidarity by the Bontom theatre company that takes the magic of classical opera in the everyday world"],
          youtube: "https://www.youtube.com/embed/PEwb5TcTFRI",
          // instvideo: "https://www.instagram.com/stories/highlights/17863777603269998/",
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
                  radarioId: "268674",
                  tickets: -1,
                },
              ]
            },
            {
              date: "21.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268676",
                  tickets: -1,
                },
                {
                  time: "20:30",
                  radarioId: "268675",
                  tickets: -1,
                },
              ]
            },
            {
              date: "22.07.2018",
              shows: [
                {
                  time: "19:00",
                  tickets: -1,
                  radarioId: "268677"
                },
                {
                  time: "20:30",
                  tickets: -1,
                  radarioId: "268678"
                },
              ]
            },
            {
              date: "24.07.2018",
              shows: [
                {
                  time: "19:00",
                  radarioId: "268680",
                  tickets: -1,
                },
                {
                  time: "20:30",
                  tickets: -1,
                  radarioId: "268679"
                },
              ]
            },
            {
              date: "25.07.2018",
              shows: [
                {
                  time: "19:00",
                  tickets: -1,
                  radarioId: "268681"
                },
                {
                  time: "20:30",
                  tickets: -1,
                  radarioId: "268682"
                },
              ]
            },
            {
              date: "27.07.2018",
              shows: [
                {
                  time: "19:00",
                  tickets: -1,
                  radarioId: "268684"
                },
                {
                  time: "20:30",
                  tickets: -1,
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
                  tickets: -1,
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
                  tickets: -1,
                  radarioId: "268691"
                },
                {
                  time: "20:30",
                  tickets: -1,
                  radarioId: "268692"
                },
              ]
            },
            {
              date: "03.08.2018",
              shows: [
                {
                  time: "19:00",
                  tickets: -1,
                  radarioId: "268694"
                },
                {
                  time: "20:30",
                  tickets: -1,
                  radarioId: "268693"
                },
              ]
            },
            {
              date: "04.08.2018",
              shows: [
                {
                  time: "19:00",
                  tickets: -1,
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
          text: [
            <div>
              <span>
                <i>
                  Режиссер Клименс Уильямс не строит декорацию или павильон, а приводит зрителя в реальное место действия: в дамской комнате дорого отеля публика случайно оказывается свидетельницей трех происшествий. Каждое подтверждается известной оперной партией, звучащей по-новому в камерном пространстве в шаге от зрителя.
                </i>
              </span>
              <span>
                Дирижер Кейрен Брандт-Соуди, драматург Томас Де Анджелис и режиссер Клеменс Уильямс переворачивают стереотипные представления о героинях классической оперы. Присваивая десять известнейших партий из опер Пуччини, Моцарта и Бизе, они создают новое произведение для современных слушателей.
              </span>
              <span>
                Три незнакомки случайно сталкиваются в роскошной дамской комнате отеля. Каждая пережила большое испытание: одна — травмирующие отношения, другая — напугана, что ее сильный характер мешает любимому, третья может лишиться работы мечты из-за гендерных предрассудков. Встреча происходит в редком месте, где женщина может уединиться и спрятаться от взгляда мужчин. Тесная близость публики и актеров придает спектаклю напряженность, которая колеблется от случайного наблюдения до мощного совместного переживания. Премьера «Трехгоршковой оперы» состоялась в Сиднее в ноябре 2016 года, спектакль снискал большой успех на родине и стал участником эдинбургского «Фринджа».
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителей:
              </h5>
              <span>
                <div>
                  От ст.м. «Московская» до площадки спектакля можно доехать на автобусе №187 или маршрутном такси №545 (остановка «Метро Московская»). Выйти необходимо на остановке КВЦ «Экспофорум». Время пути составит ок. 30 минут.
                </div>
                <div>
                  Время пути на личном транспорте или на такси от ст.м. «Московская» до отеля составит ок.15 минут. Рядом с отелем предусмотрена парковка.
                </div>
              </span>
              <span>
                <div>
                  Расписание движения Шатлов Hilton:
                </div>
                <div>
                  Для спектакля в 19:00 — 17:05
                </div>
                <div>
                  Для спектакля в 20:30 — 19:35
                </div>
              </span>
              <span>
                <a className="yellow-link special" href="https://www.instagram.com/stories/highlights/17863777603269998/" target="_blank">
                  Здесь мы расскажем вам как добраться до Трехгоршковой оперы
                </a>
              </span>
            </div>,
            // "Спектакль идет с русскими и английскими субтитрами\n«Трехгоршковая опера» — сенсация нынешней «Точки доступа». В России хорошо известен европейский театр. Американский и иберо-американский театр тоже неоднократно добирался до нас с гастролями. Новые политические тренды плотнее познакомили российскую публику с театром из Азии и Африки. Но об австралийском театре мы не знали ровным счетом ничего. Пока компания Bontom не привезла на «Точку доступа» свой нашумевший спектакль.\n«Трехгоршковая опера» — результат сотрудничества дирижера Кейрена Брандт-Соуди, драматурга Томаса Де Анджелиса и режиссера Клеменс Уильямс. Рефлексируя над проблемой ограниченности традиционного оперного репертуара, не дающего актрисам полной возможности самовыражения, создатели спектакля придумали новую, неожиданную, даже провокационную театральную форму. Великая оперная классика, но не на сцене, а там, где прежде не принято было играть спектакли, плюс актуальные вопросы сегодняшней повестки. В итоге получилась первая в мире опера, предназначенная для общественной уборной.\nТри дамы случайно сталкиваются в роскошной дамской комнате богатого отеля. Одна — жертва харассмента, другая боится, что ее имидж «сильной женщины» слишком подавляет возлюбленного, третьей гендерные предрассудки мешают получить работу мечты. Вместе они обсуждают проблемы и потаенные фантазии, подтверждая их ариями из опер Моцарта, Пуччини и Бизе. Выходит иронично, зажигательно и вполне гигиенично. Премьера «Трехгоршковой оперы» состоялась в Сиднее в ноябре 2016 года, спектакль снискал большой успех на родине и стал участником эдинбургского «Фринджа».",
          "The play has Russian and English subtitles.\nThe Chamber Pot Opera is the result of collaboration between conductor Keiren Brandt-Sawdy, playwright Thomas De Angelis and director Clemens Williams. The creators of the play came up with a new, unexpected and even provocative theatrical form while reflecting on the problem of the limitations in the traditional opera repertoire, which does not let actresses fully express themselves. It is a great classical opera performed not on the stage, but in a place where it was not accepted to play performances before, combined with relevant issues of modern life. In other words, it is the world's first opera produced for public restroom.\nThree ladies accidentally bump into each other in the luxurious ladies’ room of a rich hotel. One is a victim of harassment, the other is afraid that her image of a strong woman suppresses her lover too much, and the gender prejudices prevent the third one from getting a dream job. They discuss their problems and hidden fantasies, performing arias from the operas of Mozart, Puccini and Bizet. The opera turns out to be ironic, electric and quite hygienic. The premiere of The Chamber Pot Opera was held in Sydney in November 2016, the performance was a great success at home and became a member of Fringe  Edinburgh Festival."
          ],
        },
        {
          // tickets: -1,
          id: 6,
          type: "spekt",
          name: ["«Безликие»", "Faceless"],
          logo: ["/img/spekts/faceless.svg", "/img/spekts/faceless_En.svg"],//["/img/spekts/faceless.svg", "/img/spekts/faceless_En.svg"],
          logoHover: ["/img/spekts/faceless_yellow.svg", "/img/spekts/faceless_En_yellow.svg"],//["/img/spekts/faceless_yellow.svg", "/img/spekts/faceless_En_yellow.svg"],
          place: ["Иммерсивное шоу", "Immersive show"],
          address: ["Дворцовая наб., 20", "Palace Embankment, 20"],
          placeDesc: ["Иммерсивное шоу", "Immersive show"],
          mapLabel: ["Иммерсивное шоу «Безликие»", "Immersive show «Faceless»"],
          mapDescription: ["Ближайшие станции метро — «Адмиралтейская», «Невский проспект» / «Гостиный двор»", "Nearest metro stations — «Admiralteyskaya, «Nevsky prospekt / «Gostiny dvor"],
          metro: ["м. «Адмиралтейская», м. «Невский проспект» / «Гостиный двор»", "«Admiralteyskaya» metro station, «Nevsky prospekt» / «Gostiny dvor metro station»"],
          age: 18,
          duration: ["2 часа 30 минут", "2 hours 30 minutes"],
          category: 2,
          partners: [],
          newText: ["Опыт тотального погружения в действие, где зритель из наблюдателя превращается в соучастника происходящего", "An experience of total immersion in the action, where the viewer turns from an observer into a participant of the performance"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "25.07.2018",
              shows: [
                {
                  time: "19:30",
                  // radarioId: ""
                  alt: "https://iframeab-pre1303.intickets.ru/node/10741271",
                },
              ]
            },
            {
              date: "27.07.2018",
              shows: [
                {
                  time: "19:30",
                  // radarioId: ""
                  alt: "https://iframeab-pre1303.intickets.ru/node/10741263",
                },
              ]
            },
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "19:30",
                  // radarioId: ""
                  alt: "https://iframeab-pre1303.intickets.ru/node/10741274",
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
          text: [
            <div>
              <span>
                «”Безликие” — это иммерсивный спектакль, в котором мы воссоздали полностью аутентичное пространство, совместили элементы классического театра и хореографии, использовали аудиовизуальные эффекты, тщательно проработали интерактивную составляющую... В результате зритель оказывается в ином измерении, где не существует привычных правил, запретов и границ. Спектакль — возможность получить качественно новый и очень личный опыт. Испытать то же самое, оставаясь наблюдателем в кресле, просто невозможно. Это театрализованная виртуальная реальность», — рассказывает американский режиссер шоу Мия Занетти. За пять месяцев репетиций, которые велись в строжайшей тайне, актеры освоили уникальные методики взаимодействия с аудиторией, а в особняке на Дворцовой набережной возникли десятки потайных ходов и дверей.
              </span>
              <span>
                Российскими продюсерами «Безликих» стали Мигель и Вячеслав Дусмухаметов, а в роли композитора выступил лидер Therr Maitz Антон Беляев, костюмы для шоу — работа петербуржского дизайнера Алины Герман.
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителя:
              </h5>
              <span>
                Рекомендуем надеть удобную обувь, а также использовать контактные линзы вместо очков; однотонная одежда увеличит ваши шансы полностью раствориться в атмосфере особняка. Для более комфортного просмотра шоу просим не брать с собой большие сумки. Если это невозможно, то вам будет необходимо сдать ее в гардероб.
              </span>
            </div>,
          "“Faceless” is an immersive performance in which we create a completely authentic space, combine elements of classical theater and choreography, use audiovisual effects and thrash out the interactive component ... As a result, the viewer founds himself in a different dimension, where there are no usual rules, prohibitions and borders. This is an opportunity to get a completely new and very personal experience. It is simply impossible to experience the same thing, while remaining an observer in the chair. “This is a dramatized virtual reality” — tell the American film director Mia Zanetti. For five months of rehearsals, which were conducted in the strictest secrecy, the actors mastered unique methods of interaction with the audience, and dozens of secret passages and doors were built in the mansion.\nThe Russian producers of “Faceless” are Miguel and Vyacheslav Dusmukhametov, and the composer is Anton Belyaev, the leader of Therr Maitz, the costumes designed by Alina German."
          ],
        },
        {
          id: 7,
          type: "spekt",
          name: ["Questioning / Кто ты?", "Questioning"],
          by: ["Pop-up театр совместно с театром Magic Garden (Швейцария) и площадкой «Скороход»", "Pop-up theatre in partnership with Magic Garden (Switzerland) and Skorokhod theatrical venue"],
          place: ["Площадка «Скороход»", "«Skorokhod» theatrical venue"],
          address: ["Московский пр., 107, к.5", "Skorohod, Moskovskiy prospekt, 107 building 5"],
          placeDesc: ["Спектакль-опрос", "Questioning Perfomance"],
          mapDescription: ["Ближайшая станция метро — «Московские ворота»", "Nearest metro station «Moskovskiye vorota»"],
          metro: ["м. Московские ворота", "«Moskovskiye vorota» metro station"],
          age: 18,
          duration: ["1 час 30 минут", "1 hour 30 minutes"],
          category: 2,
          additionalTitleText: ["Pop-up театр совместно с Magic Garden (Швейцария) и площадкой \"Скороход\"", "Pop-up theater in collaboration with Magic Garden (Switzerland) & \"Skorokhod\" theatrical venue"],
          partners: [43, 19, 44],
          newText: ["Спектакль-игра без актеров исследует границы современного театра и глубину, на которую человек готов погрузиться в себя, отвечая на вопросы о другом.", "A chamber game performance without actors explores the boundaries of modern theatre and the ability of a person to dive into himself while answering questions about another one"],
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
            {
              label: ["Совместно с", "In collaboration with"],
              people: [["Корин Майер", "Korin Mayer"], ["Катарина\xa0Билл\xa0(Magic Garden)", "Katarina\xa0Bill\xa0(Magic Garden)"]]
            },
          ],
          text: ["Что можно узнать о человеке напротив, не задавая ему вопросов? Где включаются интуиция и фантазия, а где срабатывают предубеждения и проецирование? Новый камерный спектакль-игра без актеров исследует границы современного театра и глубину, на которую человек готов погрузиться в себя, придумывая ответы про другого. Два параллельных ряда стульев, смотрящие друг другу в глаза зрители, невидимый модератор и пачка бумаг в сумме дают час исследовательского и чувственного опыта. И это тот случай, когда зрительская ответственность максимальна — впечатление от перформанса прямо пропорционально интенсивности внутренней работы. На вопросы рекомендуют отвечать быстро, анкеты идут одна за другой: в первой пытаешься угадать базовые характеристики, далее предполагаешь поведенческие и психографические модели. Ближе к финалу надо ответить мысленно: что подумали про Вас, увидеть себя глазами другого. В конечном итоге, это история про допущения, оценки и предположения, которые, возможно, не отражают реальность, но точно связаны с Вами и с тем, как Вы воспринимаете окружающий мир.",
          "What can you learn about the person in front of you without asking questions? When do intuition and imagination work and when does prejudice appear? A new chamber game performance without actors explores the boundaries of modern theatre and the ability of a person to dive into himself while answering questions about another one. Two parallel rows of chairs, spectators looking in each other’s eyes, an invisible moderator and a paper stack add up an hour of research and sensory experience. This is the case when the audience's responsibility is at its maximum because the impression from the performance is directly proportional to the intensity of their inner work. It is better to answer the questions quickly. The questionnaires go one after another: first you try to guess the basic characteristics, then — behavioural and psychographic models. At the end you have to answer the questions in your mind: what do people think about you, how do you look in the eyes of another person? In total, this performance is a story about assumptions, opinions and suggestions that may not reflect reality, but are closely related to you and your perception of the world."
          ],
        },
        {
          // tickets: -1,
          id: 8,
          type: "spekt",
          name: ["Вишневый сад. Тишина", "The Cherry Orchard. Silence"],
          by: ["Театр «На Литейном» при участии Музея Анны Ахматовой в Фонтанном доме", "Anna Akhmatova's Museum in the Fountain House (Liteyniy pr., 53)"],
          place: ["Спектакль в парке", "Perfomance in the Park"],
          address: ["Литейный пр., 53", "Liteyniy pr., 53"],
          placeDesc: ["Спектакль в парке", "Perfomance in the Park"],
          mapDescription: ["Ближайшая станция метро «Волковская»"],
          metro: ["м. «Маяковская» / «Площадь восстания», м. «Гостиный двор» / «Невский проспект»", "«Mayakovskaya» / «Ploschad' Vosstaniya» metro station, «Gostiny Dvor» / «Nevskiy prospekt» metro station"],
          age: 12,
          duration: ["2 часа", "2 hours"],
          category: 2,
          partners: [],
          newText: ["Путешествие в предысторию знаменитого дома, во времена, когда герои чеховской пьесы были молоды и счастливы", "A journey into the background of the famous house, when the characters of Chekhov's play were young and happy"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "01.08.2018",
              shows: [
                {
                  time: "20:00",
                  // radarioId: ""
                  alt: "http://www.naliteinom.ru/index.php/show/cherrygarden#performance=16204429",
                },
              ]
            },
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "20:00",
                  // radarioId: ""
                  alt: "http://www.naliteinom.ru/index.php/show/cherrygarden#performance=16204430",
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
          text: [
            <div>
              <span>
                <div>
                  Финал пьесы А. П. Чехова «Вишневый сад» — отправная точка и начало спектакля режиссера Андрея Сидельникова «Вишневый сад. Тишина». Заколоченная усадьба, вырубленный сад и далекие воспоминания Фирса о той поре, когда все были молоды и счастливы — главные предлагаемые обстоятельства истории, которая будет сыграна в саду Фонтанного Дома. Уникальное историческое место в центре Петербурга станет дополнительной и неповторимой декорацией для театральной фантазии творческой команды, работающей над спектаклем.
                </div>
                <div>
                  В первой части зрители увидят ключевые сцены пьесы, во второй — пластические этюды без слов, которые расскажут о жизни персонажей Чехова, когда они были еще беспечны и юны, полны надежд и не знали разочарований. Зрители станут свидетелями и участниками незабываемого путешествия в предысторию «Вишневого сада».
                </div>
                <div>
                  Спектакль «Вишневый сад. Тишина» — это исследование рассвета через закат. Рассказ о неотвратимости времени и поиск причин своего настоящего в своем прошлом.
                </div>
              </span>
              <h5 className="no-margin">
                Рекомендация для зрителя:
              </h5>
              <span>
                Рекомендуем выбрать удобную обувь, в которой Вы сможете без неудобства следовать за героями; на случай дождя лучше взять с собой зонт.
              </span>
            </div>,
          "The performance is based on the play by Anton Chekhov.\nThe final of Chekhov’s The Cherry Orchard is the starting point of the play directed by Andrey Sidelnikov. A boarded-up mansion, a clearcut garden and distant memories of Firs about the time when everyone was young and happy — these are the main circumstances of the story that is set in the garden of the Fountain House. This historical place in the center of St. Petersburg serves as an additional and unique decoration for the creative team working on the performance.\nIn the first act the key scenes of the play are presented, and in the second act the audience will see etudes without words that represent the former life of Chekhov's characters  — their carelessness, youth and hopes. The audience will have an unforgettable journey throughout the background of  The Cherry Orchard.\nThe play The Cherry Orchard. Silence is the examination of a dawn through a sunset, a story about the time inevitability and the search for the causes of the present in its past."
          ],
        },
        {
          id: 9,
          type: "spekt",
          name: ["Разговоры беженцев", "Refugee Conversations"],
          by: ["Проект фестиваля «Точка доступа»", "Project by «The Access Point» festival"],
          additional: ["Номинант Национальной театральной премии «Золотая маска»", "Nominee of Golden mask theatrical prize"], //???????????????
          place: ["Спектакль на вокзале", "Perfomance on Railway station"],
          address: ["Финляндский вокзал, площадь Ленина, 6", "Finlyandskiy railway station, ploschad' Lenina, 6"],
          placeDesc: ["Спектакль на вокзале", "Perfomance on Railway station"],
          mapDescription: ["Ближайшая станция метро — «Площадь Ленина»", "Nearest metro station «Ploschad' Lenina»"],
          metro: ["ст. метро «Площадь Ленина»", "Ploschad' Lenina metro station"],
          age: 16,
          duration: ["2 часа", "2 hours"],
          category: 2,
          partners: [5, 26],
          newText: ["Возвращение самого успешного спектакля фестиваля «Точка доступа»", "The most successful performance of the Access Point festival is coming back"],
          img: "https://scontent-arn2-1.cdninstagram.com/vp/d47a58f0de252b5c6c6d0c83f0faab84/5B739383/t51.2885-15/e35/20347447_1987768584770549_4158392412638543872_n.jpg",
          schedule: [
            {
              date: "28.07.2018",
              shows: [
                {
                  time: "18:00",
                  radarioId: "268670",
                  tickets: -1,
                },
              ]
            },
            {
              date: "29.07.2018",
              shows: [
                {
                  time: "14:00",
                  radarioId: "268672",
                  // tickets: -1,
                },
                {
                  time: "18:00",
                  radarioId: "268671",
                  // tickets: -1,
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
        {
          id: 10,
          type: "spekt",
          name: ["Железную дорогу построили, и стало удобно", "They Built That Railway, That's Made This Place Very Handy"],
          place: ["Центр Мультимедиа Русского музея", "The Multimedia Centre of the Russian Museum"],
          address: ["Центр Мультимедиа Русского музея, Инженерная ул., 8", "The Multimedia Centre of the Russian Museum, Inzhenernaya st., 8"],
          placeDesc: ["Спектакль в музее", "Perfomance in museum"],
          mapDescription: ["Ближайшая станция метро — «Невский Проспект»", "Nearest metro station is «Nevsky Prospekt»"],
          metro: ["ст. метро «Невский Проспект»", "«Nevsky Prospekt» metro station"],
          age: "",
          duration: ["1 час 15 минут", "1 h 15 min"],
          category: 0,
          partners: [53, 54, 56],
          newText: ["В спектакле использованы мотивы пьес Резы Шахбодаги «Раны» и Антона Чехова «Вишнёвый сад», а также другие литературные источники", "In the performance the motives of the Reza Shakhbodagi’s Wounds, Anton Chekhov's the Cherry Orchard and other literary sources were used."],
          schedule: [
            {
              date: "21.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281867",
                  tickets: -1,
                },
              ]
            },
            {
              date: "22.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281868",
                  tickets: -1,
                },
              ]
            },
            {
              date: "24.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281869",
                  tickets: -1,
                },
              ]
            },
            {
              date: "26.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281870",
                  tickets: -1,
                },
              ]
            },
            {
              date: "27.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281871",
                  tickets: -1,
                },
              ]
            },
            {
              date: "28.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281872",
                  tickets: -1,
                },
              ]
            },
            {
              date: "29.07.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281873",
                  tickets: -1,
                },
              ]
            },
            {
              date: "01.08.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281874",
                  tickets: -1,
                },
              ]
            },
            {
              date: "02.08.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281875",
                  tickets: -1,
                },
              ]
            },
            {
              date: "03.08.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281876",
                  tickets: -1,
                },
              ]
            },
            {
              date: "04.08.2018",
              shows: [
                {
                  time: "17:00",
                  radarioId: "281877",
                  tickets: -1,
                },
              ]
            },
          ],
          team: [
            {
              label: ["Постановочная группа", "Production Group"],
              people: [["Рамона Шах", "Ramona Shakh"], ["Андрей Слепухин", "Andrey Slepukhin"]]
            },
            {
              label: ["Перевод", "Translation"],
              people: [["Артём Пономарёв", "Artem Ponomaryov"], ]
            },
            {
              label: ["Куратор проекта", "Dramaturg"],
              people: [["Андрей Пронин", "Andrey Pronin"], ]
            },
            {
              label: ["Продюсер проекта", "Producer"],
              people: [["Екатерина Венедиктова", "Ekaterina Venediktova"], ]
            },
            // {
            //   label: ["В ролях", "Cast"],
            //   people: [["Рамона Шах", "Ramona Shakh"], ["Сергей Шоколов", "Sergey Shokolov"], ["Елена Бородина", "Elena Borodina"], ["Данис Бухараев", "Deniis Bukharayev"], ["Юлия Гришаева", "Yuliya Grishayeva"], ["Кирилл Иванов", "Kirill Ivanov"], ["Анна Климович", "Anna Klimovich"], ["Алёна Молодцова", "Alyona Molodtsova"]]
            // },
            {
              label: ["В ролях", "Cast"],
              people: [["Рамона Шах", "Ramona Shakh"], ["Сергей Шоколов", "Sergey Shokolov"], ["Елена Бородина", "Elena Borodina"], ["Данис Бухараев", "Deniis Bukharayev"], ["Юлия Гришаева", "Yuliya Grishayeva"], ["Кирилл Иванов", "Kirill Ivanov"], ["Анна Климович", "Anna Klimovich"], ["Артём Зернов", "Artyom Zernov"]]
            },
          ],
          text: [<div>
            <span>
              Недаром спектакль назван репликой Гаева из "Вишнёвого сада". Железная дорога, поезд тут символ нового времени, модернизации, которая, казалось бы, призвана сблизить народы, сократить расстояние между людьми. Однако новое время приносит новые беды. Героиня "Ран" Резы Шахбодаги теряет близких и надежду на будущее, раздавленная безжалостным локомотивом истории XX века. Словно чеховская Раневская, она смотрит на вырубаемый сад своей жизни.
            </span>
            <span>
              Спектакль, идея которого принадлежит ведущей театральной актрисе Ирана Рамоне Шах, исполняющей главную роль, это невеселая история встречи. Русская театральная традиция встречается с иранской, героиня со своим прошлым, иранский автор с Чеховым, классическая поэзия с мультимедиа, а парадная поэтическая декламация ведет вовсе не к "столу яств", а ко гробу. Смелый театральный коллаж Рамоны Шах и ее русских соавторов станет первым опытом российско-иранской копродукции в театральном искусстве.
            </span>
            <h5>
              Центр мультимедиа Русского музея
            </h5>
            <span>
              <span>
                Расположен в историческом здании Западного павильона Михайловского замка
              </span>
              <span>
                Сегодня здесь находится центр коммуникации международного сообщества информационно-образовательных центров "Русский музей: виртуальный филиал", которые работают в России и за рубежом. 
              </span>
              <span>
                С помощью арсенала современных информационных технологий здесь представляют коллекцию Русского музея в рамках тематических техно-игровых маршрутов.
              </span>
              <span>
                В мультимедийном кинотеатре центра проходят предпоказы фильмов по искусству, встречи с художниками, лекции ведущих специалистов Русского музея - кураторов выставок и проектов, исследователей, реставраторов, хранителей музейных ценностей. Для специалистов музейного дела и исследователей мультимедиа здесь организуют семинары, конференции и мастер-классы, которые транслируются online
              </span>
              <span>
                В 2017 году здесь стартовал театральный проект "ДраММатика", целью которого является объединить в рамках спектаклей театральное искусство, мультимедиа и музейную коллекцию и связать драматургию сценария с местом действия. Первые спектакли в рамках этого проекта - кукольный спектакль молодой театральной труппы "Инженерия" - "Шинель" и спектакль Городского театра "Белые ночи".
              </span>
              <span>
                Центр впервые станет одной из площадок фестиваля "Точка доступа" и впервые принимает международный проект, объединяющий несколько пространств западной кордегардии Михайловского замка и несколько литературных текстов двух разных культур!
              </span>
              <span>
                <a className="yellow-link" href="www.rusmuseumvrm.ru" target="_blank">
                  www.rusmuseumvrm.ru
                </a>
              </span>
            </span>
          </div>,
          <div>
            <span>
              No wonder the play is called after the Gaev‘s replica from the Cherry Orchard. The main part of the performance is the idea of railway, and the train here is a symbol of modernization, which seems to be made for bringing people closer and to reduce the distance between them. However, the new time brings new troubles.The heroine of Reza Shakhbodagi’s Wounds loses her loved ones and her hope for the future, she is ruthlessly crushed by the locomotive of the 20th century history. Like Chekhov's Ranevskaya, she looks at the cut down garden of her life.
            </span>
            <span>
              The play, the idea of which belongs to the leading Iran theatre actress Ramona Shakh, who plays the main role, is a story  of a sad meeting. The Russian theatrical tradition meets the Iranian one, the heroine faces her past, the Iranian author encounters Chekhov, classical poetry is exposed to multimedia, and and the ceremonial poetic recitation leads not to the "table of delicious meals", but to the coffin. The daring collage of Ramona Shakh and her Russian co-authors will be the first experience of Russian-Iranian theatrical co-production.
            </span>
            <h5 className="no-margin">
              The Multimedia Centre of the Russian Museum
            </h5>
            <span>
              <div>
                The Multimedia Centre that located in the Western pavilion of the Mikhailovsky (the Engineers’) castle, carries out three main tasks.
              </div>
              First, it is a center of communication with virtual branches of the Russian Museum. This area of activity includes the organization of annual seminars for employees of this field on the basis of the Russian Museum, videoconference sessions, thematic meetings of project participants, internships, exchange of experience, discussions, as well as solving topical issues and problems in the sphere of virtual branches. Secondly, it is the Multimedia Centre on basis of which the Museum online lecture hall is organized. Finally, you can get acquainted with the thematic multimedia expositions here. However, the performance will be shown there for the first time.
            </span>
          </div>
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
          label: ["Соорганизатор спектакля «Марат / Сад»", "Co-organizer of MARAT / SADE play"],
          labelSpekt: ["Соорганизатор спектакля «Марат / Сад»", "In collaboration with"],
          link: "https://www.goethe.de/ins/ru/ru/sta/pet.html?wt_sc=petersburg",
        },
        {
          id: 3,
          // img: "pro.svg",
          img: "03_prohelvetia@1.png",
          // label: "при поддержке",
          labelSpekt: ["При поддержке", "With support"],
          link: "https://prohelvetia.ru/ru/",
        },
        {
          id: 4,
          // img: "tari.png",
          img: "04_tari@1.png",
          label: "Туристический партнер",
          labelSpekt: ["Тари тур", "Tari tour"],
          link: "http://www.tarispb.ru/",
        },
        {
          id: 5,
          // img: "r.png",
          img: "05_radioguide@1.png",
          label: "Технологический партнер",
          labelSpekt: ["При поддержке", "Technological support"],
          link: "http://www.radioguide.net/ru/",
        },
        {
          id: 6,
          // img: "O.png",
          img: "06_oasis@1.png",
          label: "Официальный перевозчик",
          labelSpekt: ["Турфирма «Оазис»", "«Oasis» travel agency"],
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
          labelSpekt: ["Библиотека Алвара Аалто", "The Alvar Aalto library in Vyborg"],
          link: "http://www.aalto.vbgcity.ru/",
        },
        {
          id: 14,
          // img: "rzd.png",
          img: "14_rzd@1.png",
          label: "",
          labelSpekt: ["Российские Железные Дороги", "Russian Railways"],
          link: "http://www.rzd.ru/",
        },
        {
          id: 15,
          // img: "bontom.jpg",
          img: "15_bontom@1.png",
          label: "",
          labelSpekt: ["Участник фестиваля", "Participant of the festival"],
          link: "http://www.bontom.com.au/",
        },
        {
          id: 16,
          // img: "ug.jpg",
          img: "16_ugol@1.png",
          label: "",
          labelSpekt: ["Участник фестиваля", "Participant of the festival"],
          link: "https://vk.com/ugolkazan",
        },
        {
          id: 17,
          // img: "tvd.jpg",
          img: "17_tvd@1.png",
          label: "",
          labelSpekt: ["Участник фестиваля", "Participant of the festival"],
          link: "https://sites.google.com/view/alieninvasionmuseum",
        },
        {
          id: 18,
          // img: "bzlk.png",
          img: "18_bezlikie@1.png",
          label: "",
          labelSpekt: ["Участник фестиваля", "Participant of the festival"],
          link: "http://bezlikie.show/",
        },
        {
          id: 19,
          // img: "popup.svg",
          img: "19_popup@1.png",
          label: "",
          labelSpekt: ["Участник фестиваля", "Participant of the festival"],
          link: "https://www.popupteatr.ru/",
        },

        {
          id: 20,
          // img: "afisha.jpg",
          img: "20_afisha@1.png",
          label: "",
          labelSpekt: ["Билетный партнер", "Ticket partner"],
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
          labelSpekt: ["Информационный партнер", "Informational partner"],
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
          labelSpekt: ["Информационный партнер", "Informational partner"],
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
          labelSpekt: ["Официальный перевозчик", "Official carrier"],
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
          labelSpekt: ["Площадка проекта", "Project Venue"],
          link: "http://forthotel.ru/",
        },
        {
          id: 33,
          img: "33_yandex_afisha@1.png",
          label: "",
          labelSpekt: ["Яндекс Афиша", "Yandex Afisha"],
          link: "https://afisha.yandex.ru/",
        },
        {
          id: 34,
          img: "34_kp@1.png",
          label: "",
          labelSpekt: ["Комсомольская Правда", "Komsomolskaya Pravda"],
          link: "https://www.kp.ru/",
        },
        {
          id: 35,
          img: "35_radario@1.png",
          label: "",
          labelSpekt: ["Билетная система", "Ticket system"],
          link: "https://radario.ru/",
        },
        {
          id: 36,
          img: "36_donquixote.png",
          label: "",
          labelSpekt: ["При поддержке", "Support by"],
          link: "",
        },
        {
          id: 37,
          img: "37_prochtenie.png",
          label: "",
          // labelSpekt: "Билетная система",
          link: "http://prochtenie.ru/",
        },
        {
          id: 38,
          img: "38_teatral.png",
          label: "",
          // labelSpekt: "Билетная система",
          link: "",
        },
        {
          id: 39,
          img: "39_zz.png",
          label: "",
          // labelSpekt: "Билетная система",
          link: "",
        },
        {
          id: 40,
          img: "40_project.png",
          link: "https://gifts.ru/",
        },
        {
          id: 41,
          img: "41_etalon.png",
          link: "https://www.sprint78.com/",
        },
        {
          id: 42,
          img: "42_veresk.png",
          link: "https://www.facebook.com/veresk.night.gallery/",
          labelSpekt: ["Площадка фестиваля", "Project venue"],
        },
        {
          id: 43,
          img: "43_magic.png",
          link: "http://www.magicgardening.net/",
          labelSpekt: ["Создатель спектакля Швейцарский театр «Magic Garden»", "Creator of the play Swiss Theater «Magic Garden»"],
        },
        {
          id: 44,
          img: "44_skorohod.png",
          link: "http://www.skorohod.me/",
          labelSpekt: ["Площадка фестиваля", "Project venue"],
        },
        {
          id: 45,
          img: "45_kinoafisha.png",
          link: "https://www.kinoafisha.info/",
          labelSpekt: ["Информационный партнер", "Informational partner"],
        },
        {
          id: 46,
          img: "46_allcafe.png",
          link: "https://allcafe.ru/",
          labelSpekt: ["Информационный партнер", "Informational partner"],
        },
        {
          id: 47,
          img: "47_gorodovoy.png",
          link: "http://www.gorodovoy.spb.ru/",
          labelSpekt: ["Информационный партнер", "Informational partner"],
        },
        {
          id: 48,
          img: "48_moika.png",
          link: "https://moika78.ru/",
          labelSpekt: ["Информационный партнер", "Informational partner"],
        },
        {
          id: 49,
          img: "49_fullbright.png",
          link: "http://www.fulbright.ru/ru",
          labelSpekt: ["Партнер образовательной программы", "Educational programm partner"],
        },
        {
          id: 50,
          img: "50_franc.png",
          link: "https://www.institutfrancais.ru/ru",
          labelSpekt: ["Партнер образовательной программы", "Educational programm partner"],
        },
        {
          id: 51,
          img: "51_cofe.png",
          link: "http://www.soyuzcoffee.com/",
          labelSpekt: ["Партнер образовательной программы", "Educational programm partner"],
        },
        {
          id: 52,
          img: "52_emigranty.png",
          link: "https://www.facebook.com/emigrantspb/",
          labelSpekt: ["Партнер образовательной программы", "Educational programm partner"],
        },
        {
          id: 53,
          img: "53_rus_museum.png",
          link: "http://www.rusmuseum.ru/",
          labelSpekt: ["При поддержке Русского музея", "Support by Russian museum"],
        },
        {
          id: 54,
          img: "54_rus_museum_multimedia.png",
          link: "http://rusmuseumvrm.ru/projects/centr_multimedia/index.php",
          labelSpekt: ["При поддержке Центра мультимедиа Русского музея", "Support by Multimedia Center of Russian Museum"],
        },
        {
          id: 55,
          img: "55_sobaka.png",
          link: "http://www.sobaka.ru/",
          labelSpekt: ["Информационный партнер спектакля", "Informational partner"],
        },
        {
          id: 56,
          img: "56_cofelab.png",
          link: "http://bushe.ru/",
          labelSpekt: ["Кофейно-винный проект от «Буше»", "Coffee & Vine project by «Буше»"],
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
          title: ["Руководитель службы гостепреимства", "Head of the Festival Hospitality Service"],
          site: "",
        },
        {
          name: ["Елизавета Гаврилова", "Elizaveta Gavrilova"],
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
          title: ["Координатор волонтерского движения, администратор образовательной программы", "Coordinator of Volunteers, coordinator of educational programm"],
          site: "https://vk.com/lost_lizard",
        },
        {
          name: ["Юлия Клейман", "Yulia Kleiman"],
          title: ["Куратор образовательной программы", "Curator of the Educational program"],
          // site: "https://vk.com/lost_lizard",
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
    var time = new myDate();
    this.setState({abonementPic: (time.minute() % 5 < 4 ? 1 : 2)});

    let spektsForRandomization = [6, 7, 8, 9, 10];
    let newOrder = [];

    while (newOrder.length < spektsForRandomization.length) {
      let randomStart = Math.floor(Math.random() * spektsForRandomization.length * 5) % spektsForRandomization.length;
      let i;

      for (i = randomStart; spektsForRandomization[i] == -1; )
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
        <Route exact path="/" render={() => this.renderIndexPage()}/>
        {/* <Route exact path="/" render={() => <Index spekts={this.state.spekts} lang={this.state.lang}/>} /> */}
        <Route path="/spekt/:id" render={({match}) => this.renderSpektPage(match)}/>
        <Route path="/admin" render={() => this.renderAdminPage()}/>

        <Route path="/schedule" render={() => this.renderSchedulePage()}/>
        <Route path="/visit" render={() => this.renderVisitPage()}/>
        <Route path="/festival" render={() => this.renderFestivalPage()}/>
        <Route path="/partners" render={() => this.renderPartnersPage()}/>
        <Route path="/abonement" render={() => this.renderAbonementPage()}/>
        <Route path="/ficher/:id" render={({match}) => this.renderFicherPage(match)}/>
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

    // var cards = [...this.state.spekts.slice(0, 4),
    //   ...this.state.fichers.slice(0, 1),
    //   ...this.state.spekts.slice(4, 5),
    //   ...[{ type: "abonement" }, ],
    //   ...this.state.spekts.slice(5, 8),
    //   ...this.state.fichers.slice(1),
    //   ...this.state.spekts.slice(8)];
    // var mappedCards = cards.map(card => {
    //   switch (card.type) {
    //     case "spekt":
    //       return <SpektCard spekt={card} lang={this.lang.bind(this)} />;
    //     case "ficher":
    //       return <Ficher ficher={card} lang={this.lang.bind(this)} />;
    //     case "abonement":
    //       return <Abonement pic={this.state.abonementPic} lang={this.lang.bind(this)} />;
    //   }
    // });

    var W = this.state.width;
    var H = this.state.height;
    var textStyle = {
      fontSize: (H / W > 0.7 ? W / 11 : (Math.pow(W * H, 0.452) * (W / H > 20 / 9 ? 0.21 : 0.22))) * (this.state.lang ? 1.1 : 1) + "px"
    };
    var textStyleMobile = {
      fontSize: (H / W > 1.2 ? W / 11 : (Math.pow(W * H, 0.459) * (W / H > 20 / 9 ? (W < 340 || H < 340 ? 0.12 : 0.14) : (W < 340 || H < 340 ? 0.138 : 0.153)))) * (this.state.lang ? 1.1 : 1) + "px"
    };
    var landscape = W > H && W <= 768;

    if (this.state.code == "рейв")
      recursiveTimeOut(easterEgg.bind(this), 555, 100500);
    if (this.state.code == "ййййй")
      recursiveTimeOut(easterEggRomanova.bind(this), 555, 100500);
    if (this.state.code == "самп")
      recursiveTimeOut(easterEggCramp.bind(this), 555, 100500);
    if (this.state.code == "ната")
      recursiveTimeOut(easterEggNata.bind(this), 555, 100500);


    var titleText = [["четвертый международный летний фестиваль искусств", "точка доступа", "19\xa0июля — 5\xa0августа"], ["4th international summer festival of arts", "the access point", "19\xa0July — 5\xa0August"]];
    var codeText = this.lang(titleText)
      .map(paragraph =>
        <h1 style={this.state.mobile ? textStyleMobile : textStyle} key={paragraph}>
          {
            paragraph.split("").map((letter, index) =>
              <b onClick={() => this.setState({code: this.state.code + letter})} key={letter + index}>
                {letter}
              </b>
            )
          }
        </h1>
      );

    return (
      <div>
        <div className="upper with-logo">
          <div className={"text-container" + (landscape ? " landscape" : "")}>
            <section id="title-container">
              {codeText}
            </section>
          </div>
        </div>
        <div className="cards-container">
          <div className="row">
            <SpektCard spekt={this.state.spekts[1]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
            <SpektCard spekt={this.state.spekts[2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

            <SpektCard spekt={this.state.spekts[5]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
            <SpektCard spekt={this.state.spekts[4]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

            <Ficher ficher={this.state.fichers[(this.state.abonementPic) % 2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} />

            <SpektCard spekt={this.state.spekts[0]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
            {/* <Abonement pic={this.state.abonementPic} lang={this.lang.bind(this)} align="right" /> */}
            <SpektCard spekt={this.state.spekts[this.state.spektsOrder[0]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

            <SpektCard spekt={this.state.spekts[this.state.spektsOrder[1]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
            <SpektCard spekt={this.state.spekts[this.state.spektsOrder[2]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

            <SpektCard spekt={this.state.spekts[this.state.spektsOrder[3]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
            <SpektCard spekt={this.state.spekts[this.state.spektsOrder[4]]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="right" />

            <Ficher ficher={this.state.fichers[(this.state.abonementPic + 1) % 2]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} />

            <SpektCard spekt={this.state.spekts[3]} mobile={this.state.mobile} width={this.state.width} lang={this.lang.bind(this)} align="left" />
          </div>
        </div>
      </div>
    );
  }
  renderSpektPage(match) {
    var spekt = this.state.spekts.find(item => item.id == match.params.id);
    document.title = (this.state.lang ? "The Access Point: " : "Точка доступа: ") + this.lang(spekt.name);

    var schedule = spekt.schedule
    // .filter(day => {
    //   let spektDay = new myDate(day.date);
    //   let currentDate = new myDate();
    //
    //   return currentDate.month() + currentDate.day() >
    // })
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

        if (spekt.tickets != undefined || show.tickets != undefined ? "empty" : "")
          return <button className="time empty" key={day.date + show.time}>
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
        return show.radarioId ?
          <button className="time" data-radario-event-id={show.radarioId} key={day.date + show.time}>
            {show.time}
          </button>
          :
          (
            window.innerWidth < 1024 || true ?
              <a href={show.alt} target="_blank" key={day.date + show.time}>
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
                    <iframe src={show.alt} />
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
      var partner = this.state.partners.find(partner => partner.id == partnerId);
      if (partner == undefined)
        return;
      return (
        <a href={partner.link} className={(index % 2 ? "" : "margin")} target="_blank" key={partner.img}>
          <div className="partner">
            <div className="row">
              <img src={"/img/partners/1x/" + partner.img} className="logo"/>
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

    if (spekt.id == 0)
      return (
        <div>
          <div className="upper">
            <img src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
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
          <img src={"/img/spekts/" + spekt.id + ".jpg"} className="background" />
          <div className="inner-container">
            <div className="row bottom">
              <h5>{capitalize(this.lang(spekt.place))}</h5>
              {this.lang(spekt.logo) ? <img src={this.lang(spekt.logo)} className="logo" /> : <h3>{capitalize(this.lang(spekt.name))}</h3>}
              {this.lang(spekt.additionalTitleText) ? <span>{this.lang(spekt.additionalTitleText)}</span> : ""}
            </div>
          </div>
        </div>
        <div>
          <div className="small-container">
            <div className="left-tab">
              <div className="textarea">
                {
                  spekt.id == 10 ?
                  <div className="yellow-block">
                    {this.lang(["Посещение спектакля бесплатно, по предварительной регистрации", "Entrance is free, by prior registration."])}
                  </div>
                  : ""
                }
                {
                  spekt.id == 6 ?
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
                      <iframe src={spekt.youtube} />
                    </div>
                  </div>
                : ""
              }
            </div>
            <div className="right-tab">
              <div className="schedule-block">
                {/* {
                  spekt.id == 6 ?
                  <div className="row big">Специальная цена по промокоду <b>TO4KA</b></div>
                  :
                  ""
                } */}
                <div className="row big">
                  <div className="row small">
                    <h5>{this.state.lang ? "Schedule and tickets" : "Расписание и билеты"}</h5>
                  </div>
                  {
                    spekt.id == 10 ?
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
                <img src={age} />
              </div>
              {
                spekt.banners ?
                  <a href={spekt.banners[this.state.abonementPic - 1].link} target="_blank">
                    <img src={"/img/spekts/" + spekt.banners[this.state.abonementPic - 1].img} className="banner" />
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
                spekt.id == 3 ?
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
        day.shows
        // .filter(show => {
        //   let date = new myDate();
        //   date.addDay(-1);
        //   let spektDate = new myDate(day.date + " " + show.time);
        //   // alert(spektDate.getTime());
        //   return spektDate.getTime() >= date.getTime();
        // })
        .forEach(show => {
          var cdate = new myDate();
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
      .map(spekt => {
        var buyButton;
        // if (spekt.tickets != undefined) {
        //   // alert(spekt.name);
        //   buyButton = (
        //     <button className="empty">
        //       {this.state.lang ? "Buy" : "Билет"}
        //       <span className="tooltiptext">
        //         {spekt.tickets == 0 ? (this.state.lang ? "Tickets will be available soon" : "Билеты скоро в продаже") : spekt.tickets == -1 ? (this.state.lang ? "No tickets" : "Билетов нет") : ""}
        //       </span>
        //     </button>
        //   );
        // }
        // else {
        //   buyButton = spekt.radarioId ?
        //     <button data-radario-event-id={spekt.radarioId}>
        //       {this.state.lang ? "Buy" : "Билет"}
        //     </button>
        //     :
        //     <a href={spekt.alt} target="_blank">
        //       <button data-radario-event-id={spekt.radarioId}>
        //         {this.state.lang ? "Buy" : "Билет"}
        //       </button>
        //     </a>
        // }
        buyButton = <button className="empty">
            {this.lang(["Билет", "Ticket"])}
            <span className="tooltiptext">
              {this.lang(["Событие закончилось", "Event has finished"])}
            </span>
          </button>;

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
              {/* <iframe className="faceless" src="https://iframeab-pre1303.intickets.ru/node/10741271" /> */}
              {
                spekt.id == 6 ?
                <div className="row big">Специальная цена по промокоду <b>TO4KA</b></div> : ""
              }
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
        {/* <Abonement pic={this.state.abonementPic} lang={this.lang.bind(this)} /> */}
        {daysMapped}
      </div>
    );
  }
  renderVisitPage() {
    document.title = this.state.lang ? "Точка доступа: Практическая информация" : "The Access Point: Practical Information";
    // alert(this.state.spekts[0]);

    var array = [
      {
        id: "late",
        title: (this.state.lang ? "How not to be late?" : "как не опоздать?"),
        text: <span>{
          this.state.lang ?
          "Administrators let the audience in and carry out necessary instructions on locations 15 minutes before the performance. Please plan your time and road in advance — many sites are far from the center of St. Petersburg."
          :
          "Администраторы впускают и проводят необходимый инструктаж зрителей на локациях за 15 минут до начала спектакля. Пожалуйста, планируйте время и дорогу заранее — многие площадки находятся далеко от центра Петербурга."
        }</span>,
      },
      {
        id: "way",
        title: (this.state.lang ? "How to get to us?" : "Как добраться?"),
        text: <div>
          <span>
            {
              this.state.lang ?
              "You can get to each of the ten locations by public transport."
              :
              "До каждой из десяти локаций можно доехать на общественном транспорте."
            }
          </span>
          <span>
            {
              this.state.lang ?
              "Click a location to find a convenient way to get to us."
              :
              "Нажмите на локацию, чтобы увидеть транспорт, на котором Вы сможете добраться до нее."
            }
          </span>
          <Map
            links={true}
            locations={
              [
                ...[...this.state.spekts.slice(10), ...this.state.spekts.slice(1, 3), ...this.state.spekts.slice(4, 10), ...this.state.spekts.slice(3, 4)]
                .map(spekt => {
                  return {
                    name: spekt.name,
                    description: spekt.mapDescription,
                    place: spekt.address,
                  };
                }),
                ...[{
                  name: ["Место посадки на трансфер до Музея Инопланетного Вторжения", "Landing site for «The Alien Invasion Museum» transfer"],
                  description: ["Время в пути 30 мин", "Travel time 30 minutes"],
                  place: ["Кронштадтское ш. д 38", "Kronshtadtskoye Shosse, 38"],
                }]
              ]
            }
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
        title: this.state.lang ? "How to find us?" : "Как найти?",
        text: <div>
            <span>
              {
                this.state.lang ?
                "Your reference point is a black and yellow stand with the Access Point logo. You can easily recognize our administrators by the brand t-shirts with the logo of the festival."
                :
                "Ваш ориентир — черно-желтая стойка с логотипом «Точки доступа». Наших администраторов легко узнать по фирменной футболке с логотипом фестиваля."
              }
            </span>
            {
              this.state.lang ?
              <span>
                If you cannot find the starting point, please call <b className="yellow-link">+7 (812) 649-92-06</b>. The administrator of the festival will help you find way around.
              </span>
              :
              <span>
                Если Вы не можете найти точку старта, позвоните по номеру <b className="yellow-link">+7 (812) 649-92-06</b>. Администратор фестиваля поможет Вам сориентироваться.
              </span>
            }
          </div>,
      },
      {
        id: "cloth",
        title: this.state.lang ? "What to wear?" : "Как одеться?",
        text: this.state.lang ?
          <div>
            <span>
              The main thing is your comfort! Put on comfortable clothes and shoes without heels in which you can easily walk during the performance. Many performances of the Access Point take place in open areas that do not have anything in common with familiar halls with chairs.
            </span>
            <span>
              In case of rain, we will provide the audience with raincoats at the open-air performances — The Time of Tree Growth and Delirious Saint Petersburg. But if you are comfortable, you can take an umbrella to the performance.
            </span>
            <span>
              Usually we do not cancel performances due to weather conditions.  But you can always check the information about performanes in our <a href="https://vk.com/tochkadostupa" target="_blank" className="yellow-link">группе</a> or by <b className="yellow-link">+7 (812) 649-92-06</b>.
            </span>
          </div>
          :
          <div>
            <span>
              Главное — удобно! Выбирайте удобную одежду и комфортную обувь без каблука, в которой Вы легко сможете ходить во время спектакля. Многие спектакли «Точки доступа» проходят на открытых площадках и не предполагают привычного зала с креслами.
            </span>
            <span>
              На спектаклях под открытым небом — «Время роста деревьев» и «Петербург вне себя» — в случае дождя мы предоставим зрителям дождевики. Но если Вам будет комфортно, Вы можете взять на спектакль зонт.
            </span>
            <span>
              Обычно мы не отменяет спектакли из-за погодных условий. Но Вы всегда можете уточнить информацию в нашей <a href="https://vk.com/tochkadostupa" target="_blank" className="yellow-link">группе</a> или по телефону <b className="yellow-link">+7 (812) 649-92-06</b>.
            </span>
          </div>,
      },
      {
        id: "ticket",
        title: this.state.lang ? "How to buy tickets?" : "Как купить билет?",
        text: this.state.lang ?
          <div>
            <span>
              <b>On the festival website.</b> Select the performance on the main page and click on the <i>Buy a ticket</i> button. Follow the instructions in the opened window. Your e-ticket will come to your e-mail after credit card payment.
            </span>
            <span>
              <b>On the Kassir.ru website and its box offices.</b> Click the <i>Buy tickets</i> next to the name of the performance on the <a href="kassir.ru" target="_blank" className="yellow-link">Kassir.ru</a>. website. You can also buy tickets at Kassir.ru city box offices, just find the nearest one to you in the list <a href="https://spb.kassir.ru/biletnye-kassy" target="_blank" className="yellow-link">https://spb.kassir.ru/biletnye-kassy</a>.
            </span>
            <span>
              <b>On the phone.</b> You can book tickets by <b className="yellow-link">+7 (812) 649-92-06</b> and buy them no later than 30 minutes before the performance (after that time the reservation will be canceled).You can pay for the purchase only in cash!
            </span>
            <span className="no-margin">
              <b>It is NOT necessary to print your e-tickets.</b>
            </span>
            <span>
              You can just show the ticket from any device.
            </span>
            <span>
              Unfortunatelly, we do not do refunds. If you are unable to visit perfomance or bought a ticket to a wrong date, you should request a refund by contacting <a href="mailto:support@radario.co" className="yellow-link">support@radario.co</a> and buy a ticket to a new date. You will get refund money within a monthto your bank card. Please, choose date and time wisely.
              {/* Чтобы вернуть билет, свяжитесь с нашим администратором по телефону <b className="yellow-link">+7 (812)-649-92-06</b>. Он объяснит, как Вы можете обменять билет или вернуть деньги. */}
            </span>
            <span>
              Discount cannot be applied to Special programm shows: «FACELESS», «Questioning», «Refugee Conversations» и «The Cherry Orchard. Silence».
            </span>
          </div>
          :
          <div>
            <span>
              <b>На сайте фестиваля.</b> Выберите нужный спектакль на главной странице и нажмите на кнопку «Купить билет». Следуйте инструкциям в открывшемся окне. Электронный билет после оплаты банковской картой придет на указанный Вами email.
            </span>
            <span>
              <b>На сайте и в кассах Kassir.ru.</b> Нажмите кнопку «Купить билет» рядом с названием спектакля на сайте <a href="kassir.ru" target="_blank" className="yellow-link">Kassir.ru</a>. Также Вы можете приобрести билеты в городских кассах Kassir, найдите ближайшую к Вам в списке <a href="https://spb.kassir.ru/biletnye-kassy" target="_blank" className="yellow-link">https://spb.kassir.ru/biletnye-kassy</a>.
            </span>
            {/* <span>
              <b>По телефону.</b> Вы можете забронировать билеты по номеру <b className="yellow-link">+7 (812) 649-92-06</b> и выкупить их не позднее, чем за 30 минут до начала спектакля (после бронь снимается). Оплатить покупку можно только наличными!
            </span> */}
            <span className="no-margin">
              <b>Распечатывать электронные билеты НЕ обязательно.</b>
            </span>
            <span>
              Достаточно предъявить администратору электронный с любого устройства.
            </span>
            <span>
              Друзья, к сожалению, обмен купленных билетов невозможен. Если Вы не можете посетить спектакль или Вы случайно купили билет на неудобное время, Вам необходимо отправить заявление о возврате на <a href="mailto:support@radario.co" className="yellow-link">support@radario.co</a> и купить билет на новую дату. Деньги за покупку вернуться на банковскую карту в течение месяца. Пожалуйста, будьте внимательны при выборе даты и времени.
              {/* Чтобы вернуть билет, свяжитесь с нашим администратором по телефону <b className="yellow-link">+7 (812)-649-92-06</b>. Он объяснит, как Вы можете обменять билет или вернуть деньги. */}
            </span>
            <span>
              Обращаем Ваше внимание, что скидки не распространяются на спектакли специальной программы фестиваля: «Безликие», «Questioning / Кто ты?», «Разговоры беженцев» и «Вишневый сад. Тишина».
            </span>
          </div>,
      },
      {
        id: "discount",
        title: this.state.lang ? "How to get a discount?" : "Как получить скидку?",
        text: this.state.lang ?
          <div>
            <span>
              <b>50% discount for students and pensioners.</b>
            </span>
            <span className="no-margin">
              To get the discount:
            </span>
            <span>
              <ol>
                <li>
                  Send an e-mail with your name, the name of your educational institution, and a list of the festival events you want to attend to <a href="mailto:tickets@tochkadostupa.spb.ru" className="yellow-link">tickets@tochkadostupa.spb.ru</a>. <b>Do not forget to attach a scan of the student card to the e-mail!</b>;
                </li>
                <li>
                  Receive an email with a promotion code for a 50% discount;
                </li>
                <li>
                  Go to the festival website, select the desired performance, click <i>Buy a ticket</i>, enter the promotion code and pay for the purchase. Done!
                </li>
              </ol>
            </span>
            <span>
              You can buy only one ticket to the performance per one student card.
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
        title: this.state.lang ? "How to get accredited?" : "Как получить аккредитацию?",
        text: this.lang([
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
              Если Вы еще не получаете рассылку с информацией о фестивале, времени начала и завершения аккредитации на конкретные спектакли, напишите нам — с радостью будем делиться с Вами новостями!
            </span>
          </div>,
          <div>
            <span>
              <b>Are you a director, an actor, an artist, an art consultant, a curator or a producer?</b>
            </span>
            <span>
              To get a professional accreditation and buy a ticket for any event of the festival at a fixed price of 300 rubles, please fill out the  <a href="https://goo.gl/forms/jOzsUVxfQDzw4P4K3" target="_blank" class="yellow-link">Google form</a>.
            </span>
            <span>
              <b>Are you a journalist or a critic?</b>
            </span>
            <span>
              To get accreditation for the performances and events of the festival, send an application to  <a href="mailto:press@tochkadostupa.spb.ru" class="yellow-link">press@tochkadostupa.spb.ru</a>.
            </span>
            <span>
              If you do not receive newsletters with information about the festival, the start and end time of accreditation for specific performances, please contact us — we will be happily sharing news with you!
            </span>
          </div>
        ])
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
            {workersMapped.filter((w, i) => i % 3 == 0)}
          </div>
          <div className="third margin">
            {workersMapped.filter((w, i) => i % 3 == 1)}
          </div>
          <div className="third">
            {workersMapped.filter((w, i) => i % 3 == 2)}
          </div>
        </div>;
      else if (window.innerWidth > 768)
        team = <div className="row">
          <div className="half margin">
            {workersMapped.filter((w, i) => i % 2 == 0)}
          </div>
          <div className="half">
            {workersMapped.filter((w, i) => i % 2 == 1)}
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
            <img src={"/img/fest.jpg"} className="background" />
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
          <a href="http://archive.tochkadostupa.spb.ru/festival2015" target="_blank" className="archive margin">
            <h3>2015</h3>
          </a>
          <a href="http://archive.tochkadostupa.spb.ru/festival2016" target="_blank" className="archive margin">
            <h3>2016</h3>
          </a>
          <a href="http://archive.tochkadostupa.spb.ru/festival2017" target="_blank" className="archive">
            <h3>2017</h3>
          </a>
        </div>
      </div>
    );
  }
  renderPartnersPage() {
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
  renderAbonementPage() {
    document.title = this.state.lang ? "The Access Point: Subscription" : "Точка доступа: Абонемент";

    var spekts = [5, 4, 3, 2, 1, /* abonement 2 */ 5, 4, 3, 2, 1, 9, 7, 6].map(id => {
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
            <span>После покупки абонемента на почту придет инструкция по его активации.</span>
            <span>Если у Вас возникли вопросы или сложности при активации абонемента, пожалуйста, свяжитесь с нами по почте <a href="mailto:tickets@tochkadostupa.spb.ru" className="yellow-link">tickets@tochkadostupa.spb.ru</a>.</span>
          </div>
        }
      </div>
    );
  }

  renderFicherPage(match) {
    var ficher = this.state.fichers.find(item => item.id == match.params.id);
    document.title = this.lang(["Точка доступа: Режиссерская лаборатория", "The Access Point: Director's"]);

    return (
      <div>
        <div className="upper">
          <div className="inner-container">
            <img src={"/img/fichers/" + ficher.background} className="background" />
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
              ficher.events.map(event => {
                  var date = new myDate(event.date, this.state.lang ? "ENG" : "RU");
                  var shows = event.shows
                  .map(show => {
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
                        buyButton = <a href={show.link} target="_blank">
                            <button>
                              {this.lang(["Регистрация", "Register"])}
                            </button>
                          </a>
                      }
                    }

                    return (
                      <article className="spekt-listing">
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
                registerButton = <a href={event.link} target="_blank">
                    <button>
                      {this.lang(["Регистрация", "Register"])}
                    </button>
                  </a>;

                return <article className="day-listing">
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

  render() {
    var currentPage = window.location.href;
    currentPage = currentPage.slice(currentPage.lastIndexOf("/") + 1);
    var headerLinks = this.state.headerLinks
    .map(link =>
      <Link to={"/" + link.address} onClick={() => this.setPage()}>
        <li className={currentPage == link.address ? "active" : ""} onClick={() => this.setPage(link.address)}>{capitalize(this.lang(link.label))}</li>
      </Link>
    );
    var headerLinksMobile = this.state.headerLinks
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
                <h4 className="mobile" onClick={() => this.setPage("index")} >{this.lang(["точка доступа", "the access point"])}</h4>
              </Link>
              <img src={cross} className="burger mobile" onClick={() => this.toggleMenu()}/>
            </header>
            {headerLinksMobile}
            <div className="lang" onClick={() => this.setState({lang: (this.state.lang + 1) % 2})}>
              <img src={this.state.lang ? "/img/Ru.png" : "/img/En.png"} className="flag" />
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
              <img src={this.state.lang ? "/img/Ru.png" : "/img/En.png"} className="flag" />
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
}

export default App;
