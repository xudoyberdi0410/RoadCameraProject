import React from 'react';
const Locations = () => {
  return (
    <div className="page locations">
      <h1>Locations</h1>
      <ul>
        {[...Array(20).keys()].map((i) => (
          <li key={i}>Camera Location {i + 1}</li>
        ))}
      </ul>
    </div>
  );
};
export default Locations;