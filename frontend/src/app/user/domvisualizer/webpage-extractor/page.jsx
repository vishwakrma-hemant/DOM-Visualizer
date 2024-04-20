'use client';
import React, { useRef } from 'react';
// import { Button, TextInput } from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';

function WebpageExtract() {
  const [url, setUrl] = useState('');
  const [html, setHtml] = useState('');
  const [error, setError] = useState('');
  return (
    <div>
      <h1>Web Page HTML Extractor</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{ width: '80%', padding: '8px', marginBottom: '10px' }}
      />
      <button onClick={fetchHtml}>Fetch HTML</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <hr />
      <div>
        <h2>HTML Output</h2>
        <pre>{html}</pre>
      </div>
    </div>
  );
}
export default WebpageExtract;

// const WebpageExtractor = () => {

//     const urlRef = useRef();

//     const extractData = () => {
//         fetch('http://localhost:5000/diagram/fetch-dom', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 url: urlRef.current.value
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }

//     return (
//         <div>
//             <h1>Webpage Extractor</h1>

//             <TextInput label="Enter Url" ref={urlRef} />
//             <Button onClick={extractData}>Extract Data</Button>

//         </div>
//     )
// }

// export default WebpageExtractor;