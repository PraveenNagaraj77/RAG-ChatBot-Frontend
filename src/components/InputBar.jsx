import React, { useState } from "react";

function InputBar({ onSend }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    console.log("User query submitted:", text); 

    onSend(text);
    setText("");
  }

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask something about the news..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default InputBar;
