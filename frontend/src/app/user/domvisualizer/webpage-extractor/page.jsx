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
