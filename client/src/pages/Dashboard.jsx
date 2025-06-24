import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('/api/requests').then(res => setRequests(res.data));
  }, []);

  async function submitRequest(e) {
    e.preventDefault();
    const form = e.target;
    await axios.post('/api/requests', {
      service: form.service.value,
      details: form.details.value,
    });
    form.reset();
    const res = await axios.get('/api/requests');
    setRequests(res.data);
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Requests</h1>
      <form className="space-y-4" onSubmit={submitRequest}>
        <select name="service" className="border p-2 w-full" required>
          <option value="">Select service</option>
          <option>LLC formation</option>
          <option>EIN application</option>
          <option>BOI filing</option>
          <option>Stripe & Mercury setup</option>
        </select>
        <textarea name="details" className="border p-2 w-full" rows="3" placeholder="Additional details"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Submit Request</button>
      </form>
      <ul className="mt-8 space-y-2">
        {requests.map(r => (
          <li key={r._id} className="border p-2 rounded">{r.service} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}
