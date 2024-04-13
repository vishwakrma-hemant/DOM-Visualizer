'use client';
import React from 'react'

import Editor from '@monaco-editor/react';
import useDomContext from '@/context/DomContext';


const HTMLEditor = () => {

    const {code, setCode} = useDomContext();

  return (
    <div>
        <Editor height="20vh" defaultLanguage="html"  language='html'  value={code} onChange={v => setCode(v)}/>
    </div>
  )
}

export default HTMLEditor