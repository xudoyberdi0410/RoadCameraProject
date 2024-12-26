// pages/Chart.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import YandexMap from '../components/YandexMap'; // Предполагается, что компонент карты создан отдельно
import LineChart from '../components/MultiLineChart';

const Chart = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cameraId = queryParams.get('id'); // Получаем id камеры из параметров URL

  return (
    <div className="main_Chart_box " style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center',  }}>Details for Camera {cameraId}</h1>
      <div className="map" style={{ marginTop: '20px' }}>
        {/* Интеграция карты */}
        <YandexMap />
      </div>

      <div className='main_info_box'>
        <h1 className='main_info_txt'>Main Info</h1>
        <div className='boxes'>
          <div className='short_box'>
            <ul className='short_box_list'>
              <li className='short_box_item'>info</li>
              <li className='short_box_item'>info</li>
              <li className='short_box_item'>info</li>
            </ul>
          </div>
          <div className='long_box'>
            <ul className='long_box_list'>
              <li className='long_box_item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iure!</li>
              <li className='long_box_item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iure!</li>
              <li className='long_box_item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iure!</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='nev_chart'>
      <div>
        <LineChart />
        </div>
      </div>

      <div className='chart_article container'>
        <div>
          <h3 className='low_info_txt'>Details for Camera {cameraId}</h3>
          <p className='article_txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi illo aspernatur facere at incidunt iste temporibus accusantium inventore quia provident quisquam doloremque voluptate, id reprehenderit fugiat laudantium iusto obcaecati, modi soluta eum neque eaque eveniet recusandae atque. Odit placeat totam, ipsum laboriosam similique voluptatum consequatur temporibus mollitia quidem, est dolorum!</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
