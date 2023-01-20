import React, { useEffect, useState } from 'react';
import { getPublishedPosts } from './api/getPublishedPosts';

const Home = () => {

  const [publishedPosts, setPublishedPosts] = useState({})

  useEffect(() => {
    (async () => {
      const postResult = await getPublishedPosts();
      setPublishedPosts(postResult);
    })();
  }, []);

  return (
    <>
      <div>This will be the home page</div>
      <div>publishedPosts: <pre>{JSON.stringify(publishedPosts)}</pre>
      </div>
    </>
  )
}

export default Home;