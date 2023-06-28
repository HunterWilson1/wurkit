import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error } = useSignup();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit} className="workout-details bg-white border rounded-md px-20 py-20 relative shadow-md text-center">
        <h3 className="text-xl font-bold mb-4">Signup</h3>

        <label className="block">
          Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-rose-500"
          />
        </label>

        <label className="block">
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-rose-500"
          />
        </label>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" className="btn-primary mt-4 bg-rose-500 hover:bg-rose-600 p-2 rounded-md" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
