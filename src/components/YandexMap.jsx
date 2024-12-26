// components/YandexMap.jsx
import React from 'react';

const YandexMap = () => {
  return (
    <div
      className="map"
      style={{
        width: '1260px',
        height: '600px',
        backgroundColor: '#333',
        borderRadius: '20px',
        overflow: 'hidden', // Чтобы карта не выходила за границы
        position: 'relative',
      }}
    >
      <iframe
        src="https://yandex.uz/map-widget/v1/?ll=71.793901%2C40.393569&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyODU0NzUSF0_Ku3piZWtpc3RvbiwgRmFyZ8q7b25hIgoN9pCPQhXLjiFC&source=serp_navig&z=12"
        width="100%"
        height="100%"
        allowFullScreen={true}
        title="Yandex Map"
        style={{
          borderRadius: '20px', // Округленные края для карты
        }}
      ></iframe>
    </div>
  );
};

export default YandexMap;
