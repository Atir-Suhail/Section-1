'use client'
import React, { useRef } from 'react';

const MyComponent = () => {
  const myRef = useRef();

  // Access the DOM element:
  const handleButtonClick = () => {
    myRef.current.focus();
  };

  return (
    <div>
      <input ref={myRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};