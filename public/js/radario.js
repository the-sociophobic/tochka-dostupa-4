if (!radario)
    var radario = {};   // если объект был  создан однажды, не создаем

radario.step = 'buy-tickets'; // выставляем шаг покупки на первый

radario.device = {
    userAgent: window.navigator.userAgent.toLowerCase(),
    find: function (needle) {
        return this.userAgent.indexOf(needle) !== -1;
    },
    mobile: function () {
        return this.androidPhone() || this.iphone() || this.ipod() || this.windowsPhone();
    },
    tablet: function () {
        return this.ipad() || this.androidTablet() || this.blackberryTablet() || this.windowsTablet();
    },
    androidPhone: function () {
        return this.android() && this.find('mobile');
    },
    androidTablet: function () {
        return this.android() && !this.find('mobile');
    },
    android: function () {
        return !this.windows() && this.find('android');
    },
    iphone: function () {
        return !this.windows() && this.find('iphone');
    },
    ipod: function () {
        return this.find('ipod');
    },
    ipad: function () {
        return this.find('ipad');
    },
    blackberryPhone: function () {
        return this.blackberry() && !this.find('tablet');
    },
    blackberryTablet: function () {
        return this.blackberry() && this.find('tablet');
    },
    blackberry: function () {
        return this.find('blackberry') || this.find('bb10') || this.find('rim');
    },
    windows: function () {
        return this.find('windows');
    },
    windowsPhone: function () {
        return this.windows() && this.find('phone');
    },
    windowsTablet: function () {
        return this.windows() && (this.find('touch') && !this.windowsPhone());
    },
}

// кросс браузерная подписка на события
radario.addEventListener = function (element, eventName, func) {
    if (window.addEventListener) {
        element.addEventListener(eventName, func, false);
    } else {
        element.attachEvent('on' + eventName, func, false);
    }
};

radario.toAbsolutePath = function (relative, domain) {
    var result = "https://";

    if (domain || radario.domain) {
        result = "//";
    }

    var domain = domain || radario.domain || this.srcScript;

    result += relative;

    return result;
};

// создаем методы для кроссдоменных эвентов
radario.eventListen = function (event) {
    if (!event.data.radarioAPI) return;
    if (event.data.changeid) {
        var opt = {
            changeid: event.data.changeid,
            event: event.data.event,
            returnKey: event.data.returnKey,
            utmData: event.data.utmData,
            isBackAction: event.data.isBackAction,
            affId: event.data.affId,
            goods: event.data.goods,
            allowEventGrouping: event.data.allowEventGrouping,
            accentColor: event.data.accentColor,
            noHeader: event.data.noHeader,
            pageBackgroundColor: event.data.pageBackgroundColor,
            ticketsNameColor: event.data.ticketsNameColor,
            footerBackgroundColor: event.data.footerBackgroundColor,
            locale: event.data.locale,
            openBuyStep: event.data.openBuyStep,
            showGoToMobileLink: event.showGoToMobileLink,
            roundtripData: event.data.roundtripData
        }
        radario.changeUrl(opt);
    } else if (event.data.id) {
        var opt = {
            id: event.data.id,
            type: event.data.type,
            possibleToReturn: event.data.possibleToReturn,
            returnKey: event.data.returnKey,
            utmData: event.data.utmData,
            affId: event.data.affId,
            accentColor: event.data.accentColor,
            noHeader: event.data.noHeader,
            pageBackgroundColor: event.data.pageBackgroundColor,
            ticketsNameColor: event.data.ticketsNameColor,
            footerBackgroundColor: event.data.footerBackgroundColor,
            locale: event.data.locale,
            domain: event.data.domain,
            openBuyStep: event.data.openBuyStep,
            showGoToMobileLink: event.showGoToMobileLink,
            mobileUse: event.data.mobileUse,
            roundtripData: event.data.roundtripData
        }
        radario.openBuyPopup(opt);
    } else if (event.data.popupClose) {
        radario.closePopup();
    } else if (event.data.scroll) {
        radario.scrollDoc(event.data.scroll);
    } else if (event.data.height) {
        var opts = {
            afisha: event.data.afisha,
            src: event.data.src
        }
        radario.changeHeight(event.data.height, opts);
    } else if (event.data.width) {
        radario.changeWidth(event.data.width);
    } else if (event.data.canselLoad) {
        if (radario.preloader && radario.preloader.length) {
            for (i = 0; i < radario.preloader.length; i += 1) {
                if (radario.compareUri(event.data.originSrc, radario.preloader[i].frameSrc)) {
                    radario.preloader[i].parentElement.removeChild(radario.preloader[i]);
                    radario.preloader.splice(i, 1);
                    break;
                }
            }
        }
        radario.scrollEvent({ target: document })
    } else if (event.data.radarioStep) {
        radario.step = event.data.radarioStep;
        if (event.data.cancelMsg) {
            radario.closePopup.message = event.data.cancelMsg;
        }
    } else if (event.data.scrollTop) {
        this.popupBody.scrollTop = 0;
    } else if (event.data.cloudpayments) {
        //handle cp
        var cpData = event.data.data;
        var cpForm = document.createElement('form');
        cpForm.setAttribute('action', cpData.acsUrl);
        cpForm.setAttribute('method', 'POST');

        var createCpInput = function (name, value) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', name);
            input.setAttribute('value', value);

            return input;
        };

        cpForm.appendChild(createCpInput('PaReq', cpData.paReq));
        cpForm.appendChild(createCpInput('MD', cpData.md));
        cpForm.appendChild(createCpInput('TermUrl', cpData.termUrl));

        document.body.appendChild(cpForm);
        cpForm.submit();
    } else if (event.data.fullScreen) {
        radario.fullScreen({ close: event.data.close });
    } else if (event.data.RadarioUrl) {
        radario.historyRadarioUrl({ id: event.data.RadarioUrl.id, back: event.data.RadarioUrl.back })
    } else if (event.data.removeAnalyticsHidden) {
        radario.removeAnalyticsIframe()
    }
};

