import axios from 'axios';

export const getAllPosts = async () => {
  const data = await axios.get('http://127.0.0.1:8000/api/blogs');
  return data.data.data;
};

export const getPostBySlug = async (slug) => {
  const data = await axios.get('http://127.0.0.1:8000/api/blogs/' + slug);
  console.log('data', data.data.data);
  return data.data.data;
};

export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const data = await axios.get('http://127.0.0.1:8000/api/latest/blogs');
  return data.data.data;
};
