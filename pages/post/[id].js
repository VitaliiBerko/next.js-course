import axios from "axios";
import Router, { useRouter } from "next/router";

export default function Post({ post: {user, avatar, followers, tweets} }) {
  const router = useRouter();
  // console.log(router)
  return (
    <>
      <h1>Post {router.query.id}</h1>
      <h2>{user}</h2>
      <img
        src={`${avatar}`}
        alt="User"
      />
      <p>Followers: {followers}</p>
      <p>Tweets: {tweets}</p>
      <button onClick={()=>Router.back()}>Go back</button>
    </>
  );
}

Post.getInitialProps = async (ctx) => {
  const response = await axios.get(`/users/${ctx.query.id}`);
  const post = response.data;
  return { post };
};
