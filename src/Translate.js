import React, { useState } from 'react'

const Translate = ({languagePhrases}) => {

const [selectedLanguage, setSelectedLanguage] = useState(Object.keys(languagePhrases)[0]);

const handleLanguageChange = (e) => {
  setSelectedLanguage(e.target.value)
}

  return (
    <div className='container'>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {Object.keys(languagePhrases).map(lan=><option key={lan}>{lan}</option>)}
      </select>

      <table className='table'>
        <thead>
          <tr>
            {/* <td>Language</td> */}
            <td>Translation to {selectedLanguage}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{selectedLanguage}</td> */}
            <td>{languagePhrases[selectedLanguage]}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Translate