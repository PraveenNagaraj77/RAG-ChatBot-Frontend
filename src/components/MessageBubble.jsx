import React, { useEffect, useState } from "react";
import SourceLinks from "./SourceLinks";

function MessageBubble({ role, text, sources, isNew }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showSources, setShowSources] = useState(false);

  useEffect(() => {
    if (role === "assistant" && text && isNew) {
      console.log("Assistant is typing response...");

     
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setShowSources(true);
            console.log("Assistant response completed. Sources revealed.");
          }, 300);
        }
      }, 25);
      return () => clearInterval(interval);
    } else {
      
      setDisplayedText(text);
      setShowSources(true);

      if (role === "assistant") {
        console.log("Showing previous assistant response with sources.");
      }
    }
  }, [text, role, isNew]);

  return (
    <div className={`message-bubble ${role}`}>
      <div className="text">{displayedText}</div>
      {role === "assistant" && showSources && sources?.length > 0 && (
        <SourceLinks sources={sources} />
      )}
    </div>
  );
}

export default MessageBubble;
