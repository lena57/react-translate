import './App.css';
import React from 'react';
import Translate from './Translate';

function App() {
  const languagePhrases={
      English: 'I love you',
      Spanish: 'Te quiero',
      French: 'Je t\'aime',
      German: 'Ich liebe dich',
      Italian: 'Ti amo',
      Portuguese: 'Eu te amo',
      Mandarin: '我爱你 (Wǒ ài nǐ)',
      Japanese: '愛してる (Aishiteru)',
      Russian: 'Я тебя люблю (Ya tebya lyublyu)',
      Arabic: 'أحبك (Uhibbuka)',
  }

  return (
    <div className='App'>
    <h2>Choose a language to translate a phrase 'I love you'</h2>
    <Translate languagePhrases={languagePhrases}/>
    </div>
  );
}

export default App;
