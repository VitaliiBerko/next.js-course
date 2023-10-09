import Head from "next/head";
import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
axios.defaults.baseURL = "https://63e61ee87eef5b22337f4289.mockapi.io";

export default function Posts({ posts: serverPost }) {
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const response = await axios.get("/users");
      setPosts(response.data);
    }
    if (!serverPost) load();
  }, []);

  return (
    <MainLayout title="Post page">
      {!posts ? (
        <p>Loading...</p>
      ) : (
        <>
          <Head>{/* <title> Posts page</title> */}</Head>
          <h1>Posts Page</h1>
          {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/post/${post.id}`}>{post.user}</Link>
              </li>
            ))}
          </ul>

          <button onClick={() => Router.push("/")}>Go back to home</button>
        </>
      )}
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const posts = (await axios.get("/users")).data;
  return { posts };
};
