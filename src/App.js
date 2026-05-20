import './App.css';
import { useState } from 'react';
import TalkWithAI from './pages/chat/TalkWithAI';
import RecipeGenerator from './pages/recipe/RecipeGenerator';
import ImageGenerator from './pages/image/ImageGenerator';
import AudioUploader from './pages/audio/AudioUploader';

function App() {

  const [activeTab, setActiveTab] = useState('ask-ia');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <button 
        className={activeTab === 'ask-ai' ? 'active' : ''}
        onClick={() => handleTabChange('ask-ai')}>
          Talk with AI
      </button>
      <button 
        className={activeTab === 'recipe-generator' ? 'active' : ''}
        onClick={() => handleTabChange('recipe-generator')}>
          Generate Recipe
      </button>
      <button 
        className={activeTab === 'image-generator' ? 'active' : ''}
        onClick={() => handleTabChange('image-generator')}>
          Generate Images
      </button>
       <button 
        className={activeTab === 'audio-trascribe' ? 'active' : ''}
        onClick={() => handleTabChange('audio-trascribe')}>
          Audio trascribe
      </button>
      <div>
        {activeTab === 'ask-ai' && <TalkWithAI/>}
        {activeTab === 'recipe-generator' && <RecipeGenerator/>}
        {activeTab === 'image-generator' && <ImageGenerator/>}
        {activeTab === 'audio-trascribe' && <AudioUploader/>}
      </div>
    </div>
  );
}

export default App;
