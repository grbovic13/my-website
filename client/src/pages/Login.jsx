import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { email, password });
      navigate('/dashboard');
    } catch {
      alert('Login failed');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 shadow-md rounded w-full max-w-sm" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input className="border p-2 w-full mb-4" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="border p-2 w-full mb-4" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">Login</button>
      </form>
    </div>
  );
}
