import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value); // Fixed typo here from 'currnet' to 'current'
    }, []);

    useEffect(() => {
        inputRef.current.value = "HELLO"; // This will overwrite "PEDRO" with "HELLO"
    }, []);

    return (
        <div className="App">
            {/* Fixed style prop syntax */}
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 70 }} readOnly />
        </div>
    );
}

export default LayoutEffectTutorial;
