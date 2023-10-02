import Head from "next/head";
import  Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function Posts() {
  return (
    <MainLayout title="Post page">
    <Head>
      {/* <title> Posts page</title> */}
    </Head>
      <h1>Posts Page</h1>
      <button onClick={() => Router.push('/')}>Go back to home</button>
    </MainLayout>
  );
}
