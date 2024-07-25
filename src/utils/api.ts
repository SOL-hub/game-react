import axios from 'axios';

interface apiProps {
  itemId?: number;
}

export const getSalesItemApi = ({ itemId }: apiProps) => axios.get(`/sales-item/${itemId}`);

export const getRepresentCategoryApi = () => axios.get('/represent-category');
