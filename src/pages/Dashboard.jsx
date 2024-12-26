import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [cameraData, setCameraData] = useState([
    { id: 1, name: 'Camera 1', location: 'Location 1' },
    { id: 2, name: 'Camera 2', location: 'Location 2' },
    { id: 3, name: 'Camera 3', location: 'Location 3' },
  ]);

  const loadMore = () => {
    const newCameraData = [
      {
        id: cameraData.length + 1,
        name: `Camera ${cameraData.length + 1}`,
        location: `Location ${cameraData.length + 1}`,
      },
    ];
    setCameraData([...cameraData, ...newCameraData]);
  };

  return (
    <div className="dashboard">
      {/* Навигация с голубым фоном */}
      <div className="table-navbar">
        <div className="nav-item blue">Camera №</div>
        <div className="nav-item blue">Location</div>
        <div className="nav-item blue">Details</div>
      </div>

      {/* Таблица данных */}
      <div className="camera-table">
        {cameraData.map((camera) => (
          <div className="camera-row" key={camera.id}>
            <div className="camera-cell">{camera.name}</div>
            <div className="camera-cell">{camera.location}</div>
            <div className="camera-cell">
              <Link
                to={`/chart?id=${camera.id}`} // Переход на страницу с графиком
                className="details-button"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Загрузить ещё" */}
      <div className="load-more-container">
        <button className="load-more-button" onClick={loadMore}>
          Загрузить ещё
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
