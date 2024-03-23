import axios from 'axios';

const domain = 'https://api.kha333n.com/api';
export const getAllPosts = async () => {
  const data = await axios.get(domain + '/blogs');
  return data.data.data;
};

export const getPostBySlug = async (slug) => {
  const data = await axios.get(domain + '/blogs/' + slug);
  console.log('data', data.data.data);
  return data.data.data;
};

export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const data = await axios.get(domain + '/latest/blogs');
  return data.data.data;
};
