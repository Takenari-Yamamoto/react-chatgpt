import axios, { AxiosInstance } from 'axios';

const apiKey = process.env.REACT_APP_GPT_KEY;

export const gptClient: AxiosInstance = axios.create({
  baseURL: 'https://api.openai.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});
