import React, {useState} from 'react';
import './UrlContainer.css';

const UrlContainer = (props) => {

  const urlEls = props.urls.map((url,index) => {
    return (
      <div key={index} className="url">
        <h3>{url.title}</h3>
        <a className='short-url' href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section className='url-cont'>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
