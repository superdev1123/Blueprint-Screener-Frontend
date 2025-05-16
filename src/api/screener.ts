import axios from 'axios';
import type { UserAnswer } from '../types/screener';

const BASE_URL = 'http://127.0.0.1:8080';

export const fetchScreener = async () => {
  const res = await axios.get(`${BASE_URL}/screener`);
  return res.data;
};

export const submitAnswers = async (answers: UserAnswer[]) => {
  const res = await axios.post(`${BASE_URL}/score`, { answers });
  return res.data;
};
