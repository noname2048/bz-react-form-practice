import { useState, useRef, useEffect } from "react";

const ComfortTyper = ({ value }: { value: string }) => {
  const [changeable, setChangeable] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef(null);

  if (changeable) {
    return (
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />
    );
  }

  return (
    <div
      onClick={() => {
        setChangeable(!changeable);
      }}
    >
      {text}
    </div>
  );
};

export default ComfortTyper;
