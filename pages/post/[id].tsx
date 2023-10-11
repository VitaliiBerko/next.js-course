import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { NextComponentType, NextPageContext } from "next";
import { MyPost } from "../../interface/post";

interface PostPageProps {
  post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
  const router = useRouter();
  // const { user, avatar, followers, tweets } = post
  const [post, setPost] = useState(serverPost);
  useEffect(() => {
    async function load() {
      const response = await axios.get(`/users/${router.query.id}`);
      const data = response.data;
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  return (
    <MainLayout>
      {!post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Post {router.query.id}</h1>
          <h2>{post.user}</h2>
          <img src={`${post.avatar}`} alt="User" />
          <p>Followers: {post.followers}</p>
          <p>Tweets: {post.tweets}</p>
          <button onClick={() => Router.back()}>Go back</button>
        </>
      )}
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }
  const response = await axios.get(`/users/${query.id}`);
  
  const post: MyPost[] = response.data;
  return { post };
};

// export async function getServerSideProps({ query, req }) {
//   if (!req) {
//     return { post: null };
//   }
//   const response = await axios.get(`/users/${query.id}`);
//   const post = response.data;
//   return {props:  {post} };
// }
