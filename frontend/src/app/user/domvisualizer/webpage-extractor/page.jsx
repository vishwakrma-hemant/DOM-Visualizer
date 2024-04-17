'use client';
import React, { useRef } from 'react';
import { Button, TextInput } from '@mantine/core';

const WebpageExtractor = () => {

    const urlRef = useRef();

    const extractData = () => {
        fetch('http://localhost:5000/diagram/fetch-dom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: urlRef.current.value
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div>
            <h1>Webpage Extractor</h1>

            <TextInput label="Enter Url" ref={urlRef} />
            <Button onClick={extractData}>Extract Data</Button>

        </div>
    )
}

export default WebpageExtractor;