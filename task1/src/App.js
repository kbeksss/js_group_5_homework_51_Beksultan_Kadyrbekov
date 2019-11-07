import React from 'react';
import './App.css';
import MovieCard from "./Components/MovieCard/MovieCard";
function App() {
  return (
    <div className="App">
      <MovieCard title="Достучаться до небес" year="1997" link="https://static.1tv.ru/uploads/photo/image/4/huge/2104_huge_43ed2420b9.jpg"/>
      <MovieCard title="Брюс Всемогущий" year="2003" link="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Bruce-Almighty-jim-carrey-1.jpg"/>
      <MovieCard title="Мистер Робот" year="2015 - 2019" link="https://sm.ign.com/ign_ru/screenshot/default/mrrobot-nadavkander-01-pr-lr-ubg-rgb_kf5z.jpg"/>
    </div>
  );
}

export default App;
