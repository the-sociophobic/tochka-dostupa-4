import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Loader from 'components/Loader'
import App from 'App'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <div>
          <Loader />
          <App />
        </div>
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        <title>Летний фестиваль искусств «Точка доступа»</title>
        <meta property="og:url" content="https://tochkadostupa.spb.ru" />
        <meta property="og:title" content="Летний фестиваль искусств «Точка доступа»" />
        <meta property="og:description" content="В Санкт-Петербурге с 19 июля по 5 августа 2018 года." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pp.userapi.com/c846217/v846217556/5cd38/o4hcjmVNnCo.jpg" />
    
        <!-- Facebook Pixel Code -->
        <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1860785940893852');
          fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1860785940893852&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Facebook Pixel Code -->
    
        <!-- Artyom 11.07.18 -->
        <script type="text/javascript">
          !function(){var t=document.createElement("script");
          t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?156",t.onload=function(){VK.Retargeting.Init("VK-RTRG-122250-6Ao2Z"),VK.Retargeting.Hit()},document.head.appendChild(t)}();
        </script>
        <noscript>
          <img src="https://vk.com/rtrg?p=VK-RTRG-122250-6Ao2Z" style="position:fixed; left:-999px;" alt=""/>
        </noscript>
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

export default server;
