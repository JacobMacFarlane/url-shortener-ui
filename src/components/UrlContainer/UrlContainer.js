import React, {useState} from 'react';
import './UrlContainer.css';

const UrlContainer = (props) => {
  const [urls, setUrls] = useState(props.urls.urls);
console.log(urls);
  const urlEls = urls.map(url => {
    return (
      <div className="url">
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
