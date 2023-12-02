import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  // Corrected to useImperativeHandle
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        Button From Child
      </button>
      {toggle && <span>Toggle클릭했쪄</span>}
    </>
  );
});

export default Button; // Corrected component name for export
