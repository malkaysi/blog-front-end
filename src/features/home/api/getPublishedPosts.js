
export const getPublishedPosts = async () => {
  // Need to fetch the published posts
  // Let's just return the json for now
  try {
    const response = await fetch('http://localhost:3000/blog');
    const publishedPostData = await response.json();

    return publishedPostData;
  } catch (err) {
    console.log(err)
  }
}