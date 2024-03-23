import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore';
import matter from 'gray-matter';

const firebaseConfig = {
  apiKey: 'AIzaSyAp57-FPH1LeNmY6xE5rEvr1NV8yCEdQAg',
  authDomain: 'kha333n-blogs.firebaseapp.com',
  projectId: 'kha333n-blogs',
  storageBucket: 'kha333n-blogs.appspot.com',
  messagingSenderId: '240522495673',
  appId: '1:240522495673:web:ea6ddd7432014cb478bd68',
  measurementId: 'G-3CHSFHHS2C',
  navigator: 'serviceWorker',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const formatPosts = (postsList) => {
  let posts = [];
  postsList.forEach((post) => {
    const { data: frontmatter, content } = matter(post.content);
    posts.push({
      slug: post.slug,
      title: post.title,
      description: post.description,
      publishDate: post.publishDate,
      image: post.image,
      content: content,
      tags: post.tags,
    });
  });
  return posts;
};

export const getAllPosts = async () => {
  const postsCol = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCol);
  const postsList = postsSnapshot.docs.map((doc) => doc.data());
  return formatPosts(postsList);
};

export const getPostBySlug = async (slug) => {
  const postsCol = collection(db, 'posts');
  const q = query(postsCol, where('slug', '==', slug));
  const postsSnapshot = await getDocs(q);

  if (postsSnapshot.empty) {
    return null;
  }
  let post = postsSnapshot.docs.pop();

  return {
    slug: post.data().slug,
    title: post.data().title,
    description: post.data().description,
    publishDate: post.data().publishDate,
    image: post.data().image,
    content: post.data().content,
    tags: post.data().tags,
  };
};

export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const postsCol = collection(db, 'posts');
  const q = query(postsCol, orderBy('publishDate'), limit(_count));
  const postsSnapshot = await getDocs(q);

  if (postsSnapshot.empty) {
    return [];
  }
  let posts = [];
  postsSnapshot.forEach((doc) => {
    posts.push({
      slug: doc.data().slug,
      title: doc.data().title,
      description: doc.data().description,
      publishDate: doc.data().publishDate,
      image: doc.data().image,
      content: doc.data().content,
      tags: doc.data().tags,
    });
  });
  return posts;
};
