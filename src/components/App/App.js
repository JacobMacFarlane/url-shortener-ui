import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export const App = () => {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

const updateUrls = (newUrl) => {
  setUrls([...urls, newUrl])
}


const fetchUrls = async () => {
  try {
    const data = await getUrls();
    setUrls(data.urls)
  } catch (error) {
    console.log('Error grabbing data', error)
  } finally {
    setIsLoading(false);
  }
}
 
  useEffect(() => {
    fetchUrls();
  }, [])
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm updateUrls={updateUrls}/>
        </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UrlContainer urls={urls}/>
      )}
      </main>
    );
}

export default App;
