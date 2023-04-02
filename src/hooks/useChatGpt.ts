import { useState } from 'react';
import { gptRepository } from '../api/gptRepository';

export const useChatGpt = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const gptRepo = gptRepository();

  const fetchMessage = async (prompt: string) => {
    setLoading(true);
    try {
      const res = await gptRepo.post(prompt);
      setMessage(res);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return { message, loading, fetchMessage };
};
