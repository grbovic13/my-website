import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('/api/requests').then(res => setRequests(res.data));
  }, []);

  async function updateStatus(id, status) {
    await axios.put(`/api/requests/${id}`, { status });
    const res = await axios.get('/api/requests');
    setRequests(res.data);
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul className="space-y-2">
        {requests.map(r => (
          <li key={r._id} className="border p-2 rounded flex justify-between items-center">
            <span>{r.service} - {r.status}</span>
            <button className="bg-green-600 text-white px-2 py-1 rounded" onClick={() => updateStatus(r._id, 'completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
