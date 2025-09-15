# RAG-Powered News Chatbot - Frontend

<p align="center">
  <a href="https://rag-chatbot-frontend-ivfb.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-blue" alt="Live Demo">
  </a>
</p>

This is the **frontend** part of a RAG-powered chatbot for news websites. It provides a user-friendly interface to interact with the chatbot, send queries, view streaming responses, and manage session history.

---

## <u>Tech Stack</u>

<ul>
  <li><b>React</b> – Frontend framework for building the UI</li>
  <li><b>SCSS</b> – Styling and theming</li>
  <li><b>Axios</b> – For REST API calls to the backend</li>
  <li><b>React Router DOM</b> – Client-side routing between pages</li>
  <li><b>Deployed on Render</b> – Live accessible demo</li>
</ul>

---

## <u>Live Demo</u>

<p>
  Access the live application here: 
  <a href="https://rag-chatbot-frontend-ivfb.onrender.com" target="_blank">
    https://rag-chatbot-frontend-ivfb.onrender.com
  </a>
</p>

---

## <u>Features</u>

<ul>
  <li>Chat interface displaying past messages</li>
  <li>Input box for sending new messages</li>
  <li>Streaming or typed-out bot responses</li>
  <li>Reset button to clear current session</li>
  <li>Displays source links for bot responses (if available)</li>
</ul>

---

## <u>Components</u>

<ul>
  <li><b>ChatWindow.jsx</b> – Displays conversation messages</li>
  <li><b>InputBar.jsx</b> – Input field and send button</li>
  <li><b>MessageBubble.jsx</b> – Individual message styling</li>
  <li><b>SourceLinks.jsx</b> – Displays sources/references for messages</li>
</ul>

---

## <u>Pages</u>

<ul>
  <li><b>LandingPage.jsx</b> – Homepage with chatbot intro and start button</li>
  <li><b>ChatPage.jsx</b> – Main chat interface page</li>
</ul>

---

## <u>Styling</u>

<ul>
  <li><b>LandingPage.scss</b> – Styles for the landing page</li>
  <li><b>styles.scss</b> – Global styles for the application</li>
</ul>

---

## <u>API Integration</u>

<p>
  <b>api.js</b> handles all API calls using Axios:
</p>
<ul>
  <li>Send user queries to backend</li>
  <li>Fetch chat history for the session</li>
  <li>Reset chat sessions</li>
</ul>

---

## <u>Setup & Run Locally</u>

<ol>
  <li>Clone the repository
    <pre><code>git clone &lt;[frontend-repo-url](https://github.com/PraveenNagaraj77/RAG-ChatBot-Frontend.git)&gt;
cd &lt;repo-folder&gt;</code></pre>
  </li>
  <li>Install dependencies
    <pre><code>npm install</code></pre>
  </li>
  <li>Configure environment variables
    <pre><code>VITE_API_BASE=&lt;your-backend-url&gt;</code></pre>
  </li>
  <li>Run locally
    <pre><code>npm run dev</code></pre>
    Access the frontend at <code>http://localhost:5173</code>
  </li>
</ol>

---

## <u>Folder Structure</u>

<pre>
src/
├─ api.js
├─ components/
│  ├─ ChatWindow.jsx
│  ├─ InputBar.jsx
│  ├─ MessageBubble.jsx
│  └─ SourceLinks.jsx
├─ pages/
│  ├─ ChatPage.jsx
│  └─ LandingPage.jsx
├─ styles/
│  ├─ LandingPage.scss
│  └─ styles.scss
└─ main.jsx
</pre>

---

## <u>Deployment</u>

<ul>
  <li>Frontend is deployed on <a href="https://rag-chatbot-frontend-ivfb.onrender.com" target="_blank">Render</a></li>
  <li>Configured to work with the backend via Axios API calls</li>
</ul>

---

## <u>Future Improvements</u>

<ul>
  <li>Implement typing animation / streaming responses for better UX</li>
  <li>Add dark mode support</li>
  <li>Optimize performance for large chat histories</li>
</ul>
