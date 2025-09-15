import React, { useEffect } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, newMsgId, loading }) {
  useEffect(() => {
    if (messages.length === 0 && !loading) {
      console.log("Chat empty, waiting for user query.");
    } else if (messages.length > 0) {
      console.log(`Rendering ${messages.length} message(s) in chat window.`);
    }

    if (loading) {
      console.log("Assistant is generating a response...");
    }
  }, [messages, loading]);

  return (
    <div className="chat-window">
      {messages.length === 0 && !loading && (
        <div className="empty-chat-message">
          What can I help with?
        </div>
      )}

      {messages.map((msg) => (
        <MessageBubble
          key={msg.id || msg.ts}
          role={msg.role}
          text={msg.text}
          sources={msg.sources}
          isNew={msg.id === newMsgId}
        />
      ))}

      {loading && (
        <div className="message-bubble assistant typing">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
