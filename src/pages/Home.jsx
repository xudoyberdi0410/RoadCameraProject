import React from 'react';
import LineChart from '../components/MultiLineChart';
import PieChartExample from '../components/PieChartExample';
import VerticalChartExample from '../components/VerticalDoughnutChart';
const Home = () => {
  return (
    <div className="page_home container">
      <div className='camera_hero'>
        <img className='hero_img' src="./cemrecan-yurtman-6TKfYMCmUSk-unsplash (1).jpg" />
      </div>

      <div className='info_box'>
        <h1 className='main_txt'>INFO</h1>
        <article className='article_txt'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </article>
      </div>

      <div className='chart_box'>
        <div>
        <LineChart />
        </div>
      </div>

      <div className='second_info_box'>
        <h2 className='second_txt'>---ARTICLE---</h2>
        <article className='second_article'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic delectus laboriosam quae quam itaque inventore est maiores, alias amet, temporibus reiciendis recusandae. Ipsa qui ex eius porro quo, odit vitae dignissimos impedit nesciunt consequatur beatae tempora accusantium repudiandae ipsum dolorum excepturi reprehenderit! Blanditiis, eligendi excepturi neque distinctio, dignissimos corrupti sit nihil deleniti quis eum culpa at maxime expedita ab in.</article>
      </div>

      <div className='second_chart'>
      <div className='PieChartExample'><PieChartExample />
      <div className='chart_info'>
        <h3 className='chart_info_txt'>Chart info</h3>
        <p className='chart_info_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      </div>
      <div className='VerticalChartExample'><VerticalChartExample /></div>
      </div>
    </div>
  );
};
export default Home;