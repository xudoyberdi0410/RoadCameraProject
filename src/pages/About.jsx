import React from "react";

const About = () => {
  return (
    <div className="about-section">
      {/* Верхний левый текст */}
      <div className="top-left">
        <h1>О нас</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>

      {/* Верхний правый прямоугольник */}
      <div className="top-right rectangle"></div>

      {/* Нижний левый прямоугольник */}
      <div className="bottom-left rectangle"></div>

      {/* Нижний правый текст */}
      <div className="bottom-right">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default About;
