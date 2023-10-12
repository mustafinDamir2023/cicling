import React, { useEffect } from 'react';

export default function Map() {
  const clickHandler = async (e) => {
    const coords = e.get('coords');
    const newMarker = new window.ymaps.Placemark(coords, {
      hintContent: 'Новая метка',
      balloonContent: 'Текст метки',
    });
  };

  useEffect(() => {
    initMap();

    async function initMap() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
      await ymaps3.ready;

      const { YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer } = ymaps3;
      console.log('============', YMap);
      // Иницилиазируем карту
      const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
          location: {
            // Координаты центра карты
            center: [37.588144, 55.733842],

            // Уровень масштабирования
            zoom: 10,
          },
        },
      );
      map.addChild(new YMapDefaultSchemeLayer());

      // myMap.events.add('click', (e) => {
      //   const coords = e.get('coords');
      //   const newMarker = new window.ymaps.Placemark(coords, {
      //     hintContent: 'Новая метка',
      //     balloonContent: 'Текст метки',
      //   });
      window.map = null;

      main();
      async function main() {
        await ymaps3.ready;
        const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapControls, YMapDefaultFeaturesLayer } =
          ymaps3;

        const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
        const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

        map = new YMap(document.getElementById('app'), { location: LOCATION });

        map.addChild((scheme = new YMapDefaultSchemeLayer()));
        map.addChild(new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})));
        map.addChild(new YMapDefaultFeaturesLayer({ id: 'features' }));

        POINTS.forEach((point) => {
          if (point.element) {
            map.addChild(new YMapMarker(point, point.element(point)));
          } else {
            map.addChild(new YMapDefaultMarker(point));
          }
        });

        const marker = new YMapDefaultMarker(INC_POINT);
        map.addChild(marker);

        const marker2 = new YMapDefaultMarker(INC2_POINT);
        map.addChild(marker2);

        let inc = 0;
        const updateTitle = () => {
          inc++;
          marker.update({
            title: `Marker inc #${inc}`,
          });
        };

        updateTitle();
        setInterval(updateTitle, 1000);

        setTimeout(() => {
          marker2.update({
            title: 'Marker 2',
            subtitle: 'Marker 2',
          });
        }, 1000);
      }
    }
  }, []);
  return (
    <>
      <h1>Map</h1>
      <div id="map" style={{ width: '600px', height: '400px' }} />
    </>
  );
}
