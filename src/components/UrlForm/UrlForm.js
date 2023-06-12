import React, { useState } from 'react';
import { postUrl } from '../../apiCalls';
const UrlForm = (props) => {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUrl = {
        title: title,
        long_url: urlToShorten
      }
      const response = await postUrl(newUrl)
      if (response) {
        props.updateUrls(response)
        clearInputs();
      } else {
        console.log('messed up creating new url')
      }
    } catch (error) {
      console.log('i have caught an error', error)
    }
  }

  const clearInputs = () => {
   setTitle('');
  setUrlToShorten('');
  }

  
    return (
      <form className='form-class'>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          className='input-1'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          className='input-2'
          value={urlToShorten}
          onChange={event => setUrlToShorten(event.target.value)}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
}

export default UrlForm;
