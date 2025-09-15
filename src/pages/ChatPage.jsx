import React, { useEffect, useState, useRef } from "react";
import { getHistory, postChat, resetSession } from "../api";
import ChatWindow from "../components/ChatWindow";
import InputBar from "../components/InputBar";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_API_BASE || "http://localhost:4000";

function ChatPage() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMsgId, setNewMsgId] = useState(null);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    let sid = localStorage.getItem("newsbot_session");
    if (!sid) {
      sid = crypto.randomUUID();
      localStorage.setItem("newsbot_session", sid);
      console.log("New session created:", sid);
    } else {
      console.log("Resuming session:", sid);
    }
    setSessionId(sid);
  }, []);

  
  useEffect(() => {
    if (!sessionId) return;

    const fetchHistory = async () => {
      try {
        const res = await getHistory(sessionId);
        if (res?.history) {
          setMessages(res.history);
          console.log("Loaded chat history:", res.history.length, "messages");
        }
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
  }, [sessionId]);

  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  
  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMsg = { id: crypto.randomUUID(), role: "user", text, ts: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    console.log("User sent message:", text);

    try {
      const reply = await postChat(sessionId, text);
      setLoading(false);
      if (reply?.answer) {
        const botMsg = {
          id: crypto.randomUUID(),
          role: "assistant",
          text: reply.answer,
          ts: new Date().toISOString(),
          sources: reply.sources || []
        };
        setMessages((prev) => [...prev, botMsg]);
        setNewMsgId(botMsg.id);
        console.log("Received bot reply:", reply.answer);
      }
    } catch (err) {
      setLoading(false);
      console.error("Error sending chat message:", err);
    }
  };

  
  const handleReset = async () => {
    try {
      await resetSession(sessionId);
      setMessages([]);
      setNewMsgId(null);
      localStorage.removeItem("chat_history_" + sessionId);
      console.log("Session reset:", sessionId);
    } catch (err) {
      console.error("Error resetting session:", err);
    }
  };

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>RAG News Chatbot</h1>
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </header>

      <ChatWindow messages={messages} newMsgId={newMsgId} loading={loading} />
      <div ref={chatEndRef} />
      <InputBar onSend={handleSend} />
    </div>
  );
}

export default ChatPage;
