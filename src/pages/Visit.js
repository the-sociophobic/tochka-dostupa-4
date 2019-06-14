import React from 'react'

import Map from 'components/Map'

import { capitalize } from 'utils/utils.js'

export default function() {
  document.title = this.state.lang ? "Точка доступа: Практическая информация" : "The Access Point: Practical Information";

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
          <a href="https://itunes.apple.com/ru/app/yandex-taxi/id472650686?mt=8" target="_blank" rel="noopener noreferrer">
            <img alt="" src={appStore} className="app left" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=ru.yandex.taxi&hl=ru" target="_blank" rel="noopener noreferrer">
            <img alt="" src={playMarket} className="app right" />
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
            Usually we do not cancel performances due to weather conditions.  But you can always check the information about performanes in our <a href="https://vk.com/tochkadostupa" target="_blank" rel="noopener noreferrer" className="yellow-link">группе</a> or by <b className="yellow-link">+7 (812) 649-92-06</b>.
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
            Обычно мы не отменяет спектакли из-за погодных условий. Но Вы всегда можете уточнить информацию в нашей <a href="https://vk.com/tochkadostupa" target="_blank" rel="noopener noreferrer" className="yellow-link">группе</a> или по телефону <b className="yellow-link">+7 (812) 649-92-06</b>.
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
            <b>On the Kassir.ru website and its box offices.</b> Click the <i>Buy tickets</i> next to the name of the performance on the <a href="kassir.ru" target="_blank" rel="noopener noreferrer" className="yellow-link">Kassir.ru</a>. website. You can also buy tickets at Kassir.ru city box offices, just find the nearest one to you in the list <a href="https://spb.kassir.ru/biletnye-kassy" target="_blank" rel="noopener noreferrer" className="yellow-link">https://spb.kassir.ru/biletnye-kassy</a>.
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
            <b>На сайте и в кассах Kassir.ru.</b> Нажмите кнопку «Купить билет» рядом с названием спектакля на сайте <a href="kassir.ru" target="_blank" rel="noopener noreferrer" className="yellow-link">Kassir.ru</a>. Также Вы можете приобрести билеты в городских кассах Kassir, найдите ближайшую к Вам в списке <a href="https://spb.kassir.ru/biletnye-kassy" target="_blank" rel="noopener noreferrer" className="yellow-link">https://spb.kassir.ru/biletnye-kassy</a>.
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
            Чтобы получить профессиональную аккредитацию и купить билет на любое событие фестиваля по фиксированной цене 300 рублей, заполните <a href="https://goo.gl/forms/jOzsUVxfQDzw4P4K3" target="_blank" rel="noopener noreferrer" className="yellow-link">гугл-форму</a>.
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
            To get a professional accreditation and buy a ticket for any event of the festival at a fixed price of 300 rubles, please fill out the  <a href="https://goo.gl/forms/jOzsUVxfQDzw4P4K3" target="_blank" rel="noopener noreferrer" class="yellow-link">Google form</a>.
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
    <article id={article.id} key={article.id}>
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
      key={index}
      className={currentArticle === index ? "active" : ""}
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
    navigationLinks = links.map(link =>
      <div className="column center" key={link}>
        {link}
      </div>)

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
