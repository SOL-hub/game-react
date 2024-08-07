import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';
interface ApiProps {
  id?: number;
}

// /api/products?page=${page}&size=10

export const getSalesItemApi = ({ id }: ApiProps) => axios.get(`${BACKEND_URL}/products/${id}`);

export const getRepresentCategoryApi = () => axios.get(`${BACKEND_URL}`);
