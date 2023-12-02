import React, { useRef } from 'react';
import Button from './Button'; // Assuming Button.js is the filename

function ImperatiberHandle() {
  const buttonRef = useRef(null);

  return (
    <>
      <Button ref={buttonRef} />
      <button onClick={()=>{buttonRef.current.alterToggle();
          
      }}>
       Toggle From Parent</button>
    </>
  );
};



export default ImperatiberHandle; // Exporting the component for use in other parts of the app
