import { useRef } from "react";

function Useref() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}

export default Useref;