import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import './DancingCat.css';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>
      <div className={`cat-wrapper ${isPlaying ? 'dancing' : 'paused'}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>
      <button className="control-button" onClick={toggleAnimation}>
        {isPlaying ? 'Stop Dancing' : 'Start Dancing'}
      </button>
      <p className="subtitle">Click the button to control the dance!</p>
    </div>
  );
}

export default DancingCat;
