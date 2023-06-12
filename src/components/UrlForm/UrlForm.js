import React, { useState } from 'react';

const UrlForm = () => {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleNameChange = (event) => {
if (event.target.name === 'title') {
  setTitle(event.target.value);
} else if (event.target.name === 'urlToShorten') {
  setUrlToShorten(event.target.value);
} 
}

  const handleSubmit = (event) => {
    event.preventDefault();
    clearInputs();
  }

  const clearInputs = () => {
   setTitle('');
  setUrlToShorten('');
  }

  
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={handleNameChange}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={urlToShorten}
          onChange={handleNameChange}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
}

export default UrlForm;
