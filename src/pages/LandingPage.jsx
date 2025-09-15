import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.scss';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero full-width">
        <div className="content">
          <h1>📰 RAG News Chatbot</h1>
          <p>
            Get instant, AI-powered answers to the latest news! Our RAG-powered chatbot fetches, embeds, 
            and retrieves accurate information from trusted sources.
          </p>
          <button className="cta-btn" onClick={goToChat}>Start Chatting</button>
        </div>
      </section>

      {/* Core Pipeline Section */}
      <section className="core-pipeline full-width light-bg">
        <h2>Core Pipeline</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Ingest News</h3>
            <p>Automatically fetch ~50 news articles via RSS feeds.</p>
          </div>
          <div className="card">
            <h3>Jina Embeddings</h3>
            <p>Convert news content into vector embeddings for AI processing.</p>
          </div>
          <div className="card">
            <h3>Pinecone Vector DB</h3>
            <p>Store embeddings efficiently for fast retrieval during chat queries.</p>
          </div>
          <div className="card">
            <h3>Gemini API</h3>
            <p>Use the LLM API to generate accurate answers from retrieved passages.</p>
          </div>
          <div className="card">
            <h3>Redis Cache</h3>
            <p>Cache session data and chat history in-memory for instant responses.</p>
          </div>
          <div className="card">
            <h3>MySQL Database</h3>
            <p>Optionally persist transcripts and session history for analytics or audit.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack full-width dark-bg">
        <h2>Tech Stack</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Backend</h3>
            <p>Node.js + Express.js REST API with session handling and chat endpoints.</p>
          </div>
          <div className="card">
            <h3>Frontend</h3>
            <p>React + SCSS for a modern, responsive, and interactive chat interface.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features full-width light-bg">
        <h2>Features</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Fast & Accurate</h3>
            <p>Retrieve top-k passages and generate answers instantly with references.</p>
          </div>
          <div className="card">
            <h3>Persistent Chat History</h3>
            <p>Sessions are saved in Redis and optionally in MySQL for complete history.</p>
          </div>
          <div className="card">
            <h3>Modern UI</h3>
            <p>Sleek, ChatGPT-like interface that works on desktop and mobile.</p>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta-section full-width green-bg">
        <h2>Ready to Try?</h2>
        <button className="cta-btn" onClick={goToChat}>Start Chatting</button>
      </section>

      {/* Footer */}
      <footer className="full-width footer">
        <p>Developed by Praveen N</p>
      </footer>

    </div>
  );
};

export default LandingPage;