radario.compareUri = function (uri1, uri2) {
    if (typeof(uri1) !== 'string' || typeof(uri2) !== 'string') {
        return;
    }
    uri1 = uri1.replace(/(^\w+:|^)\/\//, '');
    uri2 = uri2.replace(/(^\w+:|^)\/\//, '');

    uri1 = uri1.split('?');
    uri2 = uri2.split('?');

    if (uri1[0] !== uri2[0]) {
        return;
    }

    var options1 = uri1[1];
    var options2 = uri2[1];

    function optionsToObj(queryString) {
        var obj = {};

        if (queryString) {
            queryString = queryString.split('#')[0];
            var arr = queryString.split('&');
            var a, paramNum, paramName, paramValue;
            for (var i = 0; i < arr.length; i++) {
                a = arr[i].split('=');

                paramNum = undefined;
                paramName = a[0].replace(/\[\d*\]/, function (v) {
                    paramNum = v.slice(1, -1);
                    return '';
                });
                paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                paramName = paramName.toLowerCase();
                paramValue = paramValue.toLowerCase();

                if (obj[paramName]) {
                    if (typeof obj[paramName] === 'string') {
                        obj[paramName] = [obj[paramName]];
                    }
                    if (typeof paramNum === 'undefined') {
                        obj[paramName].push(paramValue);
                    }
                    else {
                        obj[paramName][paramNum] = paramValue;
                    }
                }
                else {
                    obj[paramName] = paramValue;
                }
            }
        }

        return obj;
    }

    options1 = optionsToObj(options1);
    options2 = optionsToObj(options2);

    for (var key in options1) {
        if (options1[key] !== options2[key]) {
            return;
        }
        delete (options2[key]);
    }
    for (var key in options2) {
        return;
    }
    return true;
};

radario.startNew = function () {
    var self = this;
    radario.addEventListener(document, 'click', function (e) { self.widgetButtonClickHandler(e) });
};

radario.initAnalyticsIframe = function () {
    if (this.initAnalyticsIframe.initialized) {
        return
    }
    this.initAnalyticsIframe.initialized = true;

    this.analyticsIframe = document.createElement('iframe');
    this.analyticsIframe.frameBorder = "no";
    this.analyticsIframe.scrolling = "no";
    this.analyticsIframe.width = "1px";
    this.analyticsIframe.style.width = "1px";
    this.analyticsIframe.height = "1px";
    this.analyticsIframe.style.height = "1px";
    this.analyticsIframe.frameBorder = "no";
    this.analyticsIframe.scrolling = "no";
    this.analyticsIframe.style.display = "block";
    this.analyticsIframe.style.position = 'fixed';
    this.analyticsIframe.style.top = "-9999px";
    this.analyticsIframe.style.left = "-9999px";
    this.analyticsIframe.src = radario.toAbsolutePath('/widgets/analytics-hidden')

    document.body.appendChild(this.analyticsIframe);
}

radario.removeAnalyticsIframe = function () {
    if (this.analyticsIframe) {
        this.analyticsIframe.parentNode.removeChild(this.analyticsIframe);
    }
}

radario.getYandexAnalyticsData = function(el) {
    if(!el) {
        return null;
    }
    var data = el.getAttribute('data-yandex-analytics');
    if(!data) {
        return null;
    }
    try {
        var parseData = JSON.parse(data);
        return parseData;
    } catch (ex) {
        return null;
    }
},
radario.reachYandexAnalyticsGoal = function(analyticsData) {
    if(analyticsData) {
       try {
           var counterId = analyticsData.counterId,
               goal = analyticsData.goal;

           if(counterId && goal) {
               var yaCounter = new Ya.Metrika({id: counterId});
               yaCounter.reachGoal(goal);
           }
       } catch (ex) { }
    }
},


radario.getUtmData = function (el) {
    if (!el || !el.getAttribute)
        return undefined;

    if (el.getAttribute('data-utm-source')) {
        return {
            utm_source: el.getAttribute('data-utm-source'),
            utm_medium: el.getAttribute('data-utm-medium'),
            utm_term: el.getAttribute('data-utm-term'),
            utm_content: el.getAttribute('data-utm-content'),
            utm_campaign: el.getAttribute('data-utm-campaign'),
            utm_userId: el.getAttribute('data-utm-user-id')
        };
    }
    if (el.getAttribute('utm-data')) {
        return JSON.parse(el.getAttribute('utm-data'));
    }
    return undefined;
};

radario.start = function () {
    // получаем все скрипты для виджетов
    var self = this;
    var myScript = [];
    var arrScripts = document.getElementsByTagName('script');

    for (var i = 0; i < arrScripts.length; i += 1) {
        if (arrScripts[i].getAttribute('data-class') === 'radarioButtonScript')
            myScript[myScript.length] = arrScripts[i];
    }

    arrScripts = document.getElementsByClassName('radarioButtonScript');
    for (var i = 0; i < arrScripts.length; i += 1)
        myScript[myScript.length] = arrScripts[i];

    if (myScript.length > 0) {
        this.srcScript = myScript[0].src.split(/\/+/g)[1];
        this.protoc = myScript[0].src.split(/\/\//)[0];
        this.initAnalyticsIframe();
    }

    for (var i = 0; i < myScript.length; i += 1) {
        var curScript = myScript[i];
        if (curScript.src.indexOf("testhost.ru") + 1) {
            radario.debug = true;
        }
        if (curScript.getAttribute('data-domain')) {
            radario.domain = curScript.getAttribute('data-domain');
        }

        var parent = curScript.parentElement;
        curScript.id = 'radario-widget-' + Math.random() * 100;
        this.affId = curScript.getAttribute('data-affiliate-id');
        this.eventIdOrKey = curScript.getAttribute('data-radario-event-id') || curScript.getAttribute('data-event-id');
        this.groupId = curScript.getAttribute('data-radario-group-id') || curScript.getAttribute('data-group-id');
        this.widgetKey = curScript.getAttribute('data-radario-widget-key') || curScript.getAttribute('data-widget-key');
        this.promocode = curScript.getAttribute('data-promocode');
        this.accentColor = curScript.getAttribute('data-accent-color');
        this.pageBackgroundColor = curScript.getAttribute('data-page-background-color');
        this.ticketsNameColor = curScript.getAttribute('data-tickets-name-color'),
        this.footerBackgroundColor = curScript.getAttribute('data-footer-background-color');
        this.locale = curScript.getAttribute('data-radario-locale');
        this.utmData = this.getUtmData(curScript);
        this.showGoToMobileLink = curScript.getAttribute('data-show-go-to-mobile-link');
        this.mobileUse = !curScript.getAttribute('data-no-mobile');
        this.customData = curScript.getAttribute('data-custom-data');
        if (curScript.getAttribute('data-true-full-screen'))
            radario.trueFullScreen = true;

        if (curScript.getAttribute('data-radario-event-url')) {
            if (!radario.RadarioUrl) {
                radario.RadarioUrl = {
                    widgetKey: this.widgetKey,
                    utmData: this.utmData,
                    affId: this.affId,
                    locale: this.locale
                }
            }
        }
        // узнаем какой тип виджета инициализируется: кнопка, баннер или афиша
        if (curScript.getAttribute('data-stand-alone-afisha')
            || curScript.getAttribute('data-stand-alone')) {
            this.createStandAlone({
                parent: parent,
                myScript: curScript,
                widgetKey: this.widgetKey,
                eventIdOrKey: this.eventIdOrKey,
                groupId: this.groupId
            });
            continue;
        }

        if (this.eventIdOrKey || curScript.getAttribute('data-type') === 'afisha' || curScript.getAttribute('data-type') === 'time-table') {
            this.createButton({
                parent: parent,
                myScript: curScript,
                groupId: this.groupId,
                eventIdOrKey: this.eventIdOrKey,
                widgetKey: this.widgetKey,
                utmData: this.utmData,
                affId: this.affId,
            });
        } else if (curScript.getAttribute('data-type') === 'escape-room') {
            this.createStandAlone({
                parent: parent,
                myScript: curScript,
                groupId: this.groupId,
            });
        }
    }
    if (radario.RadarioUrl) {
        var hash = document.location.hash;
        if (hash.indexOf('#afisha/') + 1 || hash.indexOf('#events/') + 1) {
            var id = parseInt( hash.slice(hash.indexOf('/') + 1) );

            var opt = {
                utmData: radario.RadarioUrl.utmData,
                widgetKey: radario.RadarioUrl.widgetKey,
                affId: radario.RadarioUrl.affId,
                locale: radario.RadarioUrl.locale,
                standAlone: radario.RadarioUrl.standAlone,
                mobileUse: radario.mobileUse,
                id: id,
                forgetOriginalHash: true
            };

            if (hash.indexOf('#afisha/') + 1) {
                opt.type = "afisha";
            }
            radario.openBuyPopup(opt);
        }
    }
    radario.addEventListener(document, "scroll", function (event) {
        radario.scrollEvent(event);
    });
};


radario.fullScreen = function (opts) {
    if (!radario.trueFullScreen)
        return;

    var opts = opts || {};
    if (this.popupWidget.name === 'standalone') {
        return;
    }
    if (opts.close) {
        var myScript = document.getElementById("radarioFullScreenStyles");
        this.popupWidget.parentElement.removeChild(myScript);
    } else {
        this.popupWidget.setAttribute("class", "radario-full-sreen-class");

        var myScript = document.createElement('style');
        myScript.setAttribute('id', 'radarioFullScreenStyles');
        myScript.innerHTML = "body,html {overflow:hiden !important; height: 100% !important}" +
                             ".radario-full-sreen-class {" +
                                 "position:fixed !important;" +
                                 "top:0 !important;" +
                                 "left:0 !important;" +
                                 "bottom:0 !important;" +
                                 "right:0 !important;" +
                                 "width:100% !important;" +
                                 "height:100% !important;" +
                                 "z-index:99999 !important;" +
                                 "margin:0 !important;" +
                             "}";
        this.popupWidget.parentElement.appendChild(myScript);
    }
};

radario.createStandAlone = function (opts) {
    var opts = opts || {};
    var parameters = {};
    radario.createStandAlone._frameCount += 1;
    parameters.allowEventGrouping = opts.myScript.getAttribute('data-allow-event-grouping');
    parameters.goods = opts.myScript.getAttribute('data-goods');
    parameters.accentColor = opts.myScript.getAttribute('data-accent-color');
    parameters.pageBackgroundColor = opts.myScript.getAttribute('data-page-background-color');
    parameters.ticketsNameColor = opts.myScript.getAttribute('data-tickets-name-color');
    parameters.footerBackgroundColor = opts.myScript.getAttribute('data-footer-background-color');
    parameters._locale = opts.myScript.getAttribute('data-radario-locale');
    parameters.domain = opts.myScript.getAttribute('data-domain');
    parameters.standAlone = true;
    parameters.showGoToMobileLink = opts.myScript.getAttribute('data-show-go-to-mobile-link');
    parameters.noMobile = opts.myScript.getAttribute('data-no-mobile');
    parameters.noHeader = opts.myScript.getAttribute('data-radario-noheader');
    parameters.widgetTitle = opts.myScript.getAttribute('data-radario-widget-title');
    parameters.widgetTitleHide = opts.myScript.getAttribute('data-radario-widget-title-hide');
    parameters.mobileUse = !opts.myScript.getAttribute('data-no-mobile');
    parameters.partnerId = opts.myScript.getAttribute('data-affiliate-id');
    parameters.customData = opts.myScript.getAttribute('data-custom-data');
    parameters.roundtripData = JSON.stringify(parseRoundtrip(opts.myScript.getAttribute('data-round-trip')));
    parameters._frameCount = radario.createStandAlone._frameCount;
    //get utm parameters from page uri
    try {
        var utm = radario.getUtmFromParentWindow();
        radario.objectAssign(parameters, this.getUtmData(opts.myScript));
        radario.objectAssignExclusively(parameters, utm);
    } catch (ex) { }

    this.popupWidget = document.createElement('iframe');
    this.popupWidgetAfisha = this.popupWidget;
    this.popupWidget.frameBorder = "no";
    this.popupWidget.scrolling = "no";
    var width = opts.myScript.getAttribute('data-custom-width') ? opts.myScript.getAttribute('data-custom-width') : "836";
    this.popupWidget.width = width;
    width = isNaN(width / 1) ? width : width + "px";
    this.popupWidget.style.width = width
    this.popupWidget.height = "736";
    this.popupWidget.frameBorder = "no";
    this.popupWidget.scrolling = "no";
    this.popupWidget.style.display = "block";
    this.popupWidget.style.position = 'relative';
    this.popupWidget.style.background = parameters.pageBackgroundColor || "transparent";
    this.popupWidget.showGoToMobileLink = parameters.showGoToMobileLink;

    var desktopPopupSrc = "";
    var parametersQueryString = this.toUrlQuery(parameters);
    if (opts.widgetKey) {
        desktopPopupSrc = '/widgets/afisha/' + opts.widgetKey + '?' + parametersQueryString;
    } else if (opts.groupId) {
        desktopPopupSrc = "/widgets/time-table/?groupId=" + opts.groupId + '&' + parametersQueryString
    } else {
        desktopPopupSrc = '/widgets/buy-tickets-popup?eventId=' + opts.eventIdOrKey + '&' + parametersQueryString;
    }
    desktopPopupSrc = radario.composeUrl(radario.toAbsolutePath(desktopPopupSrc,  v));
    this.popupWidget.src = desktopPopupSrc;

    if (radario.device.mobile() && !parameters.goods && parameters.mobileUse) {
        var defaultMobileWidth = '300px';
        width = opts.myScript.getAttribute('data-custom-mobile-width') ? opts.myScript.getAttribute('data-custom-mobile-width') : defaultMobileWidth;
        if (width == 'auto') {
            width = defaultMobileWidth;
        }
        this.popupWidget.width = '1px';
        this.popupWidget.style.width = '1px';
        this.popupWidget.minWidth = width;
        this.popupWidget.style.minWidth = width;
        var params = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        var myUrl = null;

        if (opts.widgetKey) {
            myUrl = '/widgets/afisha/mobile/' + opts.widgetKey;
            this.popupWidget.height = "1060px";
        } else if (opts.groupId) {
            myUrl = "/widgets/time-table/";
            parameters.groupId = opts.groupId;
        } else {
            myUrl = 'radario.ru/widgets/mobile/' + opts.eventIdOrKey;
        }
        myUrl += '?';
        this.popupWidget.src = radario.toAbsolutePath(myUrl + this.toUrlQuery(parameters), parameters.domain);
    }
    this.popupWidget.name = 'standalone';
    if (opts.myScript.getAttribute('data-no-mobile')) {
        this.popupWidget.setAttribute('data-no-mobile', opts.myScript.getAttribute('data-no-mobile'))
    }

    var iframebody = document.createElement('div');
    iframebody.style.position = 'relative';

    if (!document.getElementById('bodyRdadrioPop')) {
        this.popupBody = document.createElement('div');
        this.popupBody.className = "bodyRdadrioPop";
        this.popupBody.id = "bodyRdadrioPop";

        radario.addEventListener(this.popupBody, "scroll", function (event) {
            radario.scrollEvent(event);
        });
    } else {
        this.popupBody = document.getElementById('bodyRdadrioPop');
    }

    this.style = document.createElement('style');
    var color = (parameters.accentColor ? parameters.accentColor : "#1786f9")
    this.style.innerHTML = ".preloader{width:40px;height:40px;border:2px solid #ededed;border-top:3px solid " + color +
        ";border-radius:100%;max-width:40px;left:50%;margin-left:-40px;top:50%;margin-top:-20px;max-height:40px;position:absolute;animation:spin 1s infinite linear;}" +
        "@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}" +
        "@-moz-keyframes spin{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}" +
        "@-o-keyframes spin{from{-o-transform:rotate(0deg);}to{-o-transform:rotate(360deg);}}" +
        "@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}";

    var preloader = document.createElement('div');
    preloader.style.width = "40px";
    preloader.style.height = "40px";
    preloader.style.paddingTop = "200px";
    preloader.style.textAlign = "center";
    preloader.style.position = 'absolute';
    preloader.style.top = '100px';
    preloader.style.left = '50%';
    preloader.style.margin = '0 auto';
    preloader.style.zIndex = '11100';
    preloader.innerHTML = '<div class="preloader" style="border-top-color:' + color + '"></div>';
    preloader.frameSrc = this.popupWidget.src;

    this.preloader = this.preloader || []
    this.preloader.push(preloader)
    opts.parent.insertBefore(iframebody, opts.myScript);
    iframebody.appendChild(this.style);
    iframebody.appendChild(preloader);
    iframebody.appendChild(this.popupWidget);
};

radario.createStandAlone._frameCount = 0;

radario.toUrlQuery = function (parameters, options) {
    var result = '';

    for (var name in parameters) {

        if (!parameters.hasOwnProperty(name))
            continue;

        var value = parameters[name];
        value = (value && value.trim) ? value.trim() : value;

        if (value === null || value === undefined || value == '')
            continue;

        if (result)
            result += '&';

        result += (name + '=' + encodeURIComponent(value));
    }

    return result.slice(0, result.length);
};

radario.composeUrl = function (baseUrl, parameters) {
    var paramStr = this.toUrlQuery(parameters);
    var connector = baseUrl.indexOf('?') === -1 ? '?' : '&';
    return paramStr ? (baseUrl + connector + paramStr) : baseUrl;
};

radario.createButton = function (o) {
    var o = o || {};
    if (!o.myScript) {
        return
    }
    var buttonWidget, self = this;

    if (o.myScript.getAttribute('data-custom-button-id')) {
        buttonWidget = document.getElementById(o.myScript.getAttribute('data-custom-button-id'));
        if (!buttonWidget)
            return;
    }

    buttonWidget = document.createElement('div');
    buttonWidget.style.display = 'inline-block';
    buttonWidget.style.cursor = 'pointer';

    if (o.myScript.getAttribute('data-button-type') === 'branded') {
        buttonWidget.style.width = '160px';
        buttonWidget.style.height = '66px';
        buttonWidget.style.backgroundImage = 'url(//radario.ru/content/img/branded-button.png)';
    } else {
        buttonWidget.style.whiteSpace = 'nowrap';
        buttonWidget.style.padding = o.myScript.getAttribute('data-button-padding') || '9px 16px';
        buttonWidget.style.borderRadius = o.myScript.getAttribute('data-button-border-radius') || '100px';
        buttonWidget.style.color = o.myScript.getAttribute('data-custom-text-color') || '#fff';
        buttonWidget.style.fontFamily = 'Arial';
        buttonWidget.style.fontSize = o.myScript.getAttribute('data-button-text-size') || '15px';
        buttonWidget.style.lineHeight = "normal";
        buttonWidget.style.textAlign = 'center';
        buttonWidget.style.marginBottom = '8px';
        buttonWidget.style.textDecoration = 'none';
        if (o.myScript.getAttribute('data-custom-color')) {
            buttonWidget.style.backgroundColor = o.myScript.getAttribute('data-custom-color');
        } else {
            buttonWidget.style.backgroundColor = '#00b6fb';
        }

        if (o.myScript.getAttribute('data-custom-name')) {
            buttonWidget.innerHTML = o.myScript.getAttribute('data-custom-name');
        } else {
            buttonWidget.innerHTML = 'Купить билет';
        }

    }

    if (o.myScript.getAttribute('data-custom-button-id')) {
        buttonWidget = document.getElementById(o.myScript.getAttribute('data-custom-button-id'));
    } else {
        o.parent.insertBefore(buttonWidget, o.myScript);
    }

    if (o.eventIdOrKey) {
        buttonWidget.setAttribute('data-radario-event-id', o.eventIdOrKey);
    } else if (o.groupId) {
        buttonWidget.setAttribute('data-radario-group-id', o.groupId);
    } else if (o.widgetKey) {
        buttonWidget.setAttribute('data-radario-widget-key', o.widgetKey);
    }

    if (o.affId) {
        buttonWidget.setAttribute('data-affiliate-id', o.affId);
    }
    if (o.utmData) {
        buttonWidget.setAttribute('utm-data', JSON.stringify(o.utmData));
    }
    if (o.myScript.getAttribute('data-no-mobile')) {
        buttonWidget.setAttribute('data-no-mobile', true);
    }
    if (o.myScript.getAttribute('data-round-trip')) {
        buttonWidget.setAttribute('data-round-trip', o.myScript.getAttribute('data-round-trip'));
    }

    if (o.myScript.getAttribute('data-goods')) {
        buttonWidget.setAttribute('data-goods', true);
    }

    if (o.myScript.getAttribute('data-accent-color')) {
        buttonWidget.setAttribute('data-accent-color', o.myScript.getAttribute('data-accent-color'));
    }

    if (o.myScript.getAttribute('data-page-background-color')) {
        buttonWidget.setAttribute('data-page-background-color', o.myScript.getAttribute('data-page-background-color'));
    }

    if (o.myScript.getAttribute('data-allow-event-grouping')) {
        buttonWidget.setAttribute('data-allow-event-grouping', true);
    }

    if (o.myScript.getAttribute('data-allow-event-grouping')) {
        buttonWidget.setAttribute('data-allow-event-grouping', true);
    }

    if (o.myScript.getAttribute('data-promocode')) {
        buttonWidget.setAttribute('data-promocode', o.myScript.getAttribute('data-promocode'));
    }

    if (o.myScript.getAttribute('data-radario-noheader')) {
        buttonWidget.setAttribute('data-radario-noheader', true);
    }

    if (o.myScript.getAttribute('data-radario-widget-title')) {
        buttonWidget.setAttribute('data-radario-widget-title', o.myScript.getAttribute('data-radario-widget-title'));
    }

    if (o.myScript.getAttribute('data-radario-widget-title-hide')) {
        buttonWidget.setAttribute('data-radario-widget-title-hide', o.myScript.getAttribute('data-radario-widget-title-hide'));
    }

    if (o.myScript.getAttribute('data-radario-locale')) {
        buttonWidget.setAttribute('data-radario-locale', o.myScript.getAttribute('data-radario-locale'))
    }

    if (o.myScript.getAttribute('data-domain')) {
        buttonWidget.setAttribute('data-domain', o.myScript.getAttribute('data-domain'))
    }

    if (o.myScript.getAttribute('data-custom-data')) {
        buttonWidget.setAttribute('data-custom-data', o.myScript.getAttribute('data-custom-data'))
    }
};

radario.widgetButtonClickHandler = function (e) {
    var self = this;
    var deep = 5;
    var deepLevel = 0;
    var eventIdOrKey = null;
    var type = undefined;
    var el = e.target;
    var promocode = null;


    while (el && deepLevel < deep) {
        var id = el.getAttribute('data-radario-event-id');
        var key = el.getAttribute('data-radario-widget-key');
        var groupId = el.getAttribute('data-radario-group-id');

        eventIdOrKey = id || key || groupId;
        if (eventIdOrKey) {
            type = key ? 'afisha' : groupId ? 'time-table' : undefined;
            break;
        }

        el = el.parentElement;
        deepLevel += 1;
    }

    if (eventIdOrKey) {
        var opt = {
            id: eventIdOrKey,
            type: type,
            utmData: self.getUtmData(el),
            affId: el.getAttribute('data-affiliate-id'),
            distributionType: el.getAttribute('data-radario-distribution-type'),
            promocode: el.getAttribute('data-promocode'),
            accentColor: el.getAttribute('data-accent-color'),
            noHeader: el.getAttribute('data-radario-noheader'),
            widgetTitle: el.getAttribute('data-radario-widget-title'),
            widgetTitleHide: el.getAttribute('data-radario-widget-title-hide'),
            pageBackgroundColor: el.getAttribute('data-page-background-color'),
            ticketsNameColor: el.getAttribute('data-tickets-name-color'),
            footerBackgroundColor: el.getAttribute('data-footer-background-color'),
            locale: el.getAttribute('data-radario-locale'),
            domain: el.getAttribute('data-domain'),
            goods: !!el.getAttribute('data-goods'),
            mobileUse: !el.getAttribute('data-no-mobile'),
            roundtripData: el.getAttribute('data-round-trip'),
            allowEventGrouping: !!el.getAttribute('data-allow-event-grouping'),
            yandexAnalyticsData: radario.getYandexAnalyticsData(el),
            showGoToMobileLink: el.getAttribute('data-show-go-to-mobile-link'),
            customData: el.getAttribute('data-custom-data')
        };
        this.openBuyPopup(opt);
        e.preventDefault();
    }
};

radario.historyRadarioUrl = function (opts) {
    if (!radario.RadarioUrl) {return;}

    var opts = opts || {};
    if (opts.back) {
        window.history.back();
        return;
    }
    if (opts.afisha) {
        document.location.hash = "#afisha/" + opts.id
    } else {
        document.location.hash = "#events/" + opts.id
    }
};

/**
 * метод для смены URL виджета
 **/
radario.changeUrl = function (option) {
    var option = option || {};

    var changeid = option.changeid,
        event = option.event,
        returnKey = option.returnKey,
        utmData = option.utmData,
        isBackAction = option.isBackAction,
        affId = option.affId,
        promocode = option.promocode;


    var baseSrc;
    var parameters = {};
    for (var i in utmData) {
        parameters[i] = utmData[i];
    }
    if (event) {
        baseSrc = radario.toAbsolutePath("/widgets/buy-tickets-popup", option.domain);
        parameters.partnerId = affId;
        parameters.eventId = changeid;
        parameters.key = returnKey;
        parameters.ispossibletoreturn = true;
        parameters.promocode = promocode;
        parameters.accentColor = option.accentColor;
        parameters.pageBackgroundColor = option.pageBackgroundColor;
        parameters.ticketsNameColor = option.ticketsNameColor,
        parameters.footerBackgroundColor = option.footerBackgroundColor;
        parameters.noHeader = !!option.noHeader;
        radario.historyRadarioUrl({ id: changeid });
        parameters.showGoToMobileLink = option.showGoToMobileLink;
        parameters._locale = option.locale
    } else {
        if (option.goods)
            parameters.goods = true;
        if (option.allowEventGrouping)
            parameters.allowEventGrouping = true;

        baseSrc = radario.toAbsolutePath("/widgets/afisha/" + changeid, option.domain);
        if (isBackAction) {
            parameters.isBackAction = true;
        }
        parameters.isBackAction = isBackAction;
    }
    this.popupWidget.src = radario.composeUrl(baseSrc, parameters);

};

radario.getUtmFromParentWindow = function () {
    var queryObj = radario.parseQueryString(window.location.search, { 'keyToLowerCase': true });
    return {
        utm_source: queryObj.utm_source,
        utm_medium: queryObj.utm_medium,
        utm_campaign: queryObj.utm_campaign,
        utm_content: queryObj.utm_content,
        utm_term: queryObj.utm_term
    };
};


radario.parseQueryString = function (queryString, options) {
    var result = {};

    if (queryString) {
        var preparedQueryString = queryString.substr(0,1) === "?" ? queryString.substr(1) : queryString;
        var splittedQueryString = preparedQueryString.split('&');
        splittedQueryString.forEach(function (item) {
            if (!item) {return;}

            var pair = radario.parseKeyValueString(item, options);

            if (pair.key && pair.value)
                result[pair.key.toLowerCase()] = pair.value;
        }, this);
    }

    return result;
};

radario.parseKeyValueString = function (keyValueString, options) {
    var splitted = keyValueString.split('='),
        keyToLowerCase = false;

    if(options) {
        keyToLowerCase = options.keyToLowerCase;
    }

    return {
        key: keyToLowerCase ? splitted[0].toLowerCase() : splitted[0],
        value: splitted[1]
    };
};

radario.objectAssign = function(target, source) {
    for (var attrname in source) {
        target[attrname] = source[attrname];
    }

    return target;
};

radario.objectAssignExclusively = function (target, source) {
    for (var attrname in source) {
        if (!Boolean(target[attrname])) {
            target[attrname] = source[attrname];
        }
    }

    return target;
}

// метод для открытия попапа покупки или афиши
radario.openBuyPopup = function (options) {
    var options = options || {};

    if (options.forgetOriginalHash) {
        radario.originalUrlHash = "";
    } else {
        radario.originalUrlHash = document.location.hash;
    }

    var eventIdOrKey = options.id,
        type = options.type,
        possibleToReturn = options.possibleToReturn,
        returnKey = options.returnKey,
        utmData = options.utmData,
        affId = options.affId,
        promocode = options.promocode;

    var Rdata = parseRoundtrip(options.roundtripData);
    Rdata.topHeight = document.documentElement.clientHeight
    options.roundtripData = JSON.stringify(Rdata)
    var opts = {
        roundtripData: options.roundtripData,
        goods: !!options.goods,
        allowEventGrouping: !!options.allowEventGrouping,
        distributionType: options.distributionType,
        promocode: options.promocode,
        accentColor: options.accentColor,
        pageBackgroundColor: options.pageBackgroundColor,
        ticketsNameColor: options.colorTicketsName,
        footerBackgroundColor: options.footerBackgroundColor,
        openBuyStep: options.openBuyStep,
        partnerId: options.affId,
        noMobile: !options.mobileUse,
        noHeader: !!options.noHeader,
        widgetTitle: options.widgetTitle,
        widgetTitleHide: options.widgetTitleHide,
        showGoToMobileLink: options.showGoToMobileLink,
        customData: options.customData,
        _locale: options.locale
    };
    //get utm parameters from page uri
    try {
        var utm = radario.getUtmFromParentWindow();
        radario.objectAssign(opts, utmData);
        radario.objectAssignExclusively(opts, utm);
    } catch(ex) {}
    if (radario.device.mobile() && !options.goods && options.mobileUse) {
        var params = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        var myUrl = (type === 'afisha' ? '/widgets/afisha/mobile/' : 'radario.ru/widgets/mobile/') + eventIdOrKey + '?';
        if (type === 'time-table') {
            myUrl = "/widgets/time-table?"
            opts.groupId = options.id;
        }
        myUrl = radario.toAbsolutePath(myUrl + this.toUrlQuery(opts), options.domain);
        var open = top.open(myUrl, "_blank", params);
        if (open == null || typeof (open) == 'undefined'){top.location = myUrl;}

        return;
    }

    this.step = 'buy-tickets';
    if (!document.getElementById('bodyRdadrioPop')) {
        this.popupBody = document.createElement('div');
        this.popupBody.className = "bodyRdadrioPop";
        this.popupBody.id = "bodyRdadrioPop";

        radario.addEventListener(this.popupBody, "scroll", function (event) {
            radario.scrollEvent(event);
        });
    } else {
        this.popupBody = document.getElementById('bodyRdadrioPop');
    }
    this.popupWidget = document.createElement('iframe');
    this.popupWidget.width = "1000px";
    this.popupWidget.style.width = "1000px";
    this.popupWidget.height = "500";
    this.popupWidget.frameBorder = "no";
    this.popupWidget.scrolling = "no";
    this.popupWidget.style.position = 'relative';
    this.popupWidget.style.margin = '100px 0 100px -500px';
    this.popupWidget.style.left = '50%';
    this.popupWidget.style.zIndex = '10000';
    this.popupWidget.style.background = options.pageBackgroundColor ? options.pageBackgroundColor : '#fff';
    this.popupWidget.style.display = 'block';
    var src;

    if (!type) {
        opts.partnerId = affId;
        opts.eventId = eventIdOrKey;

        if (possibleToReturn) {
            opts.key = returnKey;
            opts.ispossibletoreturn;
        }

        src = radario.toAbsolutePath('radario.ru/widgets/buy-tickets-popup?' + this.toUrlQuery(opts));
        radario.historyRadarioUrl({ id: eventIdOrKey })
    } else if (type === 'afisha') {
        this.popupWidgetAfisha = this.popupWidget;
        src = radario.toAbsolutePath("/widgets/afisha/" + eventIdOrKey + '?' + this.toUrlQuery(opts), options.domain);
        radario.historyRadarioUrl({ id: eventIdOrKey, afisha: true })
    } else if (type = "time-table") {
        opts.groupId = options.id;
        this.popupWidgetAfisha = this.popupWidget;
        src = radario.toAbsolutePath("/widgets/time-table?" + this.toUrlQuery(opts), options.domain);
        radario.historyRadarioUrl({ id: eventIdOrKey, afisha: true })
    }

    this.popupWidget.src = src;

    this.popupClose = document.createElement('div');
    this.popupClose.id = 'close-radario-div';

    this.popupClose.style.position = 'absolute';
    this.popupClose.style.top = '121px';
    this.popupClose.style.left = '50%';
    this.popupClose.style.marginLeft = '462px';
    this.popupClose.style.zIndex = '10100';
    this.popupClose.style.width = '20px';
    this.popupClose.style.height = '20px';
    this.popupClose.style.lineHeight = '17px';
    this.popupClose.innerHTML = '×';

    this.popupCloseBack = document.createElement('div');
    this.popupCloseBack.style.position = 'static';
    this.popupCloseBack.style.top = '0';
    this.popupCloseBack.style.left = '0';
    this.popupCloseBack.style.right = '0';
    this.popupCloseBack.style.bottom = '0';
    this.popupCloseBack.style.zIndex = '9999';
    var color = (options.accentColor ? options.accentColor : "#1786f9");
    this.style = document.createElement('style');
    this.style.innerHTML = "body {overflow:hidden !important; height: 100% !important}" +
                           "#bodyRdadrioPop{background:  rgba(26,26,26,.85);-webkit-overflow-scrolling:touch; position:fixed;top:0;left:0;right:0;bottom:0;z-index:9998;overflow-y:scroll}" +
                           "#close-radario-div {cursor:pointer;font-size: 40px; font-family: Segoe UI, Helvetica Neue, Arial;font-weight: 100;}" +
                           "#closePopupRadario {border:1px solid #666;border-radius: 5px;background: rgba(26,26,26,.85); color: #fff; font-size: 16px; width: 874px; height: 400px; padding:0 0 25px;" +
                           " top: 71px; left: 50%; position: absolute; margin: 0 0 0 -447px; z-index: 11000;box-shadow: 0px 5px 20px #000;}" +
                           "#closePopupRadario .par-text-radario {margin: 200px 150px 50px; font-size: 18px}" +
                           "#closePopupRadario .buttons-radario {text-align: center}" +
                           "#closePopupRadario .buttons-radario .button {width: 100px;display: inline-block; padding: 5px; border: 1px solid #ededed; border-radius: 3px;" +
                           "margin: 0 10px; border: 1px solid #aaa;background: #0092FF;; cursor: pointer}" +
                           "#closePopupRadario .buttons-radario .button:hover{background:#0082ee}" +
                            ".preloader{width:40px;height:40px;border:2px solid #ededed;border-top:3px solid " + color +
                            ";border-radius:100%;max-width:40px;left:50%;margin-left:-40px;top:50%;margin-top:-20px;max-height:40px;position:absolute;animation:spin 1s infinite linear;}" +
                            "@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}" +
                            "@-moz-keyframes spin{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}" +
                            "@-o-keyframes spin{from{-o-transform:rotate(0deg);}to{-o-transform:rotate(360deg);}}" +
                            "@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}";


    var preloader = document.createElement('div');
    preloader.style.width = "40px";
    preloader.style.height = "40px";
    preloader.style.paddingTop = "200px";
    preloader.style.textAlign = "center";
    preloader.style.position = 'absolute';
    preloader.style.top = '200px';
    preloader.style.left = '50%';
    preloader.style.margin = '0 auto';
    preloader.style.zIndex = '11100';
    preloader.innerHTML = '<div class="preloader" style="border-top-color:' + color + '"></div>';
    preloader.frameSrc = src;

    this.preloader = this.preloader || []
    this.preloader.push(preloader)

    document.body.appendChild(this.popupBody);
    this.popupBody.appendChild(preloader);
    this.popupBody.appendChild(this.popupCloseBack);
    this.popupCloseBack.appendChild(this.style);
    this.popupCloseBack.appendChild(this.popupClose);
    this.popupCloseBack.appendChild(this.popupWidget);
    this.popupWidget.innerHTML = '<div style="padding: 20px; color: #fff;"></div>';
    this.popupBody.scrollTop = 0;

    this.bodyChilds = document.body.children;
    var self = this;

    radario.addEventListener(this.popupCloseBack, 'click', function () {
        self.closePopup();
    });
    radario.addEventListener(this.popupClose, 'click', function () {
        self.closePopup();
    });

    radario.reachYandexAnalyticsGoal(options.yandexAnalyticsData);
};

radario.scrollEvent = function (event) {
    var body = event.target.scrollingElement ? event.target.scrollingElement : event.target;
    var scrollTop = body.scrollTop;
    var frameContaners = body.getElementsByTagName('iframe');
    var documentScroll = event.target === document;
    var windowHeight = documentScroll ? window.innerHeight :body.clientHeight;

    function getOffsetSum(elem) {
        var top = 0, left = 0
        while (elem) {
            top = top + parseFloat(elem.offsetTop)
            left = left + parseFloat(elem.offsetLeft)
            elem = elem.offsetParent
        }

        return { top: Math.round(top), left: Math.round(left) }
    }

    var frameOffset;
    for (var i = 0; i < frameContaners.length; i += 1) {
        frameOffset = getOffsetSum(frameContaners[i])
        frameContaners[i].contentWindow.postMessage({
            scroll: true,
            scrollTop: scrollTop,
            topHeight: windowHeight,
            offset: frameOffset,
        }, '*');
    }
};

radario.scrollDoc = function (data) {
    var opt = data || {};
    var itemForScroll = this.popupBody ? this.popupBody : document.body
    if (opt.save) {
        radario.scrollDoc.savedScroll = itemForScroll.scrollTop;
    }
    if (opt.useSaved) {
        data.y = radario.scrollDoc.savedScroll;
    }
    if (itemForScroll === document.body && data.y === 0) {
        data.y = this.popupWidgetAfisha ? this.popupWidgetAfisha.offsetTop : 0
    }
    if (data.y || data.y === 0) {
        itemForScroll.scrollTop = data.y;
    }
};

radario.changeHeight = function (height, opts) {
    var height = height < 500 ? 500 : height;
    var opts = opts || {};
    var items = [];

    if (opts.src) {
		var frames = document.getElementsByTagName('iframe');
        for (var i = 0; i < frames.length; i+=1){
            if (radario.compareUri(frames[i].src, opts.src)){
                items.push(frames[i]);
			}
		}
    }
    if (!items.length) {
        items = [this.popupWidget];
        if (opts.afisha)
            items = [this.popupWidgetAfisha];
    }
    for (var i = 0; i < items.length; i += 1) {
        var item = items[i]
        if (radario.device.mobile()) {
            item.height = height > window.top.outerHeight ? height : window.top.outerHeight;
        } else {
            item.height = height;
        }
    }
};

radario.changeWidth = function (width) {
    this.popupWidget.width = width;

};

radario.closePopup = function (ok) {
    var self = this;
    radario.closePopup.message = radario.closePopup.message || {
        msg: 'If you close this window, you will not be able to print tickets or re-send them to your email',
        ok: 'Ok',
        cancel: 'Cancel'
    };
    if (this.step === 'user-order' && !ok) {
        if (document.getElementById('closePopupRadario')) return;

        this.closePopupDiv = document.createElement('div');
        this.closePopupDiv.id = "closePopupRadario";
        this.closePopupDiv.style.height = this.popupWidget.clientHeight + 'px';
        this.closePopupDiv.innerHTML = "<p class='par-text-radario'>" +
            radario.closePopup.message.msg +
            "</p>" +
            "<div class='buttons-radario'>" +
            "<span id='radario-data-ok' class='button'>" +
            radario.closePopup.message.ok + "</span> <span id='radario-data-false' class='button'>" +
            radario.closePopup.message.cancel + "</span>" +
            "</div>";
        this.popupBody.appendChild(this.closePopupDiv);
        self.closeAlert = true;

        radario.addEventListener(document.getElementById('radario-data-ok'), 'click', function () {
            self.closePopup('ok');
        });
        radario.addEventListener(document.getElementById('radario-data-false'), 'click', function () {
            self.popupBody.removeChild(self.closePopupDiv);
        });
        return;
    }

    this.step = 'buy-tickets';
    this.popupBody.innerHTML = "";
    this.popupBody.style.background = '';

    if (radario.originalUrlHash !== "") {
        document.location.hash = radario.originalUrlHash;
    } else {
        history.pushState("", document.title, window.location.pathname
            + window.location.search);
    }
};

// проверка была ли уже осуществена подписка
if (!radario.eventsAttached) {
    radario.addEventListener(window, "message", function (event) {
        radario.eventListen(event);
    });

    radario.startNew();
    radario.addEventListener(window, 'DOMContentLoaded', function () {
        radario.start();
    });

    radario.eventsAttached = true;
}

function parseRoundtrip(roundtripData) {
    var rt = roundtripData || {};
    try {
        rt = JSON.parse(rt);
    } catch (err) {
        rt = {}
    }

    return rt;
}
