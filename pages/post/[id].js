import axios from "axios";
import Router, { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  // console.log(router)
  return (
    <>
      <h1>Post {router.query.id}</h1>
      <h2>{post.user}</h2>
      <img
        src={`${post.avatar}`}
        alt="User"
      />
      <p>Followers: {post.followers}</p>
      <p>Tweets: {post.tweets}</p>
      <button onClick={()=>Router.back()}>Go back</button>
    </>
  );
}

Post.getInitialProps = async (ctx) => {
  const response = await axios.get(`/users/${ctx.query.id}`);
  const post = response.data;
  return { post };
};
