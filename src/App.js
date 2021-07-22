import React from 'react';
import TopBar from './Top';
import Lock from './img/Lock.png'
import main_background from './img/Background.png'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
import './App.css';

function App() {
  return (
    <div>
      <TopBar name="Main Page"/>
      <img id="background" src={main_background}/>
      <div className="bg">
        <div className="bg-inner">
          <h2>About me</h2>
          <div className="dual-banner-section">
            <div className="banner-section">
              <h3>Subject that I good at</h3>
                <img id="banner" src={image1} alt="subject"/>
              <h4>          Mathmetic - It's subject about thinking reasonably</h4>
            </div>
            <div className="banner-section">
              <h3>Thing that I like</h3>
              <img id="banner" src={image2} alt="Locked"/>
              <h4>          Anime, Game, Drawing, Listening to Music, etc</h4>
            </div>
          </div>
          <div className="dual-banner-section">
            <div className="banner-section">
              <h3>My body</h3>
              <img id="banner" src={image3} alt="Locked"/>
              <h4>          Height = 173cm</h4>
              <h4>          weight = 58kg</h4>
              <h4>          Male</h4>
            </div>
            <div className="banner-section">
              <h3>My favorite meme</h3>
              <img id="banner" src={image4} alt="Locked"/>
              <h4>          Every meme</h4>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
