import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function createSession() {
  const res = await axios.post(`${API_BASE}/api/session`);
  return res.data;
}

export async function getHistory(sessionId) {
  const res = await axios.get(`${API_BASE}/api/session/${sessionId}/history`);
  return res.data;
}

export async function postChat(sessionId, text) {
  const res = await axios.post(`${API_BASE}/api/${sessionId}/message`, { text });
  return res.data;
}

export async function resetSession(sessionId) {
  const res = await axios.post(`${API_BASE}/api/session/${sessionId}/reset`);
  return res.data;
}
