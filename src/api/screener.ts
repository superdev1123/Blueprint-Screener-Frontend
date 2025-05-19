import axios from 'axios';
import type { UserAnswer } from '../types/screener';

const API_URL = 'https://blueprint-screener-backend-uk8l.vercel.app';

// Fetch the screener data from the API
export const fetchScreener = async () => {
  const res = await axios.get(`${API_URL}/screener`);
  return res.data;
};

// Submit the user's answers to the API
// The API will return the results based on the answers provided
export const submitAnswers = async (answers: UserAnswer[]) => {
  const res = await axios.post(`${API_URL}/score`, { answers });
  return res.data;
};