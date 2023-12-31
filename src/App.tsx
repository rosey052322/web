import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // HTML
    <div className="App">
      <header className="App-header">
        <img
          src={
            'https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg'
          }
          className="App-logo"
          alt="logo"
        />
        <p>click here </p>
        <a
          className="App-link"
          href="https://www.instagram.com/wiinterz_6027/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see my profile
        </a>
      </header>
    </div>
  );
}

export default App;
