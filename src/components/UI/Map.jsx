import React, { useEffect } from 'react';

export default function Map() {
  const clickHandler = async (e) => {
    const coords = e;
    console.log(coords);
    const newMarker = new window.ymaps.Placemark(coords, {
      hintContent: 'Новая метка',
      balloonContent: 'Текст метки',
    });
  };

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
  }

  useEffect(() => {
    initMap();
  }, []);
  return (
    <>
      <h1>Map</h1>
      <div id="map" style={{ width: '600px', height: '400px' }} onClick={clickHandler} />
    </>
  );
}
