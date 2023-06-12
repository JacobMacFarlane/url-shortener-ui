import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export const App = () => {
  const [urls, setUrls] = useState([]);



 
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const data = await getUrls();
        setUrls(data)
      } catch (error) {
        console.log('Error grabbing data', error)
      }
    }

    fetchUrls();
  }, [])

  
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer urls={urls}/>
      </main>
    );
}

export default App;
