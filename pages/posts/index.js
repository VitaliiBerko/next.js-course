import Head from "next/head";
import  Router from "next/router";

export default function Posts() {
  return (
    <>
    <Head>
      <title> Posts page</title>
    </Head>
      <h1>Posts Page</h1>
      <button onClick={() => Router.back()}>Go back to home</button>
    </>
  );
}
