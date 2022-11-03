import React from "react";
import './App.css';
import Header from './Components/header/Header';
import VideosPage from './Components/videospage/VideosPage';

export default () => {
  return (
    <div>
      <Header></Header>
      <VideosPage></VideosPage>
    </div>
  );
}