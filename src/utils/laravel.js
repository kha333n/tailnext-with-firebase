const domain = 'https://api.kha333n.com/api';
export const getAllPosts = async () => {
  const response = await fetch(domain + '/blogs');
  const data = await response.json();
  return data.data;
};

export const getPostBySlug = async (slug) => {
  const response = await fetch(domain + '/blogs/' + slug);
  const data = await response.json();
  return data.data;
};

export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const response = await fetch(domain + '/latest/blogs');
  const data = await response.json();
  return data.data;
};
