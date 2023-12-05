import React, { useEffect } from "react";

function Child({ returnComment }){
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Kang")}</div>;
}

export default Child;