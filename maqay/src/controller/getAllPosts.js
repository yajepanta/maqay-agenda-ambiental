const getPosts = () => {
  return fetch("http://maqay.org/wp-json/wp/v2/posts").then((res) =>
    res.json()
  );
};
export default getPosts;