(function() {
  'use strict';

  // ## - Cache the application
  var filesToCache = [

    'css/animation.css',
    'css/bootstrap-grid.css',
    'css/bootstrap.min.css',
    'css/mainframe.css',
    'css/normalize.css',
    'css/quartis-manager.css',
    'css/spectrum.css',
    'css/swappages.css',
    'css/offline/offline.css',
    'css/offline/offline-language-cn.css',
    'css/offline/offline-language-de.css',
    'css/offline/offline-language-en.css',
    'css/offline/offline-language-es.css',
    'css/offline/offline-language-fr.css',
    'css/offline/offline-language-it.css',
    'css/offline/offline-language-zh.css',

    'js/babel.min.js',
    'js/bootstrap.min.js',
    'js/Flux.js',
    'js/interact.js',
    'js/jquery-2.1.4.min.js',
    'js/jquery-swapsies.js',
    'js/jquery.touchSwipe.min.js',
    'js/mainframe-1.0.0.js',
    'js/microevent.js',
    'js/moment-with-locales.min.js',
    'js/offline.min.js',
    'js/quartis-device.js',
    'js/quartis-app-1.0.0.js',
    'js/quartis-i18n-1.0.0.js',
    'js/quartis-manager-1.0.1.js',
    'js/quartis-manager-grid-1.0.1.js',
    'js/quartis-query-1.0.0.js',
    'js/quartis-tools-1.0.1.js',
    'js/react-dom.js',
    'js/react.js',
    'js/spectrum.js',
    'js/swappages-1.0.0.js',

    'load?path=/consoles/components/Charts.js',
    'load?path=/consoles/components/Clocks.js',
    'load?path=/consoles/components/Swipers.js',

    'load?path=/consoles/js/0.quartis-utils.js',
    'load?path=/consoles/js/1.quartis-memories.js',
    'load?path=/consoles/js/10.jquery.jqplot.js',
    'load?path=/consoles/js/11.jqplot.barRenderer.js',
    'load?path=/consoles/js/12.jqplot.meterGaugeRenderer.js',
    'load?path=/consoles/js/13.jqplot.BezierCurveRenderer.js',
    'load?path=/consoles/js/14.jqplot.blockRenderer.js',
    'load?path=/consoles/js/15.jqplot.bubbleRenderer.js',
    'load?path=/consoles/js/16.jqplot.canvasAxisLabelRenderer.js',
    'load?path=/consoles/js/17.jqplot.canvasOverlay.js',
    'load?path=/consoles/js/18.jqplot.dateAxisRenderer.js',
    'load?path=/consoles/js/19.jqplot.canvasTextRenderer.js',
    'load?path=/consoles/js/2.quartis-helper.js',
    'load?path=/consoles/js/20.jqplot.categoryAxisRenderer.js',
    'load?path=/consoles/js/21.jqplot.ciParser.js',
    'load?path=/consoles/js/22.jqplot.cursor.js',
    'load?path=/consoles/js/23.jqplot.donutRenderer.js',
    'load?path=/consoles/js/24.jqplot.dragable.js',
    'load?path=/consoles/js/25.jqplot.enhancedLegendRenderer.js',
    'load?path=/consoles/js/26.jqplot.funnelRenderer.js',
    'load?path=/consoles/js/27.jqplot.highlighter.js',
    'load?path=/consoles/js/28.jqplot.json2.js',
    'load?path=/consoles/js/29.jqplot.logAxisRenderer.js',
    'load?path=/consoles/js/3.ResizeSensor.js',
    'load?path=/consoles/js/30.jqplot.mekkoAxisRenderer.js',
    'load?path=/consoles/js/31.jqplot.mekkoRenderer.js',
    'load?path=/consoles/js/32.jqplot.ohlcRenderer.js',
    'load?path=/consoles/js/33.jqplot.pieRenderer.js',
    'load?path=/consoles/js/34.jqplot.pointLabels.js',
    'load?path=/consoles/js/35.jqplot.pyramidAxisRenderer.js',
    'load?path=/consoles/js/36.jqplot.pyramidGridRenderer.js',
    'load?path=/consoles/js/37.jqplot.pyramidRenderer.js',
    'load?path=/consoles/js/38.jqplot.trendline.js',
    'load?path=/consoles/js/4.clock.js',
    'load?path=/consoles/js/40.pikaday.js',
    'load?path=/consoles/js/41.gantt.js',
    'load?path=/consoles/js/5.swiper.jquery.js',
    'load?path=/consoles/js/6.circlepercent.js',
    'load?path=/consoles/js/7.gauge.js',
    'load?path=/consoles/js/8.Chart.min.js',

    'load?path=/consoles/images/add.png',
    'load?path=/consoles/images/add48x48.png',
    'load?path=/consoles/images/add64.png',
    'load?path=/consoles/images/arrows.png',
    'load?path=/consoles/images/button_backspace.png',
    'load?path=/consoles/images/button_cancel.png',
    'load?path=/consoles/images/button_cancelOld.png',
    'load?path=/consoles/images/button_caps_lock.png',
    'load?path=/consoles/images/button_checked_32x32.png',
    'load?path=/consoles/images/button_choix_mach.png',
    'load?path=/consoles/images/button_choix_mach_32.png',
    'load?path=/consoles/images/button_clear.png',
    'load?path=/consoles/images/button_left_128x128.png',
    'load?path=/consoles/images/button_left_16x16.png',
    'load?path=/consoles/images/button_left_32x32.png',
    'load?path=/consoles/images/button_left_64x64.png',
    'load?path=/consoles/images/button_ok.png',
    'load?path=/consoles/images/button_parameters_16x16.png',
    'load?path=/consoles/images/button_parameters_32x32.png',
    'load?path=/consoles/images/button_plus.png',
    'load?path=/consoles/images/button_remove.png',
    'load?path=/consoles/images/button_right_128x128.png',
    'load?path=/consoles/images/button_right_16x16.png',
    'load?path=/consoles/images/button_right_16x16d.png',
    'load?path=/consoles/images/button_right_32x32.png',
    'load?path=/consoles/images/button_right_64x64.png',
    'load?path=/consoles/images/button_save.png',
    'load?path=/consoles/images/button_unchecked_32x32.png',
    'load?path=/consoles/images/cb128.png',
    'load?path=/consoles/images/cb32.png',
    'load?path=/consoles/images/cb64.png',
    'load?path=/consoles/images/chain.png',
    'load?path=/consoles/images/circle.png',
    'load?path=/consoles/images/controle.png',
    'load?path=/consoles/images/debutcf.png',
    'load?path=/consoles/images/debutcf32.png',
    'load?path=/consoles/images/debutcf64.png',
    'load?path=/consoles/images/declqte.png',
    'load?path=/consoles/images/demandematiere.png',
    'load?path=/consoles/images/document.png',
    'load?path=/consoles/images/etateq32.png',
    'load?path=/consoles/images/etatequipement.png',
    'load?path=/consoles/images/etatequipement64.png',
    'load?path=/consoles/images/finof.png',
    'load?path=/consoles/images/flecheBas.png',
    'load?path=/consoles/images/flecheHaut.png',
    'load?path=/consoles/images/fonctions.png',
    'load?path=/consoles/images/fonctions64.png',
    'load?path=/consoles/images/info.png',
    'load?path=/consoles/images/keyboard.png',
    'load?path=/consoles/images/keyboardOld.png',
    'load?path=/consoles/images/keyboard_1.png',
    'load?path=/consoles/images/leftarrow.png',
    'load?path=/consoles/images/leftbigarrow.png',
    'load?path=/consoles/images/logo OSYS Groupe BODET_transparent.gif',
    'load?path=/consoles/images/logo OSYS Groupe BODET_transparent_1.gif',
    'load?path=/consoles/images/LogoClient.gif',
    'load?path=/consoles/images/LogoClient.png',
    'load?path=/consoles/images/LogoClientSAUV.gif',
    'load?path=/consoles/images/LogoClient_2.gif',
    'load?path=/consoles/images/LogoOsys.gif',
    'load?path=/consoles/images/Logo_Osys.png',
    'load?path=/consoles/images/Logo_Osys_2013.png',
    'load?path=/consoles/images/Logo_Osys_Little.png',
    'load?path=/consoles/images/Logo_Osys_White.png',
    'load?path=/consoles/images/maintenance.png',
    'load?path=/consoles/images/modebof32.png',
    'load?path=/consoles/images/modebof64.png',
    'load?path=/consoles/images/mofinof32.png',
    'load?path=/consoles/images/mofinof64.png',
    'load?path=/consoles/images/oper32.png',
    'load?path=/consoles/images/peoples.png',
    'load?path=/consoles/images/persons.png',
    'load?path=/consoles/images/poubelle.png',
    'load?path=/consoles/images/prisefinposte.png',
    'load?path=/consoles/images/prisefinposte64.png',
    'load?path=/consoles/images/remove.png',
    'load?path=/consoles/images/rightarrow.png',
    'load?path=/consoles/images/round.png',
    'load?path=/consoles/images/tcl.png',
    'load?path=/consoles/images/time.png',
    'load?path=/consoles/images/validate.png',
    'load?path=/consoles/images/warning.png',

    'load?path=/consoles/css/0.bootstrap-grid.css',
    'load?path=/consoles/css/1.jquery.jqplot.css',
    'load?path=/consoles/css/2.swiper.min.css',
    'load?path=/consoles/css/3.pikaday.css',
    'load?path=/consoles/css/4.gantt.css',
    'load?path=/consoles/css/clock.css',
    'load?path=/consoles/css/osys.css',

    'load?path=/consoles/components/forms/AutocompleteInput.js',
    'load?path=/consoles/components/forms/CheckInput.js',
    'load?path=/consoles/components/forms/Form.js',
    'load?path=/consoles/components/forms/KeyboardInput.js',
    'load?path=/consoles/components/forms/ListInput.js',
    'load?path=/consoles/components/forms/NumberInput.js',
    'load?path=/consoles/components/forms/TextInput.js',

    'load?path=/consoles/components/others/BodetClock.js',
    'load?path=/consoles/components/others/Calculator.js',
    'load?path=/consoles/components/others/CirclePercent.js',
    'load?path=/consoles/components/others/DiagrammeGantt.js',
    'load?path=/consoles/components/others/GaugeExt.js',

    'load?path=/consoles/components/basic/AbsContainer.js',
    'load?path=/consoles/components/basic/AbsoluteGrid.js',
    'load?path=/consoles/components/basic/AnchorLink.js',
    'load?path=/consoles/components/basic/Button.js',
    'load?path=/consoles/components/basic/Column.js',
    'load?path=/consoles/components/basic/Container.js',
    'load?path=/consoles/components/basic/Dashboard.js',
    'load?path=/consoles/components/basic/DatePicker.js',
    'load?path=/consoles/components/basic/DynamicGrid.js',
    'load?path=/consoles/components/basic/Iframe.js',
    'load?path=/consoles/components/basic/Image.js',
    'load?path=/consoles/components/basic/Input.js',
    'load?path=/consoles/components/basic/InputFooter.js',
    'load?path=/consoles/components/basic/Label.js',
    'load?path=/consoles/components/basic/Row.js',
    'load?path=/consoles/components/basic/Selector.js',
    'load?path=/consoles/components/basic/SimpleTable.js',
    'load?path=/consoles/components/basic/SvgContainer.js',
    'load?path=/consoles/components/basic/SwiperContainer.js',
    'load?path=/consoles/components/basic/SwiperTable.js',
    'load?path=/consoles/components/basic/TableColumn.js',
    'load?path=/consoles/components/basic/TabsHeader.js',
    'load?path=/consoles/components/basic/TabsHeaderModal.js',
    'load?path=/consoles/components/basic/TitledHeader.js',
    'load?path=/consoles/components/basic/TitledLabel.js',
    'load?path=/consoles/components/basic/ToggleButton.js',
    'load?path=/consoles/components/basic/Video.js',
    'load?path=/consoles/components/basic/Widget.js',

    'load?path=/consoles/components/plots/MeterPlot.js',
    'load?path=/consoles/components/plots/Plot.js',
  ];

  var staticCacheName = 'quartispro-console-cache-v1.0.3-dev';

  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
  });

  // ## - Intercept network requests
  
  self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
          .then(function(response) {

            return caches.open(staticCacheName).then(function(cache) {
              if (event.request.url.indexOf('test') < 0) {
                cache.put(event.request.url, response.clone());
              }
              return response;
            });
          });

      }).catch(function(error) {
          console.log('An error occurend when trying to get files from cache');
      })
    );
  });

    self.addEventListener('activate', function(event) {
      console.log('Activating new service worker...');

      var cacheWhitelist = [staticCacheName];

      event.waitUntil(
        caches.keys().then(function(cacheNames) {
          return Promise.all(
            cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });

})();