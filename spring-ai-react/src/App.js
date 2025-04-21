import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');

  const handleTabChange = (tab) => {
    alert(tab)
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <button onClick={() => handleTabChange('image-generator')}>
        Image Generator
        </button>
      <button  onClick={() => handleTabChange('chat')}>
        Chat
        </button>
      <button onClick={() => handleTabChange('recipe-generator')}>
        Recipe Generator
        </button>
    </div>
  );
}

export default App;